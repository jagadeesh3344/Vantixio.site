# VANTIXIO — NINE SCENE BOUNDARY TRANSITION SPECIFICATION

To ensure the website operates as one continuous film rather than 10 disconnected pages, this document specifies the camera movement, object transformation, lighting adjustments, and content reveal choreography across all 9 scene boundaries.

---

## Technical Transition Architecture

* **Continuous Tracking:** `continuousSection` is a floating-point progress value from `1.0` (Scene 01 center) to `10.0` (Scene 10 center).
* **Camera Spline:** Evaluated in `useFrame` via cubic Hermite smoothstep easing between adjacent `CAMERA_POSES`.
* **Spatial Object Weight:** For an object assigned to Scene $S$, its spatial presence is defined by distance $d = |\text{continuousSection} - S|$:
  $$\text{weight} = \text{clamp}(1 - d / 0.95, 0, 1)^2 \times (3 - 2 \times \text{clamp}(1 - d / 0.95, 0, 1))$$
  * Objects scale smoothly between `0.4` and `1.0`.
  * Objects float along a vertical trajectory: $y = \text{direction} \times (1 - \text{weight}) \times 0.9$.
  * Material transmission opacity and point light intensities scale proportionally with `weight`.

---

## Detailed Specifications for All 9 Scene Boundaries

### Boundary 01 → 02 (The Beginning → Our Philosophy)
* **Scroll Range:** `1.0` to `2.0` (Midpoint: `1.5`)
* **Camera Starting Position:** `[-1.2, 0.4, 4.6]` (Target: `[0.9, 0.2, 0.0]`, FOV: `42°`)
* **Camera Ending Position:** `[0.0, 0.7, 5.0]` (Target: `[-0.6, 0.4, 0.0]`, FOV: `44°`)
* **Camera Movement:** Camera tracks right and ascends slightly, swinging focal orientation from the right-hand Torus over to the left-hand negative space.
* **3D Transformation:** The hero Torus gracefully dissolves and floats upwards while its inner ribbon uncoils. The sweeping Philosophy Aurora ribbon rises smoothly from below, undulating into the upper sky.
* **Lighting:** Key light softens from high-specular spotlight to broad atmospheric fill (`#819AB8`).
* **DOM Reveal:** Scene 01 copy fades out upwards at `1.25`; Scene 02 Philosophy kicker and 3 pillar cards fade in at `1.45`.
* **Mobile Fallback:** Camera centers at `x: 0`, ribbon scales to `0.75` to prevent text occlusion.

---

### Boundary 02 → 03 (Our Philosophy → What We Do)
* **Scroll Range:** `2.0` to `3.0` (Midpoint: `2.5`)
* **Camera Starting Position:** `[0.0, 0.7, 5.0]` (Target: `[-0.6, 0.4, 0.0]`, FOV: `44°`)
* **Camera Ending Position:** `[0.0, 0.2, 5.8]` (Target: `[0.0, 0.0, 0.0]`, FOV: `40°`)
* **Camera Movement:** Camera pulls back along the Z-axis and descends to eye-level, framing a symmetric central amphitheater.
* **3D Transformation:** Philosophy ribbon contracts into an orbital ring encircling the emerging 6 capability crystal monoliths.
* **Lighting:** Central point light intensifies at `[0, 0, 0.3]` to highlight the hero AI & Engineering monolith.
* **DOM Reveal:** Philosophy pillars fade at `2.3`; What We Do headline and 6 capability cards slide in with staggered opacity from `2.4` to `2.7`.
* **Mobile Fallback:** 6 cards arrange in a swipeable single-column grid; monoliths scale to `0.65`.

---

### Boundary 03 → 04 (What We Do → What We Build)
* **Scroll Range:** `3.0` to `4.0` (Midpoint: `3.5`)
* **Camera Starting Position:** `[0.0, 0.2, 5.8]` (Target: `[0.0, 0.0, 0.0]`, FOV: `40°`)
* **Camera Ending Position:** `[0.8, 0.5, 4.8]` (Target: `[0.6, 0.3, 0.0]`, FOV: `38°`)
* **Camera Movement:** Camera dollies forward and pans right, focusing closely on the hardware tablet viewport.
* **3D Transformation:** The 6 monoliths synthesize and morph into the precision chamfered glass tablet and companion phone.
* **Lighting:** Screen surface illumination activates, casting an ice-blue reflection onto the tablet bevels.
* **DOM Reveal:** Capability cards fade out at `3.25`; Product selector tabs and active product metrics fade in at `3.45`.
* **Mobile Fallback:** Tablet displays horizontally stacked above product descriptions.

---

### Boundary 04 → 05 (What We Build → Our Approach)
* **Scroll Range:** `4.0` to `5.0` (Midpoint: `4.5`)
* **Camera Starting Position:** `[0.8, 0.5, 4.8]` (Target: `[0.6, 0.3, 0.0]`, FOV: `38°`)
* **Camera Ending Position:** `[-0.5, 0.3, 5.0]` (Target: `[0.8, 0.2, 0.0]`, FOV: `42°`)
* **Camera Movement:** Camera sweeps smoothly to the left, angling back toward the right to observe the continuous process loop.
* **3D Transformation:** The hardware devices dissolve into an orbital line that unknots into the continuous 3D glass lemniscate pathway.
* **Lighting:** Milestone energy nodes pulse sequentially (1 through 6) in synchronization with scroll progress.
* **DOM Reveal:** Product dashboard fades at `4.3`; 6-stage process pathway indicators illuminate sequentially from `4.4` to `4.8`.
* **Mobile Fallback:** Process nodes collapse into a vertical progressive timeline rail.

---

### Boundary 05 → 06 (Our Approach → Engineering Intelligence)
* **Scroll Range:** `5.0` to `6.0` (Midpoint: `5.5`)
* **Camera Starting Position:** `[-0.5, 0.3, 5.0]` (Target: `[0.8, 0.2, 0.0]`, FOV: `42°`)
* **Camera Ending Position:** `[0.0, 0.4, 4.8]` (Target: `[0.0, 0.3, 0.0]`, FOV: `42°`)
* **Camera Movement:** Camera centers directly in front of the central silicon processor and neural core.
* **3D Transformation:** Lemniscate pathway contracts into the multi-layered crystal processor stack with embedded neural synapses.
* **Lighting:** Silicon bus traces illuminate with frost silver pulses; central AI crystal core begins rhythmic breathing glow.
* **DOM Reveal:** Approach pathway fades at `5.25`; Engineering & AI capabilities grid reveals smoothly at `5.45`.
* **Mobile Fallback:** Processor stack scales to `0.7` and sits above the unified capability accordion.

---

### Boundary 06 → 07 (Engineering Intelligence → Creative Studio)
* **Scroll Range:** `6.0` to `7.0` (Midpoint: `6.5`)
* **Camera Starting Position:** `[0.0, 0.4, 4.8]` (Target: `[0.0, 0.3, 0.0]`, FOV: `42°`)
* **Camera Ending Position:** `[-0.6, 0.35, 5.0]` (Target: `[0.5, 0.25, 0.0]`, FOV: `40°`)
* **Camera Movement:** Camera drifts left, angling right to inspect floating design artboards.
* **3D Transformation:** Silicon processor unfolds outward into 3 translucent frosted glass artboards with golden ratio curves and calipers.
* **Lighting:** High-specular edge lighting highlights vector bezier lines on the central artboard.
* **DOM Reveal:** Technology specs fade at `6.3`; Creative disciplines and design philosophy cards fade in at `6.45`.
* **Mobile Fallback:** Artboards scale to `0.6` with reduced layer depth.

---

### Boundary 07 → 08 (Creative Studio → A World of Possibilities)
* **Scroll Range:** `7.0` to `8.0` (Midpoint: `7.5`)
* **Camera Starting Position:** `[-0.6, 0.35, 5.0]` (Target: `[0.5, 0.25, 0.0]`, FOV: `40°`)
* **Camera Ending Position:** `[0.0, 0.2, 5.4]` (Target: `[0.0, 0.2, 0.0]`, FOV: `44°`)
* **Camera Movement:** Camera pulls back and levels horizontally, opening up panoramic width for the multi-industry showcase.
* **3D Transformation:** Artboards dissolve into a wide panoramic array of crystal monolith prisms representing diverse industries.
* **Lighting:** Broad panoramic ambient horizon glow (`#819AB8`) washes across all crystal prisms.
* **DOM Reveal:** Creative studio copy fades at `7.25`; Industry sectors and enterprise impact metrics fade in at `7.45`.
* **Mobile Fallback:** Single active industry card with horizontal scroll pills.

---

### Boundary 08 → 09 (A World of Possibilities → About Vantixio)
* **Scroll Range:** `8.0` to `9.0` (Midpoint: `8.5`)
* **Camera Starting Position:** `[0.0, 0.2, 5.4]` (Target: `[0.0, 0.2, 0.0]`, FOV: `44°`)
* **Camera Ending Position:** `[-0.7, 0.2, 5.6]` (Target: `[0.7, 0.4, 0.0]`, FOV: `45°`)
* **Camera Movement:** Camera drifts to the left side and tilts upward, framing the architectural glass studio pavilion.
* **3D Transformation:** Crystal monoliths recede as the two-story architectural glass studio headquarters emerges on its foundation.
* **Lighting:** Warm silver-blue interior floorplate illumination glows through the studio curtain walls.
* **DOM Reveal:** Industry metrics fade at `8.3`; Mission, vision, values, and Hyderabad studio cards reveal at `8.45`.
* **Mobile Fallback:** Pavilion centered behind corporate credentials card.

---

### Boundary 09 → 10 (About Vantixio → The Next Chapter)
* **Scroll Range:** `9.0` to `10.0` (Midpoint: `9.5`)
* **Camera Starting Position:** `[-0.7, 0.2, 5.6]` (Target: `[0.7, 0.4, 0.0]`, FOV: `45°`)
* **Camera Ending Position:** `[0.0, 0.2, 5.0]` (Target: `[0.0, 0.3, 0.0]`, FOV: `42°`)
* **Camera Movement:** Camera centers and rises slightly, framing the iconic signature glacier ribbon portal against the dawn horizon.
* **3D Transformation:** Architectural pavilion dissolves as the signature glacier-glass ribbon returns in an iconic closed-loop summit portal, with the faceted 'V' gleaming above Earth.
* **Lighting:** Climactic sunrise horizon beam radiates upward through the ribbon portal.
* **DOM Reveal:** About cards fade at `9.3`; Final CTA, project enquiry button, contact details, and master footer reveal at `9.45`.
* **Mobile Fallback:** Signature ribbon hovers cleanly above the project enquiry CTA button.

