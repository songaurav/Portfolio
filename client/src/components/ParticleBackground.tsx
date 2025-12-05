import { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

function Particles({ count = 500, mouse }: { count?: number; mouse: React.MutableRefObject<{ x: number; y: number }> }) {
  const mesh = useRef<THREE.Points>(null);
  const light = useRef<THREE.PointLight>(null);

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 20;
      const y = (Math.random() - 0.5) * 20;
      const z = (Math.random() - 0.5) * 20;
      temp.push(x, y, z);
    }
    return new Float32Array(temp);
  }, [count]);

  const speeds = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push(Math.random() * 0.02 + 0.005);
    }
    return temp;
  }, [count]);

  const sizes = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push(Math.random() * 3 + 1);
    }
    return new Float32Array(temp);
  }, [count]);

  useFrame((state) => {
    if (!mesh.current) return;
    
    const positions = mesh.current.geometry.attributes.position.array as Float32Array;
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      
      positions[i3 + 1] -= speeds[i];
      
      if (positions[i3 + 1] < -10) {
        positions[i3 + 1] = 10;
        positions[i3] = (Math.random() - 0.5) * 20;
        positions[i3 + 2] = (Math.random() - 0.5) * 20;
      }
      
      const dx = positions[i3] - mouse.current.x * 5;
      const dy = positions[i3 + 1] - mouse.current.y * 5;
      const dist = Math.sqrt(dx * dx + dy * dy);
      
      if (dist < 3) {
        const force = (3 - dist) * 0.01;
        positions[i3] += dx * force;
        positions[i3 + 1] += dy * force;
      }
    }
    
    mesh.current.geometry.attributes.position.needsUpdate = true;
    mesh.current.rotation.y = state.clock.elapsedTime * 0.02;
  });

  return (
    <>
      <pointLight ref={light} distance={40} intensity={8} color="#00ff00" />
      <points ref={mesh}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particles.length / 3}
            array={particles}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-size"
            count={sizes.length}
            array={sizes}
            itemSize={1}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.05}
          color="#00ff00"
          transparent
          opacity={0.6}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
        />
      </points>
    </>
  );
}

function GeometricGrid() {
  const gridRef = useRef<THREE.LineSegments>(null);

  useFrame((state) => {
    if (gridRef.current) {
      gridRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
      gridRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const positions: number[] = [];
    const gridSize = 10;
    const divisions = 10;
    const step = gridSize / divisions;

    for (let i = -gridSize / 2; i <= gridSize / 2; i += step) {
      positions.push(-gridSize / 2, i, -5, gridSize / 2, i, -5);
      positions.push(i, -gridSize / 2, -5, i, gridSize / 2, -5);
    }

    geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    return geo;
  }, []);

  return (
    <lineSegments ref={gridRef} geometry={geometry}>
      <lineBasicMaterial color="#00ff00" transparent opacity={0.1} />
    </lineSegments>
  );
}

function Scene({ mouse, particleCount }: { mouse: React.MutableRefObject<{ x: number; y: number }>; particleCount: number }) {
  return (
    <>
      <color attach="background" args={['#050505']} />
      <fog attach="fog" args={['#050505', 5, 25]} />
      <ambientLight intensity={0.1} />
      <Particles count={particleCount} mouse={mouse} />
      <GeometricGrid />
    </>
  );
}

function CSSFallbackBackground() {
  return (
    <div 
      className="fixed inset-0 -z-10 bg-[#050505] overflow-hidden"
      data-testid="particle-background-fallback"
    >
      <div className="absolute inset-0 opacity-30">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 255, 0, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(0, 255, 0, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />
    </div>
  );
}

function isWebGLAvailable(): boolean {
  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    return gl !== null && gl !== undefined;
  } catch {
    return false;
  }
}

export default function ParticleBackground() {
  const mouse = useRef({ x: 0, y: 0 });
  const [webGLSupported, setWebGLSupported] = useState<boolean | null>(null);
  const [hasError, setHasError] = useState(false);
  const [particleCount] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768 ? 200 : 500;
    }
    return 500;
  });

  useEffect(() => {
    setWebGLSupported(isWebGLAvailable());
  }, []);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (webGLSupported === null) {
    return <div className="fixed inset-0 -z-10 bg-[#050505]" data-testid="particle-background" />;
  }

  if (!webGLSupported || hasError) {
    return <CSSFallbackBackground />;
  }

  return (
    <div className="fixed inset-0 -z-10" data-testid="particle-background">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        onCreated={({ gl }) => {
          if (!gl.getContext()) {
            setHasError(true);
          }
        }}
        fallback={<CSSFallbackBackground />}
      >
        <Scene mouse={mouse} particleCount={particleCount} />
      </Canvas>
    </div>
  );
}
