import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, PerspectiveCamera, Preload } from '@react-three/drei'

export default function Scene({ children, ...props }) {
  // Everything defined in here will persist between route changes, only children are swapped
  return (
    <Canvas {...props}>
      <PerspectiveCamera makeDefault position={[0, 0, 50]} fov={60} zoom={0.9} />
      <ambientLight intensity={0.5} />
      {children}
      <Preload all />
      <OrbitControls />
      <Environment preset='warehouse' />
    </Canvas>
  )
}
