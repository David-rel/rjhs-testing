import React from 'react';
import ChatPopup from '../../components/ChatPopup';

function Robots() {
  return (
    <div>
      <ChatPopup />
      <section className="py-8 bg-gray-800 text-gray-100">
        <div className="container p-4 mx-auto space-y-16 sm:p-10">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold leading-none sm:text-5xl">
              Meet the School Robots
            </h3>
            <p className="max-w-2xl dark:text-gray-400">
              Meet some of the robots that our team has created throughout the
              years. These Robots were created for different school events.
            </p>
          </div>
        </div>
      </section>
      <div className="bg-gray-800">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
          {/* Robot 1 */}
          <div className="rounded-lg shadow-lg bg-white">
            <a href="#!">
              <img className="rounded-t-lg" src="images/smll.png" alt="" />
            </a>

            <div className="p-6">
              <h5 className="text-gray-900 text-xl font-medium mb-2">
                Herby Robot
              </h5>

              <p className="text-gray-700 text-base mb-4">Created 2021-2023</p>

              <p className="text-gray-700 text-base mb-4">
                Built as a testing robot for practice.
              </p>
            </div>
          </div>

          {/* Robot 2 */}
          <div className="rounded-lg shadow-lg bg-white">
            <a href="#!">
              <img className="rounded-t-lg" src="images/shirt.png" alt="" />
            </a>

            <div className="p-6">
              <h5 className="text-gray-900 text-xl font-medium mb-2">
                T-Shirt Cannon Robot
              </h5>

              <p className="text-gray-700 text-base mb-4">Created 2016-2017</p>

              <p className="text-gray-700 text-base mb-4">
                Built for use during school events.
              </p>
            </div>
          </div>

          {/* Robot 3 */}
          <div className="rounded-lg shadow-lg bg-white">
            <a href="#!">
              <img className="rounded-t-lg" src="images/swerve.png" alt="" />
            </a>

            <div className="p-6">
              <h5 className="text-gray-900 text-xl font-medium mb-2">
                Swerve Bot
              </h5>

              <p className="text-gray-700 text-base mb-4">Created 2022-2023</p>

              <p className="text-gray-700 text-base mb-4">
                Built to prepare for 2023 season in which we planned to use
                swerve drive for the first time.
              </p>
            </div>
          </div>

          {/* Robot 4 */}
          <div className="rounded-lg shadow-lg bg-white">
            <a href="#!">
              <img className="rounded-t-lg" src="images/dig.png" alt="" />
            </a>

            <div className="p-6">
              <h5 className="text-gray-900 text-xl font-medium mb-2">
                Dig Robot
              </h5>

              <p className="text-gray-700 text-base mb-4">Created 2021-2022</p>

              <p className="text-gray-700 text-base mb-4">
                Built for the groundbreaking event for our new Science and
                Innovation Center.
              </p>
            </div>
          </div>

          {/* Robot 5 */}
          <div className="rounded-lg shadow-lg bg-white">
            <a href="#!">
              <img className="rounded-t-lg" src="images/tables.png" alt="" />
            </a>

            <div className="p-6">
              <h5 className="text-gray-900 text-xl font-medium mb-2">
                Pot Luck Bot
              </h5>

              <p className="text-gray-700 text-base mb-4">Created 2022-2023</p>

              <p className="text-gray-700 text-base mb-4">
                Built as a practice bot for new students and as a tray for food
                during a team potluck.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Robots

