# VANTIXIO SITE — PROJECT ARCHITECTURE

## 1. Executive Architecture Summary

Vantixio Site is engineered with a modern component-based, modular, and spatial architecture utilizing React 18, TypeScript, Three.js, React Three Fiber, React Three Drei, GSAP ScrollTrigger, Lenis, Tailwind CSS, Framer Motion, and React Hook Form.

```
vantixio site/
│
├── public/
│   ├── assets/
│   │   ├── reference/         # 15 Approved reference screen JPGs
│   │   ├── images/
│   │   ├── textures/
│   │   ├── models/
│   │   ├── videos/
│   │   ├── logos/
│   │   └── icons/
│   ├── favicon.svg            # Faceted Vantixio 'V' glyph
│   └── fonts/
│
├── src/
│   ├── app/
│   │   ├── App.tsx            # Master orchestrator & layout
│   │   ├── main.tsx           # React DOM root entry
│   │   └── providers/
│   │       └── SmoothScrollProvider.tsx # Lenis + GSAP ScrollTrigger sync
│   │
│   ├── components/
│   │   ├── navigation/        # Header, VantixioLogo, FullScreenMenu
│   │   ├── progress/          # VerticalProgressRail, ScrollIndicator
│   │   ├── forms/             # ProjectEnquiryModal, ScheduleCallModal
│   │   ├── buttons/           # Reusable CTA pills & micro-buttons
│   │   ├── typography/        # Kinetic text components
│   │   └── layouts/           # Section wrappers & grids
│   │
│   ├── sections/              # 15 Independent, maintainable sections:
│   │   ├── HeroSection/       # 01 The Beginning
│   │   ├── PhilosophySection/ # 02 Our Philosophy
│   │   ├── ServicesSection/   # 03 What We Do
│   │   ├── SolutionsSection/  # 04 What We Build
│   │   ├── ProcessSection/    # 05 Our Process
│   │   ├── ProductsSection/   # 06 Our Products
│   │   ├── TechnologySection/ # 07 Our Technology
│   │   ├── AISection/         # 08 AI & Automation
│   │   ├── CreativeSection/   # 09 UI/UX & Creative
│   │   ├── IndustriesSection/ # 10 Our Work (Case Studies & Metrics)
│   │   ├── DifferenceSection/ # 11 The Vantixio Difference
│   │   ├── AboutSection/      # 12 About Vantixio
│   │   ├── CollaborationSection/ # 13 Let's Create Together
│   │   ├── FinalCTASection/   # 14 The Next Step
│   │   └── FooterSection/     # 15 Get in Touch & Master Footer
│   │
│   ├── three/
│   │   ├── scenes/
│   │   │   └── ExperienceCanvas.tsx # Persistent single-canvas WebGL scene
│   │   ├── objects/           # Modular 3D objects (Torus, Ribbon, Monoliths, etc.)
│   │   ├── cameras/           # CameraController with smooth lerp
│   │   └── environments/      # Terrain, water reflections, particles
│   │
│   ├── contexts/              # ModalContext, ScrollContext
│   ├── constants/             # Section metadata & camera poses
│   ├── data/                  # Verified site services, products, and metrics
│   ├── styles/                # Tailwind & glassmorphism utilities
│   ├── types/                 # TypeScript interfaces and schemas
│   └── utils/                 # Utility functions (cn, formatting)
│
├── docs/                      # Architectural and operational documentation
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## 2. Core Architectural Principles

1. **Persistent Single WebGL Canvas**:
   - The Three.js Canvas remains mounted at all times in a fixed background layer (`z-0`), avoiding expensive WebGL context destructions or reloads between sections.
   - 3D objects toggle visibility and animate smoothly using React Three Fiber's declarative model and `useFrame`.
2. **Scroll-Driven Camera Choreography**:
   - GSAP ScrollTrigger detects section thresholds.
   - `CameraController` smoothly lerps camera position and lookAt target toward the exact coordinates defined in `CAMERA_POSES`.
3. **Decoupled Editorial DOM Layer**:
   - Semantic HTML5 headings, accessible buttons, and rich DOM content render above the canvas (`z-10`), ensuring search engines, screen readers, and touch devices receive 100% accessible text.
4. **Resilient Form Submission System**:
   - Multi-step project brief builder powered by `react-hook-form` and `zod` validation.
   - Demo mode with instant visual celebration (`canvas-confetti`) and clear user feedback.

