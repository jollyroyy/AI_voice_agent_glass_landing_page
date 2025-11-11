import { Canvas } from "@react-three/fiber"
import { OrbitControls, useGLTF } from "@react-three/drei"
import { Suspense } from "react"

function AIAgentModel() {
  const { scene } = useGLTF("https://models.readyplayer.me/64e8a0df4b2c1a001f57a132.glb") 
  return (
    <primitive
      object={scene}
      scale={0.25}              // quarter size
      position={[0, -1.5, 0]}   // center balance
      rotation={[0, Math.PI / 6, 0]}
    />
  )
}

export function VoiceAIAgent() {
  return (
    <div className="relative w-full h-[380px] flex justify-center items-center z-20">
      <Canvas camera={{ position: [0, 0, 4] }}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Suspense fallback={null}>
          <AIAgentModel />
        </Suspense>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
      </Canvas>
    </div>
  )
}
