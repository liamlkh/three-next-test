import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, PerspectiveCamera, Preload } from '@react-three/drei'
import { Perf } from 'r3f-perf'

export default function Scene({ children, ...props }) {
  return (
    <Canvas {...props}>
      {/* @ts-expect-error */}
      <PerspectiveCamera makeDefault position={[0, 0, 50]} fov={60} zoom={0.9} />
      <ambientLight intensity={0.5} />
      {children}
      <Preload all />
      <OrbitControls />
      <Environment preset='warehouse' />
      <Perf />
    </Canvas>
  )
}
