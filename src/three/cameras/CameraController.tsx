import React, { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { useScroll } from '../../contexts/ScrollContext';
import { CAMERA_POSES } from '../../constants/sections';

export const CameraController: React.FC = () => {
  const { continuousSection } = useScroll();
  const { camera } = useThree();
  const currentTarget = useRef(new THREE.Vector3(0, 0, 0));
  const smoothSection = useRef(continuousSection || 1);

  useFrame(({ pointer }) => {
    // Smoothly damp the continuous section value to prevent micro-jitter
    smoothSection.current = THREE.MathUtils.lerp(
      smoothSection.current,
      continuousSection || 1,
      0.08
    );

    const cs = Math.max(1, Math.min(10, smoothSection.current));
    const baseIdx = Math.floor(cs);
    const nextIdx = Math.min(10, baseIdx + 1);
    const alpha = cs - baseIdx;

    // Smoothstep cubic interpolation between poses
    const smoothAlpha = alpha * alpha * (3 - 2 * alpha);

    const poseA = CAMERA_POSES[baseIdx] || CAMERA_POSES[1];
    const poseB = CAMERA_POSES[nextIdx] || poseA;

    // Desired camera position with subtle mouse parallax
    const targetX = THREE.MathUtils.lerp(poseA.position[0], poseB.position[0], smoothAlpha) + pointer.x * 0.15;
    const targetY = THREE.MathUtils.lerp(poseA.position[1], poseB.position[1], smoothAlpha) - pointer.y * 0.1;
    const targetZ = THREE.MathUtils.lerp(poseA.position[2], poseB.position[2], smoothAlpha);

    // Desired lookAt target with subtle mouse parallax
    const lookX = THREE.MathUtils.lerp(poseA.target[0], poseB.target[0], smoothAlpha) + pointer.x * 0.08;
    const lookY = THREE.MathUtils.lerp(poseA.target[1], poseB.target[1], smoothAlpha) - pointer.y * 0.05;
    const lookZ = THREE.MathUtils.lerp(poseA.target[2], poseB.target[2], smoothAlpha);

    // Dynamic FOV interpolation
    const targetFov = THREE.MathUtils.lerp(poseA.fov || 42, poseB.fov || 42, smoothAlpha);
    if ((camera as THREE.PerspectiveCamera).fov) {
      const persCamera = camera as THREE.PerspectiveCamera;
      persCamera.fov = THREE.MathUtils.lerp(persCamera.fov, targetFov, 0.08);
      persCamera.updateProjectionMatrix();
    }

    // Responsive lerp to target position and lookAt
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, targetX, 0.08);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetY, 0.08);
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetZ, 0.08);

    currentTarget.current.x = THREE.MathUtils.lerp(currentTarget.current.x, lookX, 0.08);
    currentTarget.current.y = THREE.MathUtils.lerp(currentTarget.current.y, lookY, 0.08);
    currentTarget.current.z = THREE.MathUtils.lerp(currentTarget.current.z, lookZ, 0.08);

    camera.lookAt(currentTarget.current);
  });

  return null;
};

