---
name: gta-style
description: 'Enforces Grand Theft Auto-inspired visual style for this app''s UI. Use when writing or reviewing any component, page, or CSS in this repo, especially when adding text, buttons, cards, dialogs, or other UI elements. Ensures bold/large typography and hard, rectangular edges (no border-radius) consistent with GTA-style HUD/menu aesthetics.'
---

# GTA Style

## When to Use
- Writing or editing any UI component, page, or Tailwind class list in this repo
- Adding or reviewing text (titles, labels, descriptions, buttons, tooltips)
- Adding or reviewing containers, cards, dialogs, inputs, or images

## Rules

1. **Bold, oversized typography.** Prefer `font-bold` / `font-extrabold` over `font-normal` / `font-medium`. Prefer larger size steps than a typical web app would use (e.g. `text-lg`/`text-xl` instead of `text-sm`/`text-base` for body copy, `text-3xl`+ for titles/headings). Uppercase tracking-wide labels (e.g. `uppercase tracking-wide`) are encouraged for HUD-like tags (tooltips, badges, pills).
2. **No rounded corners.** Never use `rounded`, `rounded-md`, `rounded-lg`, `rounded-xl`, `rounded-full`, etc. on UI surfaces (cards, buttons, dialogs, inputs, badges, images, tooltips). Everything should be sharp rectangles — use `rounded-none` explicitly if a base component defaults to rounded corners.
3. **Apply consistently.** When editing shared components under `components/ui/`, remove/override any `rounded-*` classes and bump font-weight/size instead of leaving inconsistent styling across the app.

## Procedure
1. When touching a component with text, check its className for weight/size utilities and increase them per rule 1.
2. When touching a component with a border/background container, check for `rounded-*` classes and remove them (or set `rounded-none`) per rule 2.
3. Prefer editing existing className strings in place; don't introduce new wrapper elements just to apply these styles.
