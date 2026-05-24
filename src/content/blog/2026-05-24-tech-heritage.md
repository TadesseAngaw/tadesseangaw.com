---
title: "Tech Heritage"
slug: "tech-heritage"
excerpt: "Tech heritage is the operational and engineering memory a team accumulates over time. Losing it makes teams repeat failures they had already solved."
heroImage: "/images/blog/tech-heritage-strata-og.jpg"
heroImageAlt: "Layered rock formation used as a symbol for accumulated engineering history."
heroImageCreditName: "rodoluca, Wikimedia"
heroImageSourceUrl: "https://commons.wikimedia.org/wiki/File:Rock_Layers_at_Quebrada_de_las_Conchos_-_Salta_Argentina.jpg"
heroImageLicenseName: "CC BY-SA 3.0"
heroImageLicenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/"
publishedAt: 2026-05-24
tags: ["engineering-management", "technical-debt", "engineering-culture"]
draft: false
---

Jose Mourinho once used the phrase ["football heritage"](https://www.espn.com/soccer/story/_/id/37548198/jose-mourinho-says-manchester-united-lack-football-heritage-12-minute-rant) to explain that a club does not arrive in the present moment from nowhere. What people see on the pitch today is the
result of older decisions, habits, failures, victories, and scars that built up over time.

Engineering teams work in a similar way. Every software organization carries what I call tech heritage.

Tech heritage is the operational and engineering memory a team accumulates over time. It is not just "legacy code." It
is the memory living inside architecture decisions, strange validation rules, deployment habits, manual support
procedures, production incidents, naming conventions, intentional shortcuts, missing tests, and the quiet explanations
engineers pass to each other during incidents.

A team can lose this heritage even while working on the same codebase. People usually connect heritage loss with large
rewrites, but rewrites are only the loudest version of the problem. Real heritage loss often happens quietly during
rapid hiring, leadership changes, aggressive delivery timelines, product pivots, migrations, or long periods where the
team is moving too fast to document why something was built in a certain way.

The dangerous part is that teams usually do not notice it happening. One day the team spends weeks debugging an issue or
designing a feature, only to realize they are solving a problem they had already solved years before.

## What Tech Heritage Actually Is

Preserving tech heritage is not about nostalgia. Old systems are not automatically good systems. Some architecture
deserves to be replaced. Some early abstractions were mistakes from the beginning. Some temporary workarounds stay alive
long after they should have been removed.

The goal is not to preserve every line of code. The goal is to understand the problem a system was trying to solve
before deciding whether the solution still deserves to exist.

A manual deployment checklist might look inefficient until you learn it was created after a serious production outage. A
service boundary might look irrational until you understand the organization structure that existed when the project was
started.

Engineers like deleting operational friction, but they can easily delete it without understanding why it was introduced.
Many ugly operational procedures are just old production incidents turned into process. The code itself may be weak, but
the domain knowledge inside it may still be correct.

This is where teams often make mistakes. They evaluate a system only by code quality and ignore the business context,
historical constraints, and operational lessons inside it. Some systems are badly engineered but operationally correct.
That distinction matters.

## How Teams Lose Heritage

Most heritage loss is not intentional. It is usually the natural result of pressure. A team may be dealing with
production issues, customer escalations, release deadlines, hiring, new integrations, and product launches at the same
time. The team keeps moving, but the learning is not captured anywhere durable.

Over time, a gap opens up. The system starts to know more about the business than the engineers maintaining it.

Technical debt makes this worse. First versions of platforms are often built under survival pressure, where the goal is
to launch fast enough to validate the business, support a customer, or survive another quarter. That can be the right
business decision at the time, but fast systems accumulate hidden history quickly.

If nobody later explains which shortcuts were intentional, which constraints still apply, which bugs shaped the current
behavior, and which compromises were meant to be temporary, future engineers inherit a system without inheriting its
reasoning. They usually react in one of two ways: they either become afraid to touch anything, or they aggressively
remove things they do not yet understand. One slows the team down. The other brings back failures the system had already
learned to avoid.

The better question is rarely, "Why is this old?" The better question is, "What failure or constraint originally made
the team build it this way?"

## Business History Inside Production

Engineering teams often underestimate how much business history is encoded into software. A company may start by serving
one customer segment and later move to another. A platform built for internal operations may become customer-facing. A
workflow designed for a small number of users may later serve millions. A process that once optimized growth may later
need to optimize compliance, reliability, or operational control.

The code remembers these shifts even when the company forgets them.

Older workflows often contain evidence of failed assumptions, customer behavior, operational pain, scalability
bottlenecks, and business experiments that already happened years ago. If teams ignore that context, they can repeat old
experiments while thinking they are innovating.

This is not only a startup problem. Mature teams also lose context when product strategy changes faster than engineering
knowledge is documented.

## Context Outside The Repository

Some of the most important tech heritage never enters the repository. It lives in chat messages, incident calls,
onboarding conversations, support escalations, old tickets, abandoned documents, and sometimes inside the memory of one
or two engineers who have been around for a long time.

That knowledge is fragile. People often assume institutional memory disappears only when employees leave, but teams can
forget their own systems even when everyone stays. Memory decays when people are not given time to maintain their
understanding.

This is where engineering management becomes important. If engineers are never given time to document decisions, reduce
technical debt, explain non-obvious tradeoffs, write meaningful tests, or capture operational learning, then heritage
loss is not an accident. It is the result of how the team is managed.

Treating documentation and refactoring as optional overhead saves time this week, but the organization pays for it later
during incidents, migrations, audits, onboarding, scaling work, and production failures.

## Rewrites Are Not The Main Question

Engineering debates about rewrites are often too simple. One side loves the idea of a clean start, while the other side
fears the risk. Both sides can miss the real issue.

A rewrite can preserve tech heritage if the team intentionally carries forward operational lessons, business rules, edge
cases, past incidents, and the knowledge that made the current system survive. At the same time, a team can keep the
exact same codebase for ten years and still lose its heritage if nobody remembers why anything exists.

The real question is not whether to rewrite or maintain. The real question is whether the team is preserving the
learning it already paid for.

Replacing technology while throwing away the knowledge behind it is expensive. Keeping technology nobody understands
anymore is also expensive. Both are failures of knowledge transfer.

## The Risk Of Gatekeeping

There is also an uncomfortable human side to this problem. Sometimes technical complexity is preserved on purpose.

An engineer or a small group may keep a system difficult to understand because exclusivity creates leverage. If only a
few people know how to deploy a service, debug a data pipeline, or explain a critical business flow, those people become
difficult to replace.

That creates fragile teams. New engineers become hesitant to touch important systems. Managers become dependent on
individuals instead of process. Delivery slows down because every meaningful change has to pass through undocumented
gatekeepers.

Strong engineers reduce the cost of inheritance. Strong teams make knowledge easier to transfer. If a system is stable
only when one specific person is available, the organization does not really own the system properly.

## Building Tech Heritage In Growing Ecosystems

This problem matters even more in emerging engineering ecosystems like Ethiopia. Many companies are trying to build
products, define engineering culture, train developers, scale infrastructure, improve management practices, and
establish operational discipline at the same time.

Under that pressure, tech heritage is easy to drop. Teams move from one delivery target to the next while the reasoning
behind the system stays undocumented. The result is an invisible tax: every new team pays again for lessons the previous
team already learned.

That slows down companies, and over time it slows down the wider ecosystem. Engineering maturity is not only about
adopting newer frameworks, moving to the cloud, using Kafka, or drawing cleaner architecture diagrams. It is also about
preserving hard-earned lessons so the next engineer does not have to relearn every production failure from zero.

## Protecting The Knowledge Base

Good engineering management treats knowledge as infrastructure, not as an administrative chore developers handle when
they have free time. Protecting that knowledge requires simple habits that are part of normal delivery work.

Architecture decision records help teams remember why a choice was made, what alternatives were rejected, and what
tradeoffs were accepted at that moment. Postmortems turn production failures into durable team learning instead of
temporary pain. Tests around business behavior become executable documentation for rules and edge cases. Migration notes
explain what changed, what stayed the same, and why. Onboarding should teach new engineers why the system evolved the
way it did, not only how to run it locally.

None of this is glamorous, and it rarely looks impressive on a roadmap. But stable systems often survive because teams
protect institutional learning consistently. They do not survive only because they picked the perfect framework.

Every system carries history. Some of that history should be refactored, some should be deprecated, and some should be
replaced completely. But assuming an old system has nothing to teach you is one of the fastest ways to repeat its
failures.

Mature engineering teams are not simply the teams with the newest stack. They are the teams that remember why safeguards
exist, which tradeoffs were made, and which lessons have already been paid for in production. That memory eventually
becomes architecture, then process, and finally engineering culture.
