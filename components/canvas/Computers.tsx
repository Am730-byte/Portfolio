// @ts-nocheck
"use client";

import React, { Suspense, useEffect, useMemo, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Center, Float, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const DesktopModel = ({ isMobile }) => {
  const { scene } = useGLTF("/gaming_desktop_pc.glb");
  const rigRef = React.useRef();

  const desktop = useMemo(() => scene.clone(), [scene]);

  useFrame((state) => {
    if (!rigRef.current) return;

    rigRef.current.rotation.y =
      -Math.PI / 2 + Math.sin(state.clock.elapsedTime * 0.55) * 0.14;
  });

  return (
    <group ref={rigRef}>
      <Float floatIntensity={0.2} rotationIntensity={0} speed={1.4}>
        <Center position={isMobile ? [0, -0.78, 0] : [-0.45, -1, 0]}>
          <primitive
            object={desktop}
            rotation={[0, 0, 0]}
            scale={isMobile ? 0.34 : 0.38}
          />
        </Center>
      </Float>
    </group>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <div className='absolute inset-0 h-full w-full'>
      <Canvas
        camera={{ position: [0, 1.1, 15.8], fov: 23 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, preserveDrawingBuffer: true }}
        shadows
      >
        <fog attach="fog" args={["#050816", 12, 22]} />

        <ambientLight intensity={1} />
        <hemisphereLight color="#ffffff" groundColor="#050816" intensity={0.9} />
        <directionalLight color="#b4ff3a" intensity={2} position={[4, 6, 7]} />
        <pointLight color="#7be8ff" intensity={10} distance={18} position={[-4, 3, 6]} />
        <pointLight color="#a16cff" intensity={8} distance={15} position={[3, 1, -4]} />

        <Suspense fallback={<CanvasLoader />}>
          <DesktopModel isMobile={isMobile} />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

useGLTF.preload("/gaming_desktop_pc.glb");

export default ComputersCanvas;
