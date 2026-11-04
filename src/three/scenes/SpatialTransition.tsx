import React, { useRef, createContext, useContext } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface SpatialContextType {
  weight: number;
  continuousSection: number;
}

const SpatialContext = createContext<SpatialContextType>({ weight: 1, continuousSection: 1 });

export const useSpatialWeight = () => useContext(SpatialContext);

interface SpatialTransitionProps {
  section: number | [number, number];
  continuousSection: number;
  range?: number;
  driftY?: number;
  children: React.ReactNode;
}

export const SpatialTransition: React.FC<SpatialTransitionProps> = ({
  section,
  continuousSection,
  range = 0.95,
  driftY = 0.9,
  children,
}) => {
  const groupRef = useRef<THREE.Group>(null);
  const minSec = Array.isArray(section) ? section[0] : section;
  const maxSec = Array.isArray(section) ? section[1] : section;

  let dist = 0;
  let direction = 0;

  if (continuousSection < minSec) {
    dist = minSec - continuousSection;
    direction = -1; // Scrolling down into this section: enters from below
  } else if (continuousSection > maxSec) {
    dist = continuousSection - maxSec;
    direction = 1; // Scrolling down past this section: departs upwards
  } else {
    dist = 0;
    direction = 0; // Exactly inside section range
  }

  const raw = Math.max(0, 1 - dist / range);
  // Hermite smoothstep cubic curve
  const weight = raw * raw * (3 - 2 * raw);

  useFrame(() => {
    if (!groupRef.current) return;
    if (weight <= 0.005) {
      groupRef.current.visible = false;
      groupRef.current.scale.set(0.001, 0.001, 0.001);
    } else {
      groupRef.current.visible = true;
      const s = THREE.MathUtils.lerp(0.4, 1.0, weight);
      groupRef.current.scale.set(s, s, s);
      groupRef.current.position.y = direction * (1 - weight) * driftY;
    }
  });

  return (
    <SpatialContext.Provider value={{ weight, continuousSection }}>
      <group ref={groupRef} visible={weight > 0.005}>
        {children}
      </group>
    </SpatialContext.Provider>
  );
};

