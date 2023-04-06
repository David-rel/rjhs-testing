import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function TeamStructure() {
  const [screenWidth, setScreenWidth] = useState(null)

  useEffect(() => {
    setScreenWidth(window.innerWidth)
    window.addEventListener('resize', () => setScreenWidth(window.innerWidth))

    return () => {
      window.removeEventListener('resize', () =>
        setScreenWidth(window.innerWidth)
      )
    }
  }, [])

  return (
    <>
    

      <div className="bg-gradient-to-r from-red-500 via-white to-red-500 min-h-screen text-black">
        <header className="p-5 text-4xl font-bold">Our Amazing Team</header>

        <section className="flex flex-wrap justify-center gap-5 p-5">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} member={member} screenWidth={screenWidth} />
          ))}
        </section>
      </div>
    </>
  )
}

const teamMembers = [
  // Add your team members here.
  // Example:
  // ... (continue from previous code snippet)
  {
    name: 'Build',
    imageUrl: '/images/IMG_7949.JPG',
    description: 'Builds the robot, including the chassis, manipulator, and other mechanisms. They also work on the robot’s bumpers and other safety features. They also build out the game pieces.'
  },
  {
    name: 'Electrical',
    imageUrl: '/images/IMG_7812.JPG',
    description: 'Assembles and wires the robots electrical and pneumatic systems. They also work on the robot’s control system, which includes the radio, roboRIO, and motor controllers.'
  },
  { 
    name: 'Programming',
    imageUrl: '/images/IMG_3987.jpg',
    description: 'Programming the robot is an annual task, which includes autonomous code and advanced vision systems to make drive teams job as easy as possible.'
  },
  {
    name: 'CAD',
    imageUrl: '/images/IMG_7824.JPG',
    description: 'Using OnShape modeling software, the Hardware Design team CADs the robot each year to design each iteration of our competition robot.'
  },
  {
    name: 'Strategy',
    imageUrl: '/images/IMG_3999.JPG',
    description: 'From kickoff to alliance selection, strategy is the mastermind behind how the game works and who our allies will be.'
  },
  {
    name: 'Drive',
    imageUrl: '/images/IMG_7835.JPG',
    description: 'The drive team is responsible for driving the robot during matches making sure that they understand the rules and can communicate with the rest of the team.'
  },
  {
    name: 'Skunkworks',
    imageUrl: '/images/IMG_7808.JPG',
    description: 'Skunkworks is the summer team that works on the robot during the off-season. They also work on outreach and other projects that the team is working on.'
  }
]

function TeamMember({ member, screenWidth }) {
  const cardWidth =
    screenWidth >= 1920
      ? 'w-1/4'
      : screenWidth >= 1280
      ? 'w-1/3'
      : screenWidth >= 768
      ? 'w-1/2'
      : 'w-full'
  const cardHeight =
    screenWidth >= 1280 ? 'h-96' : screenWidth >= 768 ? 'h-80' : 'h-96'

  return (
    <div
      className={`relative ${cardWidth} ${cardHeight} rounded-lg overflow-hidden shadow-lg`}
    >
      <Image
        src={member.imageUrl}
        alt={member.name}
        layout="fill"
        objectFit="cover"
      />

      <div className="absolute bottom-0 w-full bg-white opacity-90">
        <div className="p-4">
          <h3 className="text-xl font-semibold">{member.name}</h3>
          <p className="text-sm mt-2">{member.description}</p>
        </div>
      </div>
    </div>
  )
}
