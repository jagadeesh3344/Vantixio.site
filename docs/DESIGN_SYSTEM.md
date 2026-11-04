# VANTIXIO — DESIGN SYSTEM SPECIFICATION

## 1. Color Tokens

- **Void Black**: `#010409` (Ultimate background abyss)
- **Deep Space Navy**: `#020712` (Container and stage background)
- **Abyss Blue**: `#040D1A` (Card and modal surfaces)
- **Core Electric Cyan**: `#00F0FF` (Primary interactive highlight & glow)
- **Glow Cyan**: `#00D2FF` (Gradients and caustics)
- **Ice Blue**: `#38BDF8` (Secondary accents & borders)
- **Muted Cyan**: `rgba(0, 240, 255, 0.15)` (Active pills and badges)
- **Glass Border**: `rgba(56, 189, 248, 0.18)` (Frosted card edge bevels)
- **Active Glass Border**: `rgba(0, 240, 255, 0.6)` (Hover and selected states)

## 2. Typography Scale

- **Display Headings (H1/H2)**: `Space Grotesk` (Light 300 to Normal 400). Key phrases in Italic Cyan.
- **Body & UI**: `Plus Jakarta Sans` / `Inter` (Regular 400 to SemiBold 600).
- **Technical Micro-caps**: `JetBrains Mono` (Medium 500 with `tracking-[0.25em]`).

## 3. UI Component Anatomy

- **Glass Panels**: `background: rgba(6, 18, 36, 0.5); backdrop-filter: blur(16px); border: 1px solid rgba(56, 189, 248, 0.18);`
- **Primary Action Buttons**: Rounded-full pill with cyan-to-sky gradient, dark text, top-right arrow icon, and cyan box-shadow on hover.
- **Secondary Action Buttons**: Rounded-full pill with frosted dark glass, calendar/play icon, white text, and cyan border on hover.
- **Navigation Header**: Fixed top layout with faceted 'V' SVG icon, links, Start a Project pill, sound toggle, and circular menu button.
- **Vertical Timeline Rail**: Fixed left rail with 15 dot nodes, active section counter (`01 / 15`), section title, and hover tooltips.
- **Master Footer**: 5-column layout with brand statement, Explore links, Services links, Contact details (Hyderabad, India), social pills, and legal copyright bar.

