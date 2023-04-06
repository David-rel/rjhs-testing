import React from 'react'
import ChatPopup from '../../components/ChatPopup'


function Sponsors() {
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
      Sponsors here
    </div>
  )
}

export default Sponsors
