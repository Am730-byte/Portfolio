// @ts-nocheck
"use client";

import React, { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Center, Float, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const DesktopModel = ({ isMobile, rotation }) => {
  const { scene } = useGLTF("/gaming_desktop_pc.glb");
  const rigRef = useRef();
  const desktop = useMemo(() => scene.clone(), [scene]);

  useFrame(() => {
    if (!rigRef.current) return;
    // Smoothly interpolate toward target rotation
    rigRef.current.rotation.y +=
      (rotation.current - rigRef.current.rotation.y) * 0.08;
  });

  return (
    <group ref={rigRef}>
      <Float floatIntensity={0.15} rotationIntensity={0} speed={1.2}>
        <Center position={isMobile ? [0, -0.5, 0] : [0, -0.8, 0]}>
          <primitive
            object={desktop}
            rotation={[0, 0, 0]}
            scale={isMobile ? 0.42 : 0.52}
          />
        </Center>
      </Float>
    </group>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const rotation = useRef(-Math.PI / 6);
  const isDragging = useRef(false);
  const lastX = useRef(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (e) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  const onPointerDown = (e) => {
    isDragging.current = true;
    lastX.current = e.clientX ?? e.touches?.[0]?.clientX ?? 0;
  };

  const onPointerMove = (e) => {
    if (!isDragging.current) return;
    const clientX = e.clientX ?? e.touches?.[0]?.clientX ?? 0;
    const delta = clientX - lastX.current;
    rotation.current += delta * 0.008;
    lastX.current = clientX;
  };

  const onPointerUp = () => {
    isDragging.current = false;
  };

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 h-full w-full cursor-grab active:cursor-grabbing"
      onMouseDown={onPointerDown}
      onMouseMove={onPointerMove}
      onMouseUp={onPointerUp}
      onMouseLeave={onPointerUp}
      onTouchStart={onPointerDown}
      onTouchMove={onPointerMove}
      onTouchEnd={onPointerUp}
    >
      <Canvas
        camera={{ position: [0, 0.8, 12], fov: 28 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        shadows
      >
        <ambientLight intensity={1} />
        <hemisphereLight color="#ffffff" groundColor="#050816" intensity={0.9} />
        <directionalLight color="#b4ff3a" intensity={2} position={[4, 6, 7]} />
        <pointLight color="#7be8ff" intensity={10} distance={18} position={[-4, 3, 6]} />
        <pointLight color="#a16cff" intensity={8} distance={15} position={[3, 1, -4]} />

        <Suspense fallback={<CanvasLoader />}>
          <DesktopModel isMobile={isMobile} rotation={rotation} />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

useGLTF.preload("/gaming_desktop_pc.glb");

export default ComputersCanvas;
