import { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, useProgress, Html } from '@react-three/drei'
import * as THREE from 'three'
import { PrefabModel } from './PrefabModel'
import { Button } from '@src/components/core/Button'

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
      {/* 3D Canvas and other components remain the same */}
      
      {/* Control Panel */}
      {showControls && (
        <div className="absolute bottom-4 left-4 right-4 bg-white dark:bg-gray-800 bg-opacity-90 dark:bg-opacity-90 p-3 rounded-lg shadow-md flex flex-wrap gap-3 items-center justify-center">
          {/* Other buttons remain the same */}
          
          <div className="flex gap-2 items-center">
            <span className="text-sm text-gray-700 dark:text-gray-300">Floors:</span>
            <Button
              size="sm"
              onClick={() => setCurrentFloors(Math.max(1, currentFloors - 1))}
              disabled={currentFloors <= 1}
              aria-label="Decrease floors"
              className={currentFloors <= 1 ? 'opacity-50 cursor-not-allowed' : ''}
            >
              -
            </Button>
            <span className="w-6 text-center">{currentFloors}</span>
            <Button
              size="sm"
              onClick={() => setCurrentFloors(Math.min(3, currentFloors + 1))}
              disabled={currentFloors >= 3}
              aria-label="Increase floors"
              className={currentFloors >= 3 ? 'opacity-50 cursor-not-allowed' : ''}
            >
              +
            </Button>
          </div>

          {/* Rest of the buttons */}
        </div>
      )}
    </div>
  )
}