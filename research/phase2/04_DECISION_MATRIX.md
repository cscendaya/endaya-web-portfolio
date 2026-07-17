# Information Architecture

This section synthesizes recurring information architecture patterns observed across the research and translates them into implementation decisions for Version 1 of the Personal Web Portfolio.

These decisions prioritize clarity, engineering professionalism, maintainability, and alignment with the project's identity. They define how content should be structured and discovered, independent of visual design or implementation details. 

---

## IA-01 — Adopt a Shallow, Task-Oriented Site Hierarchy

### Decision

Organize the portfolio into a shallow, task-oriented hierarchy.

Top-level pages for Version 1 are:

* Home
* About
* Projects
* Skills
* Contact

Avoid nested navigation beyond one level. The Skills page is included because it is a Project Identity requirement rather than a recurring research pattern.

### Evidence

* Brittany Chiang
* Paco Coursey
* Lee Robinson
* Resend

### Counter-Evidence

* Linear
* Stripe
* Raycast
* Notion
* Tailwind CSS

These larger platforms use deeper navigation because they manage substantially larger content ecosystems, making that pattern inappropriate for Version 1.

### Project Constraint

01_PROJECT_IDENTITY.md defines the Version 1 pages:

* Home
* About
* Projects
* Skills
* Contact

The Skills page is included because of the approved project scope rather than recurring external precedent.

### Decision Type

**Keep**

### Rationale

Developer portfolios consistently minimize navigation depth, while larger product sites reserve deeper navigation for extensive content ecosystems. Given Version 1's intentionally limited scope and need to communicate identity quickly to academic evaluators and recruiters, a shallow hierarchy minimizes cognitive load, simplifies implementation, and preserves future scalability without requiring architectural restructuring.

Note: The inclusion of a dedicated Skills page is a Project Identity requirement established during Phase 1. While it was not consistently observed in the research corpus, it supports the project's objective of presenting technical competencies as part of the overall professional profile.

### Priority

**High**

---

## IA-02 — Structure the Homepage as a Narrative Rather Than a Dashboard

### Decision

The homepage should guide visitors through a deliberate story instead of presenting isolated sections.

Recommended flow:

1. Hero
2. Professional Summary
3. Featured Projects
4. Skills Snapshot (Project Identity requirement)
5. Contact Call-to-Action

### Evidence

* Brittany Chiang
* Paco Coursey
* Lee Robinson
* Stripe
* Notion

### Project Constraint

None.

### Decision Type

**Keep**

### Rationale

Portfolio sites consistently introduce identity before demonstrating credibility, while Stripe and Notion reinforce effective sequencing and content hierarchy. This narrative structure aligns with the project's goal of demonstrating engineering thinking rather than simply displaying projects, producing a clearer visitor journey despite requiring homepage summaries to remain synchronized with their dedicated pages.

### Priority

**High**

---

## IA-03 — Prioritize Projects as Evidence of Engineering Thinking

### Decision

Projects remain a dedicated top-level page, but homepage project content serves only as a curated preview.

Each project summary should link to its complete project entry rather than duplicating full content.

### Evidence

* Brittany Chiang
* Paco Coursey
* Lee Robinson

### Project Constraint

None.

### Decision Type

**Adapt**

### Rationale

Developer portfolios consistently integrate projects into a broader professional narrative instead of relying solely on project galleries. This supports the project's established objective of demonstrating analytical thinking, architecture, and engineering decisions, allowing projects to reinforce the narrative rather than define it.

### Priority

**High**

---

## IA-04 — Group Related Content Into Distinct Sections

### Decision

Each page should contain between three and five primary content sections.

Every section should:

* have one clear purpose
* begin with a unique heading
* avoid mixing unrelated content

Additional content should become a new section rather than expanding an existing one indefinitely.

### Evidence

* Linear
* Stripe
* Vercel
* Raycast
* Notion
* Atlassian Design

### Project Constraint

None.

### Decision Type

**Keep**

### Rationale

Large product sites consistently organize content into single-purpose, modular sections that improve discoverability. Applying the same principle to a smaller portfolio improves readability, scanning, maintainability, and future expansion, even if pages become slightly longer.

### Priority

**Medium**

---

## IA-05 — Maintain Consistent Global Navigation

### Decision

Use one persistent navigation structure across every page.

Navigation labels and ordering should remain consistent across every page.

Changes to navigation labels should be made only as intentional versioned architectural decisions, not on individual pages.

### Evidence

* Linear
* Stripe
* Vercel
* Raycast
* Notion
* Primer

### Project Constraint

None.

### Decision Type

**Keep**

### Rationale

Every researched website maintains consistent navigation, reinforcing orientation and reducing relearning between pages. This allows visitors to focus on understanding the author's work rather than adapting to interface changes, even if it reduces flexibility for page-specific navigation.

### Priority

**High**

---

## IA-06 — Limit Information Density

### Decision

Expose the highest-value information directly on each page.

Additional detail should be available only through existing canonical resources, such as GitHub repositories or external documentation.

Do not introduce additional internal detail pages for Version 1.

### Evidence

* Linear
* Stripe
* Vercel
* Raycast
* Notion

### Project Constraint

None.

### Decision Type

**Adapt**

### Rationale

High-performing product sites progressively disclose complexity while preserving clarity. Because academic evaluators and recruiters typically scan portfolios quickly, Version 1 should surface essential information immediately while directing deeper technical detail to existing external resources, consistent with the project's exclusion of case studies.

### Priority

**Medium**

---

## IA-07 — Exclude Non-Essential Sections from Version 1

### Decision

Do not include:

* Blog
* CMS
* Authentication
* Admin panel
* Search
* Filtering
* Case studies
* Multilingual support
* User accounts
* Dynamic content management

### Evidence

* Stripe
* Notion
* Raycast
* Resend
* Tailwind CSS

### Project Constraint

This exclusion list is inherited directly from 01_PROJECT_IDENTITY.md and is authoritative for Version 1 regardless of observed industry practices.

### Decision Type

**Avoid**

### Rationale

The researched platforms include these capabilities because they support large-scale content ecosystems rather than small portfolios. Since Version 1 intentionally prioritizes clarity, maintainability, and academic completion, excluding these features prevents unnecessary complexity and aligns with the approved project scope.

### Priority

**Medium**

---

## IA-08 — Design the Architecture for Incremental Growth

### Decision

The top-level navigation is fixed for Version 1.

Future expansion should occur by extending existing pages rather than introducing additional top-level navigation items.

New content should fit within one of the existing five primary pages unless future project requirements justify an architectural revision.

### Evidence

* Linear
* Stripe
* Primer
* Atlassian Design
* Tailwind CSS

### Project Constraint

None.

### Decision Type

**Adapt**

### Rationale

Mature platforms typically evolve by expanding within stable navigation structures instead of continually reorganizing them. Applying the same principle allows the intentionally small Version 1 portfolio to grow after graduation while preserving long-term maintainability.

### Priority

**Low**

---

## IA-09 — Provide Direct Contact Paths Instead of a Contact Form

### Decision

The Contact page should provide direct communication channels:

* Email
* GitHub
* LinkedIn

Do not include a contact form in Version 1.

### Evidence

* Brittany Chiang (lack of prominent contact mechanism identified as a weakness)
* Paco Coursey
* Lee Robinson

### Project Constraint

Version 1 prioritizes simplicity, maintainability, and avoids backend functionality that is outside the approved project scope.

### Decision Type

**Adapt**

### Rationale

Developer portfolios consistently favor direct communication channels over contact forms, while the research also identified weak contact visibility as a recurring weakness. Direct links reduce implementation complexity, avoid unnecessary backend functionality, and align with the project's minimalist scope while providing clear communication paths.

### Priority

**Medium**

---

# User Experience

This section translates recurring user experience patterns from the research into implementation decisions for Version 1 of the Personal Web Portfolio. These decisions focus on how visitors understand, navigate, and evaluate the portfolio while remaining aligned with the project's engineering narrative. 

---

## UX-01 — Communicate Professional Identity Immediately

### Decision

Establish the author's professional identity and value proposition within the hero section before presenting supporting evidence.

### Supports

* IA-02
* IA-03

### Evidence

* Brittany Chiang
* Paco Coursey
* Lee Robinson
* Stripe
* Notion
* Raycast

### Project Constraint

01_PROJECT_IDENTITY.md

### Decision Type

**Keep**

### Rationale

Successful portfolio and product sites immediately communicate who they are and why they matter before introducing supporting content. This aligns with the project's objective of presenting a systems-oriented engineer whose primary value lies in analytical thinking rather than project quantity.

### Priority

**High**

---

## UX-02 — Reinforce a Progressive Professional Story

### Decision

Guide visitors from identity to credibility through a deliberate progression of introduction, supporting evidence, and contact opportunities.

### Supports

* IA-02
* IA-03

### Evidence

* Brittany Chiang
* Paco Coursey
* Lee Robinson
* Stripe
* Notion

### Project Constraint

01_PROJECT_IDENTITY.md

### Decision Type

**Keep**

### Rationale

Research consistently shows information introduced in a logical sequence rather than exposing everything simultaneously. This supports the project's narrative of demonstrating engineering thinking, allowing each section to build confidence before asking visitors to explore projects or initiate contact.

### Priority

**High**

---

## UX-03 — Present Projects as Supporting Evidence Rather Than the Entire Story

### Decision

Present projects with concise summaries emphasizing purpose, engineering contribution, and outcomes, while allowing interested visitors to access complete project details.

### Supports

* IA-03
* IA-06

### Evidence

* Brittany Chiang
* Paco Coursey
* Lee Robinson
* Linear
* shadcn/ui

### Project Constraint

01_PROJECT_IDENTITY.md

### Decision Type

**Adapt**

### Rationale

Developer portfolios that integrate projects into a broader professional narrative communicate stronger credibility than standalone galleries. This approach reinforces the project's emphasis on engineering reasoning while preventing individual projects from overshadowing the overall professional identity.

### Priority

**High**

---

## UX-04 — Build Credibility Through Evidence Instead of Claims

### Decision

Support professional claims with verifiable evidence such as completed projects, measurable outcomes, technologies, experience, and external professional profiles.

### Supports

* IA-03
* IA-09

### Evidence

* Brittany Chiang
* Linear
* Stripe
* Raycast
* Notion
* Resend

### Project Constraint

None.

### Decision Type

**Keep**

### Rationale

The strongest researched websites consistently reinforce messaging with concrete evidence instead of relying on self-description alone. This complements the project's goal of demonstrating engineering competence through observable work and trustworthy professional signals.

### Priority

**High**

---

## UX-05 — Optimize Content for Rapid Scanning

### Decision

Structure content so visitors can understand the primary message quickly through concise headings, grouped information, and progressively revealed detail.

### Supports

* IA-04
* IA-06

### Evidence

* Linear
* Stripe
* Vercel
* Resend
* Primer

### Project Constraint

None.

### Decision Type

**Keep**

### Rationale

Across both portfolio and product websites, information is organized to support rapid scanning before deeper reading. This matches the behavior of recruiters and academic evaluators, who typically assess portfolios within limited time.

### Priority

**High**

---

## UX-06 — Use Clear, Purpose-Driven Calls to Action

### Decision

Provide clear calls to action that encourage visitors to explore projects or establish direct contact without competing for attention.

### Supports

* IA-02
* IA-09

### Evidence

* Stripe
* Vercel
* Raycast
* Notion
* Brittany Chiang
* Paco Coursey

### Counter-Evidence

Large product sites often present multiple parallel conversion paths for different customer segments. This approach is intentionally not adopted because Version 1 serves a single professional narrative rather than multiple business objectives.

### Project Constraint

01_PROJECT_IDENTITY.md

### Decision Type

**Adapt**

### Rationale

Effective websites consistently present obvious next steps, but product platforms optimize for multiple audiences and conversion funnels. Version 1 has a single objective—help visitors understand the author and provide a straightforward path to further exploration or direct communication.

### Priority

**Medium**

---

## UX-07 — Minimize Cognitive Load Throughout the Experience

### Decision

Favor clarity over feature richness by removing unnecessary choices, avoiding duplicate information, and keeping interaction predictable.

### Supports

* IA-01
* IA-04
* IA-05
* IA-06
* IA-07

### Evidence

* Paco Coursey
* Lee Robinson
* Brittany Chiang
* Resend
* Linear

### Counter-Evidence

Some large product platforms intentionally increase information density to support broad feature ecosystems, a requirement that does not apply to Version 1.

### Project Constraint

01_PROJECT_IDENTITY.md

### Decision Type

**Keep**

### Rationale

Minimal developer portfolios consistently reduce cognitive overhead, while larger product platforms accept additional complexity to serve broader audiences. Since Version 1 has a narrowly defined scope and audience, simplicity improves comprehension, maintainability, and the overall visitor experience.

### Priority

**High**

User Interface

This section translates recurring interface patterns from the research into high-level visual interface decisions for Version 1 of the Personal Web Portfolio. These decisions establish the overall presentation philosophy while deferring implementation details to the Design System.

UI-01 — Prioritize Content Over Decoration
Decision

The interface should emphasize content and communication over decorative visual effects, allowing information to remain the primary focus.

Supports
IA-02
UX-01
UX-02
UX-07
Evidence
Brittany Chiang
Paco Coursey
Lee Robinson
Resend
Tailwind CSS
Counter-Evidence

Some product marketing sites use extensive decorative visuals and promotional graphics to differentiate products. This approach is intentionally not adopted because Version 1 communicates an individual professional identity rather than marketing a commercial platform.

Project Constraint

01_PROJECT_IDENTITY.md

Decision Type

**Keep**

Rationale

The strongest developer portfolios consistently allow content to establish credibility instead of relying on visual spectacle. This aligns with the project's analytical, minimal, and content-first design philosophy.

Priority

High

UI-02 — Establish Strong Visual Hierarchy
Decision

Visually emphasize primary information before supporting content so visitors can immediately identify the most important message on every page.

Supports
IA-04
UX-01
UX-05
Evidence
Linear
Stripe
Vercel
Brittany Chiang
Notion
Primer
Project Constraint

None.

Decision Type

**Keep**

Rationale

Every researched website establishes clear visual importance through structured presentation rather than equal emphasis across all content. This improves comprehension and supports rapid scanning by recruiters and academic evaluators.

Priority

High

UI-03 — Use Consistent Section-Based Composition
Decision

Present content as clearly separated, purpose-driven sections with consistent presentation patterns throughout the portfolio.

Supports
IA-04
UX-02
UX-05
Evidence
Linear
Stripe
Vercel
Notion
Atlassian Design
Project Constraint

None.

Decision Type

**Keep**

Rationale

Research consistently shows modular section composition improving readability and orientation. Maintaining the same presentation rhythm across pages reinforces consistency without introducing unnecessary visual complexity.

Priority

High

UI-04 — Use Cards Only to Group Related Information
Decision

Use card-based presentation only when it meaningfully groups related content or improves comparison, rather than treating every element as an isolated card.

Supports
IA-04
UX-03
UX-05
Evidence
Linear
Stripe
Raycast
Brittany Chiang
shadcn/ui
Counter-Evidence

Several product platforms employ dense card-based interfaces to expose large feature catalogs. This approach is intentionally not adopted because the portfolio contains significantly less content.

Project Constraint

None.

Decision Type

**Adapt**

Rationale

Research demonstrates that cards are most effective when organizing related information instead of becoming a universal layout pattern. Limiting their use preserves visual clarity while supporting the portfolio's smaller content scope.

Priority

Medium

UI-05 — Favor Authentic Visual Evidence
Decision

Use authentic screenshots and project visuals only when they directly support understanding of the work, avoiding decorative or purely aesthetic imagery.

Supports
UX-03
UX-04
Evidence
Linear
Brittany Chiang
shadcn/ui
Stripe
Project Constraint

01_PROJECT_IDENTITY.md

Decision Type

**Adapt**

Rationale

The strongest research examples use visuals to reinforce credibility by showing real products or realistic interfaces. This supports the project's objective of demonstrating engineering work instead of creating purely visual appeal.

Priority

High

UI-06 — Present Information with Consistent Visual Language
Decision

Apply consistent visual treatment to similar content types throughout the portfolio.

Supports
IA-05
UX-05
UX-07
Evidence
Linear
Vercel
Raycast
Primer
Atlassian Design
Project Constraint

None.

Decision Type

**Keep**

Rationale

Consistent presentation reduces relearning between pages and reinforces a cohesive professional identity. Research consistently shows mature interfaces repeating visual patterns instead of introducing new presentation styles for similar information.

Priority

High

UI-07 — Use Visual Elements to Support Information, Not Replace It
Decision

Icons, supporting graphics, and visual emphasis should clarify information rather than communicate essential meaning independently.

Supports
UX-04
UX-05
Evidence
Stripe
Notion
Raycast
Atlassian Design
Tailwind CSS
Project Constraint

None.

Decision Type

**Keep**

Rationale

Across the research, visual elements consistently reinforce existing information rather than serving as the sole communication method. This maintains clarity while supporting the portfolio's content-first approach.

Priority

Medium

UI-08 — Maintain Moderate Interface Density
Decision

Balance information density so pages remain informative without appearing crowded or visually sparse.

Supports
IA-06
UX-05
UX-07
Evidence
Brittany Chiang
Paco Coursey
Lee Robinson
Linear
Resend
Counter-Evidence

Large product platforms intentionally increase interface density to expose extensive product ecosystems, which is unnecessary for Version 1.

Project Constraint

01_PROJECT_IDENTITY.md

Decision Type

**Adapt**

Rationale

Research shows successful portfolios communicating substantial information while preserving readability. A moderate interface density supports quick comprehension without sacrificing professional depth.

Priority

Medium

UI-09 — Use Visual Rhythm to Reinforce Reading Flow
Decision

Create a consistent visual rhythm that naturally guides visitors from one section to the next without competing focal points.

Supports
IA-02
IA-04
UX-02
UX-05
Evidence
Stripe
Notion
Vercel
Brittany Chiang
Paco Coursey
Project Constraint

None.

Decision Type

**Keep**

Rationale

Research consistently demonstrates interfaces that reinforce reading progression through deliberate composition rather than visual novelty. This complements the portfolio's narrative structure and reduces cognitive effort as visitors move through each page.

Priority

High

Engineering

This section translates recurring engineering principles from the research into implementation decisions for Version 1 of the Personal Web Portfolio. These decisions define long-term engineering philosophy rather than specific technologies or implementation details.

ENG-01 — Prioritize Maintainability Over Feature Richness
Decision

Favor a maintainable implementation that delivers the approved scope well instead of expanding functionality beyond Version 1 requirements.

Supports
IA-07
IA-08
UX-07
UI-01
Evidence
Paco Coursey
Lee Robinson
Resend
Tailwind CSS
Counter-Evidence

Large product platforms such as Stripe, Notion, and Raycast implement extensive feature ecosystems to support complex business requirements. This level of engineering complexity is intentionally not adopted for Version 1.

Project Constraint

01_PROJECT_IDENTITY.md

Decision Type

**Keep**

Rationale

Research shows that simpler, focused websites remain easier to maintain while still communicating strong professional value. This aligns with the project's intentionally limited scope, academic timeline, and long-term goal of evolving the portfolio incrementally after graduation.

Priority

High

ENG-02 — Build a Performance-First, Content-Driven Experience
Decision

Engineer the portfolio so content remains the primary deliverable, with implementation decisions favoring fast delivery and efficient presentation over unnecessary functionality.

Supports
IA-06
UX-05
UI-01
UI-08
Evidence
Linear
Brittany Chiang
Paco Coursey
Resend
Tailwind CSS
Project Constraint

01_PROJECT_IDENTITY.md

Decision Type

**Keep**

Rationale

Across the research, the strongest developer-focused websites communicate effectively through lightweight, content-driven experiences rather than feature-heavy implementations. This supports the project's emphasis on fast comprehension, engineering professionalism, and long-term maintainability.

Priority

High

ENG-03 — Design for Incremental Evolution
Decision

Engineer the portfolio so future growth extends existing structures instead of requiring architectural redesign.

Supports
IA-08
IA-01
UI-06
Evidence
Linear
Stripe
Primer
Atlassian Design
Tailwind CSS
Project Constraint

01_PROJECT_IDENTITY.md

Decision Type

**Adapt**

Rationale

Mature platforms consistently evolve by extending stable foundations rather than repeatedly restructuring their architecture. Applying the same philosophy allows Version 1 to remain intentionally small while supporting future additions without disrupting existing content or user experience.

Priority

Medium

ENG-04 — Prefer Reusable, Consistent Building Blocks
Decision

Structure the implementation around reusable presentation patterns and shared content structures instead of creating unique solutions for similar content.

Supports
IA-04
IA-05
UI-03
UI-06
Evidence
shadcn/ui
Primer
Shopify Polaris
Atlassian Design
Linear
Project Constraint

None.

Decision Type

**Keep**

Rationale

The researched design systems and mature products consistently reinforce maintainability through reusable patterns and consistent structure. Applying this principle to the portfolio improves long-term maintainability and preserves a cohesive experience without prescribing specific implementation techniques.

Priority

High

ENG-05 — Minimize Unnecessary Engineering Complexity
Decision

Avoid introducing engineering solutions that are not justified by the project's current scope, reserving additional complexity for future requirements.

Supports
IA-07
UX-07
UI-08
ENG-01
Evidence
Resend
Paco Coursey
Lee Robinson
Brittany Chiang
Counter-Evidence

Large engineering platforms introduce sophisticated infrastructure to support scale, multiple audiences, and extensive product ecosystems. These requirements are outside the scope of Version 1.

Project Constraint

01_PROJECT_IDENTITY.md

Decision Type

**Avoid**

Rationale

The research demonstrates that focused developer websites achieve strong communication without excessive engineering complexity. Limiting implementation to what the project genuinely requires reduces maintenance effort, preserves clarity, and supports the project's documentation-first, iterative development strategy.

Priority

High

Accessibility

This section translates recurring accessibility principles from the research into implementation decisions for Version 1 of the Personal Web Portfolio. These decisions establish accessibility as a core quality attribute of the portfolio while leaving implementation details to the Design System and development documentation.

A11Y-01 — Treat Accessibility as a Core Design Principle
Decision

Accessibility should be considered a fundamental design and engineering principle throughout the portfolio rather than an enhancement added after implementation.

Supports
UX-07
UI-01
ENG-01
ENG-04
Evidence
Brittany Chiang
Primer
Atlassian Design
Stripe
Vercel
Project Constraint

01_PROJECT_IDENTITY.md

Decision Type

**Keep**

Rationale

The strongest research examples consistently position accessibility as an integral part of quality rather than a separate feature. This aligns with the project's content-first philosophy and professional identity while supporting long-term maintainability.

Priority

High

A11Y-02 — Prioritize Semantic and Readable Content Structure
Decision

Present content through meaningful structure that supports clear understanding regardless of how visitors access the portfolio.

Supports
IA-02
IA-04
UX-02
UX-05
UI-02
Evidence
Brittany Chiang
Stripe
Vercel
Lee Robinson
Resend
Project Constraint

None.

Decision Type

**Keep**

Rationale

Research consistently demonstrates that semantic organization and logical content hierarchy improve comprehension for all users while reinforcing the portfolio's emphasis on communication and engineering clarity.

Priority

High

A11Y-03 — Ensure Navigation and Interaction Remain Universally Usable
Decision

Navigation and interactive elements should remain consistently accessible through predictable, inclusive interaction patterns.

Supports
IA-01
IA-05
UX-06
UI-06
Evidence
Brittany Chiang
Linear
Vercel
Shopify Polaris
Atlassian Design
Raycast
Project Constraint

None.

Decision Type

**Keep**

Rationale

The researched websites consistently support predictable navigation and interaction through accessibility-focused navigation practices. This complements the project's shallow architecture and consistent user experience without prescribing implementation techniques.

Priority

High

A11Y-04 — Ensure Visual Content Supports Understanding
Decision

Images, icons, and other supporting visuals should enhance understanding without becoming the sole source of essential information.

Supports
UX-04
UI-05
UI-07
Evidence
Linear
Stripe
Raycast
Atlassian Design
Tailwind CSS
Project Constraint

None.

Decision Type

**Keep**

Rationale

Across the research, meaningful visual content is consistently paired with understandable textual information rather than replacing it. This reinforces the portfolio's evidence-driven communication while improving inclusivity for diverse users.

Priority

Medium

A11Y-05 — Respect Diverse User Interaction Preferences
Decision

The portfolio should avoid requiring a single interaction style, ensuring users can access content comfortably regardless of their preferred navigation or interaction method.

Supports
UX-07
UI-09
ENG-02
Evidence
Linear
Stripe
Brittany Chiang
Raycast
Atlassian Design
Project Constraint

01_PROJECT_IDENTITY.md

Decision Type

**Adapt**

Rationale

The research consistently favors interfaces that remain usable through multiple interaction approaches instead of depending on visual effects or specific input methods. This supports the project's goal of delivering a calm, inclusive, and content-first experience without introducing unnecessary implementation complexity.

Priority

Medium

