# VANTIXIO — GLACIER VISUAL DESIGN SYSTEM

This specification establishes the official Arctic Blue / Glacier Silver design tokens, material physical parameters, atmospheric lighting formulas, and typography rules for the Vantixio digital experience.

---

## 1. Master Color Palette

| Token Name | Hex Code | RGB | Purpose & Usage |
|---|---|---|---|
| **Deep Glacier Shadow** | `#253B54` | `rgb(37, 59, 84)` | Maximum depth, darkest ambient shadows, contrast anchors |
| **Arctic Navy** | `#314A66` | `rgb(49, 74, 102)` | Dark background peripheries, modal surfaces, card foundations |
| **Primary Glacier Blue** | `#415C7A` | `rgb(65, 92, 122)` | Main background midtone, Three.js atmospheric fog anchor |
| **Steel Blue** | `#506A89` | `rgb(80, 106, 137)` | Ambient background gradients, subtle secondary borders |
| **Glacier Midtone** | `#597594` | `rgb(89, 117, 148)` | 3D environment shading, diffuse surface tint |
| **Ice Blue** | `#819AB8` | `rgb(129, 154, 184)` | Illuminated glass surfaces, interactive badges, kickers |
| **Frost Silver** | `#A1B6CF` | `rgb(161, 182, 207)` | Precision glass bevels, specular reflections, border highlights |
| **Glacier White** | `#D0DBE9` | `rgb(208, 219, 233)` | Secondary typography, high-clarity subheaders, key metrics |
| **Soft White** | `#F4F7FC` | `rgb(244, 247, 252)` | Primary display headlines, maximum contrast editorial text |

---

## 2. Atmospheric Background Architecture

Pure black (`#000000` / `#010409`) is strictly prohibited. The background is rendered as a responsive, multi-layered atmospheric gradient:

```css
:root {
  --glacier-shadow: #253B54;
  --arctic-navy: #314A66;
  --glacier-blue: #415C7A;
  --steel-blue: #506A89;
  --glacier-mid: #597594;
  --ice-blue: #819AB8;
  --frost-silver: #A1B6CF;
  --glacier-white: #D0DBE9;
  --soft-white: #F4F7FC;
}

body {
  background: radial-gradient(
    ellipse at 50% 25%,
    #819AB8 0%,
    #506A89 38%,
    #415C7A 70%,
    #314A66 100%
  );
  color: var(--soft-white);
  min-height: 100vh;
}
```

In Three.js, the scene fog is locked to the primary background color:
```tsx
<fog attach="fog" args={['#415C7A', 10, 42]} />
```
This ensures the 3D meshes recede naturally into the atmosphere without hard clipping horizons.

---

## 3. Glacier Glass Three.js Physical Material Hierarchy

All 3D objects inherit from the single **Glacier Material Family**:

### 3.1 Primary Glacier Glass (`MeshPhysicalMaterial`)
Used on hero ribbon, product slabs, and architectural elements.
* `color`: `#D0DBE9`
* `transmission`: `0.92` to `0.95`
* `roughness`: `0.06` to `0.10`
* `ior`: `1.52` (Crown glass refraction)
* `thickness`: `1.2`
* `reflectivity`: `0.90`
* `specularIntensity`: `1.4`
* `specularColor`: `#A1B6CF` (Frost silver specular highlight)
* `emissive`: `#314A66`
* `emissiveIntensity`: `0.25`

### 3.2 Frosted Ice Crystal (`MeshPhysicalMaterial`)
Used on secondary slabs, case-study tablets, and artboards.
* `color`: `#819AB8`
* `transmission`: `0.85`
* `roughness`: `0.18` (Frosted diffusion)
* `ior`: `1.48`
* `emissive`: `#506A89`
* `emissiveIntensity`: `0.35`

### 3.3 Luminous Core Conduit
Used on the internal 'V' wire, milestone nodes, and active circuit paths.
* `color`: `#D0DBE9`
* `emissive`: `#819AB8`
* `emissiveIntensity`: `1.8` to `2.4`
* `roughness`: `0.15`
* `metalness`: `0.75`

### 3.4 Polished Glacier Titanium (Chassis & Pedestals)
* `color`: `#253B54`
* `metalness`: `0.88`
* `roughness`: `0.22`

---

## 4. Lighting Environment

* **Ambient Light:** Color `#D0DBE9`, Intensity `0.65`. Provides gentle blue-grey baseline fill.
* **Key Directional Light:** Position `[6, 12, 8]`, Color `#F4F7FC`, Intensity `1.3`, castShadow enabled. Simulates high arctic sun.
* **Fill Directional Light:** Position `[-8, -4, -6]`, Color `#314A66`, Intensity `0.75`. Softens deep under-shadows.
* **Focal Accent Point Light:** Placed inside each scene's hero object core. Color `#A1B6CF`, Intensity `2.5` to `3.5`, Distance `8`.

---

## 5. Typography & Editorial Hierarchy

* **Display Font:** `Space Grotesk` / `Satoshi` (`font-display font-light tracking-tight`)
  * Size scale: Hero `text-4xl sm:text-6xl lg:text-7xl leading-[1.08]`, Section Headings `text-3xl sm:text-5xl lg:text-6xl leading-tight`.
  * Primary color: `text-[#F4F7FC]` (`Soft White`).
  * Editorial highlight: `italic font-normal text-[#D0DBE9]` with subtle frost specular shadow.
* **Body Font:** `Inter` / `Plus Jakarta Sans` (`font-normal leading-relaxed`)
  * Size: `text-sm sm:text-base lg:text-lg`.
  * Color: `text-[#D0DBE9]` (60% to 80% opacity).
* **Technical & Category Kickers:** `JetBrains Mono` (`font-mono uppercase tracking-[0.25em] text-xs font-semibold`)
  * Color: `text-[#A1B6CF]` (Frost Silver).
  * Accompanied by a 24px frost silver hairline accent: `<span className="w-6 h-[1px] bg-[#A1B6CF]" />`.

---

## 6. Glassmorphism UI Components

### 6.1 Frost Glass Panel (`.glass-panel`)
```css
.glass-panel {
  background: rgba(49, 74, 102, 0.40);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(161, 182, 207, 0.22);
  box-shadow: 0 12px 36px 0 rgba(37, 59, 84, 0.35);
}

.glass-panel:hover {
  background: rgba(80, 106, 137, 0.50);
  border-color: rgba(208, 219, 233, 0.45);
  box-shadow: 0 16px 44px -8px rgba(129, 154, 184, 0.25);
}
```

### 6.2 Primary Interactive Pill (`.btn-glacier-primary`)
```css
.btn-glacier-primary {
  background: linear-gradient(135deg, #A1B6CF 0%, #819AB8 100%);
  color: #253B54;
  font-weight: 600;
  box-shadow: 0 4px 20px rgba(161, 182, 207, 0.3);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.btn-glacier-primary:hover {
  background: linear-gradient(135deg, #D0DBE9 0%, #A1B6CF 100%);
  box-shadow: 0 6px 28px rgba(208, 219, 233, 0.45);
  transform: translateY(-1px);
}
```

