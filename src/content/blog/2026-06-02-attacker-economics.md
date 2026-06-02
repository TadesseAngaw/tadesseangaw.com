---
title: "Attacker Economics"
slug: "attacker-economics"
excerpt: "Modern security incidents are not only technical failures. They are also economic decisions made by attackers looking for leverage, scale, and return on effort."
heroImage: "/images/blog/plant-growing-on-rock-crack.avif"
heroImageAlt: "Plant emerging from a crack in a stone wall, symbolizing how small weaknesses can become opportunities."
heroImageCreditName: "Zoshua Colah, Unsplash"
heroImageSourceUrl: "https://unsplash.com/photos/a-plant-growing-out-of-a-crack-in-a-stone-wall-1-qwAp6eWQk"
heroImageLicenseName: "Unsplash License"
heroImageLicenseUrl: "https://unsplash.com/license"
publishedAt: 2026-06-02
tags: ["cybersecurity", "risk-management"]
draft: false
---

## The Economics of Being Attacked

One of the more humbling lessons I have learned throughout my career is that security is not solely a technical problem.

Over the years, I have written software that later required security fixes. I have reviewed vulnerabilities discovered by others. I have participated in discussions following incidents, near misses, and security findings. Like most engineers who spend enough time building and operating systems, I have learned that vulnerabilities are not something that only happens to other people. Given enough complexity, enough change, and enough time, every meaningful system accumulates weaknesses.

For a long time, I viewed security primarily through an engineering lens. The objective seemed straightforward: identify vulnerabilities, remove them, and make systems harder to attack. While I still believe that work is important, experience gradually pushed me toward a different perspective.

A vulnerability explains how an attack happens. It does not necessarily explain why someone decided to attack in the first place.

That distinction may appear subtle, but it changes the way we think about security.

Attackers do not operate with unlimited resources. They have limited time, limited expertise, limited infrastructure, and competing opportunities. Like businesses, they make decisions about investment and return. They evaluate effort, reward, scalability, and risk. In other words, they operate within economic constraints.

Once security is viewed through this lens, many of the trends we are currently observing begin to make more sense.

## Why This Matters Now

Over the last few years, it has become increasingly difficult to follow technology news without encountering another supply-chain compromise, ransomware campaign, cloud breach, or incident involving a widely trusted platform.

What I find particularly interesting is that many of these incidents involve organizations that are not obviously easy targets. Large cloud providers, identity providers, software repositories, developer ecosystems, and SaaS platforms continue to attract enormous attention from attackers despite substantial investments in security.

Recent examples illustrate the pattern. In March 2026, attackers compromised the [Axios](https://axios.rest) npm package and briefly published malicious versions through a maintainer account compromise, potentially impacting a dependency downloaded millions of times every week[^1]. A few weeks later, the [TanStack](https://tanstack.com) ecosystem suffered a supply-chain compromise that resulted in malicious versions being published across dozens of packages through a chain involving GitHub Actions and package publishing workflows[^2].

These incidents differ technically, but they share a common characteristic. The attackers were not pursuing individual organizations one at a time. They were targeting points of concentration within the software ecosystem. By compromising a dependency, a maintainer account, or a trusted distribution channel, a single successful attack could create opportunities across hundreds or thousands of downstream environments.

This is why I find attacker economics such a useful lens. The common thread is not the specific vulnerability or attack technique. It is the search for leverage.

It is tempting to interpret these developments as evidence that attackers are simply becoming stronger. A more useful interpretation may be that attackers are becoming more efficient.

## The Search for Leverage

Efficiency is closely connected to leverage.

If an attacker can compromise one organization and gain access to one victim, the attack may be worthwhile. If the same effort can provide access to hundreds or thousands of victims, the economics become substantially more attractive.

Viewed through this lens, many modern attack patterns begin to look less surprising. Supply-chain attacks provide leverage. Identity providers provide leverage. Developer platforms provide leverage. Shared infrastructure provides leverage. The objective is not necessarily to find the easiest target. The objective is to find the target that produces the greatest return relative to the effort required.

This is why I believe security discussions sometimes overemphasize vulnerabilities while underemphasizing incentives.

The internet contains an enormous number of vulnerable systems. Most never become headline news. Some remain unnoticed for years. Others are discovered and patched without ever attracting meaningful attention. If vulnerabilities alone determined attacker behavior, we would expect attacks to be distributed very differently than they are.

A vulnerability may explain the mechanism of an attack. The expected return often explains the motivation.

## How Organizations Lower Attacker Costs

Thinking about security economically also changes how we evaluate our own decisions.

Many security weaknesses do not emerge because engineers are careless. They emerge because organizations operate under constraints. A delivery deadline arrives. An exception is granted. Additional access is provided to solve an operational problem. A temporary workaround remains in place longer than intended. Ownership becomes fragmented as systems grow and teams expand.

Each decision is usually reasonable when viewed independently.

The challenge is that these decisions accumulate.

Engineers are familiar with technical debt. Security debt behaves similarly. It develops through a series of practical trade-offs that appear harmless in isolation but create risk when combined over time.

What makes security debt particularly interesting is that it often reduces attacker costs. An undocumented system may reduce discovery effort. Excessive permissions may simplify movement through systems. Poor visibility may reduce the likelihood of detection. Unclear ownership may increase response times.

None of these conditions guarantee a successful attack. However, they can improve the economics of attacking an organization by reducing effort or increasing the probability of success.

From this perspective, security is not only about strengthening defenses. It is also about avoiding decisions that unintentionally subsidize attackers.

## What AI Changes

Artificial intelligence has become one of the most discussed topics in security, but I suspect its most important impact is not that it makes attackers dramatically smarter.

Its most significant impact may be that it changes costs.

Activities such as reconnaissance, code analysis, information gathering, and vulnerability research have traditionally required substantial effort. AI can reduce portions of that effort. The same is true for defenders using AI-assisted code review, threat analysis, and operational monitoring.

What makes AI important is that it affects both sides. It does not eliminate the underlying economic model. Instead, it accelerates it.

When the cost of discovery decreases, more weaknesses become visible. When the cost of analysis decreases, more opportunities become worth investigating. When the cost of exploitation decreases, attackers can evaluate a larger number of potential targets.

AI is therefore best understood as a force that changes attacker economics rather than a force that changes the fundamental nature of security.

## What Good Security Actually Does

One consequence of viewing security through an economic lens is that it changes how success is measured.

Many organizations implicitly pursue the idea of perfect prevention. The goal is understandable: eliminate vulnerabilities, stop attacks, and prevent compromise altogether. Yet history offers few examples of organizations that completely eliminated risk. Even some of the most sophisticated institutions in the world continue to experience incidents despite extraordinary investments in technology, personnel, and process.

A more practical objective is to influence attacker economics.

Strong controls increase the effort required to achieve an objective. Effective monitoring increases the likelihood that malicious activity is detected before meaningful damage occurs. Clear ownership and operational discipline reduce opportunities for attackers to exploit confusion, delay, or neglected systems. Mature incident response capabilities limit the value that can be extracted from a successful compromise.

Viewed individually, these measures may appear unrelated. Viewed together, they serve a common purpose: they alter the balance between attacker effort and attacker reward. Their value lies not in making attacks impossible, but in making them less attractive, less scalable, and less likely to succeed.

## Conclusion

When security incidents become public, discussions often focus on technical details. Which vulnerability was exploited? Which system failed? Which control was missing?

These questions are important, but they explain only part of the story.

This perspective is not limited to engineering. Researchers and policymakers are increasingly examining cybersecurity through an economic lens. A 2024 policy brief from the McCrary Institute[^3] argues that incentives play a central role in shaping cyber behavior and encourages policymakers to incorporate those realities into broader cybersecurity strategy.

Although engineers, security practitioners, researchers, and policymakers approach the problem from different directions, they are often observing the same phenomenon. Vulnerabilities explain how attacks happen. Economics helps explain why particular attacks become attractive, scalable, and persistent.

Understanding both dimensions may become increasingly important as software ecosystems grow more interconnected and more dependent on shared platforms and infrastructure.

---

## References

[^1]: [Post Mortem: axios npm supply chain compromise](https://github.com/axios/axios/issues/10636)

[^2]: [Postmortem: TanStack npm supply-chain compromise](https://tanstack.com/blog/npm-supply-chain-compromise-postmortem)

[^3]:
    [McCrary Institute (2024), How the Economics of Cybersecurity Favor Attackers
    and What Defenders can do to Change the Dynamic](https://mccraryinstitute.com/how-the-economics-of-cybersecurity-favor-attackers-and-what-defenders-can-do-to-change-the-dynamic/)
