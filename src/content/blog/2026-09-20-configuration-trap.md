---
title: "The Configuration Trap"
slug: "configuration-trap"
excerpt: "Configuration is useful until it quietly becomes policy, rules, and another programming model the team must own."
heroImage: "/images/blog/configuration-trap-stone-wall.jpg"
heroImageAlt: "Marble stone wall with many irregular pieces fitted together."
heroImageCreditName: "Johann Jaritz, Wikimedia Commons"
heroImageSourceUrl: "https://commons.wikimedia.org/wiki/File:Techelsberg_Sekull_Marmor_Mauer_13072008_01.jpg"
heroImageLicenseName: "CC BY-SA 4.0"
heroImageLicenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/"
publishedAt: 2026-09-20
tags: ["software-architecture", "configuration", "technical-debt"]
draft: false
---

I used to think configuration was one of the cleanest ways to make software adapt to different environments, products, customers, and deployments.

If a timeout changes, why release the application again? If one environment uses a different endpoint, why hard-code it? If a customer needs a slightly different setting, why not move that value outside the code?

That reasoning is still sound. Configuration is an important part of good software design. The problem starts later, when the thing being externalized stops being a value and starts becoming behavior.

I have seen this progression firsthand. Configuration that began as a small set of legitimate variations slowly became more expressive. It started describing conditions, then decisions, then combinations of rules. At some point, configuration was no longer enough as a model, so we built a rules engine to represent the behavior more explicitly.

That was not a mistake. It solved a real problem. But it also made something very clear to me: we had not removed the complexity. We had moved it into another system.

That distinction is at the heart of what I now think of as the configuration trap.

## Configuration Starts With A Simple Boundary

The original boundary between code and configuration is usually easy to understand. The application contains the behavior. Configuration supplies the values that behavior uses.

Database credentials, service endpoints, connection pool sizes, timeouts, feature switches, and environment-specific settings all fit this model. The application already knows what to do. Configuration only tells it where it is running or which bounded value to use.

This works well because the configuration does not need to understand the application's execution model. A timeout does not need to know anything about the code that consumes it. An API URL does not need to express a decision tree. A connection pool size does not need to reference another setting and decide what should happen when that setting changes.

The boundary becomes less clear when the organization starts asking for variation in behavior instead of variation in values.

One customer needs a different setting. That is still simple. Then another customer needs the setting to depend on customer type. Another wants it to depend on a request property. Another wants an exception for a specific product. Someone else wants the rule to apply only after a certain date. Then an administrator needs to change it without deploying the application.

None of these requests is unreasonable. Each one can have a valid business reason.

The difficulty is that the system is no longer just supplying values to an application. It is beginning to describe how the application should behave.

That is where configuration starts becoming policy.

## When Configuration Becomes Policy

There is a real difference between telling an application that a setting has a value and telling it that the value should depend on a collection of conditions.

The first is data. The second is logic.

That does not mean the logic must always live inside ordinary application code. Some organizations genuinely need policies to change independently of application releases. Some domains contain rules owned by people outside engineering. Some products need controlled variation without creating branches of application code for every customer or product combination.

The important question is not whether business logic should ever be configurable. The question is what kind of system we are creating when it becomes configurable.

A configuration system that can express conditions, combine them, set priorities, invoke actions, reference other rules, and determine execution order is no longer only storing application settings. It is describing a program.

The fact that its syntax is JSON, YAML, database rows, or an admin screen does not change that.

This is why the progression is easy to miss. The representation can make the system look less like software at the same time that it is acquiring more of the responsibilities of software.

## The Accidental Programming Language

There is a familiar path in systems like this.

A few simple values need structure. Structured values need conditions. Conditions become expressions. Expressions become rules. Rules need priorities and dependencies. Dependencies need ordering. Ordering needs versioning, testing, simulation, and eventually an interface for managing all of it.

Mike Hadlow described this pattern well in his "Configuration Complexity Clock," where configuration moves from simple externalized values toward structured configuration, rules engines, and eventually domain-specific languages.[^1]

His point is not that complex configuration is always wrong. The point is that there is a moment where the configuration mechanism becomes comparable in complexity to the software it was meant to simplify.

At that point, a team may discover that it has created a small programming environment without ever deciding to build one.

The problem is not that programming languages are bad. The problem is that normal programming languages come with a mature ecosystem for handling complexity. Developers have compilers, type systems, debuggers, static analysis, IDEs, tests, profilers, version control, documentation habits, and shared mental models.

A configuration system often begins with none of those things.

Yet as it becomes more expressive, it starts needing many of the same protections.

That creates an asymmetry. The system can express increasingly complex behavior while the organization still treats it as "just configuration." Testing becomes weaker. Ownership becomes unclear. Observability is limited. Tooling is thin. Changes feel safer than code changes, even when they can materially alter production behavior.

The execution environment does not care what we call it. If changing configuration changes what the software does, then that configuration deserves software-level discipline.

## What The Rules Engine Taught Me

This is where my own experience became useful.

I worked on a system where configuration had become too limited for the variation we needed. Different products and operating conditions required different decisions. Keeping every variation inside application code would have created scattered special cases that were difficult to reason about.

So we built a rules engine.

Looking back, I still think that was a reasonable architectural decision. It gave us a clearer place to represent business decisions. The application provided context, and the rules system determined which policy applied.

That separation was valuable.

But the cost became clearer over time. We had introduced another computational model into the architecture.

The application already had concepts, execution flow, tests, logs, monitoring, and deployment behavior. The rules system now needed many of the same things. We had to define what a rule meant, how conditions were evaluated, what happened when information was missing, how conflicting rules were resolved, how ordering worked, how changes were validated, how versions were maintained, and how we could explain which rules had been active for a specific decision.

The rules engine was not merely a configuration store. It was software, even if much of its behavior was represented as data.

That changed how I think about configuration. The important question is not whether moving behavior outside the application is good or bad. The important question is what complexity is being moved, where it is being moved to, and whether that destination is ready to own it.

## The Cost Of Flexibility Arrives Later

Configuration is attractive because its benefits appear immediately.

Adding a setting can avoid a deployment, reduce a code change, support another customer, or allow an operations team to respond faster. Those are real benefits.

The cost often arrives later, after the system has accumulated enough options for people to forget why some of them exist.

Every configurable dimension becomes something the team must understand. It needs ownership. It needs documentation. It may need validation, testing, access control, auditing, monitoring, and rollback. If configuration changes at runtime, the system may also need to preserve which version was active at a specific point so historical behavior can be reconstructed.

Google's SRE guidance treats configuration as something that affects reliability and cognitive load. It argues for designing configuration deliberately, minimizing unnecessary choices, and providing safe defaults where possible.[^2]

None of those responsibilities is difficult on its own. The problem is accumulation.

A single configurable value is rarely dangerous. Fifty values may still be manageable. The difficulty increases when those values start interacting.

At that point, the system is no longer dealing with fifty independent choices. It is dealing with combinations of choices.

## Complexity Lives Between The Settings

This is one of the most important properties of configurable systems.

Imagine a workflow system with settings for user segment, product type, request channel, approval level, required checks, notification behavior, and feature availability. Each setting may be simple by itself.

But one setting may change which rule applies. Another may change the input to that rule. A third may decide whether the rule executes at all. A fourth may override the result. A fifth may affect what happens afterward.

The configuration can remain valid while the overall behavior becomes difficult to reason about.

That is why simply counting configuration options is a poor measure of configuration complexity. Ten independent values can be easier to understand than four values whose interactions create dozens of meaningful states.

The real complexity often lives between the settings, not inside them.

Once that happens, configuration becomes part of the program's state space.

## Giving Control To The Business

One of the strongest arguments for configurable systems is that they allow people outside engineering to change behavior without waiting for a software release.

Sometimes that is exactly what an organization needs. Product, operations, risk, finance, support, or commercial teams may have legitimate reasons to adjust business behavior faster than the software release cycle allows. A pricing rule may need to change. An eligibility policy may need to be updated. A product variant may need to be configured for a new partner. A workflow may need to adapt to a regulatory or operational requirement.

There is also an important difference between giving someone control over a decision and giving them responsibility for understanding the system behind that decision.

A business owner may know that a policy should change. That does not mean they should need to understand which other policies depend on it, what happens when data is missing, which products are affected, how historical records will be interpreted, or how the change should be rolled back.

A good interface can hide much of that complexity, and often it should. But hiding complexity from the person making the change does not remove the complexity from the system.

It only changes who needs to understand it.

This distinction matters when organizations ask for "no developer required" configuration. The real question is not whether developers can be removed from every change. The real question is whether the system has been designed so the people responsible for change can make it safely, predictably, and with enough visibility into the consequences.

## Configuration Needs A Lifecycle

Any configurable behavior that can materially change the system needs a lifecycle. It needs a reason to exist, an owner, a way to validate changes, a way to observe its effect, and a way to remove it when it is no longer useful.

Feature flags are a useful example of this lifecycle problem. They allow teams to modify application behavior without changing deployed code, which can be valuable for gradual releases, experiments, and operational control. Pete Hodgson's article on feature toggles makes this point while also warning that toggles introduce complexity and carrying cost.[^3]

Recent empirical work makes the accumulation problem more concrete. A 2026 preprint analyzing feature-toggle histories in Kubernetes and GitLab found more than 4,000 toggle events, with removals lagging additions in both projects and toggle lifespans varying significantly between them.[^4]

The lesson is not that feature flags are bad. Their usefulness is exactly why teams adopt them. The lesson is that any mechanism introduced to provide flexibility can become a persistent part of the system if nobody owns its cleanup. The same thing happens with customer-specific settings, temporary operational switches, product exceptions, and rule overrides. They are added to solve immediate problems, then slowly become part of the permanent behavior of the system.

This is why configurability should not be treated only as an implementation decision. It should be treated as something with creation, operation, review, and retirement. Otherwise, the configuration layer becomes a place where old assumptions continue to live long after the team has forgotten why they were added.

## Configuration As Code Helps, But It Is Not The Whole Answer

A natural response to configuration problems is to apply software engineering discipline to configuration. Store it in version control. Review changes through pull requests. Validate it in CI. Test it before deployment. Make changes auditable and reversible. All of that is good practice.

But configuration as code mostly improves the governance of configuration. It does not answer whether configuration is the right abstraction for the problem. A system can have clean configuration files, good validation, automated tests, and a mature deployment process while still having far more configurability than it needs.

That distinction matters because engineering discipline can make an abstraction safer without making the abstraction appropriate. Before deciding how to manage configuration, we should first ask why the behavior needs to vary and what kind of variation we are introducing.

## Data, Policy, And Programming

I find it useful to think about configuration as a spectrum.

At one end is configuration as data. The application already understands the behavior, and configuration supplies bounded values. URLs, timeouts, connection settings, feature switches, and similar parameters usually belong here. The configuration does not define new behavior. It supplies information to behavior that already exists.

Further along the spectrum is configuration as policy. The application deliberately exposes a model for business variation, and configuration selects or modifies behavior within that model. This can be a useful architectural boundary when policies genuinely need to change independently of the application implementation.

But policy configuration needs stronger foundations. It needs explicit semantics, validation, ownership, versioning, testing, observability, auditability, and a clear understanding of what happens when policies interact.

At the other end is configuration as programming. Once the system can express arbitrary conditions, compose those conditions, invoke actions, reference other configuration, depend on ordering, or define complex execution behavior, we have created another programming model. At that point, it is healthier to name the thing honestly. It might be a policy engine, a rules engine, a workflow system, or a domain-specific language.

The name is not cosmetic. Naming the abstraction correctly forces the organization to recognize that it has created something that deserves the same engineering attention as any other software system.

## The Question I Ask Now

When someone proposes making something configurable, I no longer think the first question should be how to make it configurable. The better question is why the behavior needs to vary in the first place.

Who needs the variation? How often will it change? Is it temporary or permanent? Is it a real product capability or an exception for one case? Does it need to vary per customer? Does it need to change at runtime? Who owns the decision? How will it be tested? How will it be observed? How will it be audited? How will it eventually be removed?

Most importantly, what complexity are we moving by making it configurable?

There are many cases where the trade is worth it. Configuration can reduce unnecessary deployments and make systems more adaptable. Feature flags can make releases safer. Product parameters can prevent needless application changes. A well-designed policy engine can create a clean boundary between business policy and application mechanics.

The mistake is not choosing configurability. The mistake is treating configurability as if it has no architectural cost.

## The Trap

The configuration trap is not that configuration makes systems complicated. Software is complicated because the problems it solves are complicated. Externalizing behavior does not change that.

The trap is that configuration makes complexity easy to relocate. A requirement that would have been visible as application logic can become a setting, a rule, a database record, or an administrative screen. The system may look cleaner because the complexity moved somewhere less visible.

That can be a good architectural decision. Sometimes moving complexity is exactly what good architecture means. The problem is failing to recognize what the destination has become.

A value can become a policy. A policy can become rules. Rules can become a language. A language needs execution semantics, tooling, testing, versioning, observability, and governance. At that point, the organization is no longer maintaining configuration. It is maintaining another software system.

The question is not whether something can be made configurable. Almost anything can. The better question is whether the variation deserves to become another permanent dimension of the system.

That question is worth answering before the configuration is added, not after the configuration system has become indispensable.

---

## References

[^1]: [Mike Hadlow, _The Configuration Complexity Clock_, 2012](https://mikehadlow.blogspot.com/2012/05/configuration-complexity-clock.html)

[^2]: [Štěpán Davidovič, Niall Richard Murphy, Christophe Kalt, and Betsy Beyer, _Configuration Design and Best Practices_, Google SRE Workbook](https://sre.google/workbook/configuration-design/)

[^3]: [Pete Hodgson, _Feature Toggles (aka Feature Flags)_, Martin Fowler, 2017](https://martinfowler.com/articles/feature-toggles.html)

[^4]: [Xhevahire Tërnava, _Feature Toggle Dynamics in Large-Scale Systems: Prevalence, Growth, Lifespan, and Benchmarking_, arXiv, 2026](https://arxiv.org/abs/2604.15872)
