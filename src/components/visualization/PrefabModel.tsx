import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

type PrefabModelProps = {
  materialType?: 'steel' | 'concrete' | 'wood' 
  floors?: number
  showWireframe?: boolean
}

export function PrefabModel({ 
  materialType = 'steel', 
  floors = 1,
  showWireframe = false 
}: PrefabModelProps) {
  const groupRef = useRef<THREE.Group>(null)
  
  // Material definitions
  const materials = {
    steel: new THREE.MeshStandardMaterial({ 
      color: '#4682B4',
      metalness: 0.8,
      roughness: 0.3
    }),
    concrete: new THREE.MeshStandardMaterial({ 
      color: '#A0A0A0',
      metalness: 0.1,
      roughness: 0.7
    }),
    wood: new THREE.MeshStandardMaterial({
      color: '#8B4513',
      metalness: 0,
      roughness: 0.8
    })
  }

  // Animation loop
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.003
    }
  })

  return (
    <group ref={groupRef}>
      {/* Base walls */}
      <mesh 
        position={[0, 1.5, 0]} 
        castShadow 
        receiveShadow
      >
        <boxGeometry args={[5, 3, 5]} />
        <primitive 
          object={materials[materialType].clone()} 
          attach="material"
          wireframe={showWireframe}
        />
      </mesh>

      {/* Floors */}
      {Array.from({ length: floors - 1 }).map((_, i) => (
        <mesh
          key={`floor-${i}`}
          position={[0, (i + 1) * 3 + 1.5, 0]}
          castShadow
          receiveShadow
        >
          <boxGeometry args={[5, 3, 5]} />
          <primitive 
            object={materials[materialType].clone()} 
            attach="material"
            wireframe={showWireframe}
          />
        </mesh>
      ))}

      {/* Roof */}
      <mesh 
        position={[0, floors * 3, 0]} 
        castShadow
      >
        <boxGeometry args={[5.2, 0.2, 5.2]} />
        <meshStandardMaterial 
          color="#555555" 
          metalness={0.5}
          roughness={0.5}
          wireframe={showWireframe}
        />
      </mesh>

      {/* Windows */}
      <mesh 
        position={[0, 1.5, 2.51]} 
        rotation={[0, 0, 0]}
      >
        <planeGeometry args={[3, 2]} />
        <meshStandardMaterial 
          color="#7EC0EE" 
          transparent 
          opacity={0.7}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  )
}