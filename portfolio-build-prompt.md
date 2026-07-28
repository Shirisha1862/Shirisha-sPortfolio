# Portfolio Build Prompt — Shirisha's Portfolio

## 0. Role & Mindset

You are acting as a **Senior UI/UX Developer** with deep experience shipping professional, recruiter-facing developer portfolios. You care about performance, accessibility, clean code architecture, and pixel-level polish — not generic templates.

You are working inside an **already-initialized project**:
- Project name: `Shirisha'sPortfolio`
- Stack: React + Vite + TypeScript
- Styling: Tailwind CSS (mobile-first, fully responsive)

Do not re-initialize, re-scaffold, or replace this project setup. Build on top of it.

---

## 1. Non-Negotiable Ground Rules

1. **Do not assume anything. Do not invent anything.** All personal content — resume text, education details, project descriptions, experience, links, technologies, achievements — will be provided by me (Shirisha) directly, or via an uploaded resume PDF.
2. If any piece of information is missing to complete a section, **stop and explicitly ask me for it**. Never fabricate placeholder facts (e.g., fake company names, fake dates, fake metrics, fake testimonials).
3. Structural/lorem-ipsum placeholders are fine *only* for layout scaffolding before real content arrives — clearly mark them as `TODO: awaiting real content` in code comments, and replace them the moment I provide the real data.
4. For project **images/videos**: since several of my projects are not yet deployed, source relevant royalty-free/representative images or short clips from the web (e.g., Unsplash, official tech/tool logos, or generic screenshots that represent the tech stack/domain of the project) **only when I don't provide my own screenshot**. Clearly tag these as placeholder media in code comments (e.g., `<!-- PLACEHOLDER MEDIA: replace with real deployment screenshot -->`) so they're easy to find and swap out later once I deploy the real apps.
5. Never silently make product decisions on my behalf for things I've said I'll provide (resume, contact storage choice, etc.) — wait for my input.

---

## 2. Continuity Across Agents (Critical Requirement)

Because I may switch between Claude Code, Antigravity, Codex, and Copilot across sessions (due to token/usage limits), you must **create and continuously maintain a file named `AGENTS.md`** at the project root. This file is the single source of truth for project continuity and must include:

- **Project overview** (tech stack, goals, design theme)
- **Ground rules** (copy of section 1 above, so no agent ever "forgets" and starts inventing content)
- **Data provided so far** (resume status, links provided, projects provided, etc. — or pointers to where they're stored in the repo, e.g. `/data/profile.json`)
- **Implementation plan** (see Section 5) with checkboxes per section/task
- **Current status** — what's done, what's in progress, what's blocked and why (e.g., "blocked: waiting for 3rd project description")
- **Decisions log** — any design/technical decisions made and why (e.g., "chose in-memory contact form store, swappable to DB later via adapter pattern")
- **Next steps** — exactly what the next agent session should pick up

**Update `AGENTS.md` after every meaningful chunk of work** (end of each section, or before context/tokens might run out). Any new agent picking up this project must be able to read `AGENTS.md` alone and continue without me re-explaining anything.

---

## 3. Design Direction

- **Theme:** Dark/black background as the primary base, with **neon green/cyan** as the accent color palette (a clean "developer/matrix" aesthetic — think terminal-inspired but polished and professional, not gimmicky or hard to read).
- **Typography:** Choose a professional, dev-friendly font pairing yourself (e.g., a clean sans-serif for body + a slightly technical/monospace accent font for code snippets, section labels, or headings) — use your best judgment as a senior UI dev.
- **Responsiveness:** Mobile-first, fully responsive using Tailwind CSS breakpoints. Every section must look great from small phones up to large desktops.
- **Animation & Interaction:** Use your best professional judgment on the animation approach (Framer Motion, GSAP, native CSS transitions, or a mix) — prioritize smooth scroll reveals, subtle hover/tap micro-interactions, and a premium feel without harming performance or accessibility (respect `prefers-reduced-motion`).
- **Overall bar:** This should feel like a premium, memorable, "wow" portfolio — the kind that stands out to recruiters and hiring managers, not a generic bootcamp template. Every scroll and click should feel intentional and smooth.
- **SEO:** Fully optimize meta tags, Open Graph tags, semantic HTML, and structured data (e.g., `Person` schema) so the portfolio is discoverable when recruiters search my name + "software developer" + my tech stack.

---

## 4. Content I Will Provide (Do Not Fabricate)

I will supply the following over the course of this build — ask for whichever is missing when you reach the relevant section:

- Resume (PDF upload — I'll upload it when you tell me where/how)
- Education details (from photocopies/documents I'll describe or upload)
- Project details (name, description, tech stack, my role, GitHub repo links, and later live demo links as projects get deployed)
- Work experience details
- LinkedIn URL
- GitHub URL
- LeetCode URL and any other coding platform URLs (e.g., HackerRank, Codeforces, GFG)
- Gmail / contact email
- Full list of technologies/skills I know
- Certifications / achievements
- Any other detail needed to complete a section

**Note on projects:** For now, project cards should link out to GitHub repos. Build the project card component so that a **live demo link can be added later without restructuring** (e.g., conditionally render a "Live Demo" button only if a demo URL exists in the data).

---

## 5. Implementation Plan — Deliver This First

Before writing any code, produce an **implementation plan broken into clear sections**, and go through it with me section by section (I will confirm/provide details for each before you proceed to build it). Suggested section breakdown (adjust as you see fit, but keep it section-based):

1. **Project audit & setup review** — confirm current state of the Vite+React+TS project, folder structure, Tailwind config
2. **Design system** — colors, typography, spacing, component tokens (Tailwind config + reusable UI primitives)
3. **Global layout & navigation** — header/nav, smooth-scroll or routing structure, footer
4. **Hero / About section**
5. **Skills / Technologies section**
6. **Projects section** (with placeholder-media strategy, GitHub-link-first, demo-link-ready structure)
7. **Experience section**
8. **Education section**
9. **Certifications / Achievements section**
10. **Coding stats widget** (LeetCode + GitHub stats — via cards/embeds/API as appropriate)
11. **Resume download button** (linked to uploaded PDF)
12. **Get in Touch / Contact section** — build with an **abstracted data layer**: implement **in-memory storage now**, structured so it can be swapped for a real database later with minimal refactor (e.g., a simple storage interface/service you can later re-implement against a DB)
13. **SEO & meta tags / structured data**
14. **Animations & micro-interactions pass**
15. **Responsiveness & accessibility QA pass**
16. **AGENTS.md finalization & handoff notes**
17. **Deployment prep** (deployment target is **TBD** — keep build/config platform-agnostic; do not hard-code assumptions for Vercel/Netlify/GitHub Pages specifically until I decide)

For each section: ask me for the specific details/content needed for that section before implementing it, implement it, then update `AGENTS.md` before moving to the next.

---

## 6. Kickoff

Start by:
1. Reviewing the current project structure and confirming what already exists.
2. Creating the initial `AGENTS.md` file with the ground rules, plan, and an empty status/decisions log.
3. Presenting me the Section-by-section implementation plan (Section 5 above, refined based on your project audit) and asking me for the details you need for **Section 1 (project audit)** and **Section 2 (design system)** first.

Do not proceed past planning until I confirm.
