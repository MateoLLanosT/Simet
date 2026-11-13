"use client";

import { Suspense, useEffect, useImperativeHandle, useMemo, useRef, useState, type ComponentRef, type Ref } from "react";
import { Canvas } from "@react-three/fiber";
import { Bounds, Center, ContactShadows, Environment, Lightformer, OrbitControls, useBounds, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import type { Finish } from "@/lib/catalog";

// Inventor exporta casi siempre sin material: se asigna uno según el acabado real
const FINISHES: Record<Finish, THREE.MeshPhysicalMaterialParameters> = {
  acero: { color: "#d4d8dd", metalness: 0.85, roughness: 0.38, envMapIntensity: 1.4 },
  "acero-oscuro": { color: "#9aa1aa", metalness: 0.85, roughness: 0.45, envMapIntensity: 1.3 },
  teflon: { color: "#f4f4f1", metalness: 0, roughness: 0.65, clearcoat: 0.2 },
};

function Model({ url, finish }: { url: string; finish: Finish }) {
  const { scene } = useGLTF(url);
  const object = useMemo(() => {
    const clone = scene.clone(true);
    // DoubleSide: Inventor exporta algunas caras con la orientación invertida
    const material = new THREE.MeshPhysicalMaterial({ ...FINISHES[finish], side: THREE.DoubleSide });
    clone.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        mesh.material = material;
        mesh.castShadow = true;
        // Solo si faltan: recalcularlas suaviza y oscurece las caras planas de las piezas CAD
        if (!mesh.geometry.attributes.normal) mesh.geometry.computeVertexNormals();
      }
    });
    return clone;
  }, [scene, finish]);
  return <primitive object={object} />;
}

/** Vuelve al encuadre inicial: misma dirección de cámara y ajuste automático al tamaño actual. */
function FitHandle({ handle }: { handle: Ref<{ refit: () => void }> }) {
  const bounds = useBounds();
  useImperativeHandle(handle, () => ({ refit: () => bounds.refresh().clip().fit() }), [bounds]);
  return null;
}

function Studio() {
  return (
    <Environment resolution={256}>
      <Lightformer intensity={2.2} position={[0, 5, -6]} scale={[10, 4, 1]} />
      <Lightformer intensity={1.4} position={[-6, 2, 2]} rotation-y={Math.PI / 2} scale={[8, 3, 1]} />
      <Lightformer intensity={1.4} position={[6, 2, 2]} rotation-y={-Math.PI / 2} scale={[8, 3, 1]} />
      <Lightformer intensity={0.8} color="#9e1c25" position={[0, -3, 4]} scale={[6, 1, 1]} />
    </Environment>
  );
}

interface ModelViewerProps {
  url: string;
  finish: Finish;
  /** Tarjetas del listado: sin controles y rotación lenta */
  compact?: boolean;
}

export default function ModelViewer({ url, finish, compact = false }: ModelViewerProps) {
  const controls = useRef<ComponentRef<typeof OrbitControls>>(null);
  const wrapper = useRef<HTMLDivElement>(null);
  const fit = useRef<{ refit: () => void }>(null);
  const [fullscreen, setFullscreen] = useState(false);
  const [autoRotate, setAutoRotate] = useState(
    () => typeof window === "undefined" || !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  // Cámara a su posición original y nuevo encuadre según el tamaño del visor
  const resetView = () => {
    controls.current?.reset();
    fit.current?.refit();
  };

  // Al entrar o salir de pantalla completa cambia el tamaño: esperar a que el
  // canvas se redimensione y recuperar la disposición inicial
  useEffect(() => {
    const onChange = () => {
      setFullscreen(document.fullscreenElement === wrapper.current);
      window.setTimeout(() => {
        controls.current?.reset();
        fit.current?.refit();
      }, 120);
    };
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  return (
    <div ref={wrapper} className={`simet-viewer ${compact ? "simet-viewer--compact" : ""}`}>
      <Canvas shadows dpr={[1, 2]} camera={{ position: [3, 2, 4], fov: 35 }} gl={{ antialias: true }}>
        <color attach="background" args={["#f1f5f9"]} />
        <hemisphereLight args={["#ffffff", "#cbd5e1", 0.9]} />
        <directionalLight position={[4, 6, 3]} intensity={1.2} castShadow />
        <Suspense fallback={null}>
          <Bounds fit clip observe margin={compact ? 1.25 : 1.15}>
            <Center>
              <Model url={url} finish={finish} />
            </Center>
            <FitHandle handle={fit} />
          </Bounds>
          <ContactShadows position={[0, -0.6, 0]} opacity={0.35} blur={2.4} scale={12} far={4} />
          <Studio />
        </Suspense>
        <OrbitControls
          ref={controls}
          makeDefault
          enablePan={!compact}
          enableZoom={!compact}
          autoRotate={autoRotate}
          autoRotateSpeed={compact ? 1.2 : 0.8}
          enableDamping
        />
      </Canvas>

      {!compact && (
        <div className="simet-viewer__toolbar">
          <button type="button" onClick={resetView}>Reiniciar vista</button>
          <button type="button" aria-pressed={autoRotate} onClick={() => setAutoRotate((v) => !v)}>
            {autoRotate ? "Detener giro" : "Girar"}
          </button>
          <button
            type="button"
            onClick={() => (document.fullscreenElement ? document.exitFullscreen() : wrapper.current?.requestFullscreen())}
          >
            {fullscreen ? "Salir de pantalla completa" : "Pantalla completa"}
          </button>
        </div>
      )}
      {!compact && <p className="simet-viewer__hint">Arrastra para girar · rueda o pellizco para acercar</p>}
    </div>
  );
}
