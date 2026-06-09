import { Component, Suspense, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Bounds, Center, ContactShadows, Html, OrbitControls, useGLTF } from '@react-three/drei';
import type { Mesh, Object3D } from 'three';
import { Reveal } from '../components/motion/Reveal';
import { ButtonLink } from '../components/ui/ButtonLink';
import {
  getFilteredModels,
  MODEL_FILTERS,
  portfolioModels,
  type ModelFilter,
  type PortfolioModel
} from '../data/modelPreviewModels';

const FIRE_GIF_EMBED_URL = 'https://tenor.com/embed/8142593601173351491';

type ViewerState = 'loading' | 'ready' | 'error';

class ModelErrorBoundary extends Component<
  { children: ReactNode; onError: () => void },
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch() {
    this.props.onError();
  }

  render() {
    if (this.state.hasError) {
      return null;
    }

    return this.props.children;
  }
}

function LoadingFallback() {
  return (
    <Html center>
      <div className="rounded-full border border-white/10 bg-slate-950/80 px-4 py-2 text-xs uppercase tracking-[0.28em] text-slate-300 backdrop-blur-xl">
        Loading model...
      </div>
    </Html>
  );
}

function PreviewModel({ modelUrl, onReady }: { modelUrl: string; onReady: () => void }) {
  const gltf = useGLTF(modelUrl);
  const model = useMemo(() => gltf.scene.clone(true), [gltf.scene]);

  useEffect(() => {
    model.traverse((child: Object3D) => {
      const mesh = child as Object3D & Mesh;

      if (mesh.isMesh) {
        mesh.castShadow = true;
        mesh.receiveShadow = true;
      }
    });

    onReady();
  }, [model, onReady]);

  return (
    <Center>
      <primitive object={model} scale={0.62} position={[0, -0.15, 0]} />
    </Center>
  );
}

portfolioModels.forEach((model) => {
  useGLTF.preload(model.url);
});

function ViewerCanvas({
  model,
  onReady,
  onError,
  canvasKey
}: {
  model: PortfolioModel;
  onReady: () => void;
  onError: () => void;
  canvasKey: number;
}) {
  return (
    <Canvas
      key={canvasKey}
      dpr={[1, 1.5]}
      camera={{ position: [0, 0.8, 9.8], fov: 34 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      performance={{ min: 0.75 }}
      shadows
    >
      <color attach="background" args={['#020617']} />
      <fog attach="fog" args={['#020617', 16, 30]} />
      <ambientLight intensity={1.45} />
      <hemisphereLight intensity={1.15} color="#e2e8f0" groundColor="#082f49" />
      <directionalLight position={[4, 6, 5]} intensity={2.5} color="#f8fafc" castShadow />
      <directionalLight position={[-4, 3, -2]} intensity={1.4} color="#67e8f9" />
      <directionalLight position={[0, 2, 6]} intensity={1.1} color="#ffffff" />
      <spotLight position={[0, 5, 2]} angle={0.42} penumbra={0.9} intensity={1.85} color="#ffffff" />

      <Suspense fallback={<LoadingFallback />}>
        <ModelErrorBoundary key={model.id} onError={onError}>
          <Bounds key={model.id} fit observe margin={1.2}>
            <group rotation={[0, 0.5, 0]}>
              <PreviewModel key={model.id} modelUrl={model.url} onReady={onReady} />
            </group>
          </Bounds>
        </ModelErrorBoundary>
      </Suspense>

      <ContactShadows position={[0, -1.8, 0]} opacity={0.38} scale={8} blur={2.6} far={4.4} />
      <OrbitControls
        enablePan
        enableDamping
        screenSpacePanning
        dampingFactor={0.08}
        zoomSpeed={0.75}
        minDistance={4.5}
        maxDistance={14}
        panSpeed={0.85}
        autoRotate
        autoRotateSpeed={0.5}
        minPolarAngle={Math.PI / 3.4}
        maxPolarAngle={Math.PI / 1.55}
      />
    </Canvas>
  );
}

export default function ModelPreviewSection() {
  const [viewerState, setViewerState] = useState<ViewerState>('loading');
  const [showTexture, setShowTexture] = useState(false);
  const [activeFilter, setActiveFilter] = useState<ModelFilter>('ALL');
  const [selectedModelId, setSelectedModelId] = useState(() => portfolioModels[0]?.id ?? '');
  const [canvasKey, setCanvasKey] = useState(0);

  const filteredModels = useMemo(() => getFilteredModels(portfolioModels, activeFilter), [activeFilter]);
  const selectedModel =
    filteredModels.find((model) => model.id === selectedModelId) ??
    portfolioModels.find((model) => model.id === selectedModelId) ??
    filteredModels[0] ??
    portfolioModels[0] ??
    null;

  useEffect(() => {
    if (!filteredModels.length) {
      return;
    }

    const isSelectedModelVisible = filteredModels.some((model) => model.id === selectedModelId);

    if (!isSelectedModelVisible) {
      setSelectedModelId(filteredModels[0].id);
    }
  }, [filteredModels, selectedModelId]);

  useEffect(() => {
    if (selectedModel) {
      setViewerState('loading');
    }
  }, [selectedModel?.id]);

  const handleRestore = () => {
    setShowTexture(false);
  };

  const handleRetry = () => {
    setViewerState('loading');
    setCanvasKey((value) => value + 1);
  };

  return (
    <Reveal className="space-y-6" delay={0.08}>
      <div className="flex w-full max-w-none flex-col gap-5">
        <div className="flex justify-end">
          <button
            type="button"
            aria-pressed={showTexture}
            onClick={() => setShowTexture((value) => !value)}
            className="group inline-flex items-center justify-between gap-3 rounded-full border border-white/12 bg-slate-950/70 px-3 py-2 text-sm text-slate-100 transition duration-300 hover:border-cyan-200/35 hover:bg-slate-900/80"
          >
            <span className="text-xs uppercase tracking-[0.24em] text-slate-300">Show Texture</span>
            <span
              className={`relative h-6 w-11 rounded-full border transition duration-300 ${
                showTexture ? 'border-orange-300/50 bg-orange-400/25' : 'border-white/10 bg-white/10'
              }`}
            >
              <span
                className={`absolute top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-white shadow-[0_0_18px_rgba(255,255,255,0.18)] transition duration-300 ${
                  showTexture ? 'left-[1.35rem] bg-orange-100' : 'left-1'
                }`}
              />
            </span>
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.985 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          style={{ height: '78vh', minHeight: '32rem', maxHeight: '56rem' }}
          className="relative isolate block w-full overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.15),transparent_26%),linear-gradient(180deg,rgba(2,6,23,0.84),rgba(2,6,23,1))] shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_40px_120px_rgba(2,6,23,0.58)]"
        >
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.045)_1px,transparent_1px)] bg-[size:46px_46px] opacity-20" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-[radial-gradient(circle_at_top,rgba(125,211,252,0.16),transparent_68%)]" />

          {selectedModel ? (
            <div className={`absolute inset-0 transition duration-500 ${showTexture ? 'opacity-0' : 'opacity-100'}`}>
              <ViewerCanvas
                canvasKey={canvasKey}
                model={selectedModel}
                onReady={() => setViewerState('ready')}
                onError={() => setViewerState('error')}
              />
            </div>
          ) : null}

          <AnimatePresence>
            {viewerState === 'loading' && !showTexture && selectedModel ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex items-center justify-center bg-slate-950/30 backdrop-blur-sm"
              >
                <div className="rounded-[1.2rem] border border-white/10 bg-slate-950/68 px-5 py-4 text-center backdrop-blur-xl">
                  <p className="text-xs uppercase tracking-[0.3em] text-cyan-100/70">Loading preview</p>
                  <p className="mt-2 text-sm text-slate-300">Preparing the Blender model for a smooth web preview.</p>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>

          <AnimatePresence>
            {viewerState === 'error' && !showTexture && selectedModel ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex items-center justify-center bg-slate-950/80 px-6"
              >
                <div className="max-w-md rounded-[1.4rem] border border-white/10 bg-slate-950/85 p-6 text-center shadow-[0_20px_60px_rgba(2,6,23,0.5)] backdrop-blur-xl">
                  <p className="text-xs uppercase tracking-[0.28em] text-rose-200/70">Preview unavailable</p>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    The model could not be loaded. Check the exported `.glb` path and make sure any linked textures are included.
                  </p>
                  <button
                    type="button"
                    onClick={handleRetry}
                    className="mt-5 inline-flex items-center justify-center rounded-full border border-white/12 bg-white/5 px-5 py-3 text-sm font-medium text-slate-100 transition duration-300 hover:border-white/20 hover:bg-white/10"
                  >
                    Retry Preview
                  </button>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>

          <AnimatePresence>
            {showTexture ? (
              <motion.div
                key="texture-joke"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 flex items-center justify-center bg-black"
              >
                <motion.div
                  initial={{ opacity: 0, scaleX: 0.94 }}
                  animate={{ opacity: 0.5, scaleX: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(251,146,60,0.2),transparent)] mix-blend-screen"
                />

                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ delay: 0.14, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-5 px-6 py-8 text-center"
                >
                  <div className="relative h-40 w-28 overflow-hidden rounded-[1.2rem] border border-orange-200/20 bg-white/5 shadow-[0_18px_40px_rgba(249,115,22,0.18)] sm:h-48 sm:w-32">
                    <iframe
                      title="Fire texture easter egg"
                      src={FIRE_GIF_EMBED_URL}
                      className="h-full w-full border-0"
                      loading="lazy"
                    />
                  </div>

                  <div className="max-w-lg space-y-3">
                    <p className="text-xs uppercase tracking-[0.32em] text-orange-200/70">Texture mode</p>
                    <p className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                      This happens when I try to add texture to my model.
                    </p>
                    <p className="text-sm leading-7 text-slate-300">
                      The good news is the preview survived. The bad news is the material pipeline briefly chose chaos.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={handleRestore}
                    className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-medium text-slate-100 transition duration-300 hover:border-orange-200/35 hover:bg-orange-300/10"
                  >
                    Back to Preview
                  </button>
                </motion.div>
              </motion.div>
            ) : null}
          </AnimatePresence>

          {!showTexture ? (
            <div className="pointer-events-none absolute inset-x-3 bottom-3 rounded-[1.1rem] border border-white/8 bg-slate-950/35 px-4 py-3 backdrop-blur-lg sm:inset-x-5 sm:bottom-5 sm:px-5">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.28em] text-slate-400">Viewport</p>
                  <p className="mt-1 text-sm text-slate-200">Rotate, zoom, and inspect the model in a wider immersive preview stage.</p>
                </div>
                <p className="text-xs tracking-[0.18em] text-slate-400 sm:text-right">
                  {selectedModel ? selectedModel.fileName : 'No model selected'} / GLB / Three.js
                </p>
              </div>
            </div>
          ) : null}
        </motion.div>

        <div className="rounded-[1.4rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.012))] p-4 shadow-[0_18px_60px_rgba(2,6,23,0.24)] backdrop-blur-xl sm:p-5">
          <div className="grid gap-4 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:items-start">
            <div className="space-y-4">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-cyan-100/70">Model library</p>
                <p className="mt-2 max-w-md text-sm leading-7 text-slate-300">
                  Select a model and filter the collection by file prefix while keeping the same shared preview stage.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {MODEL_FILTERS.map((filter) => {
                  const isActive = filter.id === activeFilter;

                  return (
                    <button
                      key={filter.id}
                      type="button"
                      onClick={() => setActiveFilter(filter.id)}
                      aria-pressed={isActive}
                      className={`rounded-full border px-3 py-2 text-xs uppercase tracking-[0.24em] transition duration-300 ${
                        isActive
                          ? 'border-cyan-300/40 bg-cyan-300/12 text-cyan-100 shadow-[0_0_30px_rgba(34,211,238,0.08)]'
                          : 'border-white/10 bg-white/[0.03] text-slate-300 hover:border-white/20 hover:bg-white/[0.06]'
                      }`}
                    >
                      {filter.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="overflow-hidden rounded-[1.2rem] border border-white/10 bg-slate-950/38">
              <ul className="grid max-h-[320px] gap-2 overflow-y-auto p-2 md:grid-cols-2 xl:grid-cols-3">
                {filteredModels.length ? (
                  filteredModels.map((model) => {
                    const isSelected = model.id === selectedModel?.id;

                    return (
                      <li key={model.id}>
                        <button
                          type="button"
                          onClick={() => setSelectedModelId(model.id)}
                          aria-pressed={isSelected}
                          className={`flex h-full w-full items-center justify-between gap-3 rounded-[1rem] px-3 py-3 text-left transition duration-300 ${
                            isSelected
                              ? 'bg-white/10 text-white shadow-[inset_0_0_0_1px_rgba(125,211,252,0.22)]'
                              : 'text-slate-300 hover:bg-white/[0.05] hover:text-slate-100'
                          }`}
                        >
                          <span>
                            <span className="block text-sm font-medium">{model.label}</span>
                            <span className="mt-1 block text-[11px] uppercase tracking-[0.22em] text-slate-500">
                              {model.fileName}
                            </span>
                          </span>
                          <span className="rounded-full border border-white/10 px-2 py-1 text-[10px] uppercase tracking-[0.22em] text-slate-400">
                            {model.category ?? 'N/A'}
                          </span>
                        </button>
                      </li>
                    );
                  })
                ) : (
                  <li className="px-3 py-8 text-center text-sm text-slate-400 md:col-span-2 xl:col-span-3">
                    No models match this filter yet. Add files like `H-sword.glb`, `P-phone-case.glb`, or `S-cup.glb`.
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 text-center sm:justify-between sm:text-left">
          <p className="max-w-2xl text-sm leading-7 text-slate-400">
            The viewer is tuned for portfolio presentation, with a contained preview area so the 3D canvas stays elegant on both desktop and mobile.
          </p>
          <ButtonLink href="#contact" variant="ghost" className="text-sm">
            Want the case study too?
          </ButtonLink>
        </div>
      </div>
    </Reveal>
  );
}
