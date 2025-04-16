import Head from 'next/head'
import { FiHome, FiDollarSign, FiLayers } from 'react-icons/fi'

export function AppLayout({ children, title }: { children: React.ReactNode; title: string }) {
  return (
    <>
      <Head>
        <title>{`${title} | Prefabricator`}</title>
        <meta name="description" content="Prefab construction cost estimator for India" />
      </Head>
      
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <header className="bg-blue-600 text-white shadow-lg">
          <div className="container mx-auto px-4 py-4 flex items-center gap-3">
            <FiHome className="text-2xl" />
            <h1 className="text-xl font-bold">Prefabricator</h1>
          </div>
        </header>
        
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
      </div>
    </>
  )
}