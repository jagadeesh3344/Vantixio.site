# VANTIXIO — ANIMATION & SPATIAL ENGINE

## 1. Core Architecture

The animation engine is constructed on a dual-synchronization layer:
1. **Lenis**: Provides hardware-accelerated momentum smooth scrolling (`wheelMultiplier: 1.0`, `touchMultiplier: 1.8`, custom easing).
2. **GSAP ScrollTrigger**: Listens to Lenis virtual scroll ticks, evaluates 15 section thresholds, and drives camera interpolation and DOM reveals.

## 2. Camera Choreography Vector Table

| Screen | Name | Camera Pos `[x, y, z]` | Target `[x, y, z]` | FOV |
| :---: | :--- | :--- | :--- | :---: |
| **01** | The Beginning | `[-1.2, 0.4, 4.5]` | `[1.0, 0.2, 0.0]` | 42° |
| **02** | Our Philosophy | `[0.0, 0.8, 5.2]` | `[-0.5, 0.5, 0.0]` | 45° |
| **03** | What We Do | `[0.0, 0.2, 6.0]` | `[0.0, 0.0, 0.0]` | 40° |
| **04** | What We Build | `[0.8, 0.6, 4.8]` | `[0.6, 0.4, 0.0]` | 38° |
| **05** | Our Process | `[-0.5, 0.3, 5.0]` | `[0.8, 0.2, 0.0]` | 42° |
| **06** | Our Products | `[0.9, -0.2, 4.6]` | `[0.3, 0.1, 0.0]` | 44° |
| **07** | Our Technology | `[-0.4, 0.3, 5.0]` | `[0.7, 0.2, 0.0]` | 40° |
| **08** | AI & Automation | `[0.0, 0.5, 4.8]` | `[0.0, 0.4, 0.0]` | 42° |
| **09** | UI/UX & Creative | `[-0.6, 0.4, 5.2]` | `[0.5, 0.3, 0.0]` | 40° |
| **10** | Our Work | `[0.0, 0.2, 5.6]` | `[0.0, 0.2, 0.0]` | 44° |
| **11** | The Difference | `[0.0, 0.4, 5.0]` | `[0.0, 0.3, 0.0]` | 42° |
| **12** | About Vantixio | `[-0.8, 0.2, 5.8]` | `[0.8, 0.5, 0.0]` | 45° |
| **13** | Let's Create | `[-0.5, 0.0, 4.6]` | `[0.6, 0.1, 0.0]` | 40° |
| **14** | The Next Step | `[0.0, 1.2, 6.2]` | `[0.0, 0.6, 0.0]` | 50° |
| **15** | Get in Touch | `[0.0, 0.1, 5.0]` | `[0.0, 0.3, 0.0]` | 42° |

## 3. Micro-Interactions & Shaders

- **Mouse Parallax**: Pointers normalize to `[-1, 1]`, gently tilting the 3D meshes and camera focal target.
- **Glass Caustics & Transmission**: Three.js `MeshPhysicalMaterial` with `transmission: 0.85–0.92`, `ior: 1.52`, and emissive cyan core lighting.
- **Dynamic Dashboard Canvas**: HTML5 2D Canvas texture rendering real-time revenue, users, uptime, and bezier curves directly onto the 3D tablet device.
- **Interactive Cover-Flow**: Smooth 3D perspective deck transitions for client case studies and product monoliths.

