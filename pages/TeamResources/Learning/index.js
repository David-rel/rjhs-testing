import Head from 'next/head'
import Link from 'next/link'
import Sidebar from '../../../components/sidebar'

export default function Home() {
  const categories = [
    {
      title: 'Build',
      imageUrl: '/images/IMG_7949.JPG',
      url: '/TeamResources/Learning/Build'
    },
    {
      title: 'Electrical',
      imageUrl: '/images/IMG_7812.JPG',
      url: '/TeamResources/Learning/Electrical'
    },
    {
      title: 'Programming',
      imageUrl: '/images/IMG_3987.jpg',
      url: '/TeamResources/Learning/Programming'
    },
    {
      title: 'CAD',
      imageUrl: '/images/IMG_7824.JPG',
      url: '/images/TeamResources/Learning/CAD'
    }
  ]

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1">
        <Head>
          <title>Learning Page</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="h-full flex flex-wrap">
          {categories.map((category, index) => (
            <Link href={category.url} key={index} legacyBehavior>
              <a
                className="w-1/2 h-1/2 flex flex-grow bg-cover bg-center text-white items-center justify-center border-2 border-black"
                style={{
                  backgroundImage: `url(${category.imageUrl})`
                }}
              >
                <h2 className="text-4xl font-bold text-center">
                  {category.title}
                </h2>
              </a>
            </Link>
          ))}
        </main>
      </div>
    </div>
  )
}
