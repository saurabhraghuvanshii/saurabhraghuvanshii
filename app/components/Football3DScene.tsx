"use client";

import { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

function FootballGeometry() {
  const meshRef = useRef<THREE.Mesh>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragOffset = useRef({ x: 0, y: 0 });
  const velocity = useRef({ x: 0, y: 0 });

  const footballTexture = useMemo(() => {
    if (typeof document === "undefined") return null;
    const canvas = document.createElement("canvas");
    canvas.width = 1024;
    canvas.height = 512;
    const ctx = canvas.getContext("2d")!;

    // White base
    ctx.fillStyle = "#e8e8e8";
    ctx.fillRect(0, 0, 1024, 512);

    // Subtle leather grain
    for (let i = 0; i < 12000; i++) {
      const x = (i * 7919) % 1024;
      const y = (i * 6271) % 512;
      const alpha = ((i * 3571) % 100) / 1250;
      ctx.fillStyle = `rgba(0, 0, 0, ${alpha})`;
      ctx.fillRect(x, y, 1, 1);
    }

    // Pentagon patches (classic football pattern)
    const pentagons = [
      { x: 128, y: 128, r: 60 },
      { x: 384, y: 128, r: 60 },
      { x: 640, y: 128, r: 60 },
      { x: 896, y: 128, r: 60 },
      { x: 256, y: 320, r: 60 },
      { x: 512, y: 320, r: 60 },
      { x: 768, y: 320, r: 60 },
      { x: 128, y: 384, r: 50 },
      { x: 640, y: 384, r: 50 },
    ];

    pentagons.forEach(({ x, y, r }) => {
      ctx.beginPath();
      for (let i = 0; i < 5; i++) {
        const angle = (i * 2 * Math.PI) / 5 - Math.PI / 2;
        const px = x + r * Math.cos(angle);
        const py = y + r * Math.sin(angle);
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.closePath();
      ctx.fillStyle = "#1a1a1a";
      ctx.fill();
      ctx.strokeStyle = "#333";
      ctx.lineWidth = 2;
      ctx.stroke();
    });

    // Seam lines
    ctx.strokeStyle = "rgba(0, 0, 0, 0.15)";
    ctx.lineWidth = 2;
    pentagons.forEach(({ x, y, r }) => {
      for (let i = 0; i < 5; i++) {
        const angle = (i * 2 * Math.PI) / 5 - Math.PI / 2;
        const nextAngle = ((i + 1) * 2 * Math.PI) / 5 - Math.PI / 2;
        const midX = x + r * 1.4 * Math.cos((angle + nextAngle) / 2);
        const midY = y + r * 1.4 * Math.sin((angle + nextAngle) / 2);
        ctx.beginPath();
        ctx.moveTo(x + r * Math.cos(angle), y + r * Math.sin(angle));
        ctx.lineTo(midX, midY);
        ctx.stroke();
      }
    });

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    return texture;
  }, []);

  const bumpTexture = useMemo(() => {
    if (typeof document === "undefined") return null;
    const canvas = document.createElement("canvas");
    canvas.width = 512;
    canvas.height = 256;
    const ctx = canvas.getContext("2d")!;

    ctx.fillStyle = "#808080";
    ctx.fillRect(0, 0, 512, 256);

    for (let i = 0; i < 6000; i++) {
      const x = (i * 7919) % 512;
      const y = (i * 6271) % 256;
      const radius = ((i * 3571) % 150) / 100 + 0.5;
      const brightness = ((i * 2347) % 80) + 88;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgb(${brightness}, ${brightness}, ${brightness})`;
      ctx.fill();
    }

    return new THREE.CanvasTexture(canvas);
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();

    if (!isDragging) {
      meshRef.current.position.y = Math.sin(time * 0.5) * 0.3;

      // Spring back
      if (Math.abs(velocity.current.x) > 0.001 || Math.abs(velocity.current.y) > 0.001) {
        velocity.current.x *= 0.95;
        velocity.current.y *= 0.95;
        meshRef.current.position.x += velocity.current.x;
        meshRef.current.position.y += velocity.current.y;
      }
    }

    meshRef.current.rotation.y += 0.003;
    meshRef.current.rotation.x = Math.sin(time * 0.3) * 0.1;
  });

  if (!footballTexture || !bumpTexture) return null;

  return (
    <mesh
      ref={meshRef}
      castShadow
      receiveShadow
      onPointerDown={(e) => {
        e.stopPropagation();
        setIsDragging(true);
        dragOffset.current = {
          x: e.point.x - (meshRef.current?.position.x || 0),
          y: e.point.y - (meshRef.current?.position.y || 0),
        };
      }}
      onPointerMove={(e) => {
        if (isDragging && meshRef.current) {
          const newX = e.point.x - dragOffset.current.x;
          const newY = e.point.y - dragOffset.current.y;
          velocity.current = {
            x: newX - meshRef.current.position.x,
            y: newY - meshRef.current.position.y,
          };
          meshRef.current.position.x = newX;
          meshRef.current.position.y = newY;
        }
      }}
      onPointerUp={() => {
        setIsDragging(false);
        if (meshRef.current) {
          velocity.current = {
            x: -meshRef.current.position.x * 0.1,
            y: -meshRef.current.position.y * 0.1,
          };
        }
      }}
    >
      <icosahedronGeometry args={[1.2, 3]} />
      <meshStandardMaterial
        map={footballTexture}
        bumpMap={bumpTexture}
        bumpScale={0.02}
        roughness={0.7}
        metalness={0.05}
        envMapIntensity={0.6}
      />
    </mesh>
  );
}

export default function Football3DScene() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="w-full h-full" style={{ cursor: "grab" }}>
      <Canvas
        shadows
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0);
        }}
      >
        {/* Key light */}
        <directionalLight
          position={[5, 5, 5]}
          intensity={2}
          color="#ffffff"
          castShadow
        />
        {/* Fill light with orange tint */}
        <directionalLight
          position={[-3, 2, -2]}
          intensity={0.5}
          color="#FF6B00"
        />
        {/* Rim light */}
        <directionalLight
          position={[0, -2, -5]}
          intensity={0.8}
          color="#ffffff"
        />
        <ambientLight intensity={0.3} />
        {/* Orange accent spotlight */}
        <spotLight
          position={[0, 5, 0]}
          intensity={0.5}
          color="#FF6B00"
          angle={0.6}
          penumbra={0.5}
        />
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
          <FootballGeometry />
        </Float>
      </Canvas>
    </div>
  );
}
