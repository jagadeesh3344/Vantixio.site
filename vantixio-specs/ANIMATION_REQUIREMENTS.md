# VANTIXIO ANIMATION & INTERACTION SPECIFICATION
*Batch 01: Screens 01–05*

---

## 1. SCROLL ENGINE & CAMERA TIMELINE ARCHITECTURE

- **Scroll Physics**: Lenis Smooth Scroll integrated with GSAP ScrollTrigger.
  - Smoothness: `duration: 1.2`, `easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))`.
- **Canvas Staging**: Single persistent fullscreen Three.js canvas (`fixed`, `inset: 0`, `z-index: 1`) with DOM UI overlay layers (`position: relative`, `z-index: 10`, `pointer-events: none` on containers, `pointer-events: auto` on interactive components).

---

## 2. CAMERA CHOREOGRAPHY (THREE.JS / PERSPECTIVE CAMERA)

| Section | Camera Position [x, y, z] | LookAt Target [x, y, z] | FOV | Focal Focus & Mood |
| :--- | :--- | :--- | :--- | :--- |
| **01 The Beginning** | `[-1.2, 0.4, 4.5]` | `[1.0, 0.2, 0.0]` | 42° | Hero ring on right, left space for headline |
| **02 Our Philosophy** | `[0.0, 0.8, 5.2]` | `[-0.5, 0.5, 0.0]` | 45° | Wide upward sky tilt framing sweeping ribbon |
| **03 What We Do** | `[0.0, 0.2, 6.0]` | `[0.0, 0.0, 0.0]` | 40° | Panoramic eye-level framing radial monolith cards |
| **04 What We Build** | `[0.8, 0.6, 4.8]` | `[0.6, 0.4, 0.0]` | 38° | Isometric 3/4 angle on tablet & phone |
| **05 Our Process** | `[-0.5, 0.3, 5.0]` | `[0.8, 0.2, 0.0]` | 42° | Right-weighted framing for Infinity loop |
| **06 Our Products** | `[0.9, -0.2, 4.6]` | `[0.3, 0.1, 0.0]` | 44° | Low-angle, steep receding perspective on monoliths |
| **07 Our Technology** | `[-0.4, 0.3, 5.0]` | `[0.7, 0.2, 0.0]` | 40° | Balanced framing for 3-tier chip stack & orbital nodes |
| **08 AI & Automation** | `[0.0, 0.5, 4.8]` | `[0.0, 0.4, 0.0]` | 42° | Symmetrical hero focus on floating neural brain & pedestal |
| **09 UI/UX & Creative** | `[-0.6, 0.4, 5.2]` | `[0.5, 0.3, 0.0]` | 40° | Isometric design studio canvas framing |
| **10 Our Work** | `[0.0, 0.2, 5.6]` | `[0.0, 0.2, 0.0]` | 44° | Panoramic wide cover-flow framing with metrics strip |
| **11 The Difference** | `[0.0, 0.4, 5.0]` | `[0.0, 0.3, 0.0]` | 42° | Symmetrical monumental framing on glass 'V' sculpture |
| **12 About Vantixio** | `[-0.8, 0.2, 5.8]` | `[0.8, 0.5, 0.0]` | 45° | Dramatic 3/4 perspective on architectural studio facade |
| **13 Let's Create** | `[-0.5, 0.0, 4.6]` | `[0.6, 0.1, 0.0]` | 40° | Warm interior conference room eye-level framing |
| **14 The Next Step** | `[0.0, 1.2, 6.2]` | `[0.0, 0.6, 0.0]` | 50° | Epic cosmic altitude framing summit silhouette & Earth |
| **15 Get in Touch** | `[0.0, 0.1, 5.0]` | `[0.0, 0.3, 0.0]` | 42° | Serene symmetrical dawn horizon framing with footer |

---

## 3. 3D SHADER & OBJECT TRANSFORMATION SPECIFICATION

### A. The Living Energy Ribbon / Mesh (Three.js Custom Shader)
- **Shader Pipeline**:
  - Vertex Shader: Deforms a tube / quad strip along a 3D Catmull-Rom Spline with simplex noise waving over time (`uTime * 0.4`).
  - Fragment Shader: Physically-based transmission simulation or Fresnel + chromatic dispersion shader:
    ```glsl
    // Conceptual Fresnel + Dispersion fragment logic
    float fresnel = pow(1.0 - max(dot(viewDir, normal), 0.0), 3.0);
    vec3 coreColor = mix(vec3(0.0, 0.05, 0.15), vec3(0.0, 0.94, 1.0), fresnel);
    vec3 rimGlow = vec3(0.36, 0.91, 1.0) * pow(fresnel, 5.0) * 2.5;
    gl_FragColor = vec4(coreColor + rimGlow, 0.85);
    ```

### B. Morphing Logic Across Scroll:
1. **Scene 01 to Scene 02**:
   - The closed spline of the Torus unzips its loop closure parameter (`uProgress: 0.0 -> 1.0`).
   - Spline control points lerp from circular loop coordinates to an expansive S-curve across the camera frustum.
2. **Scene 02 to Scene 03**:
   - The S-curve ribbon contracts into an elliptical orbit (`radiusX: 3.5, radiusZ: 1.8`).
   - 6 Glass Monolith instances emerge from `y: -3.0` up to `y: 0.0` with staggered ease (`elastic.out(1, 0.75)`).
3. **Scene 03 to Scene 04**:
   - The 6 Monoliths scale down and fade out (`opacity: 1 -> 0, scale: 0.8`).
   - 3D Tablet and Smartphone models rotate in from `rotationY: -45°` to `rotationY: -15°` with floating idle animation.
4. **Scene 04 to Scene 05**:
   - Tablet & Phone dissolve via particle disintegration or scale-down.
   - The orbital ribbon control points deform into a figure-eight Lemniscate of Bernoulli / Mobius strip geometry.
5. **Scene 05 to Scene 06**:
   - The Infinity loop unknots at its crossing point; its spline extrudes vertically into three separate rectangular paths forming the three glass product monoliths.
6. **Scene 06 to Scene 07**:
   - Monoliths scale down, rotate into the horizontal X-Z plane, and align vertically into the three-tiered processor stack (`y: [-0.3, 0.0, 0.3]`).
7. **Scene 07 to Scene 08**:
   - The chip stack flashes with an intense cyan beam; the base circular rings expand into the 3-tiered pedestal stage while particle emitters trace out the 3D neural brain gyri.
8. **Scene 08 to Scene 09**:
   - Brain particles dissolve into smooth cubic spline paths; three glass artboard planes swing forward with a subtle page-flip rotation.
9. **Scene 09 to Scene 10**:
   - Artboard vector graphics transition into live UI mockups (mobile app for YesDhobi, dashboard for Dhobicare, POS for Theka) as the deck arranges into a 3D cover-flow layout.
10. **Scene 10 to Scene 11**:
   - The 3D cover-flow deck drops downward beneath the water line with smooth damping; the circular glass pedestal rises from `y: -2.0` to `y: 0.0`, and the 3D Glass 'V' descends with a gentle oscillation before locking into the central receptacle.
11. **Scene 11 to Scene 12**:
   - Camera sweeps right; ground plane transitions from lake ripples to wet architectural stone tiles. The two-story studio facade fades in with sequential illumination of interior light meshes.
12. **Scene 12 to Scene 13**:
   - Camera tracks forward through the glass boundary into the team room. The ceiling halo light pulses gently, and the 4-step collaboration rail below illuminates sequentially from left to right.
13. **Scene 13 to Scene 14**:
   - High-velocity upward vertical camera tween (`y: 0.0 -> 8.0, z: 4.6 -> 6.2`) simulating an orbital atmospheric breakout. Earth sphere rotates into view beneath the colossal Stargate 'V' portal.
14. **Scene 14 to Scene 15**:
   - Camera smoothly glides down to eye-level at the volcanic horizon. The dawn light beam intensifies, lighting up the central Vantixio wordmark, while the master footer slides into view below.

---

## 6. BATCH 03 SPECIFIC SHADER & INTERACTION SPECIFICATIONS

### A. Earth Curvature & Atmospheric Rim Shader (Screen 14)
- **Geometry**: High-segment UV Sphere (`radius: 4.0`).
- **Shader Pipeline**:
  - Night Texture: High-res dark Earth with glowing golden city light emission map (`vec3 cityGlow = texture2D(uCityLights, vUv).rgb * 2.2;`).
  - Atmosphere: Two-pass Fresnel rim shader (`pow(1.0 - max(dot(viewDir, normal), 0.0), 4.0) * vec3(0.0, 0.7, 1.0)`).
  - Clouds: Subtle semi-transparent rotating cloud layer (`uTime * 0.01`).

### B. Glass Stargate 'V' Portal Shader (Screen 14)
- Massive extruded 'V' geometry rendered with high transmission, chromatic aberration, and a volumetric light shaft emitting through the open apex.

### C. Sequential Collaboration Rail Timeline (Screen 13)
- An animated SVG path connector draws from step 1 (`Discover`) through step 4 (`Scale`) using `stroke-dashoffset` driven by GSAP ScrollTrigger, highlighting each circle node as the line touches it.

### D. Master Footer Reveal & Sticky Horizon
- Pinning the Screen 15 section at `end: "+=100%"` to allow the visitor to absorb the final call to action before the master footer scrolls smoothly into resting position.

---

## 5. BATCH 02 SPECIFIC INTERACTION & SHADER SPECIFICATIONS

### A. Neural Synapse Pulse Shader (Screen 08)
- Employs a custom vertex/fragment shader on the brain mesh.
- A spherical distance wave `fract(uTime * 0.5 - distance(vPosition, center))` drives the emission intensity, sending recurring electrical bursts outward from the internal Vantixio glyph through the cortical folds.

### B. Cover-Flow 3D Deck Physics (Screen 10)
- Uses GSAP Observer or Swiper 3D coverflow effect:
  - Center active card: `translateZ: 100px`, `rotateY: 0deg`, `scale: 1.15`, `opacity: 1.0`.
  - Left card: `translateX: -380px`, `translateZ: -120px`, `rotateY: 35deg`, `scale: 0.85`, `opacity: 0.65`.
  - Right card: `translateX: 380px`, `translateZ: -120px`, `rotateY: -35deg`, `scale: 0.85`, `opacity: 0.65`.
- Interactive keyboard arrow keys (`ArrowLeft`, `ArrowRight`) and drag swipe listeners smoothly tween the active index.

### C. Animated Metric Counters (Screen 10)
- On ScrollTrigger trigger `top 80%`:
  - `10+` products: counts from 0 to 10 in 1.4s (`roundProps: "textContent"`).
  - `100K+` users: counts from 0 to 100 with `K+` suffix.
  - `99.9%` uptime: counts from 90.0 to 99.9 with `%` suffix.
  - `5M+` transactions: counts from 0 to 5 with `M+` suffix.

---

## 4. DOM UI & MICRO-INTERACTION SPECIFICATIONS

### A. Kinetic Typography
- Split text reveal using GSAP (`SplitType` or `split-text`):
  - On section entry: Words/characters slide up from `y: 40px`, `opacity: 0`, `filter: blur(8px)` to `y: 0px`, `opacity: 1`, `filter: blur(0px)` with `stagger: 0.025s`.
  - The cyan italic text receives an animated shimmer gradient: `background: linear-gradient(90deg, #00f0ff, #ffffff, #00f0ff); background-size: 200%; animation: shimmer 4s infinite;`.

### B. Mouse Parallax & Inertia
- Window `mousemove` coordinates normalized to `[-1, 1]`.
- Subtle camera offset lerping:
  `camera.position.x += (mouseX * 0.2 - camera.position.x) * 0.05`
  `camera.position.y += (-mouseY * 0.15 - camera.position.y) * 0.05`
- 3D objects tilt slightly toward cursor for tactile depth.

### C. Glass Card Hover Feedback
- Monoliths (Screen 03) and Carousel Cards (Screen 04):
  - Magnetic cursor attraction or spotlight card reflection (CSS `--mouse-x`, `--mouse-y` driving radial gradient overlay).
  - Hover triggers scale `1.03`, border glow intensification, and subtle elevation shift.

### D. Process Node Pinning (Screen 05)
- The 5 stage pills on the left (`Discover`, `Design`, `Build`, `Launch`, `Scale`) are synchronized with the 3D nodes on the Infinity loop.
- Clicking or hovering a step highlights the respective 3D node and causes an energy pulse to traverse the Mobius loop to that coordinate.

