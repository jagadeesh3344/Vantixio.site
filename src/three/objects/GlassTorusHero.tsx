import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useSpatialWeight } from '../scenes/SpatialTransition';

export const GlassTorusHero: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  const outerTorusRef = useRef<THREE.Mesh>(null);
  const innerVRef = useRef<THREE.Group>(null);
  const apexNodeRef = useRef<THREE.Mesh>(null);
  const haloRingRef = useRef<THREE.Mesh>(null);
  const { weight } = useSpatialWeight();

  // Primary 3D Catmull-Rom Curve tracing the Vantixio 'V'
  const vCoreCurve = useMemo(() => {
    return new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.62, 0.68, 0.02),
      new THREE.Vector3(-0.34, 0.06, 0.01),
      new THREE.Vector3(0.0, -0.62, 0.0),
      new THREE.Vector3(0.34, 0.06, 0.01),
      new THREE.Vector3(0.62, 0.68, 0.02),
    ]);
  }, []);

  // Front offset wire strand for 3D braided wire depth
  const vFrontWireCurve = useMemo(() => {
    return new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.64, 0.68, 0.08),
      new THREE.Vector3(-0.35, 0.06, 0.06),
      new THREE.Vector3(0.0, -0.62, 0.05),
      new THREE.Vector3(0.35, 0.06, 0.06),
      new THREE.Vector3(0.64, 0.68, 0.08),
    ]);
  }, []);

  // Back offset wire strand for 3D braided wire depth
  const vBackWireCurve = useMemo(() => {
    return new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.64, 0.68, -0.08),
      new THREE.Vector3(-0.35, 0.06, -0.06),
      new THREE.Vector3(0.0, -0.62, -0.05),
      new THREE.Vector3(0.35, 0.06, -0.06),
      new THREE.Vector3(0.64, 0.68, -0.08),
    ]);
  }, []);

  // Micro-strut ladder rungs connecting the wire strands
  const strutPositions = useMemo(() => {
    const tValues = [0.15, 0.3, 0.7, 0.85];
    return tValues.map((t) => {
      const pFront = vFrontWireCurve.getPoint(t);
      const pBack = vBackWireCurve.getPoint(t);
      return { pFront, pBack };
    });
  }, [vFrontWireCurve, vBackWireCurve]);

  useFrame(({ clock, pointer }) => {
    if (!groupRef.current || weight <= 0.005) return;
    const t = clock.getElapsedTime();

    // Outer Glacier Glass Torus - Slow, majestic gyroscopic rotation
    if (outerTorusRef.current) {
      outerTorusRef.current.rotation.x = 0.45 + Math.sin(t * 0.35) * 0.08;
      outerTorusRef.current.rotation.y = t * 0.2;
      outerTorusRef.current.rotation.z = Math.cos(t * 0.25) * 0.06;
    }

    // Inner 'V' Structure - Stays upright and prominent, gently floating & swaying
    if (innerVRef.current) {
      innerVRef.current.position.y = Math.sin(t * 0.7) * 0.04;
      innerVRef.current.rotation.y = Math.sin(t * 0.5) * 0.22;
      innerVRef.current.rotation.x = Math.sin(t * 0.4) * 0.08;
      innerVRef.current.rotation.z = Math.cos(t * 0.35) * 0.03;
    }

    // Apex energy core pulsation
    if (apexNodeRef.current) {
      const s = 1.0 + Math.sin(t * 2.8) * 0.12;
      apexNodeRef.current.scale.set(s, s, s);
    }

    // Halo energy ring rotation
    if (haloRingRef.current) {
      haloRingRef.current.rotation.z = -t * 0.4;
      haloRingRef.current.rotation.x = Math.PI / 2.5 + Math.sin(t * 0.3) * 0.05;
    }

    // Responsive pointer parallax tilt on the entire assembly
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      pointer.x * 0.22,
      0.05
    );
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      -pointer.y * 0.16,
      0.05
    );
  });

  return (
    <group ref={groupRef} position={[1.4, 0.2, 0]}>
      {/* Outer High-Transmission Glacier Glass Torus (The Donut) */}
      <mesh ref={outerTorusRef} castShadow receiveShadow>
        <torusGeometry args={[1.55, 0.52, 36, 100]} />
        <meshPhysicalMaterial
          color="#D0DBE9"
          transmission={0.94}
          opacity={0.92 * weight}
          transparent
          roughness={0.06}
          ior={1.52}
          reflectivity={0.92}
          thickness={1.2}
          specularIntensity={1.4}
          specularColor={new THREE.Color('#A1B6CF')}
        />
      </mesh>

      {/* Inner 'V' Structure representing Vantixio */}
      <group ref={innerVRef} position={[0, 0, 0]}>
        {/* 1. Primary Solid Glacier Core Wire 'V' */}
        <mesh>
          <tubeGeometry args={[vCoreCurve, 80, 0.065, 16, false]} />
          <meshStandardMaterial
            color="#D0DBE9"
            emissive="#819AB8"
            emissiveIntensity={2.0 * weight}
            roughness={0.15}
            metalness={0.8}
          />
        </mesh>

        {/* 2. Cybernetic Braided Wireframe Mesh Sleeve in Frost Silver */}
        <mesh>
          <tubeGeometry args={[vCoreCurve, 64, 0.095, 8, false]} />
          <meshStandardMaterial
            color="#A1B6CF"
            emissive="#506A89"
            emissiveIntensity={1.0 * weight}
            wireframe
            transparent
            opacity={0.7 * weight}
          />
        </mesh>

        {/* 3. Front Offset Luminous Wire Strand */}
        <mesh>
          <tubeGeometry args={[vFrontWireCurve, 64, 0.028, 12, false]} />
          <meshBasicMaterial color="#A1B6CF" transparent opacity={0.85 * weight} />
        </mesh>

        {/* 4. Back Offset Luminous Wire Strand */}
        <mesh>
          <tubeGeometry args={[vBackWireCurve, 64, 0.028, 12, false]} />
          <meshBasicMaterial color="#819AB8" transparent opacity={0.85 * weight} />
        </mesh>

        {/* 5. Micro-Strut Cross Rungs connecting front & back wire strands */}
        {strutPositions.map((strut, i) => {
          const midX = (strut.pFront.x + strut.pBack.x) / 2;
          const midY = (strut.pFront.y + strut.pBack.y) / 2;
          const midZ = (strut.pFront.z + strut.pBack.z) / 2;
          const len = strut.pFront.distanceTo(strut.pBack);
          return (
            <mesh key={i} position={[midX, midY, midZ]} rotation={[Math.PI / 2, 0, 0]}>
              <cylinderGeometry args={[0.015, 0.015, len, 8]} />
              <meshBasicMaterial color="#A1B6CF" transparent opacity={0.65 * weight} />
            </mesh>
          );
        })}

        {/* 6. Translucent Crystalline Wings inside the 'V' Wings */}
        <mesh position={[-0.32, 0.05, 0]} rotation={[0, 0, -0.42]}>
          <boxGeometry args={[0.18, 1.15, 0.12]} />
          <meshPhysicalMaterial
            color="#819AB8"
            transmission={0.88}
            roughness={0.08}
            ior={1.5}
            transparent
            opacity={0.8 * weight}
            emissive="#314A66"
            emissiveIntensity={0.4 * weight}
          />
        </mesh>
        <mesh position={[0.32, 0.05, 0]} rotation={[0, 0, 0.42]}>
          <boxGeometry args={[0.18, 1.15, 0.12]} />
          <meshPhysicalMaterial
            color="#A1B6CF"
            transmission={0.88}
            roughness={0.08}
            ior={1.5}
            transparent
            opacity={0.8 * weight}
            emissive="#415C7A"
            emissiveIntensity={0.4 * weight}
          />
        </mesh>

        {/* 7. Apex Power Node (Bottom Vertex of the 'V') */}
        <mesh ref={apexNodeRef} position={[0, -0.62, 0]}>
          <octahedronGeometry args={[0.18, 0]} />
          <meshStandardMaterial
            color="#F4F7FC"
            emissive="#D0DBE9"
            emissiveIntensity={3.0 * weight}
          />
        </mesh>

        {/* 8. Top Terminal Node Spheres */}
        <mesh position={[-0.62, 0.68, 0.02]}>
          <sphereGeometry args={[0.09, 16, 16]} />
          <meshStandardMaterial
            color="#D0DBE9"
            emissive="#819AB8"
            emissiveIntensity={2.2 * weight}
          />
        </mesh>
        <mesh position={[0.62, 0.68, 0.02]}>
          <sphereGeometry args={[0.09, 16, 16]} />
          <meshStandardMaterial
            color="#D0DBE9"
            emissive="#819AB8"
            emissiveIntensity={2.2 * weight}
          />
        </mesh>

        {/* 9. Delicate Concentric Orbiting Halo Ring inside Torus Aperture */}
        <mesh ref={haloRingRef} position={[0, 0.05, 0]}>
          <torusGeometry args={[0.96, 0.018, 16, 80]} />
          <meshBasicMaterial color="#A1B6CF" transparent opacity={0.5 * weight} />
        </mesh>

        {/* Luminous Light Radiating from the 'V' Core out through the Glass Torus */}
        <pointLight position={[0, 0, 0.1]} color="#D0DBE9" intensity={3.5 * weight} distance={8} />
        <pointLight position={[0, -0.62, 0.2]} color="#F4F7FC" intensity={2.2 * weight} distance={4} />
      </group>
    </group>
  );
};
