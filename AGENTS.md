# AGENTS.md — Shirisha's Portfolio (Single Source of Truth)

> **Any agent picking up this project must read this file first before making any change.**

---

## Project Overview

| Field | Value |
|---|---|
| **Project name** | Shirisha's Portfolio |
| **Stack** | React 19 + Vite 8 + TypeScript 6 |
| **Styling** | Tailwind CSS + Custom Neon Cyber Design System |
| **Animation** | Framer Motion + Monospace Typewriter + CSS Infinite Marquee |
| **Design theme** | Dark background (`#050A0A`) · Neon green/cyan accents (`#00FF88` / `#00D4FF`) · Built to v2 Upgrade Spec |
| **Goal** | Ultra-high-level 10+ year experience aesthetic, recruiter-facing developer portfolio |
| **Deployment target** | Vercel / Render platform-agnostic |

---

## Ground Rules (Non-Negotiable)

1. **Do not assume or invent personal content.** All resume text, education, project descriptions, experience, links, tech, achievements — must come directly from Shirisha.
2. If any information is missing for a section, **stop and ask explicitly**. Never fabricate placeholder facts (company names, dates, metrics, testimonials).
3. Structural/lorem-ipsum placeholders are OK *only* for layout scaffolding — mark them `// TODO: awaiting real content` in code and replace the moment real data arrives.
4. For project images/videos: source royalty-free representative images (Unsplash, official tech logos) **only** when Shirisha doesn't provide her own. Tag clearly as `{/* PLACEHOLDER MEDIA: replace with real deployment screenshot */}`.
5. Never silently make product decisions on Shirisha's behalf for things she said she'll provide — wait for her input.

---

## Data Provided So Far

| Item | Status |
|---|---|
| Roles / Title | ✅ Software Engineer, Full Stack Developer, Problem Solver, AI Enthusiast |
| Profile Avatar | ✅ Stylized Studio Ghibli / Cyber Developer Avatar (`public/avatar.png`) |
| Hero Background | ✅ Cinematic Dark Atmosphere Background (`public/hero_bg.png`) |
| Education | ✅ B.Tech CSE (2021 — 2025), Rajiv Gandhi University of Knowledge Technologies (RGUKT Basar) |
| Technologies & Tools | ✅ 23 Technologies grouped by category (*Languages*, *Frontend*, *Backend*, *Tools & AI*) |
| GitHub URL | ✅ `https://github.com/Shirisha-Mangali` |
| LinkedIn URL | ✅ `https://www.linkedin.com/in/shirisha-mangali-7242512b0/` |
| LeetCode URL | ✅ `https://leetcode.com/u/shirisha_m/` |
| Email | ✅ `shirisha1862@gmail.com` |
| Resume Link | ✅ `/resume.pdf` (Uploaded official `Shirisha_Resume1.pdf` to `public/resume.pdf`) |
| Live Applications | ✅ RGUKT CampusMate (`https://rgukt-campusmate.onrender.com`), React Stripe (`https://reactstripepoc.onrender.com`) |

*Data files are stored in `/src/data/profile.ts`.*

---

## Implementation Plan v2 (with Status)

- [x] **Section 1** — Project audit & setup review *(Complete)*
- [x] **Section 2** — Design system (Tailwind CSS, Framer Motion, layout primitives) *(Complete)*
- [x] **Section 3** — Global layout & navigation (Floating Bottom Dock + Top Header + Scroll Progress Line) *(Complete)*
- [x] **Section 4** — Hero section (Typewriter monospace effect, neon drip resume button, social icons, avatar card) *(Complete)*
- [x] **Section 5** — Skills section ("The building blocks I know." categorized grid + mobile marquee) *(Complete)*
- [x] **Section 6** — Experience section ("Professional Journey" Quest Map & directive card) *(Complete)*
- [x] **Section 7** — Projects section (Case-study cards with problem framing, metrics & repo links) *(Complete)*
- [x] **Section 8** — About section (Developer workstation terminal & engineering metrics grid) *(Complete)*
- [x] **Section 9** — Education section (Vertical Neon Timeline with RGUKT Basar B.Tech details) *(Complete)*
- [x] **Section 10** — Contact section (Two-Pane Terminal Handshake with real-time validation) *(Complete)*
- [x] **Section 11** — Power UX (Cmd+K Command Palette Modal & Custom Neon Glow Cursor) *(Complete)*
- [x] **Section 12** — Official Resume PDF upload from Shirisha & final deployment audit *(Complete)*

---

## Current Status

**Phase:** v2 Portfolio Implementation 100% Complete 🎉  
**What's done:** Full v2 Upgrade completed! All 12 sections implemented, including official resume PDF sync (`public/resume.pdf` & `public/Shirisha_Resume1.pdf`), Typewriter Hero, Cmd+K Command Palette, Top Scroll Progress Line, Categorized Tech Stack Grid, RGUKT Basar Education Timeline, and Terminal Handshake Contact section.  
**Next Step:** Ready for deployment or live build review!
