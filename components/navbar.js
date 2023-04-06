import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import SearchBar from './searchbar'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isDropdownOpenAbout, setIsDropdownOpenAbout] = useState(false)
  const router = useRouter()
    const navRef = useRef(null)

     const handleClickOutside = event => {
       if (navRef.current && !navRef.current.contains(event.target)) {
         closeDropdowns()
       }
     }

     useEffect(() => {
       document.addEventListener('mousedown', handleClickOutside)

       return () => {
         document.removeEventListener('mousedown', handleClickOutside)
       }
     }, [])


const path = router.asPath

 const closeDropdowns = () => {
   setIsDropdownOpen(false)
   setIsDropdownOpenAbout(false)
   setIsMenuOpen(false)
 }
 



  const menuIcon = (
    <span className="block w-6 text-white text-2xl leading-none">&#9776;</span>
  )

  const closeIcon = (
    <span className="block w-6 text-white text-2xl leading-none">&#x2715;</span>
  )


  return (
    <nav className="bg-gray-700" ref={navRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" legacyBehavior>
                  <a className="text-white px-3 py-2 rounded-md text-sm font-medium">
                    Home
                  </a>
                </Link>
                <Link href="/Contact" legacyBehavior>
                  <a className="text-white px-3 py-2 rounded-md text-sm font-medium">
                    Contact
                  </a>
                </Link>
                <div className="relative inline-block text-left">
                  <div>
                    <button
                      type="button"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="inline-flex justify-center w-full text-white text-sm pl-2"
                    >
                      Robots
                    </button>
                  </div>
                  {isDropdownOpen && (
                    <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                      <div className="py-1" role="menu">
                        <Link href="/Robots" legacyBehavior>
                          <a
                            onClick={closeDropdowns}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-300"
                            role="menuitem"
                          >
                            School Robots
                          </a>
                        </Link>
                        <Link href="/RobotsComp" legacyBehavior>
                          <a
                            onClick={closeDropdowns}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-300"
                            role="menuitem"
                          >
                            Competition Robots
                          </a>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
                <div className="relative inline-block text-left pl-2">
                  <div>
                    <button
                      type="button"
                      onClick={() =>
                        setIsDropdownOpenAbout(!isDropdownOpenAbout)
                      }
                      className="inline-flex justify-center w-full text-white text-sm pl-2"
                    >
                      About Us
                    </button>
                  </div>
                  {isDropdownOpenAbout && (
                    <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                      <div className="py-1" role="menu">
                        <Link href="/About" legacyBehavior>
                          <a
                            onClick={closeDropdowns}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-300"
                            role="menuitem"
                          >
                            About
                          </a>
                        </Link>
                        <Link href="/FIRST" legacyBehavior>
                          <a
                            onClick={closeDropdowns}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-300"
                            role="menuitem"
                          >
                            FIRST
                          </a>
                        </Link>
                        <Link href="/Sponsors" legacyBehavior>
                          <a
                            onClick={closeDropdowns}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-300"
                            role="menuitem"
                          >
                            Sponsors
                          </a>
                        </Link>
                        <Link href="/TeamStructure" legacyBehavior>
                          <a
                            onClick={closeDropdowns}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-300"
                            role="menuitem"
                          >
                            Team Structure
                          </a>
                        </Link>
                        <Link href="/PastPerformance" legacyBehavior>
                          <a
                            onClick={closeDropdowns}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-300"
                            role="menuitem"
                          >
                            Past Performances
                          </a>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
                <Link href="/HowTo" legacyBehavior>
                  <a className="text-white px-3 py-2 rounded-md text-sm font-medium">
                    Creation Process
                  </a>
                </Link>
                <Link href="/TeamResources" legacyBehavior>
                  <a className="text-white px-3 py-2 rounded-md text-sm font-medium">
                    Team Resources
                  </a>
                </Link>
                <Link href="/Calendar" legacyBehavior>
                  <a className="text-white px-3 py-2 rounded-md text-sm font-medium">
                    Calendar
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden my-2">
            {path == '/TeamResources/Scouter' ||
            path == '/TeamResources/Scouter/Scout' ? (
              <>
                <SearchBar />
              </>
            ) : (
              <></>
            )}

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white"
            >
              {isMenuOpen ? closeIcon : menuIcon}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/" legacyBehavior>
              <a
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-blue-300"
                onClick={closeDropdowns}
              >
                Home
              </a>
            </Link>

            <Link href="/Contact" legacyBehavior>
              <a
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-blue-300"
                onClick={closeDropdowns}
              >
                Contact
              </a>
            </Link>
            <button
              onClick={() => setIsDropdownOpenAbout(!isDropdownOpenAbout)}
              className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-white hover:text-blue-300"
            >
              About Us
            </button>
            {isDropdownOpenAbout && (
              <div className="pt-2 pb-3 space-y-1">
                <Link href="/About" legacyBehavior>
                  <a
                    onClick={closeDropdowns}
                    className="block px-8 py-2 rounded-md text-base font-medium text-white hover:text-blue-300"
                  >
                    About
                  </a>
                </Link>
                <Link href="/FIRST" legacyBehavior>
                  <a
                    onClick={closeDropdowns}
                    className="block px-8 py-2 rounded-md text-base font-medium text-white hover:text-blue-300"
                  >
                    FIRST
                  </a>
                </Link>
                <Link href="/Sponsors" legacyBehavior>
                  <a
                    onClick={closeDropdowns}
                    className="block px-8 py-2 rounded-md text-base font-medium text-white hover:text-blue-300"
                  >
                    Sponsors
                  </a>
                </Link>
                <Link href="/TeamStructure" legacyBehavior>
                  <a
                    onClick={closeDropdowns}
                    className="block px-8 py-2 rounded-md text-base font-medium text-white hover:text-blue-300"
                  >
                    Team Structure
                  </a>
                </Link>
                <Link href="/PastPerformance" legacyBehavior>
                  <a
                    onClick={closeDropdowns}
                    className="block px-8 py-2 rounded-md text-base font-medium text-white hover:text-blue-300"
                  >
                    Past Performances
                  </a>
                </Link>
              </div>
            )}

            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-white hover:text-blue-300"
            >
              Robots
            </button>
            {isDropdownOpen && (
              <div className="pt-2 pb-3 space-y-1">
                <Link href="/Robots" legacyBehavior>
                  <a
                    onClick={closeDropdowns}
                    className="block px-8 py-2 rounded-md text-base font-medium text-white hover:text-blue-300"
                  >
                    School Robots
                  </a>
                </Link>
                <Link href="/RobotsComp" legacyBehavior>
                  <a
                    onClick={closeDropdowns}
                    className="block px-8 py-2 rounded-md text-base font-medium text-white hover:text-blue-300"
                  >
                    Competition Robots
                  </a>
                </Link>
              </div>
            )}
            <Link href="/HowTo" legacyBehavior>
              <a
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-blue-300"
                onClick={closeDropdowns}
              >
                Creation Process
              </a>
            </Link>
            <Link href="/TeamResources" legacyBehavior>
              <a
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-blue-300"
                onClick={closeDropdowns}
              >
                Team Resources
              </a>
            </Link>
            <Link href="/Calendar" legacyBehavior>
              <a
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-blue-300"
                onClick={closeDropdowns}
              >
                Calendar
              </a>
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
