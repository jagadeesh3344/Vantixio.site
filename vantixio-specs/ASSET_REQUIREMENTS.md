# VANTIXIO ASSET & RESOURCE REQUIREMENTS
*Batch 01: Screens 01–05 Inventory*

---

## 1. 3D MODELS & PROCEDURAL GEOMETRIES

| Asset Name | Format / Generator | Usage | Complexity & Material Spec |
| :--- | :--- | :--- | :--- |
| **Glass Torus / Energy Ovoid** | Procedural Three.js Parametric Geometry or Blender GLTF | Screen 01 Hero | High transmission, low roughness (0.05), dispersion ~0.04, IOR 1.52. Inner swirling mesh. |
| **Energy Ribbon / Spline Mesh** | Extruded Spline / CatmullRomCurve3 with TubeGeometry | Screen 02 Philosophy, Screen 03/04 Orbit | Custom GLSL shader with vertex displacement & emissive Fresnel gradient. |
| **Glass Monoliths (6x)** | Rounded Box Geometry (`three-stdlib` or Blender) | Screen 03 Services | Frosted glass material (`roughness: 0.2`, `transmission: 0.9`), bevelled corners, emissive icon texture map. |
| **Floating Tablet Device** | GLB / Three.js Procedural Rounded Box | Screen 04 Portfolio | Ultra-thin dark matte aluminum frame, emissive screen texture (Vantixio live dashboard canvas/texture). |
| **Floating Smartphone Device** | GLB / Three.js Procedural Phone Model | Screen 04 Portfolio | Curved edge glass, metallic chassis, emissive screen showing Vantixio lockscreen. |
| **Glass Mobius / Infinity Loop** | Parametric Trefoil / Lemniscate 3D Tube Geometry | Screen 05 Process | Refractive glass material with 5 anchor coordinates for milestone badge sprites / HTML overlays. |
| **Glass Product Monoliths (3x)** | Rounded Box Geometry with internal fluid mesh | Screen 06 Products | High-transmission glass with interior undulating wave mesh for YesDhobi. |
| **3-Tier Glass Chip Processor** | 3 Layered Rounded Glass Boxes + Core 'V' | Screen 07 Technology | Exploded-view chip architecture, internal circuitry map, and central glowing 'V' emblem. |
| **3D Glass Neural Brain** | GLTF High-poly Brain Mesh + Shader | Screen 08 AI & Automation | Detailed sulci/gyri cortical mesh with custom synaptic pulse shader and inner 'V' core. |
| **Cylindrical Light Pedestal** | 3-tiered concentric glass cylinders | Screen 08 AI & Automation | Emissive cyan rim rings and vertical volumetric light cylinder. |
| **Glass Design Artboards (3x)** | Curved Plane Geometries with canvas textures | Screen 09 UI/UX & Creative | Frontal vector graphic handles, Figma-style toolbars, and spline waves. |
| **3D Case Study Curved Viewports** | Curved Glass Planes with embedded UI | Screen 10 Our Work | Cover-flow 3D deck displaying high-fidelity mobile app and dashboard mockups. |
| **3D Glass 'V' Monolith Sculpture** | Custom Extruded Polygonal 'V' Geometry | Screen 11 The Difference | High-transmission beveled glass with internal caustic ribbons and pedestal lock-mount. |
| **Architectural Studio Building Model** | Low-poly GLTF / Multi-layer 2.5D Matte Plane | Screen 12 About Vantixio | Two-story modern glass facade, interior office lighting meshes, stairs, and neon signs. |
| **Collaborative Studio Room Asset** | Multi-plane composite or textured box | Screen 13 Let's Create | Team conference setup with round oak table, halo light, laptops, and whiteboard. |
| **Colossal Glass Stargate 'V' Portal** | Procedural Parametric Extruded 'V' Portal | Screen 14 The Next Step | Massive glass archway with volumetric light shaft emitting into the cosmos. |
| **3D Earth Globe Model & Textures** | UV Sphere + Day/Night/Cloud Maps | Screen 14 The Next Step | 4K nighttime city lights texture, normal map, cloud alpha map, atmosphere Fresnel shader. |
| **Mountain Summit Explorer Silhouette** | Vector Silhouette Plane / 3D Model | Screen 14 The Next Step | Dark rocky summit crag with human figure standing in contemplation. |
| **Horizon Dawn Light Shader Plane** | Custom Volumetric Ray Shader | Screen 15 Get in Touch | Horizontal cyan/electric blue sunrise beam radiating across the water plane. |
| **Terrain / Mountain Environment** | Heightmap Plane or Low-poly Mesh + Shader | Screens 01–05 Persistent Background | Jagged mountain silhouette with normal map, emissive shoreline cracks, and water reflection plane (`MeshReflectorMaterial`). |

---

## 2. 2D ASSETS & TEXTURES

- **Vantixio Logomark**: SVG geometric polygon 'V' with cyan gradient fill.
- **Vantixio Wordmark**: Clean geometric sans vector SVG.
- **Environment Maps / HDRI**: Studio dark night sky HDRI with soft horizon light and cyan rim reflections (EXR or HDR format).
- **Water Normal Map**: High-detail wave/ripple normal map for dynamic planar water reflections.
- **Dashboard UI Graphic**: Vector/Canvas mockup of the Vantixio analytics dashboard (`Revenue ₹42.8L`, `Users 12.6K`, `Uptime 98.4%`, spline chart, dark theme).
- **Icons (SVG Stroke 24px)**:
  - Navigation: Arrow Up-Right (`↗`), Hamburger menu (`≡`), Search (`🔍`).
  - Screen 01: Play icon (`▶`).
  - Screen 02: Layers/Stack (`Purpose Driven`), Bolt (`Execution Focused`), Infinity (`Long-Term Impact`).
  - Screen 03: Code (`</> Software Engineering`), Phone (`Web & App Development`), Sparkles (`AI & Automation`), Cloud (`Cloud & Infrastructure`), Pen/Pencil (`UI/UX & Creative`), Chart (`Digital Growth`).
  - Screen 04: SaaS stack, Mobile, Grid platform, Lightning automation, Brand icons (T-shirt, Bar chart, Layers, Sparkle).
  - Screen 05: Lightbulb (`Discover`), Layers (`Design`), Code brackets (`Build`), Rocket (`Launch`), Circular sync (`Scale`).
  - Screen 06: T-Shirt (`YesDhobi`), POS Bar chart (`Theka`), Layered stack (`Dhobicare`), Navigation arrows `← →`.
  - Screen 07: Tech Stack SVGs (`React`, `Flutter`, `Node.js`, `Python`, `AWS`, `Firebase`, `Docker`), Cloud DevOps, Full-Stack `</>`, Database, Microchip, Scalable Stack, Shield Check.
  - Screen 08: Microchip AI Agents, Sparkles Business AI, Process Layers, Code Integration, Data Analytics, Lightning Workflows, Target Cost, Trend Speed.
  - Screen 09: Cursor Product Design, Systems Layers, Pen Brand, Motion Phone, Monitor Web, Mobile UI, Cube Polygon, Layers Motion, 3D Wireframe Cube.
  - Screen 10: Products Stack, Users Group, Rocket Uptime, Lightning Transactions, Globe Industries.
  - Screen 11: Speed Lightning, Shield Reliability, Rocket Mindset, Layers End-to-End, Users Domain, Brain AI-Ready, Handshake Partnership.
  - Screen 12: Target Mission, Eye Vision, Diamond Values, Team Users, Products `</>`, Industries Stack, Growing Team, Infinity Impact.
  - Screen 13: Chat Bubble Discuss, Layers Plan, Code Build, Chart Grow, Calendar Schedule, Step Numbers `1-4`.
  - Screen 14: Rocket Idea, Layers Execution, Lightning Scalable, Infinity Growth.
  - Screen 15: Social SVGs (LinkedIn, Instagram, YouTube, X/Twitter), Mail Contact, Phone Contact, Pin Location.

---

## 3. FONTS & WEB TYPOGRAPHY

- **Display**: Space Grotesk / Aeonik / Syne / Plus Jakarta Sans (Weights: 400, 600, 700, Italic).
- **Body UI**: Inter / Plus Jakarta Sans (Weights: 400, 500, 600).
- **Technical Mono**: JetBrains Mono (Weights: 400, 500 for micro-labels).

