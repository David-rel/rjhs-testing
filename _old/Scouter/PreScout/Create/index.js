import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Sidebar from '../../../../../components/sidebar'

function Create() {
  const supabase = useSupabaseClient()
  const router = useRouter()
  const [loading, setLoading] = useState(null)

  const [Team, setTeam] = useState(null)
  const [Friendly, setFriendly] = useState(null)
  const [EstimatedAuto, setEstimatedAuto] = useState(null)
  const [EstimatedTeleop, setEstimatedTeleop] = useState(null)
  const [Drive, setDrive] = useState(null)
  const [Size, setSize] = useState(null)
  const [AutoRoutes, setAutoRoutes] = useState(null)
  const [TeamNotes, setTeamNotes] = useState(null)
  const [ConeIntake, setConeIntake] = useState(null)
  const [ConeDropOff, setConeDropOff] = useState(null)
  const [ConeNotes, setConeNotes] = useState(null)
  const [BoxIntake, setBoxIntake] = useState(null)
  const [BoxDropOff, setBoxDropOff] = useState(null)
  const [BoxNotes, setBoxNotes] = useState(null)
  const [Name, setName] = useState(null)

  const [Vision, setVision] = useState(false)
  const [Balance, setBalance] = useState(false)
  const [CanCone, setCanCone] = useState(false)
  const [CanBox, setCanBox] = useState(false)

  const handleOnChangeVision = () => {
    setVision(!Vision)
  }

  const handleOnChangeBalance = () => {
    setBalance(!Balance)
  }

  const handleOnChangeCanCone = () => {
    setCanCone(!CanCone)
  }

  const handleOnChangeCanBox = () => {
    setCanBox(!CanBox)
  }

  async function Submit() {
    try {
      setLoading(true)

      const updates = {
        created_at: new Date().toISOString(),
        first_name: Name,
        team: Team,
        size: Size,
        VisionType: Vision,
        friendly: Friendly,
        teamNotes: TeamNotes,
        autoRoutes: AutoRoutes,
        DriveTrainType: Drive,
        EstimatedTeleopPoints: EstimatedTeleop,
        EstimatedAutoPoints: EstimatedAuto,
        ConeIntake: CanCone,
        PickUpMethodCone: ConeIntake,
        DepositLevelsCone: ConeDropOff,
        BoxIntake: CanBox,
        PickUpMethodBox: BoxIntake,
        DepositLevelBox: BoxDropOff,
        AutoBalance: Balance,
        boxNotes: BoxNotes,
        coneNotes: ConeNotes,
      }

      console.log(updates)

      if (
        Team == '159' ||
        Team == '662' ||
        Team == '1011' ||
        Team == '1138' ||
        Team == '1303' ||
        Team == '1332' ||
        Team == '1339' ||
        Team == '1410' ||
        Team == '1619' ||
        Team == '1799' ||
        Team == '1977' ||
        Team == '2036' ||
        Team == '2083' ||
        Team == '2240' ||
        Team == '2261' ||
        Team == '2341' ||
        Team == '2594' ||
        Team == '2945' ||
        Team == '3200' ||
        Team == '3298' ||
        Team == '3374' ||
        Team == '3648' ||
        Team == '3807' ||
        Team == '4068' ||
        Team == '2996' ||
        Team == '4293' ||
        Team == '4388' ||
        Team == '4418' ||
        Team == '4550' ||
        Team == '4593' ||
        Team == '4499' ||
        Team == '4944' ||
        Team == '5493' ||
        Team == '5763' ||
        Team == '6920' ||
        Team == '7243' ||
        Team == '7479' ||
        Team == '7485' ||
        Team == '7737' ||
        Team == '8334' ||
        Team == '9009' ||
        Team == '9068' ||
        Team == '9112' ||
        Team == '935' ||
        Team == '1710' ||
        Team == '1723' ||
        Team == '' ||
        Team == '1730' ||
        Team == '1763' ||
        Team == '1764' ||
        Team == '1769' ||
        Team == '1775' ||
        Team == '1806' ||
        Team == '1827' ||
        Team == '1847' ||
        Team == '1987' ||
        Team == '1994' ||
        Team == '2197' ||
        Team == '2220' ||
        Team == '2357' ||
        Team == '2410' ||
        Team == '2457' ||
        Team == '2560' ||
        Team == '3184' ||
        Team == '4809' ||
        Team == '4959' ||
        Team == '5013' ||
        Team == '5098' ||
        Team == '5119' ||
        Team == '5126' ||
        Team == '5141' ||
        Team == '5147' ||
        Team == '5189' ||
        Team == '5268' ||
        Team == '5387' ||
        Team == '7662' ||
        Team == '8112' ||
        Team == '8225' ||
        Team == '9269'
      ) {
        let { error } = await supabase.from('PreScouter').insert(updates)
        if (error) throw error
        alert('New Pre Scout added!')
      } else {
        alert('wrong team #')
        return
      }
    } catch (error) {
      alert('Error adding the data!')
      console.log(error)
    } finally {
      setLoading(false)
      if (
        Team == '159' ||
        Team == '662' ||
        Team == '1011' ||
        Team == '1138' ||
        Team == '1303' ||
        Team == '1332' ||
        Team == '1339' ||
        Team == '1410' ||
        Team == '1619' ||
        Team == '1799' ||
        Team == '1977' ||
        Team == '2036' ||
        Team == '2083' ||
        Team == '2240' ||
        Team == '2261' ||
        Team == '2341' ||
        Team == '2594' ||
        Team == '2945' ||
        Team == '3200' ||
        Team == '3298' ||
        Team == '3374' ||
        Team == '3648' ||
        Team == '3807' ||
        Team == '4068' ||
        Team == '2996' ||
        Team == '4293' ||
        Team == '4388' ||
        Team == '4418' ||
        Team == '4550' ||
        Team == '4593' ||
        Team == '4499' ||
        Team == '4944' ||
        Team == '5493' ||
        Team == '5763' ||
        Team == '6920' ||
        Team == '7243' ||
        Team == '7479' ||
        Team == '7485' ||
        Team == '7737' ||
        Team == '8334' ||
        Team == '9009' ||
        Team == '9068' ||
        Team == '9112' ||
        Team == '935' ||
        Team == '1710' ||
        Team == '1723' ||
        Team == '' ||
        Team == '1730' ||
        Team == '1763' ||
        Team == '1764' ||
        Team == '1769' ||
        Team == '1775' ||
        Team == '1806' ||
        Team == '1827' ||
        Team == '1847' ||
        Team == '1987' ||
        Team == '1994' ||
        Team == '2197' ||
        Team == '2220' ||
        Team == '2357' ||
        Team == '2410' ||
        Team == '2457' ||
        Team == '2560' ||
        Team == '3184' ||
        Team == '4809' ||
        Team == '4959' ||
        Team == '5013' ||
        Team == '5098' ||
        Team == '5119' ||
        Team == '5126' ||
        Team == '5141' ||
        Team == '5147' ||
        Team == '5189' ||
        Team == '5268' ||
        Team == '5387' ||
        Team == '7662' ||
        Team == '8112' ||
        Team == '8225' ||
        Team == '9269'
      ) {
        window.location.reload()
      } else {
        return
      }
    }
  }

  return (
    <div>
      <div className="flex">
        <Sidebar />
        <div>
          <div>{/* ... */}</div>
          <div className="flex items-center justify-center">
            <div class="xl:w-10/12 w-full px-8">
              <br />

              <div class="xl:px-24">
                <div class="lg:flex justify-between border-b border-gray-200 pb-16">
                  <div>
                    <h1 class="text-xl font-medium text-center text-gray-800">
                      Pre Scouting Teams
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
                          value={Team || ''}
                          onChange={(e) => setTeam(e.target.value)}
                        />
                      </div>
                      <div class="md:w-64 md:ml-12 md:mt-0 mt-4">
                        <label
                          class="text-sm leading-none text-gray-800"
                          id="lastName"
                        >
                          Friendly
                        </label>
                        <input
                          type="name"
                          tabindex="0"
                          class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                          placeholder="yes/no"
                          value={Friendly || ''}
                          onChange={(e) => setFriendly(e.target.value)}
                        />
                      </div>
                    </div>
                    <br />
                    <div class="md:flex items-center lg:ml-24 lg:mt-0 mt-4">
                      <div class="md:w-64">
                        <label
                          class="text-sm leading-none text-gray-800"
                          id="firstName"
                        >
                          Estimated Auto Points
                        </label>
                        <input
                          type="name"
                          tabindex="0"
                          class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                          placeholder="2"
                          value={EstimatedAuto || ''}
                          onChange={(e) => setEstimatedAuto(e.target.value)}
                        />
                      </div>
                      <div class="md:w-64 md:ml-12 md:mt-0 mt-4">
                        <label
                          class="text-sm leading-none text-gray-800"
                          id="lastName"
                        >
                          Estimated Teleop Points
                        </label>
                        <input
                          type="name"
                          tabindex="0"
                          class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                          placeholder="2"
                          value={EstimatedTeleop || ''}
                          onChange={(e) => setEstimatedTeleop(e.target.value)}
                        />
                      </div>
                    </div>

                    <br />
                    <div class="md:flex items-center lg:ml-24 lg:mt-0 mt-4">
                      <div class="md:w-64">
                        <label
                          class="text-sm leading-none text-gray-800"
                          id="firstName"
                        >
                          Drive Train
                        </label>
                        <input
                          type="name"
                          tabindex="0"
                          class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                          placeholder="swerve drive, tank drive, etc..."
                          value={Drive || ''}
                          onChange={(e) => setDrive(e.target.value)}
                        />
                      </div>
                      <div class="md:w-64 ml-20">
                        <input
                          type="checkbox"
                          id="vision"
                          class="w-6 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          name="vision"
                          value="Vision"
                          checked={Vision}
                          onChange={handleOnChangeVision}
                        />
                        <label
                          for="link-checkbox"
                          class="ml-2 text-sm font-medium text-gray-900 "
                        >
                          Vision (checked if yes){' '}
                          <a
                            href="#"
                            class="text-blue-600 dark:text-blue-500 hover:underline"
                          ></a>
                        </label>
                      </div>
                    </div>
                    <br />
                    <div class="md:flex items-center lg:ml-24 lg:mt-0 mt-4">
                      <div class="md:w-64">
                        <label
                          class="text-sm leading-none text-gray-800"
                          id="firstName"
                        >
                          Size of Robot
                        </label>
                        <input
                          type="name"
                          tabindex="0"
                          class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                          placeholder="10x10"
                          value={Size || ''}
                          onChange={(e) => setSize(e.target.value)}
                        />
                      </div>

                      <div class="md:w-64 ml-20">
                        <input
                          type="checkbox"
                          id="balance"
                          class="w-6 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          name="balance"
                          value="Balance"
                          checked={Balance}
                          onChange={handleOnChangeBalance}
                        />
                        <label
                          for="link-checkbox"
                          class="ml-2 text-sm font-medium text-gray-900 "
                        >
                          Can Auto Balance{' '}
                          <a
                            href="#"
                            class="text-blue-600 dark:text-blue-500 hover:underline"
                          ></a>
                        </label>
                      </div>
                    </div>
                    <br />

                    <div class="md:flex items-center lg:ml-24 lg:mt-0 mt-4">
                      <div class="md:w-64">
                        <label
                          class="text-sm leading-none text-gray-800"
                          id="firstName"
                        >
                          Who is Scouting? (FIRST NAME ONLY)
                        </label>
                        <input
                          type="name"
                          tabindex="0"
                          class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                          placeholder="David"
                          value={Name || ''}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                    </div>

                    <div class="md:flex items-center lg:ml-24 mt-8">
                      <div>
                        <textarea
                          className="md:w-[560px] w-full md:h-[100px] h-[340px] resize-none focus:outline-none border border-gray-300 placeholder-gray-600 py-4 px-4"
                          placeholder="Auto routes?"
                          defaultValue={''}
                          value={AutoRoutes || ''}
                          onChange={(e) => setAutoRoutes(e.target.value)}
                        />
                      </div>
                    </div>

                    <div class="md:flex items-center lg:ml-24 mt-8">
                      <div>
                        <textarea
                          className="md:w-[560px] w-full md:h-[100px] h-[340px] resize-none focus:outline-none border border-gray-300 placeholder-gray-600 py-4 px-4"
                          placeholder="Notes on Team?"
                          defaultValue={''}
                          value={TeamNotes || ''}
                          onChange={(e) => setTeamNotes(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <br />

              <div class="xl:px-24">
                <div class="lg:flex justify-between border-b border-gray-200 pb-16">
                  <div>
                    <h1 class="text-xl font-medium text-center text-gray-800">
                      Cone Intake
                    </h1>
                    <br />
                    <div class="md:flex items-center lg:ml-24 lg:mt-0 mt-4">
                      <div class="md:w-64">
                        <label
                          class="text-sm leading-none text-gray-800"
                          id="lastName"
                        >
                          Intake for Cones
                        </label>
                        <input
                          type="name"
                          tabindex="0"
                          class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                          placeholder="explain"
                          value={ConeIntake || ''}
                          onChange={(e) => setConeIntake(e.target.value)}
                        />
                      </div>
                      <div class="md:w-64 ml-20">
                        <input
                          type="checkbox"
                          id="canCone"
                          class="w-6 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          name="canCone"
                          value="CanCone"
                          checked={CanCone}
                          onChange={handleOnChangeCanCone}
                        />
                        <label
                          for="link-checkbox"
                          class="ml-2 text-sm font-medium text-gray-900 "
                        >
                          Does have Cone Intake{' '}
                          <a
                            href="#"
                            class="text-blue-600 dark:text-blue-500 hover:underline"
                          ></a>
                        </label>
                      </div>
                    </div>
                    <br />
                    <div class="md:flex items-center lg:ml-24 lg:mt-0 mt-4">
                      <div class="md:w-64">
                        <label
                          class="text-sm leading-none text-gray-800"
                          id="firstName"
                        >
                          Level it can place cones
                        </label>
                        <input
                          type="name"
                          tabindex="0"
                          class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                          placeholder="top"
                          value={ConeDropOff || ''}
                          onChange={(e) => setConeDropOff(e.target.value)}
                        />
                      </div>
                    </div>

                    <br />

                    <div class="md:flex items-center lg:ml-24 mt-8">
                      <div>
                        <textarea
                          className="md:w-[560px] w-full md:h-[100px] h-[340px] resize-none focus:outline-none border border-gray-300 placeholder-gray-600 py-4 px-4"
                          placeholder="Notes on Cone Intake?"
                          defaultValue={''}
                          value={ConeNotes || ''}
                          onChange={(e) => setConeNotes(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <br />

              <div class="xl:px-24">
                <div class="lg:flex justify-between border-b border-gray-200 pb-16">
                  <div>
                    <h1 class="text-xl font-medium text-center text-gray-800">
                      Box Intake
                    </h1>
                    <br />
                    <div class="md:flex items-center lg:ml-24 lg:mt-0 mt-4">
                      <div class="md:w-64">
                        <label
                          class="text-sm leading-none text-gray-800"
                          id="lastName"
                        >
                          Intake for Box
                        </label>
                        <input
                          type="name"
                          tabindex="0"
                          class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                          placeholder="explain"
                          value={BoxIntake || ''}
                          onChange={(e) => setBoxIntake(e.target.value)}
                        />
                      </div>
                      <div class="md:w-64 ml-20">
                        <input
                          type="checkbox"
                          id="canBox"
                          class="w-6 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          name="canBox"
                          value="CanBox"
                          checked={CanBox}
                          onChange={handleOnChangeCanBox}
                        />
                        <label
                          for="link-checkbox"
                          class="ml-2 text-sm font-medium text-gray-900 "
                        >
                          Does have Box Intake{' '}
                          <a
                            href="#"
                            class="text-blue-600 dark:text-blue-500 hover:underline"
                          ></a>
                        </label>
                      </div>
                    </div>
                    <br />
                    <div class="md:flex items-center lg:ml-24 lg:mt-0 mt-4">
                      <div class="md:w-64">
                        <label
                          class="text-sm leading-none text-gray-800"
                          id="firstName"
                        >
                          Level it can place boxes
                        </label>
                        <input
                          type="name"
                          tabindex="0"
                          class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                          placeholder="top"
                          value={BoxDropOff || ''}
                          onChange={(e) => setBoxDropOff(e.target.value)}
                        />
                      </div>
                    </div>

                    <br />

                    <div class="md:flex items-center lg:ml-24 mt-8">
                      <div>
                        <textarea
                          className="md:w-[560px] w-full md:h-[100px] h-[340px] resize-none focus:outline-none border border-gray-300 placeholder-gray-600 py-4 px-4"
                          placeholder="Notes on Box Intake?"
                          defaultValue={''}
                          value={BoxNotes || ''}
                          onChange={(e) => setBoxNotes(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                class="inline-block mb-4 px-8 py-4 bg-blue-600 text-white mt-4 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                href="#!"
                role="button"
                onClick={Submit}
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Create
