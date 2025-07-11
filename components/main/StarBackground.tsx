"use client";

import React, { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as THREE from "three";
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";

const StarBackground = (props: any) => {
  const ref = useRef<THREE.Points>(null);
  const [sphere] = useState(() => {
    try {
      const positions = random.inSphere(new Float32Array(5000), {
        radius: 1.2,
      });
      // Validate that positions don't contain NaN values
      for (let i = 0; i < positions.length; i++) {
        if (isNaN(positions[i])) {
          // If any NaN values found, generate fallback positions
          const fallbackPositions = new Float32Array(5000);
          for (let j = 0; j < fallbackPositions.length; j += 3) {
            const r = Math.random() * 1.2;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);
            fallbackPositions[j] = r * Math.sin(phi) * Math.cos(theta);
            fallbackPositions[j + 1] = r * Math.sin(phi) * Math.sin(theta);
            fallbackPositions[j + 2] = r * Math.cos(phi);
          }
          return fallbackPositions;
        }
      }
      return positions;
    } catch (error) {
      // Fallback sphere generation if random.inSphere fails
      const fallbackPositions = new Float32Array(5000);
      for (let i = 0; i < fallbackPositions.length; i += 3) {
        const r = Math.random() * 1.2;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        fallbackPositions[i] = r * Math.sin(phi) * Math.cos(theta);
        fallbackPositions[i + 1] = r * Math.sin(phi) * Math.sin(theta);
        fallbackPositions[i + 2] = r * Math.cos(phi);
      }
      return fallbackPositions;
    }
  });

  useFrame((state, delta) => {
    if (ref.current && !isNaN(delta)) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => (
  <div className="w-full h-auto fixed inset-0 z-[20]">
    <Canvas
      camera={{ position: [0, 0, 1] }}
      onError={(error) => console.warn("Three.js Canvas error:", error)}
    >
      <Suspense fallback={null}>
        <StarBackground />
      </Suspense>
      <Preload all />
    </Canvas>
  </div>
);

export default StarsCanvas;
