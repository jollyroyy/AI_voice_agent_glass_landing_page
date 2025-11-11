import { Canvas } from "@react-three/fiber"
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei"
import { Suspense } from "react"

function AIAgentModel() {
  return (
    <group>
      <Sphere args={[1, 64, 64]} scale={1.2}>
        <MeshDistortMaterial
          color="#00dcff"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.1}
          metalness={0.8}
        />
      </Sphere>
      <Sphere args={[0.8, 32, 32]} scale={0.8} position={[0, 0, 0]}>
        <MeshDistortMaterial
          color="#0099ff"
          attach="material"
          distort={0.6}
          speed={1.5}
          roughness={0.2}
          metalness={0.6}
          transparent
          opacity={0.7}
        />
      </Sphere>
    </group>
  )
}

export function VoiceAIAgent() {
  return (
    <div className="relative w-full h-[380px] flex justify-center items-center z-20">
      <Canvas camera={{ position: [0, 0, 4] }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <pointLight position={[-5, 5, 5]} intensity={0.8} color="#00dcff" />
        <Suspense fallback={null}>
          <AIAgentModel />
        </Suspense>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} enablePan={false} />
      </Canvas>
    </div>
  )
}
