import React from 'react'
import { useUser } from '@supabase/auth-helpers-react'

function About() {
  const user = useUser()

  return (
    <div className="bg-gray-800">
      <div className="2xl:container 2xl:mx-auto lg:py-12 lg:px-20 md:py-12 md:px-6 py-9 px-4 bg-gray-800">
        <div className="w-full text-center">
          <h2 className="w-full font-bold text-white lg:text-6xl text-3xl lg:leading-10 leading-9 mt-2">
            Our Goal
          </h2>
          <p className="font-normal text-base leading-6 text-gray-400 mt-12">
            As a FIRST Robotics team, our goal is to design and build amazing
            robots for the FIRST Robotics Competition, while also helping
            students prepare for the future. We have the experience and skills
            to create robots that are tailored to the unique challenges in
            FIRST, and working on these projects gives our students the chance
            to develop valuable skills and knowledge. By designing and building
            robots, students gain hands-on experience with technology, critical
            thinking, problem-solving, and teamwork.
          </p>
          <p className="font-normal text-base leading-6 text-gray-400 mt-4">
            We're always looking for new and innovative ways to make our robots
            better. And our goal is to compete and succeed with creative robots
            and solutions, but our main focus is always helping students grow
            and succeed.
          </p>
          <p className="font-normal text-base leading-6 text-gray-400 mt-4">
            Take a look around our website to learn more about our team and the
            amazing robots we've built in the past.
          </p>
        </div>

        <div className="lg:mt-14 sm:mt-10 mt-12">
          <img
            className="lg:block hidden w-full rounded-lg"
            src="./DSC_3953-01.jpeg"
            alt="Group of people Chilling"
          />
          <img
            className="lg:hidden sm:block hidden w-full rounded-lg"
            src="./DSC_3953-01.jpeg"
            alt="Group of people Chilling"
          />
          <img
            className="sm:hidden block w-full rounded-lg"
            src="./DSC_3953-01.jpeg"
            alt="Group of people Chilling"
          />
        </div>

        <div className="lg:mt-16 sm:mt-12 mt-16 flex lg:flex-row justify-between items-center flex-col lg:gap-8 gap-12">
          <div className="w-full xl:w-5/12 lg:w-6/12">
            <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-white text-center">
              Our Story
            </h2>

            <>
              <p className="font-normal text-base leading-6 text-gray-400 mt-6 text-center">
                RJ Robotics started not even with a robotics club. It started
                when 2 friends were in a Aerospace club. They then came up with
                the idea to start a robotics club in their own garage. A few
                years later It came to Regis in 2010. Our first ever competition
                was in 2011. It was a tough few years as they get the resources,
                money, and mentors to work but in the end they got it. There was
                about 20 students and 2 mentors during this time.{' '}
              </p>
              <p className="font-normal text-base leading-6 text-gray-400 mt-6 text-center">
                Today our team is stronger than ever before. We have 40+ members
                now and a lot of amazing mentors. We strive to win every
                competition we attend and work hard every day to build even
                better robots than the year before. Our team has grown
                significantly and many more Leads, Co-leads, mentors, and other
                team members all make up this amazing team of ours.
              </p>
            </>
          </div>
          <div className="lg:flex items-center w-full lg:w-1/2 ">
            <img
              className="lg:block hidden w-full rounded-lg"
              src="./DSC_3909-01.jpeg"
              alt="people discussing on board"
            />
            <img
              className="lg:hidden sm:block hidden w-full h-3/4 rounded-lg"
              src="./DSC_3909-01.jpeg"
              alt="people discussing on board"
            />
            <img
              className="sm:hidden block w-full rounded-lg"
              src="./DSC_3909-01.jpeg"
              alt="people discussing on board"
            />
          </div>
        </div>

        <div className="lg:mt-16 sm:mt-12 mt-16 flex items-center lg:flex-row justify-between flex-col lg:gap-8 gap-12">
          <div className="lg:flex items-center w-full lg:w-1/2">
            <img
              className="lg:block hidden w-full rounded-lg"
              src="./photo.png"
              alt="people discussing on board"
            />
            <img
              className="lg:hidden sm:block hidden w-full h-3/4 rounded-lg"
              src="./photo.png"
              alt="people discussing on board"
            />
            <img
              className="sm:hidden block w-full rounded-lg"
              src="./photo.png"
              alt="people discussing on board"
            />
          </div>
          <div className="w-full xl:w-5/12 lg:w-6/12">
            <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-white text-center">
              FIRST Robotics
            </h2>
            <p className="font-normal lg:text-lg text-base leading-6 text-gray-400 mt-6 text-center">
              FIRST Robotics was founded in 1989 by inventor and entrepreneur
              Dean Kamen. The organization aims to inspire students in STEM
              fields through its robotics competition program. The competition
              tasks teams of high school students to design, build, and program
              robots to compete in various challenges, fostering teamwork,
              innovation, and a love of STEM. FIRST Robotics has grown to become
              a global organization with thousands of participating teams, and
              has become an important platform for promoting STEM education and
              careers.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
