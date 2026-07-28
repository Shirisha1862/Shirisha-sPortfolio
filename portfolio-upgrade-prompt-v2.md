# Portfolio Upgrade Prompt v2 — Shirisha's Portfolio

## 0. Continuity Instruction (read this first, agent)

This is **not a restart**. Before touching any code:

1. Open and read `AGENTS.md` at the project root in full.
2. Read the "Current status," "Decisions log," and "Data provided so far" sections to understand what's already built and what content already exists.
3. Do a visual pass of every section currently implemented (list files/components touched).
4. Report back a short audit: what exists, what matches the old spec, what will change under this new spec, and what's blocked on missing content.
5. Only after I confirm the audit, start implementing this upgraded spec section by section — same discipline as before (confirm content per section, implement, update `AGENTS.md`, move on).

Do not throw away working code. Refactor/restyle in place wherever possible. Flag anything that needs a structural rewrite before you do it.

---

## 1. Ground Rules (unchanged, restated so no agent forgets)

1. Do not invent personal content — resume text, education, experience, project details, links, metrics. All of it comes from me.
2. If something is missing for a section, **stop and ask** — never fabricate a placeholder fact (fake company, fake date, fake stat).
3. Lorem-ipsum/structural placeholders are fine only for layout scaffolding, tagged `TODO: awaiting real content`.
4. Placeholder media (until I upload real screenshots) must be tagged `<!-- PLACEHOLDER MEDIA: replace with real deployment screenshot -->`.
5. Never make a silent product decision on my behalf for things I said I'd provide.
6. Keep `AGENTS.md` current after every meaningful chunk of work.

---

## 2. Design Upgrade Directive

I shared reference screenshots of a portfolio I like the direction of. Study the pattern, then **exceed it**, don't clone it:

**What's working there (keep the underlying ideas, not the exact execution):**
- Dark base + single neon accent color — restrained palette reads premium.
- Floating pill-shaped nav docked at the bottom-center — different from every top-navbar portfolio out there.
- Hero headline rotates between role descriptors ("Problem Solver" → "AI Enthusiast").
- A stylized portrait breaks the "generic centered avatar" pattern.
- Brand-icon grid for tech stack instead of text pills or progress bars.

**Where it's leaving value on the table — this is where we differentiate:**
- The rotating hero text is a static swap, not typed/animated — feels like a slideshow, not a live interface.
- The bottom nav pill has no active-state indicator, no labels on hover, and competes visually with hero content sitting on top of it.
- Tech icons are a flat grid with no hierarchy (a Java coffee cup and Next.js sit at equal visual weight) — no grouping by category or proficiency signal.
- Projects section reuses a generic video-thumbnail card layout — doesn't feel purpose-built for a dev portfolio.
- No sense of *narrative* — nothing that makes a recruiter feel like they're learning a specific person's story vs. browsing a template.

**Our differentiators (build these in):**
- A real hero animation: a monospace-font typewriter effect that types out each role, pauses, deletes, types the next — with a blinking cursor. `prefers-reduced-motion` disables it in favor of a simple crossfade.
- Bottom nav gets an active-section indicator (the dot glows/moves under whichever section is in viewport via `IntersectionObserver`), and section labels appear as a tooltip on hover/focus — not just icons.
- Tech stack section groups icons by category (Languages, Frontend, Backend, Databases, Tools/DevOps) with a subtle heading per row, and on hover each icon lifts slightly and reveals the name + your comfort level as a small caption — sourced from data I provide, never invented.
- Projects section: each card is a "case study" mini-layout — problem framing (1 line), your role, tech stack chips, and outcome/metric *if I've given you one* — not just a thumbnail + title.
- A subtle scroll-progress indicator (thin neon line at the very top of the viewport) ties the whole page together as one continuous "read," reinforcing the narrative feel.
- Command-palette-style quick nav (`Cmd/Ctrl+K`) that lets a recruiter jump to any section or open your resume/GitHub/LinkedIn instantly — power-user touch that signals technical craft before they've even read your projects.

---

## 3. Global Design System v2

- **Palette:** Keep near-black (`#0a0a0a`–`#0d0f10`) base. Single accent — neon green (`#39FF88`-ish, exact hex your call) used *sparingly*: headlines, active states, CTAs, glow accents. Not every icon needs to glow; reserve glow for emphasis or it stops reading as emphasis.
- **Typography:** A geometric/humanist sans for body copy (e.g., Inter, Manrope, or Space Grotesk) + a monospace face (e.g., JetBrains Mono, IBM Plex Mono) reserved for: hero role-text, section eyebrows/labels, code-adjacent UI (tech stack captions, nav tooltips). This mono/sans contrast is what makes "developer aesthetic" read as intentional rather than a Matrix-movie reference.
- **Nav:** Floating glass pill, bottom-center on desktop; consider collapsing to a slimmer bottom bar or a floating single button + sheet on mobile so it doesn't compete with thumb reach. Active-section indicator required (see above).
- **Motion:** Scroll-reveal on section entry (fade + slight translate-y, ~400ms, staggered for grouped items like tech icons or project cards). Hover micro-interactions on all interactive elements (buttons, cards, nav icons) — lift + glow, not just color change. Respect `prefers-reduced-motion` everywhere, including the command palette and scroll-progress line.
- **Glass/depth:** Use backdrop-blur + low-opacity borders for cards and the nav pill consistently, so depth language is unified across sections rather than only in the hero.

---

## 4. Section Specs

### 4.1 Hero
- Full-name + typewriter role rotation (see above).
- Portrait/illustration area: I'll provide the image; build the frame/glow treatment so it slots in cleanly.
- CTA row: Resume download (primary, filled), then icon-only links (Email, GitHub, LinkedIn, + any others I provide) — keep to icons here, the command palette carries deeper nav.
- Scroll-progress line begins here and persists through the whole page.

### 4.2 Tech Stack
- Grouped by category (ask me for the grouping + proficiency data — do not invent skill levels).
- Grid on desktop, horizontal auto-scroll/marquee row on mobile (pause on touch, respect reduced-motion).

### 4.3 Projects
- Case-study card format (problem / role / stack chips / outcome-if-provided).
- "Live Demo" button conditionally rendered only if a demo URL exists in the data (unchanged from v1 spec).
- Placeholder media tagged per ground rule 4 until I supply real screenshots.

### 4.4 Education — NEW, detailed spec
Do not default to a generic "card grid." Build a **vertical timeline**:
- A thin neon line runs down the section (desktop) or is left-aligned (mobile), with a node/dot per entry.
- Each entry: institution name, degree/program, dates, and (only if I give it to you) GPA, honors, relevant coursework, or a one-line highlight.
- On scroll, each node "activates" (glow pulses once) as it enters viewport — reuses the same `IntersectionObserver` pattern as the nav active-state, so the codebase stays consistent rather than introducing a one-off animation library just for this section.
- Ask me for: institution names, degree titles, dates, location, and any details I want surfaced (GPA/honors/coursework) — nothing implied or estimated.

### 4.5 Get in Touch — NEW, detailed spec
Go beyond a standard form. Build it as a **two-pane "terminal handshake"**:
- Left pane: a short, personal invite line (real copy — ask me for tone/wording, don't invent a bio-style pitch), plus direct contact icons/links (email, LinkedIn, GitHub) as a fallback for anyone who doesn't want to use the form.
- Right pane: the actual form (Name, Email, Message — confirm exact fields with me), styled like a lightweight terminal/code-editor card (monospace labels, a blinking-cursor placeholder in the message field) — ties back to the mono-font system instead of being a generic light-card form that clashes with the theme.
- Real-time inline validation (not just on submit) — required-field and email-format checks, shown with a small neon/red state change, no jarring alert boxes.
- Submit state: optimistic "Sending…" → success confirmation inline (no page redirect) → clear the form. Handle failure state too (network/storage error) with a retry affordance.
- **Data layer:** implement against the in-memory storage abstraction from the original spec (Section 12) — swappable to a real DB later without touching this component. Do not hard-code a specific backend/provider without asking me first.
- Ask me for: exact fields, submit-button copy, and whether you want a honeypot/basic spam guard (recommended, but confirm before adding a dependency).

---

## 5. Additional "far better than the reference" ideas — pick and confirm with me before building

Present these to me as options, don't build silently:
- `Cmd/Ctrl+K` command palette for quick navigation + shortcuts to resume/GitHub/LinkedIn.
- Live GitHub contribution/activity widget (via public GitHub API, no auth needed) instead of a static stats card.
- A subtle custom cursor or cursor-glow effect on desktop only (must degrade gracefully on touch devices).
- An "easter egg" — e.g., a hidden terminal you can type into (`whoami`, `help`, etc.) that responds with real info about you — playful but optional; confirm scope before building so it doesn't eat a disproportionate amount of build time.
- Dark-mode-only is fine given the theme, but confirm you don't want a (rare, optional) light toggle for accessibility/preference.

---

## 6. Process

Same as before: for each section, ask for the specific content/details needed, implement, then update `AGENTS.md` (status, decisions log, next steps) before moving to the next section. Start with the audit in Section 0, then confirm the Design Upgrade Directive (Section 2) with me before touching styling.
