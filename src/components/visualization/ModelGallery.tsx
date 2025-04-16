import { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, useProgress, Html } from '@react-three/drei'
import * as THREE from 'three'
import { PrefabModel } from './PrefabModel'
import { Button } from '@/src/components/core/Button'

type ModelGalleryProps = {
  materialType?: 'steel' | 'concrete' | 'wood'
  floors?: number
  showControls?: boolean
  className?: string
}

export function ModelGallery({
  materialType = 'steel',
  floors = 1,
  showControls = true,
  className = ''
}: ModelGalleryProps) {
  const [currentMaterial, setCurrentMaterial] = useState(materialType)
  const [currentFloors, setCurrentFloors] = useState(floors)
  const [wireframe, setWireframe] = useState(false)
  const [autoRotate, setAutoRotate] = useState(true)

  function Loader() {
    const { progress } = useProgress()
    return (
      <Html center>
        <div className="bg-black bg-opacity-70 text-white px-4 py-2 rounded-lg">
          Loading {Math.round(progress)}%
        </div>
      </Html>
    )
  }

  return (
    <div className={`relative h-full w-full ${className}`}>
      {/* 3D Canvas */}
      <Canvas
        shadows
        camera={{ position: [10, 5, 10], fov: 50 }}
        gl={{ antialias: true }}
      >
        <Suspense fallback={<Loader />}>
          <ambientLight intensity={0.5} />
          <spotLight
            position={[10, 15, 10]}
            angle={0.3}
            penumbra={1}
            intensity={1}
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
          />
          
          <PrefabModel 
            materialType={currentMaterial}
            floors={currentFloors}
            showWireframe={wireframe}
          />
          
          <Environment preset="city" />
          <OrbitControls
            autoRotate={autoRotate}
            autoRotateSpeed={1}
            enablePan={showControls}
            enableZoom={showControls}
            enableRotate={showControls}
            minPolarAngle={0}
            maxPolarAngle={Math.PI / 1.5}
          />
        </Suspense>
      </Canvas>

      {/* Control Panel */}
      {showControls && (
        <div className="absolute bottom-4 left-4 right-4 bg-white dark:bg-gray-800 bg-opacity-90 dark:bg-opacity-90 p-3 rounded-lg shadow-md flex flex-wrap gap-3 items-center justify-center">
          <div className="flex gap-2">
            <Button
              variant={currentMaterial === 'steel' ? 'primary' : 'secondary'}
              size="sm"
              onClick={() => setCurrentMaterial('steel')}
            >
              Steel
            </Button>
            <Button
              variant={currentMaterial === 'concrete' ? 'primary' : 'secondary'}
              size="sm"
              onClick={() => setCurrentMaterial('concrete')}
            >
              Concrete
            </Button>
            <Button
              variant={currentMaterial === 'wood' ? 'primary' : 'secondary'}
              size="sm"
              onClick={() => setCurrentMaterial('wood')}
            >
              Wood
            </Button>
          </div>

          <div className="flex gap-2 items-center">
            <span className="text-sm text-gray-700 dark:text-gray-300">Floors:</span>
            <Button
              size="sm"
              onClick={() => setCurrentFloors(Math.max(1, currentFloors - 1))}
              disabled={currentFloors <= 1}
            >
              -
            </Button>
            <span className="w-6 text-center">{currentFloors}</span>
            <Button
              size="sm"
              onClick={() => setCurrentFloors(Math.min(3, currentFloors + 1))}
              disabled={currentFloors >= 3}
            >
              +
            </Button>
          </div>

          <div className="flex gap-2">
            <Button
              variant={wireframe ? 'primary' : 'secondary'}
              size="sm"
              onClick={() => setWireframe(!wireframe)}
            >
              Wireframe
            </Button>
            <Button
              variant={autoRotate ? 'primary' : 'secondary'}
              size="sm"
              onClick={() => setAutoRotate(!autoRotate)}
            >
              Auto-Rotate
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}