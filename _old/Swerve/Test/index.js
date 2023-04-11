import React from 'react'


function Test() {
  return (
    <div>
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
                Testing <span className="font-normal italic"> Test it </span>
              </h1>
              <p
                role="contentinfo"
                className="focus:outline-none text-base leading-6 mt-8 text-gray-400 2xl:pr-24 xl:pr-0 pr-12"
              >
                This is where you will use the robot and see what you can do to
                improve it or find errors.
              </p>
            </div>
            <div className="xl:w-4/6 md:w-1/2 w-full xl:pl-48">
              <p
                role="contentinfo"
                className=" focus:outline-none text-base leading-6 mb-8 text-gray-400 md:mt-0 mt-10"
              >
                This is where you may find bugs in your process. Don't be
                discouraged, try and look up your problems or check out the Q
                and A's on the page to find the answer.
              </p>
              <div className="w-full">
                <img
                  src="/images/swerve.png"
                  alt="swerve drive"
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
                    Swerve being driven
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  )
}

export default Test
