import React from 'react'

import Link from 'next/link'
import ReactPlayer from 'react-player'

function CAD() {
  return (
    <div className="bg-gray-800">
      <>
        <div
          className="py-20 2xl:px-0 lg:px-12 px-4 2xl:mx-auto 2xl:container bg-gray-800"
          style={{ height: 700 }}
        >
          <div className="md:flex items-center justify-between w-full bg-gray-800">
            <div className="xl:w-1/3 md:w-1/2 w-full">
              <h1
                role="heading"
                className="focus:outline-none md:w-60 font-bold md:text-6xl text-4xl leading-tight text-gray-200"
              >
                CAD<span className="font-normal italic"> Design it</span>
              </h1>
              <p
                role="contentinfo"
                className="focus:outline-none text-base leading-6 mt-8 text-gray-400 2xl:pr-24 xl:pr-0 pr-12"
              >
                This is where you will see how to design the swerve bot and what
                you need to create it and buy the pieces.
              </p>
            </div>
            <div className="xl:w-4/6 md:w-1/2 w-full xl:pl-48">
              <p
                role="contentinfo"
                className=" focus:outline-none text-base leading-6 mb-8 text-gray-400 md:mt-0 mt-10"
              >
                Take a look at the full chassis overview. It is not as
                complicated as you think. Follow along with the steps to see how
                it all works and download the files at the bottom of the page to
                get started. Good luck!
              </p>
              <div className="w-full">
                <img
                  src="/images/fullchasis.png"
                  alt="Purple flowers on a book"
                  className="md:w-full sm:w-1/2 w-full"
                />
                <div className="flex items-center mt-8">
                  <p
                    role="contentinfo"
                    className="text-xl focus:outline-none font-semibold leading-5 text-gray-200"
                  >
                    Picture description
                  </p>
                  <p
                    role="contentinfo"
                    className="text-xl focus:outline-none italic font-italic leading-5 pl-2 text-gray-200"
                  >
                    Full Chassis overview
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>

      <section>
        <div className="w-full relative pb-10 px-6 xl:px-0">
          <div className="lg:flex items-center relative z-10 container mx-auto">
            <div className="w-full lg:w-1/2 h-full lg:pr-10 xl:pr-0">
              <div>
                <ReactPlayer url="https://www.youtube.com/watch?v=DbOXnmstnWs" />
              </div>{' '}
            </div>
            <div
              role="contentinfo"
              className="w-full lg:w-1/2 h-96 text-center"
            >
              <p
                tabIndex="0"
                className="text-rose-700 uppercase text-2xl mb-0 pl-20"
              >
                CAD Video
              </p>
              <h1
                tabIndex="0"
                className="text-rose-700 text-4xl lg:text-6xl font-black mb-8 pl-20"
              >
                Overview of our resources
              </h1>
              <p tabIndex="0" className="text-gray-400 font-regular mb-8 pl-20">
                See what resources we use and how to use them. This video is an
                explanation of the links you will be directed to on how we use
                the CADed items. If you can understand this you are ready to
                start CADing it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div class="sm:mb-10 lg:grid lg:grid-cols-5 md:grid-cols-none md:bg-gray-300 bg-gray-300 lg:bg-white lg:h-full">
        <div class=" px-10 py-10 max-w-md m-auto lg:col-span-2 mt-20 mb-20 shadow-xl rounded-xl lg:mt-10 md:shadow-xl md:rounded-xl lg:shadow-none lg:rounded-none lg:w-full lg:mb-10 lg:px-5 lg:pt-5 lg:pb-5 lg:max-w-lg bg-white">
          <h1 class="mt-5 font-bold text-lg lg:mt-7">Swerve Module</h1>
          <h1 class="font-bold text-lg text-gray-600">
            The biggest piece for CAD, motor and wheel
          </h1>
          <h1 class="text-lg text-gray-600 text-justify pt-2">
            Swerve Modules allow our robot to move linearly in the cardinal
            directions so that a driver may turn on a dime, and make fine tuned
            movements with precise control.{' '}
          </h1>
        </div>

        <div class="hidden relative lg:block  lg:col-span-3">
          <img
            class="absolute inset-0 w-full h-full object-cover object-center"
            src="/images/swerve_module.png"
            alt="Ad- woman on a beach"
          />
        </div>
      </div>

      <div class="sm:mb-10 lg:grid lg:grid-cols-5 md:grid-cols-none md:bg-gray-300 bg-gray-300 lg:bg-white lg:h-full">
        <div class=" px-10 py-10 max-w-md m-auto lg:col-span-2 mt-20 mb-20 shadow-xl rounded-xl lg:mt-10 md:shadow-xl md:rounded-xl lg:shadow-none lg:rounded-none lg:w-full lg:mb-10 lg:px-5 lg:pt-5 lg:pb-5 lg:max-w-lg bg-white">
          <h1 class="mt-5 font-bold text-lg lg:mt-7">Mini Power Module</h1>
          <h1 class="font-bold text-lg text-gray-600">
            Extends the ports on the PDH
          </h1>
          <h1 class="text-lg text-gray-600 text-justify pt-2">
            The Mini Power Module is an extension of the low amp channel ports
            on the P.D.H. and allows for more low amp fuses to be added to the
            system.
          </h1>
        </div>

        <div class="hidden relative lg:block  lg:col-span-3">
          <img
            class="absolute inset-0 w-full h-full object-cover object-center"
            src="/images/mini_power_module.png"
            alt="Ad- woman on a beach"
          />
        </div>
      </div>

      <div class="sm:mb-10 lg:grid lg:grid-cols-5 md:grid-cols-none md:bg-gray-300 bg-gray-300 lg:bg-white lg:h-full">
        <div class=" px-10 py-10 max-w-md m-auto lg:col-span-2 mt-20 mb-20 shadow-xl rounded-xl lg:mt-10 md:shadow-xl md:rounded-xl lg:shadow-none lg:rounded-none lg:w-full lg:mb-10 lg:px-5 lg:pt-5 lg:pb-5 lg:max-w-lg bg-white">
          <h1 class="mt-5 font-bold text-lg lg:mt-7">Pneumatics Hub</h1>
          <h1 class="font-bold text-lg text-gray-600">
            Powers the pneumatic system
          </h1>
          <h1 class="text-lg text-gray-600 text-justify pt-2">
            The P.H. allows all the pneumatic components to be powered and
            controlled, this includes sensors, solenoids, and compressors.
          </h1>
        </div>

        <div class="hidden relative lg:block  lg:col-span-3">
          <img
            class="absolute inset-0 w-full h-full object-cover object-center"
            src="/images/Pneumatics Hub.png"
            alt="Ad- woman on a beach"
          />
        </div>
      </div>

      <div class="sm:mb-10 lg:grid lg:grid-cols-5 md:grid-cols-none md:bg-gray-300 bg-gray-300 lg:bg-white lg:h-full">
        <div class=" px-10 py-10 max-w-md m-auto lg:col-span-2 mt-20 mb-20 shadow-xl rounded-xl lg:mt-10 md:shadow-xl md:rounded-xl lg:shadow-none lg:rounded-none lg:w-full lg:mb-10 lg:px-5 lg:pt-5 lg:pb-5 lg:max-w-lg bg-white">
          <h1 class="mt-5 font-bold text-lg lg:mt-7">Power Distribution Hub</h1>
          <h1 class="font-bold text-lg text-gray-600">Distributes power</h1>
          <h1 class="text-lg text-gray-600 text-justify pt-2">
            The P.D.H. distributes power to all components of the robot from the
            battery & breaker, It allows you to add fuses to each channel to
            power motors, controllers, etc.
          </h1>
        </div>

        <div class="hidden relative lg:block  lg:col-span-3">
          <img
            class="absolute inset-0 w-full h-full object-cover object-center"
            src="/images/Power Distributor.png"
            alt="Ad- woman on a beach"
          />
        </div>
      </div>

      {/* <div class="sm:mb-10 lg:grid lg:grid-cols-5 md:grid-cols-none md:bg-gray-300 bg-gray-300 lg:bg-white lg:h-full">
      <div class=" px-10 py-10 max-w-md m-auto lg:col-span-2 mt-20 mb-20 shadow-xl rounded-xl lg:mt-10 md:shadow-xl md:rounded-xl lg:shadow-none lg:rounded-none lg:w-full lg:mb-10 lg:px-5 lg:pt-5 lg:pb-5 lg:max-w-lg bg-white">
        <h1 class="mt-5 font-bold text-lg lg:mt-7">Spark Max Controller Holder</h1>
        <h1 class="font-bold text-lg text-gray-600">holds spark maxes</h1>
        <h1 class="text-lg text-gray-600 text-justify pt-2"></h1>
      </div>

      <div class="hidden relative lg:block  lg:col-span-3">
        <img class="absolute inset-0 w-full h-full object-cover object-center" src="/spark_max_holder.png" alt="Ad- woman on a beach" />
      </div>
    </div> */}

      <div class="sm:mb-10 lg:grid lg:grid-cols-5 md:grid-cols-none md:bg-gray-300 bg-gray-300 lg:bg-white lg:h-full">
        <div class=" px-10 py-10 max-w-md m-auto lg:col-span-2 mt-20 mb-20 shadow-xl rounded-xl lg:mt-10 md:shadow-xl md:rounded-xl lg:shadow-none lg:rounded-none lg:w-full lg:mb-10 lg:px-5 lg:pt-5 lg:pb-5 lg:max-w-lg bg-white">
          <h1 class="mt-5 font-bold text-lg lg:mt-7">RoboRIO</h1>
          <h1 class="font-bold text-lg text-gray-600">
            The brain of the robot
          </h1>
          <h1 class="text-lg text-gray-600 text-justify pt-2">
            The roboRIO is the robot's processor and executor for the code that
            is written for the bot - it runs the code and lets the robot run.
          </h1>
        </div>

        <div class="hidden relative lg:block  lg:col-span-3">
          <img
            class="absolute inset-0 w-full h-full object-cover object-center"
            src="/images/roborio.png"
            alt="Ad- woman on a beach"
          />
        </div>
      </div>

      <div class="sm:mb-10 lg:grid lg:grid-cols-5 md:grid-cols-none md:bg-gray-300 bg-gray-300 lg:bg-white lg:h-full">
        <div class=" px-10 py-10 max-w-md m-auto lg:col-span-2 mt-20 mb-20 shadow-xl rounded-xl lg:mt-10 md:shadow-xl md:rounded-xl lg:shadow-none lg:rounded-none lg:w-full lg:mb-10 lg:px-5 lg:pt-5 lg:pb-5 lg:max-w-lg bg-white">
          <h1 class="mt-5 font-bold text-lg lg:mt-7">Network Switch</h1>
          <h1 class="font-bold text-lg text-gray-600">Device Connection</h1>
          <h1 class="text-lg text-gray-600 text-justify pt-2">
            The Network switch on the robot adds more connections to the
            ethernet from the roboRIO and allows for more devices to be added
            other that the D-Link. these devices include the Orange Pi computer
            on our 2023 robot.
          </h1>
        </div>

        <div class="hidden relative lg:block  lg:col-span-3">
          <img
            class="absolute inset-0 w-full h-full object-cover object-center"
            src="/images/network_switch.png"
            alt="Ad- woman on a beach"
          />
        </div>
      </div>

      <div className>
        <div className="bg-gray-800">
          <section className="mx-auto container w-full py-36">
            <div className="flex flex-col justify-center items-center">
              <div className="md:text-5xl text-4xl font-black text-center text-white leading-snug lg:w-3/4">
                <h2>Download the Chassis files right here</h2>
              </div>
              <div className="flex justify-center items-center mt-16">
                <Link href="https://cad.onshape.com/documents/dd8085dca99e28884e84a713/w/bb9cd602ce1b7fb7c0942530/e/f84488cedfbf0c2488ecfde9">
                  <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-800 hover:opacity-90 w-64 h-12 text-lg text-white bg-gradient-to-l from-indigo-600 to-indigo-700 rounded">
                    Download the full chassis
                  </button>
                </Link>
              </div>
              <div className="flex justify-center items-center mt-16">
                <Link href="https://cad.onshape.com/documents/8106fc3e69b2bc1d8a282a07/w/57b89de494cc326c6ada2d2c/e/bd44b9ee931a2e60d9848798">
                  <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-800 hover:opacity-90 w-64 h-12 text-lg text-white bg-gradient-to-l from-indigo-600 to-indigo-700 rounded">
                    Download the rebar piece
                  </button>
                </Link>
              </div>
              <div className="flex justify-center items-center mt-16">
                <Link href="https://cad.onshape.com/documents/4111aa5b8758cd7f2cb845e0/w/8c8fffdaa2f66ec14e1fbce9/e/c39285af3f30920ae53d74a5">
                  <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-800 hover:opacity-90 w-64 h-12 text-lg text-white bg-gradient-to-l from-indigo-600 to-indigo-700 rounded">
                    Download the swerve module
                  </button>
                </Link>
              </div>
              <div className="flex justify-center items-center mt-16">
                <Link href="https://cad.onshape.com/documents/4c1cf670ca3b0accfec3b222/w/510b03529efc94c4eba58819/e/02e2f508ca78fa43bf6c2185">
                  <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-800 hover:opacity-90 w-72 h-12 text-lg text-white bg-gradient-to-l from-indigo-600 to-indigo-700 rounded">
                    Download the mini power module
                  </button>
                </Link>
              </div>
              <div className="flex justify-center items-center mt-16">
                <Link href="https://cad.onshape.com/documents/3e478101114d8eb04bb6a072/w/252e874626bf93b071512161/e/567da560fbc8cc1832723e58">
                  <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-800 hover:opacity-90 w-64 h-12 text-lg text-white bg-gradient-to-l from-indigo-600 to-indigo-700 rounded">
                    Download the pneumatics hub
                  </button>
                </Link>
              </div>
              <div className="flex justify-center items-center mt-16">
                <Link href="https://cad.onshape.com/documents/d805c78b6f77d9f1c2b84e56/w/8f898445a2c77b0025c625c2/e/cc2386464d350c10287ed9a2">
                  <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-800 hover:opacity-90 w-64 h-12 text-lg text-white bg-gradient-to-l from-indigo-600 to-indigo-700 rounded">
                    Download power distributor
                  </button>
                </Link>
              </div>
              <div className="flex justify-center items-center mt-16">
                <Link href="https://cad.onshape.com/documents/e725bcd6d97a5fc54e94bee2/w/d7fccc801cf7a963e05a4c30/e/428a3fb230f7a18bae60308a">
                  <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-800 hover:opacity-90 w-full h-12 text-lg text-white bg-gradient-to-l from-indigo-600 to-indigo-700 rounded">
                    Download the spark max motor controller holder
                  </button>
                </Link>
              </div>
              <div className="flex justify-center items-center mt-16">
                <Link href="https://cad.onshape.com/documents/d5fb97e7010c9d06e28a7644/w/fca98f8aaffc73b17437f82e/e/b50bdf97196c27c2a4baaf84">
                  <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-800 hover:opacity-90 w-64 h-12 text-lg text-white bg-gradient-to-l from-indigo-600 to-indigo-700 rounded">
                    Download the roboRIO
                  </button>
                </Link>
              </div>
              <div className="flex justify-center items-center mt-16">
                <Link href="https://cad.onshape.com/documents/95be31e2db73af2bc457af62/w/1fe236f39dd132d39f999d66/e/cfef14554d6ff59256e46189">
                  <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-800 hover:opacity-90 w-64 h-12 text-lg text-white bg-gradient-to-l from-indigo-600 to-indigo-700 rounded">
                    Download the network switch
                  </button>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default CAD
