import Image from 'next/image'
import React, { useState } from 'react'

function MyApp() {
  const levels = ['Qualifications', 'Double Eliminations', 'Finals']
  const Autodocks = [
    'Docked (not engaged)',
    'engaged',
    'attempt but failed',
    'not attempted',
  ]
  const Pickup = ['cones', 'cubes', 'both', 'none']
  const EndDock = [
    'Parked',
    'Docked not engaged',
    'attempted but failed',
    'not attempted',
  ]
  const Defense = [
    'Below Average',
    'average',
    'good',
    'excellent',
    'did not defend',
  ]
  const Drive = ['Not Effective', 'Average', 'Very Efficient', 'Not Observed']
  const Speed = ['1(slow)', '2', '3', '4', '5(fast)']

  const [TopCubeAuto, setTopCubeAuto] = useState(0)
  const [BottomCubeAuto, setBottomCubeAuto] = useState(0)
  const [MiddleCubeAuto, setMiddleCubeAuto] = useState(0)
  const [TopConeAuto, setTopConeAuto] = useState(0)
  const [MiddleConeAuto, setMiddleConeAuto] = useState(0)
  const [BottomConeAuto, setBottomConeAuto] = useState(0)

  const [TopCubeTeleop, setTopCubeTeleop] = useState(0)
  const [BottomCubeTeleop, setBottomCubeTeleop] = useState(0)
  const [MiddleCubeTeleop, setMiddleCubeTeleop] = useState(0)
  const [TopConeTeleop, setTopConeTeleop] = useState(0)
  const [MiddleConeTeleop, setMiddleConeTeleop] = useState(0)
  const [BottomConeTeleop, setBottomConeTeleop] = useState(0)

  const onOptionChangeHandlerLevels = (event) => {
    console.log('User Selected Value - ', event.target.value)
  }

  return (
    <>
      <div className="flex items-center justify-center">
        <div class="xl:w-10/12 w-full px-8">
          <div class="xl:px-24">
            <div class="lg:flex justify-between border-b border-gray-200 pb-16">
              <div>
                <h1 class="text-xl font-medium text-center text-gray-800">
                  Pre Game Info
                </h1>
                <br />
                <div class="md:flex items-center lg:ml-24 lg:mt-0 mt-4">
                  <div class="md:w-64">
                    <label
                      class="text-sm leading-none text-gray-800"
                      id="firstName"
                    >
                      Team #
                    </label>
                    <input
                      type="name"
                      tabindex="0"
                      class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                      placeholder="3729"
                    />
                  </div>
                  <div class="md:w-64 md:ml-12 md:mt-0 mt-4">
                    <label
                      class="text-sm leading-none text-gray-800"
                      id="lastName"
                    >
                      What side
                    </label>
                    <input
                      type="name"
                      tabindex="0"
                      class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                      placeholder="red/blue"
                    />
                  </div>
                </div>
                <div class="md:flex items-center lg:ml-24 mt-8">
                  <div class="md:w-64">
                    <label
                      class="text-sm leading-none text-gray-800"
                      id="emailAddress"
                    >
                      Match #
                    </label>
                    <input
                      type="email"
                      tabindex="0"
                      class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                      placeholder="1"
                    />
                  </div>
                  {/* <div class="md:w-64 md:ml-12 md:mt-0 mt-4">
                                        <label class="text-sm leading-none text-gray-800" id="phone" >Phone number</label>
                                        <input type="name" tabindex="0" class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="phone" placeholder="123-1234567" />
                                    </div> */}

                  <div class="md:flex items-center lg:ml-12 mt-8">
                    <select
                      onChange={onOptionChangeHandlerLevels}
                      class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-64 p-2.5"
                    >
                      <option>Match Level</option>
                      {levels.map((level, index) => {
                        return <option key={index}>{level}</option>
                      })}
                    </select>
                  </div>
                </div>
                <br />
                <div class="md:flex items-center lg:ml-24 lg:mt-0 mt-4">
                  <div class="md:w-64">
                    <label
                      class="text-sm leading-none text-gray-800"
                      id="firstName"
                    >
                      Prepared
                    </label>
                    <input
                      type="name"
                      tabindex="0"
                      class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                      placeholder="yes/no"
                    />
                  </div>
                </div>
                <div class="md:flex items-center lg:ml-24 mt-8">
                  <div>
                    <textarea
                      className="md:w-[560px] w-full md:h-[100px] h-[340px] resize-none focus:outline-none border border-gray-300 placeholder-gray-600 py-4 px-4"
                      placeholder="Where is it starting?"
                      defaultValue={''}
                      // value= {description || ""}
                      // onChange={(e) =>setDescription(e.target.value)}
                    />
                  </div>
                </div>

                <div class="md:flex items-center lg:ml-24 mt-8">
                  <div>
                    <textarea
                      className="md:w-[560px] w-full md:h-[100px] h-[340px] resize-none focus:outline-none border border-gray-300 placeholder-gray-600 py-4 px-4"
                      placeholder="Notes on Pre Game?"
                      defaultValue={''}
                      // value= {description || ""}
                      // onChange={(e) =>setDescription(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>

            <br />

            <div class="lg:flex justify-between border-b border-gray-200 pb-16">
              <div>
                <h1 class="text-xl font-medium text-center text-gray-800">
                  Autonomous Time
                </h1>
                <br />
                <div class="md:flex items-center lg:ml-24 lg:mt-0 m">
                  <input
                    id="link-checkbox"
                    type="checkbox"
                    value=""
                    class="w-6 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="link-checkbox"
                    class="ml-2 text-sm font-medium text-gray-900 "
                  >
                    Crossed Cable (checked if yes){' '}
                    <a
                      href="#"
                      class="text-blue-600 dark:text-blue-500 hover:underline"
                    ></a>
                  </label>
                  <div class="md:w-64 md:ml-12 md:mt-0 mt-4">
                    <input
                      id="link-checkbox"
                      type="checkbox"
                      value=""
                      class="w-6 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      for="link-checkbox"
                      class="ml-2 text-sm font-medium text-gray-900 "
                    >
                      Crossed Charging Station (checked if yes){' '}
                      <a
                        href="#"
                        class="text-blue-600 dark:text-blue-500 hover:underline"
                      ></a>
                    </label>
                  </div>
                </div>
                <div class="md:flex items-center lg:ml-24 mt-8">
                  <div class="md:w-60">
                    <input
                      id="link-checkbox"
                      type="checkbox"
                      value=""
                      class="w-6 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      for="link-checkbox"
                      class="ml-2 text-sm font-medium text-gray-900 "
                    >
                      Mobility (checked if yes){' '}
                      <a
                        href="#"
                        class="text-blue-600 dark:text-blue-500 hover:underline"
                      ></a>
                    </label>
                  </div>
                  {/* <div class="md:w-64 md:ml-12 md:mt-0 mt-4">
                                        <label class="text-sm leading-none text-gray-800" id="phone" >Phone number</label>
                                        <input type="name" tabindex="0" class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="phone" placeholder="123-1234567" />
                                    </div> */}

                  <div class="md:flex items-center lg:ml-12 mt-6">
                    <select
                      onChange={onOptionChangeHandlerLevels}
                      class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-64 p-2.5"
                    >
                      <option>Docked</option>
                      {Autodocks.map((level, index) => {
                        return <option key={index}>{level}</option>
                      })}
                    </select>
                  </div>
                </div>
                <div class="md:flex items-center lg:ml-24 mt-8"></div>
                <div class="md:flex items-center lg:ml-24 mt-8">
                  <div>
                    <textarea
                      className="md:w-[560px] w-full md:h-[100px] h-[340px] resize-none focus:outline-none border border-gray-300 placeholder-gray-600 py-4 px-4"
                      placeholder="Notes on the Auto?"
                      defaultValue={''}
                      // value= {description || ""}
                      // onChange={(e) =>setDescription(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>

            <br />

            <div class="lg:flex justify-between border-b border-gray-200 pb-16">
              <div>
                <h1 class="text-xl font-medium text-center text-gray-800">
                  Teleop Time
                </h1>
                <br />
                <div class="md:flex items-center lg:ml-24 lg:mt-0 m">
                  <input
                    id="link-checkbox"
                    type="checkbox"
                    value=""
                    class="w-6 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="link-checkbox"
                    class="ml-2 text-sm font-medium text-gray-900 "
                  >
                    Was Fed Game pieces (checked if yes){' '}
                    <a
                      href="#"
                      class="text-blue-600 dark:text-blue-500 hover:underline"
                    ></a>
                  </label>
                  <div class="md:w-64 md:ml-12 md:mt-0 mt-4">
                    <input
                      id="link-checkbox"
                      type="checkbox"
                      value=""
                      class="w-6 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      for="link-checkbox"
                      class="ml-2 text-sm font-medium text-gray-900 "
                    >
                      Was Defended (checked if yes){' '}
                      <a
                        href="#"
                        class="text-blue-600 dark:text-blue-500 hover:underline"
                      ></a>
                    </label>
                  </div>
                </div>
                <div class="md:flex items-center lg:ml-24 mt-8">
                  <div class="md:w-60">
                    <input
                      id="link-checkbox"
                      type="checkbox"
                      value=""
                      class="w-6 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      for="link-checkbox"
                      class="ml-2 text-sm font-medium text-gray-900 "
                    >
                      Created Links with placement
                      <a
                        href="#"
                        class="text-blue-600 dark:text-blue-500 hover:underline"
                      ></a>
                    </label>
                  </div>
                  {/* <div class="md:w-64 md:ml-12 md:mt-0 mt-4">
                <label class="text-sm leading-none text-gray-800" id="phone" >Phone number</label>
                <input type="name" tabindex="0" class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="phone" placeholder="123-1234567" />
            </div> */}

                  <div class="md:flex items-center lg:ml-12 mt-6">
                    <select
                      onChange={onOptionChangeHandlerLevels}
                      class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-64 p-2.5"
                    >
                      <option>Floor Pickup</option>
                      {Pickup.map((level, index) => {
                        return <option key={index}>{level}</option>
                      })}
                    </select>
                  </div>
                </div>
                <h2>Point Placement</h2>
                <button>+1</button>
                {TopCubeAuto}
                <button>-1</button>

                <div class="md:flex items-center lg:ml-24 mt-8">
                  <div>
                    <textarea
                      className="md:w-[560px] w-full md:h-[100px] h-[340px] resize-none focus:outline-none border border-gray-300 placeholder-gray-600 py-4 px-4"
                      placeholder="Notes on the Teleop?"
                      defaultValue={''}
                      // value= {description || ""}
                      // onChange={(e) =>setDescription(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>

            <br />

            <div class="lg:flex justify-between border-b border-gray-200 pb-16">
              <div>
                <h1 class="text-xl font-medium text-center text-gray-800">
                  End Game
                </h1>
                <br />

                <div class="md:flex items-center lg:ml-24 mt-8">
                  <div class="md:w-60">
                    <input
                      id="link-checkbox"
                      type="checkbox"
                      value=""
                      class="w-6 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      for="link-checkbox"
                      class="ml-2 text-sm font-medium text-gray-900 "
                    >
                      Stopped enemy from Docking
                      <a
                        href="#"
                        class="text-blue-600 dark:text-blue-500 hover:underline"
                      ></a>
                    </label>
                  </div>
                  {/* <div class="md:w-64 md:ml-12 md:mt-0 mt-4">
                                        <label class="text-sm leading-none text-gray-800" id="phone" >Phone number</label>
                                        <input type="name" tabindex="0" class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="phone" placeholder="123-1234567" />
                                    </div> */}

                  <div class="md:flex items-center lg:ml-12 mt-6">
                    <div class="md:w-64">
                      <label
                        class="text-sm leading-none text-gray-800"
                        id="firstName"
                      >
                        Alliance Bots Docked
                      </label>
                      <input
                        type="name"
                        tabindex="0"
                        class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                        placeholder="1/2/3"
                      />
                    </div>
                  </div>
                </div>
                <div class="md:flex items-center lg:ml-24 mt-8">
                  <div class="md:w-60">
                    <input
                      id="link-checkbox"
                      type="checkbox"
                      value=""
                      class="w-6 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      for="link-checkbox"
                      class="ml-2 text-sm font-medium text-gray-900 "
                    >
                      Stopped alliance from Docking
                      <a
                        href="#"
                        class="text-blue-600 dark:text-blue-500 hover:underline"
                      ></a>
                    </label>
                  </div>
                  {/* <div class="md:w-64 md:ml-12 md:mt-0 mt-4">
                                        <label class="text-sm leading-none text-gray-800" id="phone" >Phone number</label>
                                        <input type="name" tabindex="0" class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="phone" placeholder="123-1234567" />
                                    </div> */}

                  <div class="md:flex items-center lg:ml-12 mt-6">
                    <select
                      onChange={onOptionChangeHandlerLevels}
                      class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-64 p-2.5"
                    >
                      <option>Docking</option>
                      {EndDock.map((level, index) => {
                        return <option key={index}>{level}</option>
                      })}
                    </select>
                  </div>
                </div>
                <div class="md:flex items-center lg:ml-24 mt-8">
                  <div>
                    <textarea
                      className="md:w-[560px] w-full md:h-[100px] h-[340px] resize-none focus:outline-none border border-gray-300 placeholder-gray-600 py-4 px-4"
                      placeholder="Notes on the Dock?"
                      defaultValue={''}
                      // value= {description || ""}
                      // onChange={(e) =>setDescription(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>

            <br />

            <div class="lg:flex justify-between border-b border-gray-200 pb-16">
              <div>
                <h1 class="text-xl font-medium text-center text-gray-800">
                  Aftermath
                </h1>
                <br />
                <div class="md:flex items-center lg:ml-24 lg:mt-0 ">
                  <input
                    id="link-checkbox"
                    type="checkbox"
                    value=""
                    class="w-6 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="link-checkbox"
                    class="ml-2 mr-20 text-sm font-medium text-gray-900 "
                  >
                    Died/Immobilize{' '}
                    <a
                      href="#"
                      class="text-blue-600 dark:text-blue-500 hover:underline"
                    ></a>
                  </label>
                  <div class="md:w-64 md:ml-12 md:mt-0 mt-4">
                    <input
                      id="link-checkbox"
                      type="checkbox"
                      value=""
                      class="w-6 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      for="link-checkbox"
                      class="ml-2 text-sm font-medium text-gray-900 "
                    >
                      Tippy (almost tipped over){' '}
                      <a
                        href="#"
                        class="text-blue-600 dark:text-blue-500 hover:underline"
                      ></a>
                    </label>
                  </div>
                </div>
                <div class="md:flex items-center lg:ml-24 mt-8">
                  <div class="md:w-60">
                    <input
                      id="link-checkbox"
                      type="checkbox"
                      value=""
                      class="w-6 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      for="link-checkbox"
                      class="ml-2 text-sm font-medium text-gray-900 "
                    >
                      Dropped Pieces{' '}
                      <a
                        href="#"
                        class="text-blue-600 dark:text-blue-500 hover:underline"
                      ></a>
                    </label>
                  </div>
                  {/* <div class="md:w-64 md:ml-12 md:mt-0 mt-4">
                <label class="text-sm leading-none text-gray-800" id="phone" >Phone number</label>
                <input type="name" tabindex="0" class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="phone" placeholder="123-1234567" />
            </div> */}

                  <div class="md:flex items-center lg:ml-12 mt-6">
                    <select
                      onChange={onOptionChangeHandlerLevels}
                      class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-64 p-2.5"
                    >
                      <option>Defense Rating</option>
                      {Defense.map((level, index) => {
                        return <option key={index}>{level}</option>
                      })}
                    </select>
                  </div>
                </div>
                <div class="md:flex items-center lg:ml-24 mt-8">
                  <div class="md:w-60">
                    <input
                      id="link-checkbox"
                      type="checkbox"
                      value=""
                      class="w-6 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      for="link-checkbox"
                      class="ml-2 text-sm font-medium text-gray-900 "
                    >
                      Swerve Drive{' '}
                      <a
                        href="#"
                        class="text-blue-600 dark:text-blue-500 hover:underline"
                      ></a>
                    </label>
                  </div>
                  {/* <div class="md:w-64 md:ml-12 md:mt-0 mt-4">
                <label class="text-sm leading-none text-gray-800" id="phone" >Phone number</label>
                <input type="name" tabindex="0" class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="phone" placeholder="123-1234567" />
            </div> */}

                  <div class="md:flex items-center lg:ml-12 mt-6">
                    <select
                      onChange={onOptionChangeHandlerLevels}
                      class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-64 p-2.5"
                    >
                      <option>Drive Skills</option>
                      {Drive.map((level, index) => {
                        return <option key={index}>{level}</option>
                      })}
                    </select>
                  </div>
                </div>
                <div class="md:flex items-center lg:ml-24 mt-8">
                  <div class="md:w-60">
                    <div class="md:w-64">
                      <label
                        class="text-sm leading-none text-gray-800"
                        id="firstName"
                      >
                        How many links
                      </label>
                      <input
                        type="name"
                        tabindex="0"
                        class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                        placeholder="1"
                      />
                    </div>
                  </div>
                  {/* <div class="md:w-64 md:ml-12 md:mt-0 mt-4">
                <label class="text-sm leading-none text-gray-800" id="phone" >Phone number</label>
                <input type="name" tabindex="0" class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="phone" placeholder="123-1234567" />
            </div> */}

                  <div class="md:flex items-center lg:ml-12 mt-6">
                    <select
                      onChange={onOptionChangeHandlerLevels}
                      class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-64 p-2.5"
                    >
                      <option>Speed rating</option>
                      {Speed.map((level, index) => {
                        return <option key={index}>{level}</option>
                      })}
                    </select>
                  </div>
                </div>
                <div class="md:flex items-center lg:ml-24 mt-8">
                  <div>
                    <textarea
                      className="md:w-[560px] w-full md:h-[100px] h-[340px] resize-none focus:outline-none border border-gray-300 placeholder-gray-600 py-4 px-4"
                      placeholder="Final notes?"
                      defaultValue={''}
                      // value= {description || ""}
                      // onChange={(e) =>setDescription(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MyApp
