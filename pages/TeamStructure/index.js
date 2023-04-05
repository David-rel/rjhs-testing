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
    name: 'John Doe',
    imageUrl: '/images/john-doe.jpg',
    description:
      'John Doe is the CE and founder of the companyd founder of the companyd founder of the companyd founder of the companyd founder of the companyd founder of the companyd founder of the company.'
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
