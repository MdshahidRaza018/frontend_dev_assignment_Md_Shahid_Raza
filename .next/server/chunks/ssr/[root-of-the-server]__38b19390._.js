module.exports = [
"[project]/.next-internal/server/app/page/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/app/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

// 'use client'
// import { WorkerType } from '@/types/workers'
// import Image from 'next/image'
// import { useState, useEffect } from 'react'
// export default function WorkersPage() {
//   const [workersData, setWorkersData] = useState<WorkerType[]>([])
//   useEffect(() => {
//     const loadData = async () => {
//       try {
//         const response = await import('../../workers.json')
//         setWorkersData(response.default)
//       } catch (error) {
//         console.error('Failed to load workers:', error)
//       }
//     }
//     loadData() // sirf ek baar call karna hai
//   }, [])
//   return (
//     <main className='min-h-screen min-w-screen bg-gray-800'>
//       <div >
//         <h1 className='text-4xl font-bold text-center py-5  w-screen text-zinc-100 mb-12 bg-gray-900 sticky top-0 z-50'>
//           Our Workers
//         </h1>
//         {/* Responsive Grid */}
//         <div className='grid grid-rows-3 sm:grid-rows-4 lg:grid-rows-5 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 z-10 container mx-auto '>
//           {workersData
//             .filter((worker) => worker.pricePerDay > 0)
//             .filter((worker) => worker.id !== null)
//             .sort((a, b) => a.name.localeCompare(b.name))
//             .map((worker: WorkerType) => (
//               <div
//                 key={worker.id}
//                 className='bg-gray-800 border border-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300'
//               >
//                 <div className='relative w-full h-64'>
//                   <Image
//                     src={worker.image}
//                     alt={worker.name}
//                     fill
//                     className='object-cover'
//                     priority={worker.id <= 10}
//                   />
//                 </div>
//                 <div className='p-4'>
//                   <h2 className='text-xl font-semibold text-zinc-100'>
//                     {worker.name}
//                   </h2>
//                   <p className='text-gray-300 mt-1'>{worker.service}</p>
//                   <p className='mt-3 font-medium text-green-400'>
//                     ₹{Math.round(worker.pricePerDay * 1.18)} / day
//                   </p>
//                 </div>
//               </div>
//             ))}
//         </div>
//       </div>
//     </main>
//   )
// }
}),
"[project]/src/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/page.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__38b19390._.js.map