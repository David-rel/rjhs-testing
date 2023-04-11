import Link from 'next/link'
import React from 'react'

export default function HowTo() {
  return (
    <div className="bg-gray-800">
      {/* */}
      <section class="relative bg-[url(../public/images/IMG_7835.JPG)] bg-cover bg-center bg-no-repeat">
        <div class="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"></div>

        <div class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div class="max-w-xl text-center sm:text-left">
            <h1 class="text-3xl font-extrabold sm:text-5xl">
              Creation Process
              <strong class="block font-extrabold text-rose-700">
                {/* possible extra text */}
              </strong>
            </h1>

            <p class="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
              {/* possible extra text but smaller */}
            </p>
          </div>
        </div>
      </section>

      <div class="flex justify-center py-12 px-12 space-x-12">
        {/* <div class="rounded-lg shadow-lg bg-white max-w-sm">
          <a href="#!">
            <img class="rounded-t-lg" src="images/swerve.png" alt="" />
          </a>

          <div class="p-6">
            <h5 class="text-gray-900 text-xl font-medium mb-2">
              Swerve Chassis
            </h5>

            <p class="text-gray-700 text-base mb-4">Created 2022-2023</p>

            <Link href="/HowTo/Swerve">
              <button
                type="button"
                class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                The Process
              </button>
            </Link>
          </div>
        </div> */}

      
      </div>
    </div>
  )
}
