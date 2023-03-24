import React, { useEffect } from 'react'
import Link from 'next/link'



export default function Index() {
  return (
    <div>
     
      <div className="bg-gray-800">
        <div className="">
          <section class="relative bg-[url(../public/DSC_3898-01.jpeg)] bg-cover bg-center bg-no-repeat">
            <div class="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"></div>

            <div class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
              <div class="max-w-xl text-center sm:text-left">
                <h1 class="text-3xl font-extrabold sm:text-5xl">
                  Regis Jesuit Highschool
                  <strong class="block font-extrabold text-rose-700">
                    Robotics 3729
                  </strong>
                </h1>

                <p class="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
                  Welcome to the Regis Jesuit Robotics Webpage
                </p>

                <div class="mt-8 flex flex-wrap gap-4 text-center">
                  <Link
                    href="/About"
                    class="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="w-full relative pb-10 px-6 xl:px-0">
              <div className="pt-32 lg:flex items-center relative z-10 container mx-auto">
                <div className="w-full lg:w-1/2 h-full lg:pr-10 xl:pr-8">
                  <img
                    tabIndex="0"
                    role="img"
                    aria-label="people smiling"
                    className="mx-auto w-full"
                    src="./DSC_4026-01.jpeg"
                    alt="people smiling"
                  />
                </div>
                <div
                  role="contentinfo"
                  className="w-full lg:w-1/2 h-96 text-center pt-8"
                >
                  <p
                    tabIndex="0"
                    className="text-rose-700 uppercase text-2xl mb-0 items-center"
                  >
                    RJ Robotics 3729
                  </p>
                  <h1
                    tabIndex="0"
                    className="text-rose-700 text-4xl lg:text-6xl font-black mb-8 items-center"
                  >
                    Shaping the Future
                  </h1>
                  <p
                    tabIndex="0"
                    className="text-gray-400 font-regular mb-8 items-center"
                  >
                    We do more than just build robots, we build our imaginations
                    and skills to help us master our real word capabilities. We
                    compete in FIRST Robotics in the Heartland Regional and the
                    Colorado Regional.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <>
          <div className="pb-12 px-4 bg-gray-800">
            <div className=" lg:max-w-[1440px] md:max-w-[744px] max-w-[375px] mx-auto bg-white relative lg:px-10 md:px-6 px-4 py-7 bg-gray-200 rounded-lg">
              <div className="lg:flex md:flex block justify-between items-center">
                <div className="items-center xl:pr-8 pr-4">
                  <p className="text-3xl font-semibold leading-9 text-gray-800 text-center py-4">
                    Check Out Our Robots
                  </p>
                  <p className="text-base leading-normal text-gray-600 text-center">
                    Want to see some of our creations?
                    <br />
                    Check out the amazing robots that we have created in the
                    past.
                  </p>
                  <br />
                  <button className="hover:opacity-75 flex justify-center bg-gray-800 sm:w-32 w-full h-10 py-3 text-center">
                    <Link
                      href="/Robots"
                      className="text-base font-medium leading-none text-white"
                    >
                      Robots
                    </Link>
                  </button>
                </div>

                <div className="md:pr-4 py-4">
                  <img
                    src="./DSC_4032-01.jpeg"
                    alt="img"
                    className="w-full h-full object-cover rounded-lg "
                  />
                </div>
              </div>
            </div>
          </div>
        </>
        <div class="flex justify-center">
          <div class="rounded-lg shadow-lg bg-white max-w-sm">
            <Link
              href="#!"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              <img class="rounded-t-lg" src="./IMG_7814.JPG" alt="" />
            </Link>
            <div class="p-6">
              <h5 class="text-gray-900 text-xl font-medium mb-2">
                See How We Created Some of Our Robots
              </h5>
              <p class="text-gray-700 text-base mb-4">
                This page will help you learn to build some of the chassis and
                components to our robots.
              </p>
              <button
                type="button"
                class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                <Link href="/HowTo">How To</Link>
              </button>
            </div>
          </div>
        </div>
        <div>
          <br />
          <br />
        </div>
      </div>
    </div>
  )
}
