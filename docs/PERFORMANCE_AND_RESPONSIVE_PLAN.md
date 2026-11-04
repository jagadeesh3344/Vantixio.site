# VANTIXIO — PERFORMANCE & RESPONSIVE ARCHITECTURE SPECIFICATION

This document outlines the performance optimizations, framerate targets, WebGL budget, memory lifecycle rules, and responsive design strategies ensuring a 60 FPS cinematic experience across desktop, tablet, and mobile devices.

---

## 1. WebGL & Three.js Performance Architecture

### 1.1 Single Persistent Canvas Rule
* **Mandate:** Exactly ONE Three.js `<Canvas>` instance exists in the entire DOM lifecycle (`ExperienceCanvas.tsx`).
* **Canvas Settings:**
  ```tsx
  <Canvas
    shadows={false} // Avoid expensive shadow map passes on low-end GPUs
    dpr={[1, 1.75]} // Cap DPR at 1.75 to prevent 3x/4x mobile GPU thermal throttling
    gl={{
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
      stencil: false,
      depth: true,
    }}
  />
  ```

### 1.2 Selective Culling & Frustum Efficiency
* Objects outside their active scroll range ($d \ge 0.95$) are flagged with `visible = false` and `scale = 0.001`.
* When an object is flagged `visible = false`, Three.js skips:
  1. Matrix world transformations
  2. Geometry upload passes
  3. Fragment shader execution
  4. Transmission/refraction passes
* Consequently, at any point during user scrolling, **at most two scenes are actively calculated and rendered**, keeping draw calls under 35 and frame times under 12ms.

### 1.3 Material Reuse & Geometry Optimization
* Avoid per-frame recreation of geometries or textures. All curves (`CatmullRomCurve3`) and materials are memoized via `useMemo`.
* Geometries are optimized for reasonable polycounts (e.g. Torus: `36 x 100` segments, Cylinders: `36` to `48` radial segments, Tubes: `64` to `80` tubular segments).
* Dynamic 2D canvas texture for tablet analytics is rendered ONCE on mount, then reused as a static canvas texture rather than re-painting every frame.

---

## 2. Scroll Synchronization & React Re-render Prevention

### 2.1 Decoupled Ticker Architecture
* Lenis virtual scroll ticks run directly on the GSAP global ticker (`gsap.ticker.add`).
* `CameraController.tsx` reads `continuousSection` from React Context, but dampens it locally in `useFrame` using a mutable `useRef` scalar:
  ```ts
  smoothSection.current = THREE.MathUtils.lerp(
    smoothSection.current,
    continuousSection || 1,
    0.08
  );
  ```
* This ensures that small React re-renders never introduce micro-stutter into the Three.js RAF render loop.

### 2.2 Event Cleanup Lifecycle
* All window listeners (`resize`, `scroll`), Lenis instances, and GSAP ScrollTrigger instances are strictly registered and cleaned up in `useEffect` return callbacks to prevent memory leaks and zombie tickers.

---

## 3. Responsive Breakpoint Matrix

| Device Form Factor | Viewport Width | 3D Object Strategy | Camera Strategy | DOM Layout Adaptation |
|---|---|---|---|---|
| **Mobile Portrait** | `< 640px` | Objects scaled to `0.60x - 0.70x`, particle count reduced to 300, offset to top-center | Camera pulls back by `+0.8` on Z-axis, centered at `x = 0` | Single-column cards, full-width buttons, collapsible menus |
| **Mobile Landscape / Small Tablet** | `640px - 1024px` | Objects scaled to `0.80x`, repositioned with reduced lateral drift | Camera Z-offset `+0.4`, lateral target offset reduced | 2-column grids, compact padding |
| **Desktop / Wide Screen** | `> 1024px` | Full fidelity `1.0x` scale, full particle field (750), high specular transmission | Original cinematic choreography vectors | 12-column editorial layout, spacious typography |

---

## 4. Accessibility & Reduced Motion

* When `window.matchMedia('(prefers-reduced-motion: reduce)').matches` is active:
  * Lenis smooth scroll duration is disabled or reduced to immediate jump.
  * Camera position lerps instantly or uses minimal dampening (`0.3`).
  * Continuous floating/breathing oscillations in `useFrame` are paused.
  * All interactive elements retain high contrast, visible focus rings, and full keyboard navigation.

