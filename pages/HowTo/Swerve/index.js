import React from 'react'

import Link from 'next/link'

function Swerve() {
  return (
    <>
      <section class="relative bg-[url(../public/IMG_4001.jpg)] bg-cover bg-center bg-no-repeat">
        <div class="absolute inset-0 bg-gray-800 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"></div>

        <div class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div class="max-w-xl text-center sm:text-left">
            <h1 class="text-3xl font-extrabold sm:text-5xl">Swerve Chassis</h1>

            <p class="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
              Check out how our different subteams took part in creating our
              first swerve drive chassis.
            </p>

            <div className="grid grid-cols-2 mt-8 gap-y-6">
              <div>
                <p className="text-white dark:text-black text-sm lg:text-base font-medium leading-none">
                  Movement:{' '}
                  <span className="font-semibold md:font-medium">
                    Swerve Drive
                  </span>
                </p>
              </div>
              <div>
                <p className="text-white dark:text-black text-sm lg:text-base font-medium leading-none">
                  Code:{' '}
                  <span className="font-semibold md:font-medium">
                    Java and C++
                  </span>
                </p>
              </div>
              <div>
                <p className="text-white dark:text-black text-sm lg:text-base font-medium leading-none">
                  Created:{' '}
                  <span className="font-semibold md:font-medium">2022</span>
                </p>
              </div>
              <div>
                <p className="text-white dark:text-black text-sm lg:text-base font-medium leading-none">
                  Package:{' '}
                  <span className="font-semibold md:font-medium">WPILib</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <div className="bg-gray-900">
          <div className="mx-auto container w-full flex xl:flex-row flex-col justify-between items-start px-6 lg:px-0">
            <div className="flex flex-col justify-start items-start ">
              <div className="lg:mt-16 sm:mt-12 mt-16 flex lg:flex-row justify-between items-center flex-col lg:gap-8 gap-12">
                <div className="w-full xl:w-5/12 lg:w-6/12">
                  <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-white text-center">
                    Details
                  </h2>
                  <p className="font-normal text-base leading-6 text-gray-400 mt-6 text-center">
                    Our swerve bot is built with compact components in mind to
                    allocate more space for the design on top while maintaining
                    steady yet fast movement. Built with 4 swerve modules
                    connected to the wheels, and a baseboard at the bottom. By
                    building this, you will have a great start to your team's
                    robot.
                  </p>
                </div>
                <div className="lg:flex items-center w-full lg:w-1/2 ">
                  <img
                    className="lg:block hidden w-full rounded-lg"
                    src="/IMG_4019.jpg"
                    alt="people discussing on board"
                  />
                  <img
                    className="lg:hidden sm:block hidden w-full h-3/4 rounded-lg"
                    src="/IMG_4019.jpg"
                    alt="people discussing on board"
                  />
                  <img
                    className="sm:hidden block w-full rounded-lg"
                    src="/IMG_4019.jpg"
                    alt="people discussing on board"
                  />
                </div>
              </div>

              <div className="lg:mt-16 sm:mt-12 mt-16 flex items-center lg:flex-row justify-between flex-col lg:gap-8 gap-12">
                <div className="lg:flex items-center w-full lg:w-1/2">
                  <img
                    className="lg:block hidden w-full rounded-lg"
                    src="/IMG_3998.jpg"
                    alt="people discussing on board"
                  />
                  <img
                    className="lg:hidden sm:block hidden w-full h-3/4 rounded-lg"
                    src="/IMG_3998.jpg"
                    alt="people discussing on board"
                  />
                  <img
                    className="sm:hidden block w-full rounded-lg"
                    src="/IMG_3998.jpg"
                    alt="people discussing on board"
                  />
                </div>
                <div className="text-gray-800 dark:text-gray-400 mt-4 pr-8 lg:text-base text-sm leading-normal">
                  <ul>
                    <h2 className="font-bold lg:text-4xl text-3xl text-white text-center pr-10">
                      Steps
                    </h2>
                    <br />
                    <li className="flex justify-start items-start space-x-1 flex-row text-gray-400">
                      <div>-</div>
                      <div>Designing the Chassis and Motors for the wheels</div>
                    </li>
                    <li className="flex justify-start items-start space-x-1 flex-row text-gray-400">
                      <div>-</div>
                      <div>Building out the Chassis</div>
                    </li>
                    <li className="flex justify-start items-start space-x-1 flex-row text-gray-400">
                      <div>-</div>
                      <div>
                        Building the wheel and engines to fit in the chassis
                      </div>
                    </li>
                    <li className="flex justify-start items-start space-x-1 flex-row text-gray-400">
                      <div>-</div>
                      <div>
                        Adding electrical to connect to every other component
                      </div>
                    </li>
                    <li className="flex justify-start items-start space-x-1 flex-row text-gray-400">
                      <div>-</div>
                      <div>Coding the program to drive the bot</div>
                    </li>
                    <li className="flex justify-start items-start space-x-1 flex-row text-gray-400">
                      <div>-</div>
                      <div>Connecting to the robot's wheels and controller</div>
                    </li>
                    <li className="flex justify-start items-start space-x-1 flex-row text-gray-400">
                      - Testing the drive to be as efficient as possible
                    </li>
                  </ul>
                </div>
              </div>

              <br />
              <br />
              <br />
              <h2 className="font-bold lg:text-4xl text-3xl text-white text-center pr-10 mx-auto">
                The Specific Subsystem Steps
              </h2>
              <br />

              <div className="flex mx-auto">
                <Link href="/HowTo/Swerve/CAD">
                  <button
                    type="button"
                    class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-10 py-6 text-center mr-20"
                  >
                    CAD steps
                  </button>
                </Link>
                <Link href="/HowTo/Swerve/Build">
                  <button
                    type="button"
                    class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-10 py-6 text-center mr-20"
                  >
                    Build steps
                  </button>
                </Link>
                <Link href="/HowTo/Swerve/Electrical">
                  <button
                    type="button"
                    class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-10 py-6 text-center mr-20"
                  >
                    Electrical steps
                  </button>
                </Link>
                <Link href="/HowTo/Swerve/Programming">
                  <button
                    type="button"
                    class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-10 py-6 text-center  mr-20"
                  >
                    Programming steps
                  </button>
                </Link>
                <Link href="/HowTo/Swerve/Test">
                  <button
                    type="button"
                    class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-10 py-6 text-center  mr20"
                  >
                    Testing steps
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <br />
        </div>
      </div>
    </>
  )
}

export default Swerve
