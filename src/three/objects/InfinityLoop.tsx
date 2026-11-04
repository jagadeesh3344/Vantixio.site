import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useSpatialWeight } from '../scenes/SpatialTransition';

export const InfinityLoop: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.Mesh>(null);
  const { weight } = useSpatialWeight();

  // Lemniscate of Bernoulli Parametric Curve in 3D
  const curve = useMemo(() => {
    class LemniscateCurve extends THREE.Curve<THREE.Vector3> {
      scale: number;
      constructor(scale = 2.4) {
        super();
        this.scale = scale;
      }
      getPoint(t: number, optionalTarget = new THREE.Vector3()) {
        const theta = t * Math.PI * 2;
        const denom = 1 + Math.sin(theta) * Math.sin(theta);
        const x = (this.scale * Math.cos(theta)) / denom;
        const y = (this.scale * Math.sin(theta) * Math.cos(theta)) / denom;
        const z = Math.sin(theta * 2) * 0.45;
        return optionalTarget.set(x, y, z);
      }
    }
    return new LemniscateCurve(2.8);
  }, []);

  // 6 Process Waypoints: Discover, Strategize, Design, Engineer, Launch, Evolve
  const nodeTValues = [0.08, 0.25, 0.42, 0.58, 0.75, 0.92];
  const nodePositions = useMemo(() => {
    return nodeTValues.map((t) => curve.getPoint(t));
  }, [curve]);

  useFrame(({ clock }) => {
    if (!groupRef.current || weight <= 0.005) return;
    const t = clock.getElapsedTime();
    groupRef.current.rotation.y = t * 0.18;
    groupRef.current.rotation.x = 0.2 + Math.sin(t * 0.3) * 0.06;
  });

  return (
    <group ref={groupRef} position={[1.4, 0.2, 0]}>
      {/* Continuous Architectural Glacier Glass Pathway */}
      <mesh ref={meshRef}>
        <tubeGeometry args={[curve, 120, 0.30, 24, true]} />
        <meshPhysicalMaterial
          color="#D0DBE9"
          transmission={0.92}
          roughness={0.08}
          ior={1.5}
          transparent
          opacity={0.88 * weight}
          emissive="#506A89"
          emissiveIntensity={0.5 * weight}
          specularColor={new THREE.Color('#A1B6CF')}
        />
      </mesh>

      {/* 6 Process Milestone Nodes with Frost Silver Cores */}
      {nodePositions.map((pos, i) => (
        <group key={i} position={pos}>
          <mesh>
            <sphereGeometry args={[0.13, 16, 16]} />
            <meshStandardMaterial
              color="#F4F7FC"
              emissive="#A1B6CF"
              emissiveIntensity={2.2 * weight}
            />
          </mesh>
          <pointLight color="#D0DBE9" intensity={1.2 * weight} distance={3} />
        </group>
      ))}
    </group>
  );
};
