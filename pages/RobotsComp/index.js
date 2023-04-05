import React from 'react';

function RobotsComp() {
  return (
    <div>
      <section className="py-8 bg-gray-800 text-gray-100">
        <div className="container p-4 mx-auto space-y-16 sm:p-10">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold leading-none sm:text-5xl">
              Meet the Competition Robots
            </h3>
            <p className="max-w-2xl dark:text-gray-400">
              Meet some of the robots that our team has created throughout the
              years. These Robots were created for the FIRST Robotics
              Competition.
            </p>
          </div>
        </div>
      </section>
      <div className="bg-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 py-12 px-4 sm:px-12">
          {/* 2020 Robot */}
          <div className="rounded-lg shadow-lg bg-white max-w-sm">
            <a href="#!">
              <img className="rounded-t-lg" src="images/2020.png" alt="" />
            </a>
            <div className="p-6">
              <h5 className="text-gray-900 text-xl font-medium mb-2">
                2020 Robot
              </h5>
              <p className="text-gray-700 text-base mb-4">Created 2019-2020</p>
            </div>
          </div>

          {/* 2022 Robot */}
          <div className="rounded-lg shadow-lg bg-white max-w-sm">
            <a href="#!">
              <img className="rounded-t-lg" src="images/2021.png" alt="" />
            </a>
            <div className="p-6">
              <h5 className="text-gray-900 text-xl font-medium mb-2">
                2022 Robot
              </h5>
              <p className="text-gray-700 text-base mb-4">Created 2021-2022</p>
            </div>
          </div>

          {/* 2023 Robot */}
          <div className="rounded-lg shadow-lg bg-white max-w-sm">
            <a href="#!">
              <img
                className="rounded-t-lg"
                src="images/2023.jpeg"
                alt="Coming soon"
              />
            </a>
            <div className="p-6">
              <h5 className="text-gray-900 text-xl font-medium mb-2">
                2023 Robot
              </h5>
              <p className="text-gray-700 text-base mb-4">Created 2022-2023</p>
            </div>
          </div>

          {/* 2016 Robot */}
          <div className="rounded-lg shadow-lg bg-white max-w-sm">
            <a href="#!">
              <img className="rounded-t-lg" src="images/2016.png" alt="" />
            </a>
            <div className="p-6">
              <h5 className="text-gray-900 text-xl font-medium mb-2">
                2016 Robot
              </h5>
              <p className="text-gray-700 text-base mb-4">Created 2015-2016</p>
            </div>
          </div>

          {/* 2019 Robot */}
          <div className="rounded-lg shadow-lg bg-white max-w-sm">
            <a href="#!">
              <img className="rounded-t-lg" src="images/2019.png" alt="" />
            </a>
            <div className="p-6">
              <h5 className="text-gray-900 text-xl font-medium mb-2">
                2019 Robot
              </h5>
              <p className="text-gray-700 text-base mb-4">Created 2018-2019</p>
            </div>
          </div>

          {/* 2017 Robot */}
          <div className="rounded-lg shadow-lg bg-white max-w-sm">
            <a href="#!">
              <img className="rounded-t-lg" src="images/2017.png" alt="" />
            </a>
            <div className="p-6">
              <h5 className="text-gray-900 text-xl font-medium mb-2">
                2017 Robot
              </h5>
              <p className="text-gray-700 text-base mb-4">Created 2016-2017</p>
            </div>
          </div>

          {/* 2018 Robot */}
          <div className="rounded-lg shadow-lg bg-white max-w-sm">
            <a href="#!">
              <img className="rounded-t-lg" src="images/2018.png" alt="" />
            </a>
            <div className="p-6">
              <h5 className="text-gray-900 text-xl font-medium mb-2">
                2018 Robot
              </h5>
              <p className="text-gray-700 text-base mb-4">Created 2017-2018</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RobotsComp

