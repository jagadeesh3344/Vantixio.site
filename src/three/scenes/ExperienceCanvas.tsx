import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { CameraController } from '../cameras/CameraController';
import { SpatialTransition } from './SpatialTransition';
import { TerrainEnvironment } from '../objects/TerrainEnvironment';
import { GlassTorusHero } from '../objects/GlassTorusHero';
import { AuroraRibbon } from '../objects/AuroraRibbon';
import { ServiceMonoliths } from '../objects/ServiceMonoliths';
import { HardwareShowcase } from '../objects/HardwareShowcase';
import { InfinityLoop } from '../objects/InfinityLoop';
import { EngineeringIntelligenceCore } from '../objects/EngineeringIntelligenceCore';
import { DesignArtboards } from '../objects/DesignArtboards';
import { IndustryPrismsPanorama } from '../objects/IndustryPrismsPanorama';
import { StudioArchitectureHologram } from '../objects/StudioArchitectureHologram';
import { StargateAndEarth } from '../objects/StargateAndEarth';
import { useScroll } from '../../contexts/ScrollContext';

export const ExperienceCanvas: React.FC = () => {
  const { continuousSection } = useScroll();

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
      <Canvas
        shadows={false}
        dpr={[1, 1.75]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
          stencil: false,
          depth: true,
        }}
        camera={{ position: [-1.2, 0.4, 4.6], fov: 42, near: 0.1, far: 100 }}
      >
        <CameraController />

        {/* Cinematic Arctic Blue / Glacier Silver Lighting */}
        <ambientLight intensity={0.65} color="#D0DBE9" />
        <directionalLight
          position={[6, 12, 8]}
          intensity={1.3}
          color="#F4F7FC"
        />
        <pointLight position={[-6, 4, -4]} intensity={1.2} color="#A1B6CF" />

        {/* Global Glacier Atmospheric Fog blending into the CSS gradient */}
        <fog attach="fog" args={['#415C7A', 10, 42]} />

        <Suspense fallback={null}>
          {/* Shared Persistent Glacier Basin & Mountains */}
          <TerrainEnvironment />

          {/* Scene 01: The Beginning (Glacier Ribbon Torus with 'V' Core) */}
          <SpatialTransition section={1} continuousSection={continuousSection}>
            <GlassTorusHero />
          </SpatialTransition>

          {/* Scene 02: Our Philosophy (Flowing Architectural Ribbon) */}
          <SpatialTransition section={2} continuousSection={continuousSection}>
            <AuroraRibbon />
          </SpatialTransition>

          {/* Scene 03: What We Do (Capability Glass Monoliths) */}
          <SpatialTransition section={3} continuousSection={continuousSection}>
            <ServiceMonoliths />
          </SpatialTransition>

          {/* Scene 04: What We Build (Chamfered Glass Product Interfaces) */}
          <SpatialTransition section={4} continuousSection={continuousSection}>
            <HardwareShowcase />
          </SpatialTransition>

          {/* Scene 05: Our Approach (Continuous Execution Pathway) */}
          <SpatialTransition section={5} continuousSection={continuousSection}>
            <InfinityLoop />
          </SpatialTransition>

          {/* Scene 06: Engineering Intelligence (Silicon Processor & Neural AI Core) */}
          <SpatialTransition section={6} continuousSection={continuousSection}>
            <EngineeringIntelligenceCore />
          </SpatialTransition>

          {/* Scene 07: Creative Studio (Frosted Design Artboards) */}
          <SpatialTransition section={7} continuousSection={continuousSection}>
            <DesignArtboards />
          </SpatialTransition>

          {/* Scene 08: A World of Possibilities (Multi-Industry Crystal Panorama) */}
          <SpatialTransition section={8} continuousSection={continuousSection}>
            <IndustryPrismsPanorama />
          </SpatialTransition>

          {/* Scene 09: About Vantixio (Studio Headquarters Pavilion) */}
          <SpatialTransition section={9} continuousSection={continuousSection}>
            <StudioArchitectureHologram />
          </SpatialTransition>

          {/* Scene 10: The Next Chapter (Signature Ribbon Cosmic Summit Return) */}
          <SpatialTransition section={10} continuousSection={continuousSection}>
            <StargateAndEarth />
          </SpatialTransition>
        </Suspense>
      </Canvas>
    </div>
  );
};
