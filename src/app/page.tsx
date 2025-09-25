
'use client'
import { WorkerType } from '@/types/workers'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function WorkersPage() {
  const [workersData, setWorkersData] = useState<WorkerType[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const workersPerPage = 12

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await import('../../workers.json')
        setWorkersData(response.default)
      } catch (error) {
        console.error('Failed to load workers:', error)
      }
    }
    loadData()
  }, [])

  

  // Pagination logic
  const totalPages = Math.ceil(sortedWorkers.length / workersPerPage)
  const startIndex = (currentPage - 1) * workersPerPage
  const currentWorkers = sortedWorkers.slice(
    startIndex,
    startIndex + workersPerPage
  )

  return (
    <main className='min-h-screen min-w-screen bg-gray-800'>
      <div>
        <h1 className='text-4xl font-bold text-center py-5 w-screen text-zinc-100 mb-12 bg-gray-900 sticky top-0 z-50'>
          Our Workers
        </h1>

        {/* Workers Grid */}
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 z-10 container mx-auto'>
          {currentWorkers.map((worker: WorkerType) => (
            <div
              key={worker.id}
              className='bg-gray-800 border border-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300'
            >
              <div className='relative w-full h-64'>
                <Image
                  src={worker.image}
                  alt={worker.name}
                  fill
                  className='object-cover'
                  priority={worker.id <= 10}
                />
              </div>
              <div className='p-4'>
                <h2 className='text-xl font-semibold text-zinc-100'>
                  {worker.name}
                </h2>
                <p className='text-gray-300 mt-1'>{worker.service}</p>
                <p className='mt-3 font-medium text-green-400'>
                  ₹{Math.round(worker.pricePerDay * 1.18)} / day
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className='flex justify-center items-center gap-4 mt-8'>
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className='px-4 py-2 bg-gray-600 text-white rounded disabled:opacity-50'
          >
            Prev
          </button>

          <span className='text-white'>
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className='px-4 py-2 bg-gray-600 text-white rounded disabled:opacity-50'
          >
            Next
          </button>
        </div>
      </div>
    </main>
  )
}
