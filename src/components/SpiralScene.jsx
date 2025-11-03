import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import gsap from 'gsap';

// ---- Custom Spiral Shader ----
const SpiralMaterial = {
  uniforms: {
    uTime: { value: 0 },
    uHover: { value: 0 },
    uAudio: { value: 0 },
  },
  vertexShader: `
    uniform float uTime;
    uniform float uHover;
    uniform float uAudio;
    varying vec3 vPos;
    void main() {
      vPos = position;
      vec3 pos = position;
      // Wave distortion based on audio and hover
      float wave = sin(pos.y * 8.0 + uTime * 3.0) * 0.05 * (1.0 + uHover * 2.0);
      pos.x += wave * uAudio;
      pos.z += cos(pos.y * 6.0 + uTime) * 0.05 * uAudio;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `,
  fragmentShader: `
    varying vec3 vPos;
    void main() {
      float intensity = 0.6 + vPos.y * 0.3;
      vec3 color = vec3(0.1, 0.8, 1.0) * intensity;
      gl_FragColor = vec4(color, 1.0);
    }
  `,
};

// ---- Camera Orbit Component ----
function CameraOrbit() {
  const { camera } = useThree();
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame(() => {
    // Smoothly interpolate camera position for parallax effect
    gsap.to(camera.position, {
      x: mouse.current.x * 0.8,
      y: -mouse.current.y * 0.6,
      z: 6,
      duration: 1.2,
      ease: 'power2.out',
    });
    camera.lookAt(0, 0, 0);
  });

  return null;
}

// ---- Spiral Component ----
function Spiral() {
  const mesh = useRef();
  const uniforms = useRef({
    uTime: { value: 0 },
    uHover: { value: 0 },
    uAudio: { value: 0 },
  });

  const points = useMemo(() => {
    const pts = [];
    const turns = 6;
    const height = 4;
    const radius = 1.5;
    const segments = 800;
    for (let i = 0; i < segments; i++) {
      const t = (i / segments) * Math.PI * 2 * turns;
      const x = Math.cos(t) * radius;
      const y = (i / segments - 0.5) * height;
      const z = Math.sin(t) * radius;
      pts.push(new THREE.Vector3(x, y, z));
    }
    return pts;
  }, []);

  const geometry = useMemo(
    () => new THREE.BufferGeometry().setFromPoints(points),
    [points]
  );

  // Sound-reactive behavior (guarded for autoplay policies)
  useEffect(() => {
    let mounted = true;
    let ctx; let audio; let analyser; let rafId;
    const initAudio = async () => {
      try {
        audio = new Audio('/music.mp3');
        ctx = new (window.AudioContext || window.webkitAudioContext)();
        const src = ctx.createMediaElementSource(audio);
        analyser = ctx.createAnalyser();
        src.connect(analyser);
        analyser.connect(ctx.destination);
        audio.loop = true;
        const playPromise = audio.play();
        if (playPromise) await playPromise.catch(() => {});
        const data = new Uint8Array(analyser.frequencyBinCount);
        const loop = () => {
          rafId = requestAnimationFrame(loop);
          analyser.getByteFrequencyData(data);
          let sum = 0;
          for (let i = 0; i < data.length; i++) sum += data[i];
          const avg = sum / data.length;
          if (mounted) uniforms.current.uAudio.value = avg / 200;
        };
        loop();
      } catch (e) {
        // If audio fails, keep uAudio at 0
        uniforms.current.uAudio.value = 0;
      }
    };
    initAudio();
    return () => {
      mounted = false;
      if (rafId) cancelAnimationFrame(rafId);
      try { audio && audio.pause(); } catch {}
      try { ctx && ctx.close(); } catch {}
    };
  }, []);

  // Hover interaction
  useEffect(() => {
    const handleMove = () => {
      uniforms.current.uHover.value = 1.0;
      gsap.to(uniforms.current.uHover, { value: 0, duration: 1.2, ease: 'expo.out' });
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  // Animate rotation + time
  useFrame((_, delta) => {
    uniforms.current.uTime.value += delta;
    if (mesh.current) {
      mesh.current.rotation.y += delta * 0.2;
      mesh.current.rotation.x = Math.sin(uniforms.current.uTime.value * 0.3) * 0.1;
    }
  });

  return (
    <line ref={mesh} geometry={geometry}>
      <shaderMaterial
        args={[SpiralMaterial]}
        uniforms={uniforms.current}
        transparent
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </line>
  );
}

// ---- Final Scene ----
export default function SpiralScene() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
        <color attach="background" args={["#000"]} />
        <fog attach="fog" args={["#000", 2, 15]} />
        <ambientLight intensity={0.3} />
        <pointLight position={[2, 2, 2]} intensity={1.2} />

        <CameraOrbit />
        <Spiral />

        <EffectComposer>
          <Bloom intensity={2.0} threshold={0.4} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
