import { useState } from 'react'
import { useRouter } from 'next/router'
import { useCursor } from '@react-three/drei'

import { useLoader } from '@react-three/fiber'
import { STLLoader } from 'three-stdlib'

export default function Blob({ route, ...props }) {
  const router = useRouter()
  const [hovered, hover] = useState(false)
  useCursor(hovered)

  const upperJaw = useLoader(STLLoader, '/stls/UpperJaw.stl')
  const lowerJaw = useLoader(STLLoader, '/stls/LowerJaw.stl')

  return (
    <group rotation={[-Math.PI / 2, 0, 0]}>
      <mesh>
        <primitive object={upperJaw} />
        <meshStandardMaterial color='grey' />
      </mesh>
      <mesh>
        <primitive object={lowerJaw} />
        <meshStandardMaterial color='grey' />
      </mesh>
    </group>
  )
}
