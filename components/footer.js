import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function footer() {
  return (
    <div className="bg-gray-700 px-10 py-10 text-center">
      <>
        <div className=" bg-linear-pink-invert pb-12 bg-gray-700">
          <div className="mx-auto container flex flex-col items-center justify-center">
            <div>
              <Image
                src={'/images/download.jpeg'}
                alt="Home Page"
                className="rounded-lg"
                width={175}
                height={100}
              />
            </div>

            <div className="text-black flex flex-col md:items-center f-f-l  pt-6">
              <h1 className="text-2xl font-black">RJ Robotics, 3729</h1>

              <div className="md:flex items-center mt-4 text-base text-color f-f-l">
                <h2 className=" md:mr-6 pb-4 md:py-0 cursor-pointer">
                  6300 S Lewiston Way, Aurora, CO 80016
                </h2>
                <h2 className=" md:mr-6 pb-4 md:py-0 cursor-pointer">
                  (303) 269-8000
                </h2>
                <h2 className=" md:mr-6 pb-4 md:py-0 cursor-pointer">
                  email: mmarchand@regisjesuit.com
                </h2>
              </div>

              <div className=" text-base text-color f-f-l">
                <ul className="md:flex items-center">
                  <Link
                    href="/"
                    className=" md:mr-6 cursor-pointer pt-4 lg:py-0"
                  >
                    Home
                  </Link>
                  <br />
                  <br />
                  <Link
                    href="/About"
                    className=" md:mr-6 cursor-pointer pt-4 lg:py-0"
                  >
                    About
                  </Link>
                  <br />
                  <br />
                  <Link
                    href="/Robots"
                    className=" md:mr-6 cursor-pointer pt-4 lg:py-0"
                  >
                    School Robots
                  </Link>
                  <br />
                  <br />
                  <Link
                    href="/Sponsors"
                    className=" md:mr-6 cursor-pointer pt-4 lg:py-0"
                  >
                    Sponsors
                  </Link>
                  <br />
                  <br />
                  <Link
                    href="/RobotsComp"
                    className=" md:mr-6 cursor-pointer pt-4 lg:py-0"
                  >
                    Competition Scouter
                  </Link>
                  <br />
                  <br />
                  <Link
                    href="/TeamStructure"
                    className=" md:mr-6 cursor-pointer pt-4 lg:py-0"
                  >
                    Team Structure
                  </Link>
                  <br />
                  <br />
                  <Link
                    href="/HowTo"
                    className=" md:mr-6 cursor-pointer pt-4 lg:py-0"
                  >
                    Creation Process
                  </Link>
                  <br />
                  <br />
                  <Link
                    href="/Scouter"
                    className=" md:mr-6 cursor-pointer pt-4 lg:py-0"
                  >
                    Scouter
                  </Link>
                  <br />
                  <br />
                  <Link
                    href="/FIRST"
                    className=" md:mr-6 cursor-pointer pt-4 lg:py-0"
                  >
                    FIRST
                  </Link>
                  <br />
                  <br />
                  <Link
                    href="/Contact"
                    className=" md:mr-6 cursor-pointer pt-4 lg:py-0"
                  >
                    Contact
                  </Link>
                  <br />
                  <br />
                  <Link
                    href="/Calendar"
                    className=" md:mr-6 cursor-pointer pt-4 lg:py-0"
                  >
                    Calendar
                  </Link>
                  <br />
                  <br />
                  <Link
                    href="/TeamResources"
                    className=" md:mr-6 cursor-pointer pt-4 lg:py-0"
                  >
                    Team Resources
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
      WEBSITE DISCLAIMER: <br />
      This is the team website for Regis Jesuit’s Robotics Team. The information
      provided by RJ’s Robotics Team ("we," "us," or "our") on (insert website)
      (the "Site") is for general informational purposes only. We are not an
      official Site of Regis Jesuit High School and all content of this Site is
      managed, edited and created by RJ’s Robotics Team members and/or coaches.
      All information on the Site is provided in good faith, however we make no
      representation or warranty of any kind, express or implied, regarding the
      accuracy, adequacy, validity, reliability, availability, or completeness
      of any information on the Site. UNDER NO CIRCUMSTANCE SHALL WE HAVE ANY
      LIABILITY TO YOU FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT
      OF THE USE OF THE SITE OR RELIANCE ON ANY INFORMATION PROVIDED ON THE
      SITE. YOUR USE OF THE SITE AND YOUR RELIANCE ON ANY INFORMATION ON THE
      SITE IS SOLELY AT YOUR OWN RISK. <br />
      -------- <br />
      EXTERNAL LINKS DISCLAIMER: <br />
      The Site may contain (or you may be sent through the Site) links to other
      websites or content belonging to or originating from third parties or
      links to websites and features in banners or other advertising. Such
      external links are not investigated, monitored, or checked for accuracy,
      adequacy, validity, reliability, availability, or completeness by us. WE
      DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR THE
      ACCURACY OR RELIABILITY OF ANY INFORMATION OFFERED BY THIRD-PARTY WEBSITES
      LINKED THROUGH THE SITE OR ANY WEBSITE OR FEATURE LINKED IN ANY BANNER OR
      OTHER ADVERTISING. WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE
      FOR MONITORING ANY TRANSACTION BETWEEN YOU AND THIRD-PARTY PROVIDERS OF
      PRODUCTS OR SERVICES. <br />
      -------- <br />
      TESTIMONIALS DISCLAIMER: <br />
      The Site may contain testimonials by team members. These testimonials
      reflect the real-life experiences and opinions of such users. However, the
      experiences are personal to those particular users, and may not
      necessarily be representative of all users. We do not claim, and you
      should not assume, that all users will have the same experiences. The
      testimonials on the Site are submitted in various forms such as text,
      audio and/or video, and are reviewed by us before being posted. They
      appear on the Site verbatim as given by the users, except for the
      correction of grammar or typing errors. Some testimonials may have been
      shortened for the sake of brevity where the full testimonial contained
      extraneous information not relevant to the general public. The views and
      opinions contained in the testimonials belong solely to the individual
      user and do not necessarily reflect the views and opinions or the Robotics
      team or of Regis Jesuit High School.
    </div>
  )
}

export default footer
