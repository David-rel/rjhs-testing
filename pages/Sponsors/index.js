import React from 'react'
import ChatPopup from '../../components/ChatPopup'


function PhotoCollage() {
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-1">
            <div className="h-64 md:h-auto">
              <img
                src="/sponsors/armycorp.gif"
                alt="Photo 1"
                className="object-contain w-full h-full rounded-md"
              />
            </div>
          </div>
          <div>
            <div className="h-64 md:h-auto">
              <img
                src="/sponsors/lockkheed.png"
                alt="Photo 2"
                className="object-contain w-full h-full rounded-md"
              />
            </div>
          </div>
          <div>
            <div className="h-64 md:h-auto">
              <img
                src="/sponsors/raytheon.jpg"
                alt="Photo 3"
                className="object-contain w-full h-full rounded-md"
              />
            </div>
          </div>
          <div>
            <div className="h-64 md:h-auto">
              <img
                src="/sponsors/regis.png"
                alt="Photo 4"
                className="object-contain w-full h-full rounded-md"
              />
            </div>
          </div>
          <div>
            <div className="h-64 md:h-auto">
              <img
                src="/sponsors/zeta.jpg"
                alt="Photo 5"
                className="object-contain w-full h-full rounded-md"
              />
            </div>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-center text-xl font-semibold">
            Thank you to our sponsors for helping us complete our goals. If you
            or your company is interested in being a sponsor for the RJHS 3729
            Raiders Contact Us
          </p>
        </div>
      </div>
    </div>
  )
}





export default PhotoCollage
