import React from 'react'
import ChatPopup from '../../components/ChatPopup'



function FIRST() {
  return (
    <div>
      <ChatPopup />
      <div className="bg-gray-700">
        <section class="relative bg-[url(../public/images/open-graph-first-logo.png)] bg-cover bg-center bg-no-repeat">
          <div class="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"></div>

          <div class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
            <div class="max-w-xl text-center sm:text-left">
              <h1 class="text-3xl font-extrabold sm:text-5xl">
                FIRST
                <strong class="block font-extrabold text-rose-700">
                  Our Work at the FIRST Robotics Competition
                </strong>
              </h1>
            </div>
          </div>
        </section>

        <div className="lg:mt-16 sm:mt-12 mt-16 flex px-8 lg:flex-row justify-between items-center flex-col lg:gap-8 gap-12">
          <div className="w-full xl:w-5/12 lg:w-6/12">
            <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-white text-center">
              FIRST
            </h2>
            <p className="font-normal text-sm leading-6 text-gray-400 mt-6 text-center">
              {' '}
              RJHS Robotics develops robots to compete in the FIRST Robotics
              Competition (FRC), which is part of FIRST (For Inspiration and
              Recognition of Science and Technology). FIRST was founded by Dean
              Kamen, best known for inventing the Segway Personal Transporter.
            </p>
            <p className="font-normal text-sm leading-6 text-gray-400 mt-6 text-center">
              {' '}
              Dean Kamen is an inventor, entrepreneur, and tireless advocate for
              science and technology. His passion and determination to help
              young people discover the excitement and rewards of science and
              technology are the cornerstones of FIRST. FIRST was founded in
              1989 to inspire young people's interest and participation in
              science and technology.
            </p>
          </div>
          <div className="lg:flex w-full lg:w-1/2 ">
            <img
              className="lg:block hidden w-full rounded-lg"
              src="./images/DSC_3014-01.jpeg"
              alt="people discussing on board"
            />
            <img
              className="lg:hidden sm:block hidden w-full h-3/4 rounded-lg"
              src="./images/DSC_3014-01.jpeg"
              alt="people discussing on board"
            />
            <img
              className="sm:hidden block w-full rounded-lg"
              src="./images/DSC_3014-01.jpeg"
              alt="people discussing on board"
            />
          </div>
        </div>

        <div className="lg:mt-16 sm:mt-12 mt-16 flex items-center px-8 lg:flex-row justify-between flex-col lg:gap-8 gap-12">
          <div className="lg:flex items-center w-full lg:w-1/2">
            <img
              className="lg:block hidden w-full rounded-lg"
              src="./images/DSC_3927-01.jpeg"
              alt="people discussing on board"
            />
            <img
              className="lg:hidden sm:block hidden w-full h-3/4 rounded-lg"
              src="./images/DSC_3927-01.jpeg"
              alt="people discussing on board"
            />
            <img
              className="sm:hidden block w-full rounded-lg"
              src="./images/DSC_3927-01.jpeg"
              alt="people discussing on board"
            />
          </div>
          <div className="w-full xl:w-5/12 lg:w-6/12">
            <p className="font-normal text-sm leading-6 text-gray-400 mt-6 text-center">
              {' '}
              Based in Manchester, NH, the 501 (c) (3) non-profit public charity
              designs accessible, innovative programs that motivate young people
              to pursue education and career opportunities in science,
              technology, engineering, and math, while building self-confidence,
              knowledge, and life skills.
            </p>
            <p className="font-normal text-sm leading-6 text-gray-400 mt-6 mb-6 text-center">
              {' '}
              The FIRST Robotics Competition has been dubbed the "The varsity
              Sport for the Mind." What's it about? How about an challenging
              opportunity to:{' '}
            </p>

            <ul className="list-disc text-gray-400 pl-16 text-sm">
              <li>Raise funds.</li>
              <li>Design a team "brand."</li>
              <li>Hone teamwork skills.</li>
              <li>
                Design, build and program robots to perform prescribed tasks
                against a field of competitors.
              </li>
            </ul>

            <p className="font-normal text-sm leading-6 text-gray-400 mt-6 text-center">
              It’s as close to "real-world engineering" as a student can get.
              Volunteer professional mentors lend their time and talents to
              guide each team.{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FIRST
