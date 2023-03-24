import Link from 'next/link'
import { useState } from 'react'

export default function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <div className="relative flex h-screen">
      {!isSidebarOpen && (
        <button
          className="md:hidden fixed top-4 left-4 z-10 p-4 bg-black text-white opacity-80 rounded mt-14"
          onClick={toggleSidebar}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 18L15 12L9 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}

      <div
        className={`fixed inset-y-0 z-10 flex flex-col transition-all duration-300 ease-in-out ${
          isSidebarOpen ? 'bg-gray-700 left-0' : '-left-64'
        } md:bg-gray-700 border border-black md:static md:z-0 md:left-auto md:w-48 `}
      >
        {isSidebarOpen && (
          <div className="md:hidden fixed top-4 left-40 z-10">
            <button
              className="p-4 bg-black text-white  mt-14"
              onClick={toggleSidebar}
            >
              <svg
                className={`-rotate-180`}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 18L15 12L9 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        )}
        {/* Your sidebar content */}
        <h1 className="text-xl font-bold p-4 text-white">Team Page</h1>
        <ul className="list-none text-white">
          <Link href="/TeamResources">
            <li className="p-4">
              {' '}
              <div className="flex items-center">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-grid"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <rect x={4} y={4} width={6} height={6} rx={1} />
                    <rect x={14} y={4} width={6} height={6} rx={1} />
                    <rect x={4} y={14} width={6} height={6} rx={1} />
                    <rect x={14} y={14} width={6} height={6} rx={1} />
                  </svg>
                </div>
                <span className="ml-2">Dashboard</span>
              </div>
            </li>
          </Link>
          <Link href="/TeamResources/Scouter">
            <li className="p-4">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-compass"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <polyline points="8 16 10 10 16 8 14 14 8 16" />
                  <circle cx={12} cy={12} r={9} />
                </svg>
                <span className="ml-2">Scouter</span>
              </div>
            </li>
          </Link>
          <Link href="/TeamResources/Project">
            <li className="p-4">
              {' '}
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-stack"
                  width={18}
                  height={18}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <polyline points="12 4 4 8 12 12 20 8 12 4" />
                  <polyline points="4 12 12 16 20 12" />
                  <polyline points="4 16 12 20 20 16" />
                </svg>
                <span className="ml-2">Team Board</span>
              </div>
            </li>
          </Link>
          <Link href="/TeamResources/Learning">
            <li className="p-4">
              {' '}
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-code"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <polyline points="7 8 3 12 7 16" />
                  <polyline points="17 8 21 12 17 16" />
                  <line x1={14} y1={4} x2={10} y2={20} />
                </svg>
                <span className="ml-2">Learning</span>
              </div>
            </li>
          </Link>
        </ul>{' '}
      </div>
      <div className="flex-1 bg-gray-500">{/* Your main content */}</div>
    </div>
  )
}
