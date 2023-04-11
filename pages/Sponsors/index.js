import React from 'react'
import ChatPopup from '../../components/ChatPopup'


function PhotoCollage({ photos, description }) {
  return (
    <div>
      <ChatPopup />
      <section class="relative bg-[url(../public/images/DSC_3014-01.jpeg)] bg-cover bg-center bg-no-repeat">
        <div class="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"></div>

        <div class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div class="max-w-xl text-center sm:text-left">
            <h1 class="text-3xl font-extrabold sm:text-5xl">
              Thank You
              <strong class="block font-extrabold text-rose-700">
                To Our Amazing Sponsors
              </strong>
            </h1>

            <p class="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
              RJHS 3729 would not be able to do what we do without your help.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 gap-4">
          {photos.map((photo, index) => (
            <div key={index} className={`col-span-${index === 0 ? 2 : 1}`}>
              <img
                src={photo.url}
                alt={photo.alt}
                className="object-scale-down w-full h-64 rounded-md"
              />
            </div>
          ))}
        </div>
        <div className="mt-4">
          <p className="text-center text-xl font-semibold">{description}</p>
        </div>
      </div>
    </div>
  )
}

const photos = [
  { url: '/sponsors/armycorp.gif', alt: 'Photo 1' },
  { url: '/sponsors/lockkheed.png', alt: 'Photo 2' },
  { url: '/sponsors/raytheon.jpg', alt: 'Photo 3' },
  { url: '/sponsors/regis.png', alt: 'Photo 4' },
  { url: '/sponsors/zeta.jpg', alt: 'Photo 5' }
]

const description = 'Thank you to our sponsors for helping us complete our goals. If you or your company is interested in being a sponsor for the RJHS 3729 Raiders Contact Us'

const HomePage = () => {
  return (
    <div>
      <PhotoCollage photos={photos} description={description} />
    </div>
  )
}

export default HomePage
