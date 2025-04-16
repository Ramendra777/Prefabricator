import { AppLayout } from '@/src/components/core/AppLayout'
import { ModelGallery } from '@/src/components/visualization/ModelGallery'

// Define the type for model presets
type ModelPreset = {
  id: number
  name: string
  type: 'steel' | 'concrete' | 'wood' // Explicitly match ModelGallery's expected types
  floors: number
  area: number
}

const modelPresets: ModelPreset[] = [
  {
    id: 1,
    name: 'Steel Frame Bungalow',
    type: 'steel', // Must be one of 'steel' | 'concrete' | 'wood'
    floors: 1,
    area: 1200
  },
  {
    id: 2,
    name: 'Concrete Duplex',
    type: 'concrete',
    floors: 2,
    area: 1800
  },
  {
    id: 3,
    name: 'Premium Villa',
    type: 'wood',
    floors: 3,
    area: 2500
  }
]

export default function VisualizePage() {
  return (
    <AppLayout title="3D Model Gallery">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
          Prefab Design Gallery
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modelPresets.map((model) => (
            <div key={model.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <div className="h-64 bg-gray-100 dark:bg-gray-700">
                <ModelGallery 
                  materialType={model.type} // Now type-safe
                  floors={model.floors}
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {model.name}
                </h3>
                <div className="flex justify-between mt-2 text-sm text-gray-600 dark:text-gray-300">
                  <span>Floors: {model.floors}</span>
                  <span>Area: {model.area} sq.ft</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppLayout>
  )
}