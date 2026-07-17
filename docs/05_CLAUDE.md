# `05_CLAUDE.md`

---

# 1. Document Metadata

| Field | Value |
|-------|-------|
| **Project** | Personal Web Portfolio |
| **Document** | Claude Implementation Guide |
| **Version** | 1.0 |
| **Status** | Draft |
| **Last Updated** | July 2026 |

---

# 2. Purpose

The Claude Implementation Guide is the authoritative implementation reference for Claude Code and other coding-oriented AI assistants responsible for building Version 1 of the Personal Web Portfolio.

Its purpose is to translate the completed planning repository into practical implementation guidance while preserving every approved planning decision established throughout Phases 1–4.

Specifically, this document exists to:

- translate approved planning documents into implementation guidance;
- preserve complete documentation traceability;
- minimize implementation ambiguity;
- establish consistent implementation practices;
- prevent undocumented design, architectural, or functional decisions during development;
- ensure implementation remains aligned with the approved Version 1 scope.

This document is an implementation guide—not a planning document.

Accordingly, it shall **not**:

- redefine project requirements;
- modify project scope;
- alter user experience;
- reinterpret the Design System;
- introduce additional functionality;
- replace any previously approved planning document.

All implementation decisions must remain traceable to earlier planning artifacts.

---

# 3. Scope

This document defines the implementation guidance required to convert the approved planning repository into production-ready code.

It establishes guidance for:

- implementation strategy;
- coding conventions;
- project organization;
- implementation workflow;
- component implementation guidance;
- AI decision rules;
- implementation constraints.

This document intentionally excludes:

- new functional requirements;
- design decisions;
- information architecture changes;
- architecture redesign;
- Version 2 planning;
- feature expansion beyond the approved Version 1 scope.

Implementation guidance shall always support previously approved documentation rather than extending or modifying it.

---

# 4. Relationship to Other Planning Documents

The project follows a documentation-first workflow in which every planning artifact has a distinct responsibility.

| Document | Primary Responsibility |
|----------|------------------------|
| **01_PROJECT_IDENTITY.md** | Defines the project's purpose, engineering identity, audience, design philosophy, and approved Version 1 scope. |
| **02_WEBSITE_ANALYSIS.md** | Defines the research-backed information architecture, UX philosophy, engineering principles, and architectural direction. |
| **03_PRD.md** | Defines the complete functional requirements, navigation behavior, user flows, technical expectations, and acceptance criteria. |
| **04_DESIGN_SYSTEM.md** | Defines the reusable visual language, interaction standards, accessibility guidance, and component design rules. |
| **05_CLAUDE.md** | Defines implementation guidance for translating approved planning documents into production code. |

Accordingly:

- Project Identity defines **why** the portfolio exists.
- Website Analysis defines **how** the portfolio should be experienced.
- The PRD defines **what** the portfolio must do.
- The Design System defines **how** the approved requirements should be visually expressed.
- This document defines **how those approved decisions should be implemented in code.**

`05_CLAUDE.md` exists solely to implement the previous planning documents.

It shall never override, reinterpret, or contradict them.

---

# 5. Intended Audience

This document is written for:

- Claude Code;
- coding-oriented AI assistants;
- future developers responsible for maintaining or extending the project.

It is not intended to replace the project's human-readable planning documentation.

Instead, it serves as the implementation companion to the approved planning repository, ensuring that implementation remains consistent, traceable, and aligned with documented decisions.

---

# 6. AI Role

During implementation, Claude functions as an implementation assistant rather than a product designer or architect.

Claude shall:

- implement approved requirements;
- preserve documentation traceability;
- reuse existing components whenever appropriate;
- follow documented visual and engineering standards;
- minimize assumptions;
- maintain consistency across the codebase;
- protect the approved Version 1 scope.

Claude shall not reinterpret planning documents based on personal preference, implementation convenience, or current industry trends.

When implementation uncertainty exists, documented planning artifacts take precedence over inferred behavior.

---

# 7. Source of Truth Hierarchy

Implementation shall always follow the project's approved documentation hierarchy.

```text
01_PROJECT_IDENTITY.md
        ↓
02_WEBSITE_ANALYSIS.md
        ↓
03_PRD.md
        ↓
04_DESIGN_SYSTEM.md
        ↓
05_CLAUDE.md
```

When multiple documents appear to conflict, the higher-level document always takes precedence.

Implementation guidance may clarify how approved decisions should be realized in code, but it shall never modify decisions established by higher-level planning documents.

Any unresolved ambiguity should be resolved by consulting the highest applicable planning document rather than introducing undocumented assumptions.

---

# 8. Implementation Philosophy

Implementation should faithfully express the approved planning repository using the simplest solution that completely satisfies documented requirements.

Throughout development, implementation should prioritize:

- simplicity;
- maintainability;
- readability;
- accessibility;
- consistency;
- component reuse;
- performance;
- documentation traceability.

Implementation decisions should favor straightforward, well-organized solutions over unnecessary abstraction or premature optimization.

Every implementation choice should be justifiable through one or more approved planning documents.

If multiple technically valid implementations exist, preference should be given to the solution that introduces the least complexity while fully satisfying the documented requirements.

---

# 9. General Constraints

Throughout implementation, Claude shall not:

- invent new requirements;
- redesign the user interface;
- expand the approved Version 1 scope;
- introduce unnecessary third-party libraries;
- ignore accessibility requirements;
- violate the Design System;
- contradict the Product Requirements Document;
- modify the approved navigation structure;
- alter the project's established engineering positioning;
- introduce speculative optimizations that are unsupported by documented requirements.

The approved technology stack shall remain:

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS v4
- shadcn/ui
- Lucide React
- next/font
- next/image
- ESLint
- Prettier
- npm
- Vercel

Alternative technologies shall not be introduced unless required to satisfy an approved Version 1 requirement documented elsewhere in the planning repository.

# 10. Technology Stack

The implementation of Version 1 shall use only the approved technology stack. Every technology has a clearly defined responsibility and should be used only within its intended scope. The implementation should prioritize simplicity, maintainability, and alignment with the documentation-first workflow established throughout previous phases.

---

## Next.js (App Router)

### Purpose

Provides the application framework, routing system, rendering model, metadata management, and deployment integration.

### Responsibility

* Application routing
* Page composition
* Layout management
* Metadata
* Static asset delivery
* Performance optimization

### Selection Rationale

Next.js provides a stable foundation that aligns with the project's performance-first, content-first, and maintainability goals while supporting future incremental growth without unnecessary complexity.

### Implementation Expectations

* Use the App Router exclusively.
* Organize pages according to the approved information architecture.
* Favor Server Components by default unless client-side interactivity is required.
* Preserve shallow routing consistent with the PRD.

---

## React

### Purpose

Provides the component model used to build reusable user interface elements.

### Responsibility

* Component composition
* UI rendering
* Reusable interface architecture

### Selection Rationale

React enables the reusable component architecture defined in the Design System while encouraging predictable composition and maintainability.

### Implementation Expectations

* Build reusable components before creating page-specific implementations.
* Prefer composition over duplication.
* Keep components focused on a single responsibility.

---

## TypeScript

### Purpose

Provides static typing throughout the application.

### Responsibility

* Type safety
* Interface definitions
* Shared data structures
* Improved maintainability

### Selection Rationale

TypeScript improves reliability, readability, and long-term maintainability while reducing implementation ambiguity.

### Implementation Expectations

* Prefer explicit typing for shared structures.
* Define reusable types instead of repeating object shapes.
* Avoid unnecessary use of permissive types.

---

## Tailwind CSS v4

### Purpose

Provides the styling system for implementing the approved Design System.

### Responsibility

* Layout
* Spacing
* Typography
* Color
* Responsive behavior
* Utility-based styling

### Selection Rationale

Tailwind CSS supports rapid implementation while maintaining consistency with the documented visual standards.

### Implementation Expectations

* Follow the Design System rather than creating ad hoc styling.
* Reuse utility patterns consistently.
* Avoid unnecessary custom CSS.

---

## shadcn/ui

### Purpose

Provides accessible, reusable UI primitives aligned with the approved component inventory.

### Responsibility

* Base UI components
* Accessibility foundations
* Consistent interaction behavior

### Selection Rationale

shadcn/ui aligns with the project's emphasis on reusable components, accessibility, and maintainability without introducing unnecessary abstraction.

### Implementation Expectations

* Use components as implementation foundations rather than final designs.
* Customize through the Design System where necessary.
* Avoid modifying component behavior unless required by Version 1.

---

## Lucide React

### Purpose

Provides a consistent icon library.

### Responsibility

* Interface icons
* Supporting visual indicators

### Selection Rationale

Lucide React offers a cohesive icon set that complements the portfolio's restrained, content-first visual language.

### Implementation Expectations

* Use icons only where they improve comprehension.
* Icons shall support text rather than replace it.
* Maintain consistent icon usage across the application.

---

## next/font

### Purpose

Provides optimized font loading.

### Responsibility

* Typography loading
* Font optimization
* Performance

### Selection Rationale

Supports the Design System's typography requirements while improving loading performance and visual stability.

### Implementation Expectations

* Load fonts through `next/font`.
* Maintain consistent typography across all pages.
* Avoid unnecessary font variations.

---

## next/image

### Purpose

Provides optimized image handling.

### Responsibility

* Image optimization
* Responsive image delivery
* Performance

### Selection Rationale

Supports the portfolio's performance-first philosophy while presenting authentic project visuals efficiently.

### Implementation Expectations

* Use for all portfolio images where appropriate.
* Preserve image quality while optimizing delivery.
* Use authentic project imagery only.

---

## ESLint

### Purpose

Maintains code quality through static analysis.

### Responsibility

* Code validation
* Consistency
* Best-practice enforcement

### Selection Rationale

Supports long-term maintainability by identifying issues early during development.

### Implementation Expectations

* Keep the project free of unresolved linting issues.
* Treat lint warnings as implementation concerns rather than optional suggestions.

---

## Prettier

### Purpose

Provides automatic code formatting.

### Responsibility

* Formatting consistency
* Readability

### Selection Rationale

Eliminates formatting inconsistencies and allows implementation decisions to focus on code quality rather than style.

### Implementation Expectations

* Format the entire repository consistently.
* Do not manually introduce formatting variations.

---

## npm

### Purpose

Provides package management.

### Responsibility

* Dependency management
* Project scripts

### Selection Rationale

npm satisfies Version 1 requirements without introducing additional tooling.

### Implementation Expectations

* Maintain a minimal dependency tree.
* Keep package scripts simple and purposeful.

---

## Vercel

### Purpose

Provides deployment and hosting.

### Responsibility

* Production deployment
* Build execution
* Hosting

### Selection Rationale

Vercel integrates directly with the approved framework while supporting the project's deployment and performance objectives.

### Implementation Expectations

* Maintain deployment compatibility throughout development.
* Avoid configuration that depends on non-standard hosting environments.

---

# 11. Repository Structure

The repository shall remain intentionally small, reflecting the approved Version 1 scope. Every top-level directory shall have a single, well-defined responsibility.

| Directory     | Responsibility                                               |
| ------------- | ------------------------------------------------------------ |
| `app/`        | Application routes, layouts, and page composition.           |
| `components/` | Reusable UI, layout, and feature components.                 |
| `lib/`        | Shared utilities, helper functions, and common logic.        |
| `public/`     | Static assets such as images, icons, and downloadable files. |
| `styles/`     | Global styling and shared style definitions.                 |
| `types/`      | Shared TypeScript types and interfaces.                      |

Additional top-level directories shall only be introduced when required by an approved Version 1 requirement.

---

# 12. Folder Organization

Repository organization shall emphasize discoverability, scalability, and simplicity.

## Page Organization

* Each approved page shall have a dedicated location within the application routing structure.
* Page implementations should focus on composition rather than complex business logic.
* Shared page sections should be extracted into reusable components.

## Reusable Components

Reusable components shall be grouped by responsibility rather than by page.

Examples include:

* layout components
* navigation components
* content components
* shared presentation components

## Layout Components

Layout-related components shall remain independent of page-specific content and provide consistent structural foundations across the portfolio.

## UI Components

UI components shall encapsulate reusable interface elements defined by the Design System and should avoid embedding page-specific behavior.

## Assets

Static assets shall be organized by content type, ensuring that images, icons, and downloadable resources remain easy to locate and maintain.

## Utilities

Utility functions shall remain framework-agnostic where practical and avoid unnecessary coupling to specific pages or components.

## Shared Types

Common TypeScript definitions shall be centralized to eliminate duplication and encourage consistent data structures throughout the project.

Folder organization should remain shallow and avoid unnecessary nesting unless it clearly improves maintainability.

---

# 13. Naming Conventions

Consistent naming improves readability, discoverability, and long-term maintenance.

| Item              | Convention                                        |
| ----------------- | ------------------------------------------------- |
| Folders           | lowercase using kebab-case                        |
| Files             | kebab-case where appropriate                      |
| React Components  | PascalCase                                        |
| TypeScript Types  | PascalCase                                        |
| Interfaces        | PascalCase                                        |
| Utility Functions | camelCase                                         |
| Constants         | UPPER_SNAKE_CASE                                  |
| Assets            | lowercase using kebab-case with descriptive names |

Naming should:

* clearly communicate purpose,
* avoid abbreviations unless universally understood,
* remain consistent throughout the repository,
* prioritize readability over brevity.

---

# 14. Code Style

Implementation should consistently favor clarity over cleverness.

General standards include:

* prioritize readable code,
* keep implementations simple,
* maintain consistent coding patterns,
* avoid unnecessary abstraction,
* separate responsibilities appropriately,
* maximize component reuse,
* minimize duplication,
* prefer explicit TypeScript definitions,
* keep functions and components focused on a single responsibility.

Component design should encourage small, composable units rather than large monolithic implementations.

Comments should explain intent or reasoning when implementation is not immediately obvious. Comments should not restate self-explanatory code.

Formatting shall remain consistent through automated tooling rather than manual preference.

---

# 15. Dependency Guidelines

Dependencies shall remain intentionally minimal throughout Version 1.

Implementation should:

* prefer built-in Next.js and React capabilities,
* avoid packages that duplicate existing framework functionality,
* minimize overall dependency count,
* justify every additional dependency,
* prevent overlapping libraries serving the same purpose,
* preserve long-term maintainability.

New dependencies shall only be introduced when required to satisfy an approved Version 1 requirement and when equivalent functionality is not already provided by the approved technology stack.

---

# 16. Import Organization

Imports shall follow a predictable hierarchy throughout the repository.

Recommended order:

1. Framework imports
2. Third-party libraries
3. Internal components
4. Internal utilities
5. Shared types
6. Styles

Imports within each group should remain consistently organized to improve readability and reduce unnecessary merge conflicts.

Unused imports should be removed promptly to maintain a clean codebase.

---

# 17. Environment Configuration Philosophy

Configuration should remain simple, secure, and consistent across local development and deployment environments.

Implementation shall follow these principles:

* separate configuration from application logic,
* use environment variables for configurable values,
* never hardcode sensitive information,
* distinguish between public and sensitive configuration,
* maintain consistent behavior across development and production environments,
* keep configuration minimal and directly related to Version 1 requirements.

Sensitive information, including secrets and credentials, must never be committed to the repository.

Deployment configuration should remain compatible with the approved hosting environment while avoiding unnecessary environment-specific customization.

```markdown
# 18. Page Implementation Rules

Implementation shall follow the approved Version 1 page structure defined in the Product Requirements Document and expressed through the Design System. Every page must preserve the project's engineering narrative, maintain visual consistency, and avoid introducing functionality outside the approved scope.

## Home

The Home page shall:

- implement the approved narrative sequence:
  - Hero
  - Professional Summary
  - Featured Projects
  - Skills Preview
  - Call-to-Action
- establish professional identity before presenting supporting evidence
- prioritize engineering thinking over project quantity
- reuse shared layout and component patterns
- avoid duplicating complete content from other pages

## About

The About page shall:

- expand the professional narrative introduced on the Home page
- implement the approved section sequence
- emphasize engineering philosophy, background, education, and career direction
- maintain consistent presentation with the Home page
- avoid introducing unrelated personal content

## Projects

The Projects page shall:

- implement the approved project presentation structure
- present every project consistently
- emphasize engineering contribution, technologies, and outcomes
- link only to approved external resources
- avoid introducing case-study functionality beyond Version 1 scope

## Skills

The Skills page shall:

- organize skills into approved competency groups
- maintain consistent visual treatment for every category
- avoid proficiency ratings
- reflect technologies actually used within the portfolio

## Contact

The Contact page shall:

- provide only approved communication methods
- emphasize direct contact
- avoid forms or backend functionality
- present external profile links consistently

## General Rules

Every page shall:

- follow the Product Requirements Document as the functional authority
- implement the Design System without reinterpretation
- preserve the documented engineering narrative
- reuse shared layouts and components
- maintain consistent navigation and footer
- expose a single primary purpose
- avoid introducing page-specific visual systems
- avoid additional Version 1 functionality.

---

# 19. Layout Implementation Rules

Layout implementation shall prioritize consistency, readability, and maintainability over page-specific customization.

## Shared Layout

Implementation should:

- use a single shared root layout
- reuse global navigation across every page
- reuse the footer across every page
- provide a consistent document structure
- maintain identical page framing throughout the application

## Page Containers

Every page should:

- use a consistent content container
- maintain approved content width
- preserve comfortable reading length
- align major content consistently
- avoid page-specific container widths

## Section Composition

Sections should:

- represent one clear purpose
- begin with a heading
- follow consistent spacing
- remain modular and reusable
- preserve the documented reading flow

## Spacing

Layouts should:

- implement the Design System spacing philosophy
- maintain consistent vertical rhythm
- preserve predictable relationships between sections
- avoid arbitrary spacing decisions

## Structural Patterns

Implementation should favor reusable structural patterns rather than unique page layouts.

New layouts should extend existing composition patterns instead of creating isolated solutions.

Consistency shall always take precedence over visual variation.

---

# 20. Component Implementation Rules

Reusable components shall implement the Component Inventory defined by the Design System.

## General Principles

Every component should:

- have one clearly defined responsibility
- remain reusable
- remain composable
- avoid duplicated logic
- remain maintainable
- expose predictable behavior

## Composition

Implementation should favor:

- composition over duplication
- reusable building blocks
- shared component variants
- consistent APIs
- minimal specialization

## Accessibility

Every interactive component should support:

- keyboard navigation
- visible focus states
- semantic HTML
- screen reader compatibility
- consistent interaction behavior

## Predictability

Components should:

- behave consistently wherever used
- preserve interaction expectations
- avoid hidden side effects
- remain visually consistent across pages

## Maintainability

Implementation should:

- keep component responsibilities focused
- avoid unnecessary abstraction
- colocate related implementation where appropriate
- support future extension without breaking existing behavior

No additional reusable components should be introduced unless implementation requires functionality already approved by the planning documents.

---

# 21. Styling Rules

Styling shall implement the approved Design System rather than reinterpret it.

## Tailwind CSS

Implementation should:

- follow a utility-first workflow
- prioritize reusable utility composition
- avoid unnecessary custom CSS
- use utilities consistently across the project

## Design Tokens

Visual values should originate from centralized design tokens including:

- colors
- spacing
- typography
- borders
- radius
- shadows

Hardcoded visual values should be avoided where reusable tokens exist.

## Typography

Typography should:

- implement the documented hierarchy
- remain consistent across pages
- preserve readability
- avoid arbitrary font sizing

## Spacing

Spacing should:

- follow the approved spacing scale
- preserve visual rhythm
- remain consistent between similar layouts
- avoid one-off spacing values

## Colors

Colors should:

- follow semantic usage
- preserve accessibility
- maintain consistency between themes
- reinforce hierarchy rather than decoration

## Styling Consistency

Implementation should avoid:

- inline styles
- duplicated utility patterns
- conflicting visual treatments
- page-specific styling conventions

Styling decisions shall express the Design System, not redefine it.

---

# 22. Responsive Implementation Rules

Responsive implementation shall preserve content, hierarchy, and usability across supported devices.

## Mobile-First

Implementation should:

- begin with mobile layouts
- progressively enhance larger viewports
- avoid desktop-first assumptions

## Layout Adaptation

Layouts should:

- reflow naturally
- preserve reading order
- maintain section relationships
- avoid horizontal scrolling during normal use

## Navigation

Responsive navigation should:

- preserve identical destinations
- maintain consistent labeling
- remain fully accessible
- adapt presentation without changing structure

## Components

Components should:

- resize gracefully
- maintain usable touch targets
- preserve spacing consistency
- retain predictable behavior

## Breakpoints

Responsive behavior should:

- remain consistent across the project
- avoid page-specific breakpoint logic
- preserve the Design System layout philosophy

## Content

Responsive implementation shall never:

- remove approved content
- hide required information
- alter the engineering narrative
- create different user experiences across devices

---

# 23. Accessibility Implementation Rules

Accessibility is mandatory throughout implementation and shall not be treated as an optional enhancement.

Implementation shall satisfy the accessibility expectations established by the PRD and Design System.

## Semantic HTML

Implementation should use:

- meaningful landmarks
- appropriate heading hierarchy
- semantic interactive elements
- logical document structure

## Keyboard Navigation

Every interactive element should be:

- keyboard accessible
- reachable through logical tab order
- operable without a pointing device

## Focus Management

Implementation should:

- preserve visible focus indicators
- maintain logical focus movement
- avoid focus traps
- return focus appropriately after interaction

## ARIA

ARIA should:

- supplement semantic HTML only when necessary
- avoid replacing native semantics
- provide meaningful labels where required

## Screen Readers

Content should remain understandable through:

- logical structure
- descriptive labels
- meaningful alternative text
- consistent reading order

## Color Independence

Information shall never rely exclusively on color.

Visual indicators should always include an additional non-color cue where meaning is conveyed.

## Reduced Motion

Implementation should respect user motion preferences while preserving equivalent usability.

## Forms

Although Version 1 contains no contact form, future form implementations should support:

- explicit labels
- accessible validation
- descriptive errors
- keyboard accessibility
- screen reader compatibility

Accessibility requirements are mandatory for every implemented component and page.

---

# 24. Performance Implementation Rules

Performance optimizations shall support the portfolio's content-first philosophy without compromising readability or accessibility.

## Images

Implementation should:

- use `next/image`
- optimize image delivery
- provide appropriate sizing
- avoid unnecessarily large assets

## Loading Strategy

Implementation should:

- lazy load non-critical media
- prioritize above-the-fold content
- avoid delaying primary content

## JavaScript

Implementation should:

- minimize client-side JavaScript
- avoid unnecessary runtime logic
- prefer server components where appropriate

## Client Components

Client Components should only be used when required for:

- interactivity
- browser APIs
- client-side state

Server Components should remain the default implementation approach.

## Rendering

Implementation should:

- minimize unnecessary re-rendering
- avoid duplicated computation
- preserve predictable rendering behavior

## Dependencies

Implementation should:

- avoid unnecessary packages
- rely only on the approved technology stack
- minimize bundle size growth

Performance improvements must never reduce accessibility, readability, or maintainability.

---

# 25. Motion Implementation Rules

Motion implementation shall follow the Design System's restrained motion philosophy.

## General Principles

Motion should:

- support usability
- reinforce hierarchy
- communicate interaction
- remain subtle

## Hover States

Hover effects should:

- confirm interactivity
- remain consistent
- avoid distracting animation

## Focus States

Focus transitions should:

- improve accessibility
- remain clearly visible
- reinforce keyboard navigation

## Page Transitions

Transitions between pages should:

- preserve orientation
- remain unobtrusive
- avoid delaying navigation

## Reduced Motion

Implementation shall respect user motion preferences using reduced-motion alternatives that preserve equivalent functionality.

## Decorative Animation

Implementation shall avoid:

- unnecessary animations
- looping decorative effects
- attention-seeking motion
- animation without functional purpose

Motion exists solely to improve usability and interface comprehension.

---

# 26. Image & Asset Rules

Assets shall support understanding rather than decoration.

## Project Screenshots

Project screenshots should:

- depict authentic project work
- remain relevant to the associated project
- maintain consistent presentation
- support engineering communication

## Profile Image

The profile image should:

- present a professional appearance
- remain consistent across the portfolio
- support personal recognition
- avoid decorative styling

## Icons

Icons should:

- come from Lucide React
- reinforce content meaning
- remain visually consistent
- never replace required text

## SVG Usage

SVG assets should:

- remain optimized
- support scalability
- preserve accessibility
- be used where appropriate for interface graphics

## Optimization

Assets should:

- use optimized formats
- avoid unnecessary file sizes
- load efficiently
- support responsive delivery

## Alternative Text

Meaningful images shall include descriptive alternative text.

Decorative images shall avoid introducing unnecessary screen reader noise.

## Asset Organization

Assets should be organized consistently using a predictable directory structure that separates:

- images
- icons
- project media
- shared assets

Asset organization should prioritize maintainability, discoverability, and future scalability.
```
# 27. Component Mapping

This section maps every reusable Design System component to its implementation responsibility. Each component represents a reusable building block that should be implemented once and reused consistently throughout the portfolio.

---

## Global Navigation

**Purpose**

Provide primary navigation across the entire portfolio.

**Reusable Responsibility**

* Display the approved Version 1 navigation items.
* Maintain consistent navigation order.
* Indicate the active page.
* Support navigation across all pages.

**Expected Behavior**

* Appears on every page.
* Maintains identical structure and labels.
* Adapts responsively without changing functionality.
* Remains keyboard accessible.

**Pages Used**

* Home
* About
* Projects
* Skills
* Contact

**Notes for Claude**

Implement as a shared layout component. Do not create page-specific navigation variants.

---

## Footer

**Purpose**

Provide persistent secondary navigation and professional information.

**Reusable Responsibility**

* Display footer navigation.
* Display external professional links.
* Display copyright information.

**Expected Behavior**

* Appears on every page.
* Remains visually subordinate to page content.
* Uses consistent layout and spacing.

**Pages Used**

* Home
* About
* Projects
* Skills
* Contact

**Notes for Claude**

Implement once within the shared layout.

---

## Page Header

**Purpose**

Introduce the purpose of each page.

**Reusable Responsibility**

* Display page title.
* Display optional supporting description.

**Expected Behavior**

* Appears near the beginning of every page.
* Establishes page hierarchy.
* Uses consistent spacing and typography.

**Pages Used**

* Home
* About
* Projects
* Skills
* Contact

**Notes for Claude**

Accept page-specific content while preserving identical visual structure.

---

## Section Header

**Purpose**

Separate major content sections.

**Reusable Responsibility**

* Display section title.
* Display optional supporting description.
* Optionally display supporting action.

**Expected Behavior**

* Used consistently across all sections.
* Reinforces hierarchy.

**Pages Used**

* Home
* About
* Projects
* Skills
* Contact

**Notes for Claude**

Avoid creating section-specific header implementations.

---

## Button

**Purpose**

Represent deliberate user actions.

**Reusable Responsibility**

* Primary actions.
* Secondary actions.
* Text actions.

**Expected Behavior**

* Consistent interaction states.
* Accessible keyboard interaction.
* Shared styling.

**Pages Used**

* Home
* Projects
* Contact

**Notes for Claude**

Implement variants through component properties rather than duplicate components.

---

## Text Link

**Purpose**

Navigate between internal portfolio resources.

**Reusable Responsibility**

* Internal navigation.
* Contextual references.

**Expected Behavior**

* Clearly distinguishable from body text.
* Consistent interaction behavior.

**Pages Used**

* All pages

**Notes for Claude**

Reuse for every internal navigation link.

---

## External Link

**Purpose**

Navigate to external resources.

**Reusable Responsibility**

* GitHub
* LinkedIn
* Repository links
* Live demo links

**Expected Behavior**

* Clearly indicates external destination.
* Consistent behavior across the portfolio.

**Pages Used**

* Projects
* Contact

**Notes for Claude**

Reuse for every external destination.

---

## Card

**Purpose**

Provide a reusable content container.

**Reusable Responsibility**

* Group related information.
* Maintain consistent spacing.
* Support reusable layouts.

**Expected Behavior**

* Consistent padding.
* Shared visual treatment.
* Reusable across content types.

**Pages Used**

* Multiple pages

**Notes for Claude**

Serve as the base container for higher-level card components.

---

## Project Card

**Purpose**

Present project summaries consistently.

**Reusable Responsibility**

* Project title.
* Description.
* Technologies.
* Engineering contribution.
* Supporting links.
* Optional screenshot.

**Expected Behavior**

* Uniform layout.
* Consistent metadata placement.
* Shared interaction behavior.

**Pages Used**

* Home
* Projects

**Notes for Claude**

Compose from existing reusable components including Card, Technology Badge, Button, External Link, and Project Screenshot.

---

## Skill Badge

**Purpose**

Display individual skills.

**Reusable Responsibility**

* Present categorized skills.
* Support consistent grouping.

**Expected Behavior**

* Shared appearance.
* Consistent spacing.

**Pages Used**

* Home
* Skills

**Notes for Claude**

Do not create category-specific badge variants.

---

## Technology Badge

**Purpose**

Display technologies associated with projects or skills.

**Reusable Responsibility**

* Present technology labels.
* Support quick scanning.

**Expected Behavior**

* Consistent sizing.
* Shared styling.

**Pages Used**

* Projects
* Skills

**Notes for Claude**

Reuse across all technology listings.

---

## Divider

**Purpose**

Separate related content sections.

**Reusable Responsibility**

* Provide visual separation where spacing alone is insufficient.

**Expected Behavior**

* Consistent appearance.
* Used sparingly.

**Pages Used**

* All pages

**Notes for Claude**

Spacing should remain the primary separator.

---

## Image

**Purpose**

Present supporting visual content.

**Reusable Responsibility**

* Display authentic media.
* Maintain responsive behavior.

**Expected Behavior**

* Preserve aspect ratio.
* Remain secondary to written content.

**Pages Used**

* Multiple pages

**Notes for Claude**

Use as the base media component.

---

## Profile Image

**Purpose**

Represent the author's professional identity.

**Reusable Responsibility**

* Display profile photograph.

**Expected Behavior**

* Consistent presentation.
* Responsive scaling.

**Pages Used**

* Home
* About

**Notes for Claude**

Compose from the base Image component.

---

## Project Screenshot

**Purpose**

Present authentic project visuals.

**Reusable Responsibility**

* Display project screenshots.

**Expected Behavior**

* Consistent dimensions.
* Responsive scaling.

**Pages Used**

* Projects

**Notes for Claude**

Compose from the base Image component.

---

## List

**Purpose**

Present grouped information.

**Reusable Responsibility**

* Organize related items.
* Maintain consistent spacing.

**Expected Behavior**

* Predictable alignment.
* Shared formatting.

**Pages Used**

* About
* Skills
* Contact

**Notes for Claude**

Support reusable list patterns rather than page-specific implementations.

---

## Icon

**Purpose**

Reinforce content meaning.

**Reusable Responsibility**

* Support navigation.
* Support metadata.
* Support actions.

**Expected Behavior**

* Decorative unless conveying supplemental meaning.
* Consistent sizing and alignment.

**Pages Used**

* All pages

**Notes for Claude**

Icons supplement text and shall never replace it.

---

## Call-to-Action

**Purpose**

Guide visitors toward meaningful next actions.

**Reusable Responsibility**

* Encourage project exploration.
* Encourage professional contact.

**Expected Behavior**

* Clear primary action.
* Consistent presentation.

**Pages Used**

* Home
* Contact

**Notes for Claude**

Compose from Section Header, Button, and supporting text rather than creating a standalone visual pattern.

---

# 28. Shared Layout Mapping

The portfolio shall use a shared layout hierarchy to ensure structural consistency across every approved Version 1 page.

```text
Root Layout
    ↓
Global Navigation
    ↓
Page Container
    ↓
Page Header
    ↓
Content Sections
    ↓
Footer
```

| Layer             | Responsibility                                                                | Shared                                      |
| ----------------- | ----------------------------------------------------------------------------- | ------------------------------------------- |
| Root Layout       | Provides global application structure, fonts, metadata, and shared providers. | Yes                                         |
| Global Navigation | Provides consistent navigation across all pages.                              | Yes                                         |
| Page Container    | Constrains content width, spacing, and alignment.                             | Yes                                         |
| Page Header       | Introduces the page title and description.                                    | Shared component with page-specific content |
| Content Sections  | Present page-specific content using reusable components.                      | Page-specific composition                   |
| Footer            | Provides secondary navigation and professional links.                         | Yes                                         |

Only the content sections differ between pages. All higher-level layout layers remain shared throughout the application.

---

# 29. Page-to-Component Mapping

## Home

| Section              | Components                                                    |
| -------------------- | ------------------------------------------------------------- |
| Hero                 | Page Header, Button, Profile Image                            |
| Professional Summary | Section Header, List                                          |
| Featured Projects    | Section Header, Project Card, Technology Badge, External Link |
| Skills Preview       | Section Header, Skill Badge                                   |
| Call-to-Action       | Call-to-Action, Button                                        |

---

## About

| Section                 | Components           |
| ----------------------- | -------------------- |
| Page Introduction       | Page Header          |
| Professional Background | Section Header, List |
| Engineering Philosophy  | Section Header       |
| Education               | Section Header, List |
| Career Direction        | Section Header       |

---

## Projects

| Section           | Components         |
| ----------------- | ------------------ |
| Page Introduction | Page Header        |
| Project Listing   | Project Card       |
| Project Metadata  | Technology Badge   |
| Project Resources | External Link      |
| Project Visuals   | Project Screenshot |

---

## Skills

| Section             | Components                  |
| ------------------- | --------------------------- |
| Page Introduction   | Page Header                 |
| Skill Categories    | Section Header, Skill Badge |
| Technology Overview | Technology Badge            |

---

## Contact

| Section               | Components             |
| --------------------- | ---------------------- |
| Page Introduction     | Page Header            |
| Contact Methods       | List, External Link    |
| Professional Profiles | External Link          |
| Call-to-Action        | Call-to-Action, Button |

### Shared Components Across Multiple Pages

The following components are intentionally reused across multiple pages to preserve consistency:

* Global Navigation
* Footer
* Page Header
* Section Header
* Button
* Text Link
* External Link
* Card
* List
* Divider
* Icon

Specialized reusable components are shared where appropriate:

* Project Card — Home, Projects
* Skill Badge — Home, Skills
* Technology Badge — Projects, Skills
* Profile Image — Home, About
* Call-to-Action — Home, Contact

No page shall introduce unique reusable components when an approved component already satisfies the requirement.

---

# 30. Component Dependency Rules

Component dependencies shall remain simple, predictable, and unidirectional.

Claude shall compose higher-level components from lower-level reusable components while preserving clear separation of responsibilities.

The dependency hierarchy shall follow:

```text
Primitive UI Components
        ↓
Composite Components
        ↓
Layout Components
        ↓
Page Components
```

### Dependency Rules

* Primitive UI components shall not depend on page components.
* Composite components shall compose primitive UI components rather than duplicate functionality.
* Layout components shall organize reusable components without introducing presentation logic.
* Page components shall compose reusable layout and UI components without redefining them.
* Circular dependencies are prohibited.
* Page-specific component variants shall be avoided unless explicitly required by the Design System.
* Layout components shall remain independent of page content.
* Presentation shall remain separate from content.
* Components shall expose only the interfaces necessary for reuse.
* Dependencies shall prioritize maintainability, predictability, and simplicity.

---

# 31. Component Reuse Rules

Reusable components are the primary building blocks of the portfolio.

Claude shall follow these rules throughout implementation.

### Reuse Expectations

* Reuse existing components before creating new ones.
* Extend existing components through composition or configuration rather than duplication.
* Preserve consistent behavior across every usage.
* Preserve consistent styling across every page.
* Preserve accessibility for every reusable component.
* Preserve documented interaction behavior defined by the Design System.
* Keep reusable components implementation-agnostic and free from page-specific assumptions.
* Avoid creating specialized variants unless required by documented functionality.
* Prefer composition over inheritance when extending component behavior.
* Keep reusable APIs simple, predictable, and narrowly focused.

### New Component Policy

A new reusable component shall only be introduced when:

* an approved requirement cannot be satisfied by the existing Component Inventory;
* extending an existing reusable component would reduce clarity or maintainability; and
* the new component represents a genuinely reusable pattern expected to appear in multiple locations.

Page-specific implementations shall not be promoted to reusable components unless they demonstrate a clear reuse requirement consistent with the approved Design System.

# 42. Implementation Readiness Review

This review verifies that the Personal Web Portfolio is fully prepared to transition from implementation planning into development. It confirms that the planning repository provides sufficient guidance for Claude Code to implement Version 1 without requiring additional planning artifacts.

---

## 42.1 Documentation Completeness

| Review Item                            | Status     |
| -------------------------------------- | ---------- |
| Project Identity Complete              | ✅ Verified |
| Website Analysis Complete              | ✅ Verified |
| Product Requirements Document Complete | ✅ Verified |
| Design System Complete                 | ✅ Verified |
| Claude Implementation Guide Complete   | ✅ Verified |

### Assessment

The planning repository is complete and internally consistent.

Project Identity establishes the project's purpose, audience, engineering narrative, and Version 1 scope.

Website Analysis defines the approved architectural philosophy based on documented research.

The Product Requirements Document translates architectural decisions into measurable functional requirements.

The Design System establishes the reusable visual language and interaction standards.

The Claude Implementation Guide translates all approved planning decisions into implementation-specific guidance for AI-assisted development.

Collectively, these documents provide sufficient information to implement Version 1 without requiring additional planning documentation.

---

## 42.2 Scope Review

| Review Item                       | Status     |
| --------------------------------- | ---------- |
| Version 1 Scope Fully Defined     | ✅ Verified |
| No Outstanding Planning Questions | ✅ Verified |
| No Undocumented Functionality     | ✅ Verified |
| No Planning Conflicts Identified  | ✅ Verified |

### Assessment

Version 1 scope is fully documented across the planning repository.

All approved pages, reusable components, navigation behavior, accessibility expectations, responsive behavior, engineering constraints, and implementation workflow have been defined.

No unresolved planning decisions remain.

Implementation should therefore focus exclusively on translating the approved documentation into production code without introducing additional functionality or architectural revisions.

---

## 42.3 Design Readiness

| Review Item                      | Status     |
| -------------------------------- | ---------- |
| Visual Language Defined          | ✅ Verified |
| Reusable Components Documented   | ✅ Verified |
| Page Templates Defined           | ✅ Verified |
| Interaction Standards Complete   | ✅ Verified |
| Accessibility Standards Complete | ✅ Verified |
| Responsive Behavior Documented   | ✅ Verified |

### Assessment

The Design System provides a complete reusable visual specification for Version 1.

Layout composition, typography, spacing, color philosophy, reusable components, interaction behavior, motion principles, accessibility expectations, and responsive adaptation have all been documented.

No additional visual planning is required before implementation.

---

## 42.4 Technical Readiness

| Review Item                        | Status     |
| ---------------------------------- | ---------- |
| Technology Stack Finalized         | ✅ Verified |
| Repository Standards Defined       | ✅ Verified |
| Implementation Workflow Documented | ✅ Verified |
| Coding Conventions Established     | ✅ Verified |
| Dependency Guidelines Complete     | ✅ Verified |

### Assessment

The technical implementation strategy is fully defined.

The approved technology stack, repository organization, coding standards, dependency constraints, implementation workflow, and quality expectations provide a stable foundation for development.

Implementation decisions should remain within these documented constraints throughout Version 1.

---

## 42.5 AI Readiness

| Review Item            | Status     |
| ---------------------- | ---------- |
| Implementation Rules   | ✅ Verified |
| Decision Hierarchy     | ✅ Verified |
| Traceability Rules     | ✅ Verified |
| Scope Protection Rules | ✅ Verified |
| Component Mapping      | ✅ Verified |
| Definition of Done     | ✅ Verified |

### Assessment

Claude has sufficient implementation guidance to produce consistent, traceable, and maintainable code.

Decision precedence has been established, implementation boundaries are documented, reusable component mapping is defined, and Definition of Done criteria provide objective completion standards.

The implementation process minimizes ambiguity while preserving consistency with every approved planning artifact.

---

# 43. Implementation Traceability Matrix

The Claude Implementation Guide translates approved planning documentation into implementation guidance. Every implementation rule originates from an existing planning document rather than introducing new project direction.

| Claude Guide Section        | Primary Source           | Supporting Documents                  |
| --------------------------- | ------------------------ | ------------------------------------- |
| Implementation Philosophy   | `01_PROJECT_IDENTITY.md` | `02_WEBSITE_ANALYSIS.md`, `03_PRD.md` |
| Technology Stack            | `03_PRD.md`              | `PH4_HANDOFF.md`                      |
| Repository Structure        | `03_PRD.md`              | `04_DESIGN_SYSTEM.md`                 |
| Folder Organization         | `03_PRD.md`              | `04_DESIGN_SYSTEM.md`                 |
| Page Implementation Rules   | `03_PRD.md`              | `02_WEBSITE_ANALYSIS.md`              |
| Layout Implementation Rules | `04_DESIGN_SYSTEM.md`    | `03_PRD.md`                           |
| Styling Rules               | `04_DESIGN_SYSTEM.md`    | `02_WEBSITE_ANALYSIS.md`              |
| Typography Rules            | `04_DESIGN_SYSTEM.md`    | `02_WEBSITE_ANALYSIS.md`              |
| Component Rules             | `04_DESIGN_SYSTEM.md`    | `03_PRD.md`                           |
| Responsive Rules            | `03_PRD.md`              | `04_DESIGN_SYSTEM.md`                 |
| Accessibility Rules         | `03_PRD.md`              | `04_DECISION_MATRIX.md`               |
| Performance Rules           | `03_PRD.md`              | `02_WEBSITE_ANALYSIS.md`              |
| Motion Rules                | `04_DESIGN_SYSTEM.md`    | `02_WEBSITE_ANALYSIS.md`              |
| Component Mapping           | `04_DESIGN_SYSTEM.md`    | `03_PRD.md`                           |
| AI Decision Rules           | `01_PROJECT_IDENTITY.md` | `03_PRD.md`, `04_DESIGN_SYSTEM.md`    |
| Requirement Traceability    | `03_PRD.md`              | `04_DESIGN_SYSTEM.md`                 |
| Scope Protection            | `01_PROJECT_IDENTITY.md` | `PH1_HANDOFF.md`, `PH4_HANDOFF.md`    |
| Implementation Workflow     | `PH4_HANDOFF.md`         | `03_PRD.md`, `04_DESIGN_SYSTEM.md`    |

This matrix confirms that every implementation instruction within `05_CLAUDE.md` originates from previously approved planning artifacts. The implementation guide serves as a translation layer between planning and development rather than an independent source of project decisions.

---

# 44. Final Implementation Checklist

The following checklist defines the minimum implementation expectations required before Version 1 can be considered complete.

---

## Repository

* [ ] Next.js project initialized
* [ ] Repository structure matches documented organization
* [ ] TypeScript configured
* [ ] Tailwind CSS v4 configured
* [ ] shadcn/ui configured
* [ ] ESLint configured
* [ ] Prettier configured
* [ ] npm dependencies installed
* [ ] No unauthorized dependencies added

---

## Layout

* [ ] Shared application layout implemented
* [ ] Global navigation completed
* [ ] Footer completed
* [ ] Shared page container implemented
* [ ] Page templates follow the Design System
* [ ] Consistent layout hierarchy maintained

---

## Components

* [ ] Reusable components implemented
* [ ] Component behavior matches documentation
* [ ] No duplicate component implementations
* [ ] Shared styling reused consistently
* [ ] Component composition follows documented patterns

---

## Pages

### Home

* [ ] Hero section implemented
* [ ] Professional summary completed
* [ ] Featured projects preview completed
* [ ] Skills preview completed
* [ ] Primary call-to-action implemented

### About

* [ ] Professional background completed
* [ ] Engineering philosophy documented
* [ ] Education section completed
* [ ] Career direction presented

### Projects

* [ ] Project listing completed
* [ ] Project cards implemented
* [ ] Technologies displayed
* [ ] Engineering contributions documented
* [ ] External repository/demo links implemented where applicable

### Skills

* [ ] Skill categories completed
* [ ] Technology overview completed
* [ ] Skill presentation consistent with Design System

### Contact

* [ ] Email provided
* [ ] GitHub link implemented
* [ ] LinkedIn link implemented
* [ ] No contact form included

All pages satisfy the requirements defined within the PRD and Design System.

---

## Accessibility

* [ ] Semantic HTML structure implemented
* [ ] Keyboard navigation verified
* [ ] Visible focus indicators implemented
* [ ] Meaningful alternative text provided
* [ ] Reduced motion supported
* [ ] Information does not rely solely on color
* [ ] Heading hierarchy validated
* [ ] Interactive elements accessible

---

## Responsive Design

* [ ] Mobile layouts verified
* [ ] Tablet layouts verified
* [ ] Desktop layouts verified
* [ ] Navigation adapts appropriately
* [ ] Media scales correctly
* [ ] Reading order preserved

---

## Performance

* [ ] Images optimized using `next/image`
* [ ] Fonts optimized using `next/font`
* [ ] Unnecessary dependencies removed
* [ ] Efficient rendering practices followed
* [ ] Static assets optimized
* [ ] Bundle size remains appropriate for Version 1

---

## Quality Assurance

* [ ] ESLint passes without errors
* [ ] Prettier formatting applied consistently
* [ ] No unused components
* [ ] No unused imports
* [ ] No placeholder content
* [ ] No undocumented functionality
* [ ] Repository remains maintainable
* [ ] Documentation traceability preserved

---

## Final Validation

Before Version 1 is considered complete, verify:

* [ ] Product Requirements Document fully satisfied
* [ ] Design System fully satisfied
* [ ] Implementation traceability preserved
* [ ] Version 1 scope preserved
* [ ] Claude Implementation Guide followed throughout development

---

# 45. Conclusion

`05_CLAUDE.md` is now the authoritative implementation guide for Version 1 of the Personal Web Portfolio.

This document translates the approved planning repository into implementation-specific guidance suitable for Claude Code while preserving the project's documentation-first workflow.

It:

* translates planning decisions into implementation guidance;
* preserves complete traceability to approved planning artifacts;
* minimizes ambiguity during AI-assisted development;
* protects the approved Version 1 scope from undocumented expansion; and
* complements, rather than replaces, the earlier planning documents.

Future implementation shall follow the established documentation hierarchy:

```text
01_PROJECT_IDENTITY.md
        ↓
02_WEBSITE_ANALYSIS.md
        ↓
03_PRD.md
        ↓
04_DESIGN_SYSTEM.md
        ↓
05_CLAUDE.md
        ↓
Implementation
```

Each document builds upon the previous layer and must be treated as part of a single authoritative planning repository.

Implementation should extend this repository through production code only. It shall not introduce undocumented functionality, architectural changes, visual redesign, or scope expansion without first updating the appropriate planning documentation.

With the completion of `05_CLAUDE.md`, the planning phase for Version 1 is complete. The project is certified as ready to transition from **implementation planning** into **development**, using the approved documentation repository as the single source of truth throughout implementation.
