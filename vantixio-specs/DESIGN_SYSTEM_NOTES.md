# VANTIXIO DESIGN SYSTEM & VISUAL SPECIFICATION
*Version 1.0 — Initialised with Batch 01 (Screens 01–05)*

---

## 1. BRAND IDENTITY & CORE ARCHITECTURE

- **Brand Name**: VANTIXIO®
- **Tagline / Philosophy**: "Ideas into Impact" / "Create / Build / Scale" / "We turn ambitious ideas into digital reality."
- **Core Domain**: Enterprise software, SaaS platforms, high-performance web & mobile applications, AI & automation, cloud infrastructure, and immersive digital product engineering.
- **Aesthetic Philosophy**: Scandinavian-nocturnal cybernetics meets high-end industrial design (inspired by igloo.inc). Monolithic, atmospheric, glassmorphic, and continuous spatial storytelling.

---

## 2. COLOR PALETTE

```css
:root {
  /* Background Universe */
  --bg-deep-space: #020712;
  --bg-void-black: #010409;
  --bg-abyss-blue: #040d1a;
  --bg-mountain-dark: #070d18;

  /* Primary Luminescence (Cyan/Electric Blue) */
  --accent-cyan-core: #00f0ff;
  --accent-cyan-glow: #00d2ff;
  --accent-cyan-light: #5eead4;
  --accent-cyan-muted: rgba(0, 240, 255, 0.15);
  --accent-cyan-border: rgba(0, 240, 255, 0.35);

  /* Secondary & Atmospheric Accents */
  --accent-ice-blue: #38bdf8;
  --accent-royal-blue: #1d4ed8;
  --accent-deep-cobalt: #0a2540;

  /* Neutral Spectrum */
  --text-primary: #ffffff;
  --text-secondary: #94a3b8;
  --text-muted: #64748b;
  --text-subtle: #475569;

  /* Glassmorphism & UI Surfaces */
  --glass-surface-bg: rgba(6, 18, 36, 0.45);
  --glass-surface-hover: rgba(14, 34, 66, 0.65);
  --glass-border: rgba(56, 189, 248, 0.2);
  --glass-border-active: rgba(0, 240, 255, 0.6);
  --glass-inner-bevel: inset 0 1px 1px 0 rgba(255, 255, 255, 0.2);
  --glass-blur: blur(16px);
}
```

---

## 3. TYPOGRAPHY SYSTEM

- **Primary Display Font**: Space Grotesk / Aeonik / Syne / Plus Jakarta Sans (Modern geometric sans with distinctive technical cuts).
- **Secondary Body Font**: Inter / Satoshi / Plus Jakarta Sans (High legibility, neutral grotesk).
- **Monospace/Micro-caps**: JetBrains Mono or Space Mono (Used for kickers, indicators, e.g., `01 / 15`, `WHAT WE DO`).

### Hierarchy:
1. **Hero Display (H1)**: `clamp(2.5rem, 5vw, 4.5rem)` | Weight: 400 (light-normal) with key words in Italic 600 Cyan (`font-style: italic; color: var(--accent-cyan-core);`).
2. **Section Headings (H2)**: `clamp(2rem, 3.8vw, 3.5rem)` | Weight: 400 with cyan highlight.
3. **Category Kickers**: `0.75rem - 0.85rem` | Weight: 600 | Uppercase with letter spacing `0.2em - 0.3em` (`letter-spacing: 0.25em`). Often paired with a subtle horizontal rule or pill.
4. **Body Copy**: `1.0rem - 1.15rem` | Line-height: 1.6 | Color: `var(--text-secondary)`. Max-width: 480px–540px for optimal reading against dynamic 3D backdrops.
5. **Labels & Micro-UI**: `0.75rem - 0.875rem` | Weight: 500 | Clean sans.

---

## 4. UI COMPONENTS SPECIFICATION

### A. Global Navigation Header
- **Position**: Fixed top (`top: 0; left: 0; width: 100%; z-index: 100;`).
- **Layout**: 3-zone flex container:
  - **Left**: Vantixio Logo mark (multi-faceted cyan chevron/V) + `VANTIXIO®` logotype in white bold geometric sans.
  - **Right**:
    - Nav links: `Work`, `Services`, `About` (horizontal row, subtle hover underline/glow).
    - Primary Action: Pill button `Start a Project ↗` (translucent cyan border, rounded-full, glowing backdrop).
    - Mobile/Full Menu: Circular hamburger button (3 clean horizontal rules, rounded circle with border).

### B. Vertical Progress Indicator (Left Rail)
- **Position**: Fixed left (`left: 2rem; top: 50%; transform: translateY(-50%); z-index: 90;`).
- **Structure**:
  - Step counter: `01 / 15` (or batch indicator `01 / 05`) with label below (e.g., `The Beginning`, `Our Philosophy`).
  - Vertical tracker line: 1px subtle track line with circular dot nodes representing sections.
  - Active node: Glowing cyan circle with scale transform and pulse effect.

### C. Scroll-to-Explore Indicator (Bottom Center)
- **Position**: Fixed/Absolute bottom center (`bottom: 2rem; left: 50%; transform: translateX(-50%); z-index: 90;`).
- **Elements**: Minimal mouse outline SVG with animated scrolling wheel/dot, micro-caps label `SCROLL TO EXPLORE`, and down chevron `∨`.

### D. Glassmorphic Cards & Monoliths
- **Structure**: Translucent dark slate background (`rgba(6, 18, 36, 0.45)`), 1px gradient border with bright cyan highlights at top/left edges, backdrop-filter blur (16px–24px).
- **Active State**: Inner radial cyan glow, bright border (`rgba(0, 240, 255, 0.7)`), subtle vertical float translation (-6px to -10px).
- **Typography & Icons**: Minimalist stroke icons (24px–32px), crisp white titles, soft grey descriptions.

### E. Interactive Tabs / Switchers
- **Pill Switcher**: Horizontal flex bar with pill-shaped buttons.
  - Active button: Solid glowing border, cyan tint background, luminous icon.
  - Inactive button: Muted text, transparent background, faint border on hover.

### F. Tech Stack & Discipline Tickers (Screens 07 & 09)
- **Position**: Horizontal bottom strip (`bottom: 3rem; width: 100%; display: flex; justify-content: center; gap: 3rem;`).
- **Item Structure**: 28px–32px SVG monochrome tech icon (React, Flutter, Node.js, Python, AWS, Docker, Firebase, etc.) with 0.8rem micro-label below.
- **States**: Default opacity 0.5; on hover, opacity 1.0 with subtle cyan icon glow and `translateY(-3px)`.

### G. Pinned 3D Badge Nodes (Screens 07 & 08)
- **Positioning**: Anchored in 3D coordinate space via Drei `Html` or Three.js `CSS2DObject`.
- **Anatomy**: Frosted rounded pill (`border-radius: 12px; background: rgba(6, 18, 36, 0.65); border: 1px solid rgba(0, 240, 255, 0.4);`).
- **Content**: Left icon container (20px cyan stroke), bold title, and optional micro-description text below. Dotted 1px cyan connector line running towards the 3D focal object.

### H. 3D Cover-Flow Case Study Cards (Screens 06 & 10)
- **Layout**: CSS 3D / Three.js interactive carousel with center hero card scaled 1.15x–1.2x.
- **Surface**: Curved dark glass with edge bevels, internal UI preview mockup (mobile phone or desktop dashboard), title, and direct CTA pill (`View Case Study ↗`).
- **Pagination**: Centered dot indicator with left/right circular arrow buttons (`← ••••• →`).

### I. Enterprise Metrics Bar (Screen 10)
- **Position**: Fixed/Absolute along bottom (`bottom: 2.5rem; width: 100%; max-width: 1200px; margin: 0 auto;`).
- **Layout**: 5-column flex container with equal spacing.
- **Item**: 24px cyan stroke icon, large bold stat number (`clamp(1.5rem, 2.5vw, 2.2rem)`), soft grey label below (`Products Built`, `Active Users`, `Uptime`, `Transactions`, `Industries`).

### J. Dual Action CTA Group (Screens 13, 14, 15)
- **Layout**: Inline-flex cluster with `gap: 1.25rem; align-items: center;`.
- **Primary Button**: `Start a Project ↗`
  - Shape: Rounded-full pill (`padding: 0.85rem 2.2rem;`).
  - Background: Gradient `linear-gradient(135deg, rgba(0, 240, 255, 0.9), rgba(0, 180, 255, 0.7))`.
  - Color: Deep dark navy (`#010409`), font-weight: 600.
  - Hover: Box-shadow `0 0 24px rgba(0, 240, 255, 0.6)`.
- **Secondary Button**: `Schedule a Call`
  - Shape: Rounded-full pill with 1px border `rgba(255, 255, 255, 0.25)`.
  - Icon: SVG calendar stroke icon on left (18px).
  - Background: `rgba(6, 18, 36, 0.45)` with `backdrop-filter: blur(12px)`.
  - Color: Pure white, font-weight: 500.
  - Hover: Border color `rgba(0, 240, 255, 0.6)`, color: `var(--accent-cyan-core)`.

### K. Collaboration Process Rail (Screen 13)
- **Layout**: Full-width horizontal sequence with four numbered steps connected by directional chevrons (`→`).
- **Step Item**: Circle node with bold step number (`1`, `2`, `3`, `4`), bold title (`Discover`, `Strategy`, `Build`, `Scale`), and subtitle below.
- **Animation**: Sequential cyan light wave traveling across the rail.

### L. Master Enterprise Footer (Screen 15)
- **Layout**: Semantic `<footer>` with two distinct tiers:
  - **Tier 1 (Main Columns)**: 5-column CSS grid:
    1. Brand summary & description (2fr)
    2. Explore links (1fr)
    3. Services links (1fr)
    4. Contact info (email, phone, Hyderabad India) (1.2fr)
    5. Stay Connected social pills (1fr)
  - **Tier 2 (Legal Sub-footer)**: 1px top border `rgba(255, 255, 255, 0.1)`, flex row with copyright on left and legal links (`Privacy Policy`, `Terms of Service`, `Cookies`) on right.
- **Social Icon Pills**: Square-rounded pills (`width: 42px; height: 42px; border-radius: 10px; background: rgba(6, 18, 36, 0.6); border: 1px solid rgba(255, 255, 255, 0.15); display: flex; align-items: center; justify-content: center;`). Hover expands border with cyan glow.

