import { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, Stats, useProgress, Html } from '@react-three/drei'
import { PrefabModel } from './PrefabModel'
import { Toggle } from '@src/components/core/Toggle'

export function ModelViewer() {
  const [material, setMaterial] = useState<'steel' | 'concrete' | 'wood'>('steel')
  const [floors, setFloors] = useState(1)
  const [wireframe, setWireframe] = useState(false)

  function Loader() {
    const { progress } = useProgress()
    return (
      <Html center>
        <div className="text-white bg-black bg-opacity-50 p-4 rounded-lg">
          Loading {progress.toFixed(2)}%
        </div>
      </Html>
    )
  }

  return (
    <div className="relative h-96 w-full bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden">
      {/* Controls overlay */}
      <div className="absolute top-4 left-4 z-10 bg-white dark:bg-gray-900 p-3 rounded-lg shadow-md space-y-3">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Material
          </label>
          <select
            value={material}
            onChange={(e) => setMaterial(e.target.value as any)}
            className="w-full p-1 border rounded"
          >
            <option value="steel">Steel</option>
            <option value="concrete">Concrete</option>
            <option value="wood">Wood</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Floors: {floors}
          </label>
          <input
            type="range"
            min="1"
            max="3"
            value={floors}
            onChange={(e) => setFloors(Number(e.target.value))}
            className="w-full"
          />
        </div>
        
        <Toggle
          label="Wireframe"
          checked={wireframe}
          onChange={setWireframe}
        />
      </div>

      {/* 3D Canvas */}
      <Canvas
        shadows
        camera={{ position: [10, 5, 10], fov: 50 }}
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
            materialType={material}
            floors={floors}
            showWireframe={wireframe}
          />
          
          <Environment preset="city" />
          <OrbitControls
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
            minPolarAngle={0}
            maxPolarAngle={Math.PI / 2}
          />
        </Suspense>
        
        {process.env.NODE_ENV === 'development' && <Stats />}
      </Canvas>
    </div>
  )
}