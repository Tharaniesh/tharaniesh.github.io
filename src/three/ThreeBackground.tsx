import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Points, PointMaterial } from '@react-three/drei';
import { memo, useMemo, useRef } from 'react';
import * as THREE from 'three';
import { useMouseParallax } from '../hooks/useMouseParallax';

function GeometricCluster() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) {
      return;
    }

    groupRef.current.rotation.y = state.clock.elapsedTime * 0.08;
    groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.08;
  });

  return (
    <group ref={groupRef}>
      <Float speed={1.3} rotationIntensity={0.8} floatIntensity={1.1}>
        <mesh position={[-2.8, 1.4, -3.2]}>
          <icosahedronGeometry args={[0.7, 0]} />
          <meshStandardMaterial color="#29c4ff" wireframe emissive="#1b6f8d" emissiveIntensity={0.5} />
        </mesh>
      </Float>
      <Float speed={1.1} rotationIntensity={0.7} floatIntensity={1.2}>
        <mesh position={[2.6, -1.1, -2.2]}>
          <octahedronGeometry args={[0.8, 0]} />
          <meshStandardMaterial color="#706dff" wireframe emissive="#453ce8" emissiveIntensity={0.4} />
        </mesh>
      </Float>
      <Float speed={1.5} rotationIntensity={0.6} floatIntensity={1.4}>
        <mesh position={[0, 2.1, -3.8]}>
          <dodecahedronGeometry args={[0.55, 0]} />
          <meshStandardMaterial color="#5de7ff" wireframe emissive="#216673" emissiveIntensity={0.35} />
        </mesh>
      </Float>
    </group>
  );
}

function ParticleField() {
  const points = useMemo(() => {
    const particles = new Float32Array(1300 * 3);

    for (let i = 0; i < particles.length; i += 3) {
      particles[i] = (Math.random() - 0.5) * 26;
      particles[i + 1] = (Math.random() - 0.5) * 16;
      particles[i + 2] = (Math.random() - 0.5) * 16;
    }

    return particles;
  }, []);

  return (
    <Points positions={points} stride={3} frustumCulled>
      <PointMaterial transparent color="#29c4ff" size={0.03} sizeAttenuation depthWrite={false} opacity={0.6} />
    </Points>
  );
}

function Scene() {
  const groupRef = useRef<THREE.Group>(null);
  const parallax = useMouseParallax(0.35);

  useFrame(() => {
    if (!groupRef.current) {
      return;
    }

    groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, parallax.x, 0.025);
    groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, -parallax.y, 0.025);
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[4, 5, 3]} intensity={1.1} color="#84ddff" />
      <pointLight position={[-4, -3, 2]} intensity={0.7} color="#706dff" />
      <GeometricCluster />
      <ParticleField />
    </group>
  );
}

export const ThreeBackground = memo(function ThreeBackground() {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full">
      <Canvas
        gl={{ antialias: false, alpha: true, powerPreference: 'high-performance' }}
        dpr={[1, 1.6]}
        camera={{ position: [0, 0, 8], fov: 58 }}
      >
        <Scene />
      </Canvas>
    </div>
  );
});
