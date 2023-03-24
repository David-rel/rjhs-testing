import React from 'react'
import Link from 'next/link'
import ReactPlayer from 'react-player'

function Programming() {
  return (
    <div className="bg-gray-800">
      <>
        <div
          className="py-20 2xl:px-0 lg:px-12 px-4 2xl:mx-auto 2xl:container bg-gray-800"
          style={{ height: 1000 }}
        >
          <div className="md:flex items-center justify-between w-full bg-gray-800">
            <div className="xl:w-1/3 md:w-1/2 w-full">
              <h1
                role="heading"
                className="focus:outline-none md:w-60 font-bold md:text-6xl text-4xl leading-tight text-gray-200"
              >
                Programming<span className="font-normal italic"> Code it </span>
              </h1>
              <p
                role="contentinfo"
                className="focus:outline-none text-base leading-6 mt-8 text-gray-400 2xl:pr-24 xl:pr-0 pr-12"
              >
                This is where you will see how to code the robot after the
                electrical has been properly installed.
              </p>
            </div>
            <div className="xl:w-4/6 md:w-1/2 w-full xl:pl-48">
              <p
                role="contentinfo"
                className=" focus:outline-none text-base leading-6 mb-8 text-gray-400 md:mt-0 mt-10"
              >
                Take a look at the code overview. It may seem complicated right
                now, but if you take the time to read through it you will start
                to understand it. Don't be stressed, you got this!
              </p>
              <div className="w-full">
                <img
                  src="/cocde.png"
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
                    Robot container overview
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>

      <section>
        <div className="w-full relative pb-10 px-6 xl:px-0 bg-gray-800">
          <div className="lg:flex items-center relative z-10 container mx-auto bg-gray-800">
            <div className="w-full lg:w-1/2 h-full lg:pr-10 xl:pr-0 bg-gray-800">
              <div>
                <ReactPlayer url="https://youtu.be/bMJbHQ9nEYg" />
              </div>{' '}
            </div>
            <div
              role="contentinfo"
              className="w-full lg:w-1/2 h-96 text-center bg-gray-800"
            >
              <p
                tabIndex="0"
                className="text-rose-700 uppercase text-2xl mb-0 pl-20 bg-gray-800"
              >
                Programming Video
              </p>
              <h1
                tabIndex="0"
                className="text-rose-700 text-4xl lg:text-6xl font-black mb-8 pl-20"
              >
                Overview of the program
              </h1>
              <p tabIndex="0" className="text-gray-400 font-regular mb-8 pl-20">
                Here's a quick overview of some of the main resources of the
                code. This is not all you'll need to know, but it is a good
                start.
              </p>
            </div>
            <br />
          </div>
        </div>
      </section>

      <br />
      <br />
      <br />

      <section>
        <div className="w-full relative pb-10 px-6 xl:px-0 bg-gray-800">
          <div className="lg:flex items-center relative z-10 container mx-auto bg-gray-800">
            <div className="w-full lg:w-1/2 h-full lg:pr-10 xl:pr-0 bg-gray-800">
              <div>
                {/* <Image src=''  width={500} height={50}/> */}
                <img src="/WPILibDev.png" />
              </div>{' '}
            </div>
            <div
              role="contentinfo"
              className="w-full lg:w-1/2 h-96 text-center bg-gray-800"
            >
              <p
                tabIndex="0"
                className="text-rose-700 uppercase text-2xl mb-0 pl-20 bg-gray-800"
              >
                How to download what
              </p>
              <p tabIndex="0" className="text-gray-400 font-regular mb-8 pl-20">
                Download the WPILib library for Java and follow the steps to
                download it completely. Then git clone or download the package
                from our git repository and put it in your WPILib library
                editor.{' '}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="w-full relative pb-10 px-6 xl:px-0 bg-gray-800">
          <div className="lg:flex items-center relative z-10 container mx-auto bg-gray-800">
            <div
              role="contentinfo"
              className="w-full lg:w-1/2 h-96 text-center bg-gray-800"
            >
              <p
                tabIndex="0"
                className="text-rose-700 uppercase text-2xl mb-0 pl-20 bg-gray-800"
              >
                What you need to code yourself
              </p>
              <p tabIndex="0" className="text-gray-400 font-regular mb-8 pl-20">
                here
              </p>
            </div>
            <div className="w-full lg:w-1/2 h-full lg:pr-10 xl:pr-0 bg-gray-800">
              <div>
                <img class="h-full" src="/1.png" alt="Sample Image" />
              </div>{' '}
            </div>
          </div>
        </div>
      </section>

      <div className="md:text-5xl text-4xl font-black text-center text-white leading-snug">
        <h2>How the Code Works (Top 5 most important code functions)</h2>
      </div>

      <br />
      <br />

      <div class="flex h-screen justify-center items-center bg-gray-800 border border-gray-800">
        <div class="w-11/12">
          <div class="flex">
            <div class="w-8/12">
              <p class="text-4xl font-medium p-12 text-white">
                1. Resetting to absolute is one of the most important things as
                it ensures that the modules are not fighting.{' '}
              </p>
              <p class="text-gray-400 p-12"></p>
            </div>
            <div class="w-9/12">
              <img class="h-full" src="/1.png" alt="Sample Image" />
            </div>
          </div>
        </div>
      </div>

      <div class="flex h-screen justify-center items-center bg-gray-800 border border-gray-800">
        <div class="w-11/12">
          <div class="flex">
            <div class="w-8/12">
              <p class="text-4xl font-medium p-12 text-white">
                2. Field relative driving makes it a lot easier for the driver
                as they just have to worry about what they are looking at, not
                the robot’s point of view.
              </p>
              <p class="text-gray-400 p-12"> </p>
            </div>
            <div class="w-9/12">
              <img class="h-full" src="/2.png" alt="Sample Image" />
            </div>
          </div>
        </div>
      </div>

      <div class="flex h-screen justify-center items-center bg-gray-800 border border-gray-800">
        <div class="w-11/12">
          <div class="flex">
            <div class="w-8/12">
              <p class="text-4xl font-medium p-12 text-white">
                3. This is important because it makes it so the modules do not
                go back to facing straight every time the robot stops moving.
              </p>
              <p class="text-gray-400 p-12"> </p>
            </div>
            <div class="w-9/12">
              <img class="h-full" src="/3.png" alt="Sample Image" />
            </div>
          </div>
        </div>
      </div>

      <div class="flex h-screen justify-center items-center bg-gray-800 border border-gray-800">
        <div class="w-11/12">
          <div class="flex">
            <div class="w-8/12">
              <p class="text-4xl font-medium p-12 text-white">
                4. Logging is especially important because if something goes
                wrong in a match, the logging will allow you to figure out
                exactly what caused the issue and how you can fix it in the next
                match.
              </p>
              <p class="text-gray-400 p-12"> </p>
            </div>
            <div class="w-9/12">
              <img class="h-full" src="/4.png" alt="Sample Image" />
            </div>
          </div>
        </div>
      </div>

      <div class="flex h-screen justify-center items-center bg-gray-800 border border-gray-800">
        <div class="w-11/12">
          <div class="flex">
            <div class="w-8/12">
              <p class="text-4xl font-medium p-12 text-white">
                5. Don’t forget to use your conversion factor when setting the
                closed loop setpoint.
              </p>
              <p class="text-gray-400 p-12"> </p>
            </div>
            <div class="w-9/12">
              <img class="h-full" src="/5.png" alt="Sample Image" />
            </div>
          </div>
        </div>
      </div>

      <div className>
        <div className="bg-gray-800">
          <section className="mx-auto container w-full py-36">
            <div className="flex flex-col justify-center items-center">
              <div className="md:text-5xl text-4xl font-black text-center text-white leading-snug lg:w-3/4">
                <h2>Clone the Git Repository</h2>
              </div>
              <div className="flex justify-center items-center mt-16">
                <Link href="https://github.com/RegisJesuitRobotics/SkunkSwerve">
                  <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-800 hover:opacity-90 w-48 h-12 text-lg text-white bg-gradient-to-l from-indigo-600 to-indigo-700 rounded">
                    Right Now
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

export default Programming
