import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useSpatialWeight } from '../scenes/SpatialTransition';

export const HardwareShowcase: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  const ribbonRef = useRef<THREE.Mesh>(null);
  const { weight } = useSpatialWeight();

  // Generate dynamic canvas texture for tablet screen in Arctic Blue palette
  const dashboardTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 700;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      // Dark Glacier Dashboard Background
      ctx.fillStyle = '#253B54';
      ctx.fillRect(0, 0, 1024, 700);

      // Top Header
      ctx.fillStyle = '#F4F7FC';
      ctx.font = 'bold 36px sans-serif';
      ctx.fillText('VANTIXIO ENTERPRISE SYSTEMS', 40, 60);

      // Metric Boxes
      ctx.fillStyle = 'rgba(49, 74, 102, 0.7)';
      ctx.fillRect(40, 100, 280, 140);
      ctx.fillRect(360, 100, 280, 140);
      ctx.fillRect(680, 100, 280, 140);

      // Labels & Values
      ctx.fillStyle = '#A1B6CF';
      ctx.font = '22px sans-serif';
      ctx.fillText('Monthly Volume', 60, 140);
      ctx.fillText('Active Platforms', 380, 140);
      ctx.fillText('System Uptime', 700, 140);

      ctx.fillStyle = '#F4F7FC';
      ctx.font = 'bold 44px sans-serif';
      ctx.fillText('120K+', 60, 200);
      ctx.fillText('4 Core', 380, 200);
      ctx.fillText('99.98%', 700, 200);

      // Growth Chart Wave
      ctx.strokeStyle = '#D0DBE9';
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.moveTo(60, 560);
      ctx.bezierCurveTo(240, 520, 420, 380, 600, 410);
      ctx.bezierCurveTo(720, 430, 840, 320, 960, 300);
      ctx.stroke();

      // Chart area fill
      ctx.lineTo(960, 620);
      ctx.lineTo(60, 620);
      ctx.fillStyle = 'rgba(161, 182, 207, 0.15)';
      ctx.fill();
    }
    return new THREE.CanvasTexture(canvas);
  }, []);

  useFrame(({ clock }) => {
    if (!groupRef.current || weight <= 0.005) return;
    const t = clock.getElapsedTime();
    groupRef.current.position.y = 0.3 + Math.sin(t * 0.5) * 0.06;
    if (ribbonRef.current) {
      ribbonRef.current.rotation.y = t * 0.25;
    }
  });

  return (
    <group ref={groupRef} position={[1.4, 0.3, 0]}>
      {/* 3D Glacier Glass Tablet */}
      <group position={[-0.4, 0, 0]} rotation={[0.15, -0.3, 0.05]}>
        {/* Tablet Chassis */}
        <mesh castShadow>
          <boxGeometry args={[3.2, 2.2, 0.1]} />
          <meshStandardMaterial color="#253B54" metalness={0.85} roughness={0.25} />
        </mesh>
        {/* Screen with Dashboard Texture */}
        <mesh position={[0, 0, 0.055]}>
          <planeGeometry args={[3.0, 2.0]} />
          <meshBasicMaterial map={dashboardTexture} transparent opacity={weight} />
        </mesh>
      </group>

      {/* 3D Glacier Smartphone */}
      <group position={[1.8, -0.2, 0.5]} rotation={[0.1, -0.2, 0.08]}>
        <mesh castShadow>
          <boxGeometry args={[0.9, 1.8, 0.08]} />
          <meshStandardMaterial color="#314A66" metalness={0.9} roughness={0.2} />
        </mesh>
        <mesh position={[0, 0, 0.045]}>
          <planeGeometry args={[0.82, 1.7]} />
          <meshBasicMaterial color="#253B54" transparent opacity={weight} />
        </mesh>
      </group>

      {/* Orbiting Energy Ribbon */}
      <mesh ref={ribbonRef} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[2.5, 0.035, 16, 100]} />
        <meshBasicMaterial color="#A1B6CF" transparent opacity={0.6 * weight} />
      </mesh>
      <pointLight position={[0, 0.5, 0.5]} color="#D0DBE9" intensity={2.2 * weight} distance={6} />
    </group>
  );
};
