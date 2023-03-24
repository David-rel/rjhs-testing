import Sidebar from '../../../../../components/sidebar'
import React, { useEffect, useState } from 'react'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/router'

function CreateInfo() {
  const supabase = useSupabaseClient()
  const router = useRouter()

  const levels = ['Qualifications', 'Double Eliminations', 'Finals']
  const Autodocks = [
    'Docked (not engaged)',
    'engaged',
    'attempt but failed',
    'not attempted',
  ]
  const Pickups = ['cones', 'cubes', 'both', 'none']
  const EndDocks = [
    'Parked',
    'Docked not engaged',
    'attempted but failed',
    'not attempted',
  ]
  const Defenses = [
    'Below Average',
    'average',
    'good',
    'excellent',
    'did not defend',
  ]
  const Drives = ['Not Effective', 'Average', 'Very Efficient', 'Not Observed']
  const Speeds = ['1(slow)', '2', '3', '4', '5(fast)']
  const Visions = ['yes', 'no', 'unknown', 'Pre Scouter']
  const [loading, setLoading] = useState(false)

  const [TopCubeAuto, setTopCubeAuto] = React.useState(0)
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

  const [CrossedCable, setIsCrossedCable] = useState(false)
  const [CrossedCharge, setIsCrossedCharge] = useState(false)
  const [Mobility, setMobility] = useState(false)
  const [WasFedPieces, setWasFedGamePieces] = useState(false)
  const [WasDefended, setWasDefended] = useState(false)
  const [CreatedLinks, setCreatedLinks] = useState(false)
  const [StoppedEnemyDock, setStoppedEnemyDock] = useState(false)
  const [StoppedAllianceDock, setStoppedAllianceDock] = useState(false)
  const [Died, setIsDied] = useState(false)
  const [Tippy, setIsTippy] = useState(false)
  const [DroppedPieces, setDroppedPieces] = useState(false)
  const [Swerve, setIsSwerve] = useState(false)
  const [Name, setName] = useState(null)

  const [Vision, setVision] = useState(null)
  const [Level, setLevel] = useState(null)
  const [AutoDock, setAutoDock] = useState(null)
  const [Pickup, setPickup] = useState(null)
  const [EndDock, setEndDock] = useState(null)
  const [Defense, setDefense] = useState(null)
  const [Drive, setDrive] = useState(null)
  const [Speed, setSpeed] = useState(null)

  const [Team, setTeam] = useState(null)
  const [Side, setSide] = useState(null)
  const [Match, setMatch] = useState(null)
  const [Prepared, setPrepared] = useState(null)
  const [Size, setSize] = useState(null)
  const [WhereStarting, setWhereStarting] = useState(null)
  const [PreNotes, setPreNotes] = useState(null)
  const [AutoNotes, setAutoNotes] = useState(null)
  const [TeleopNotes, setTeleopNotes] = useState(null)
  const [EndNotes, setEndNotes] = useState(null)
  const [FinalNotes, setFinalNotes] = useState(null)
  const [AllianceBotsDocked, setAllianceBotsDocked] = useState(null)
  const [HowManyLinks, setHowManyLinks] = useState(null)

  // cubes teleop
  function TopCubeTeleopPlus() {
    setTopCubeTeleop(TopCubeTeleop + 1)
  }

  function TopCubeTeleopMinus() {
    setTopCubeTeleop(TopCubeTeleop - 1)
  }

  function MiddleCubeTeleopPlus() {
    setMiddleCubeTeleop(MiddleCubeTeleop + 1)
  }

  function MiddleCubeTeleopMinus() {
    setMiddleCubeTeleop(MiddleCubeTeleop - 1)
  }

  function BottomCubeTeleopPlus() {
    setBottomCubeTeleop(BottomCubeTeleop + 1)
  }

  function BottomCubeTeleopMinus() {
    setBottomCubeTeleop(BottomCubeTeleop - 1)
  }

  //cube auto

  function TopCubeAutoPlus() {
    setTopCubeAuto(TopCubeAuto + 1)
  }

  function TopCubeAutoMinus() {
    setTopCubeAuto(TopCubeAuto - 1)
  }

  function MiddleCubeAutoPlus() {
    setMiddleCubeAuto(MiddleCubeAuto + 1)
  }

  function MiddleCubeAutoMinus() {
    setMiddleCubeAuto(MiddleCubeAuto - 1)
  }

  function BottomCubeAutoPlus() {
    setBottomCubeAuto(BottomCubeAuto + 1)
  }

  function BottomCubeAutoMinus() {
    setBottomCubeAuto(BottomCubeAuto - 1)
  }

  // cone teleop
  function TopConeTeleopPlus() {
    setTopConeTeleop(TopConeTeleop + 1)
  }

  function TopConeTeleopMinus() {
    setTopConeTeleop(TopConeTeleop - 1)
  }

  function MiddleConeTeleopPlus() {
    setMiddleConeTeleop(MiddleConeTeleop + 1)
  }

  function MiddleConeTeleopMinus() {
    setMiddleConeTeleop(MiddleConeTeleop - 1)
  }

  function BottomConeTeleopPlus() {
    setBottomConeTeleop(BottomConeTeleop + 1)
  }

  function BottomConeTeleopMinus() {
    setBottomConeTeleop(BottomConeTeleop - 1)
  }

  //cone auto

  function TopConeAutoPlus() {
    setTopConeAuto(TopConeAuto + 1)
  }

  function TopConeAutoMinus() {
    setTopConeAuto(TopConeAuto - 1)
  }

  function MiddleConeAutoPlus() {
    setMiddleConeAuto(MiddleConeAuto + 1)
  }

  function MiddleConeAutoMinus() {
    setMiddleConeAuto(MiddleConeAuto - 1)
  }

  function BottomConeAutoPlus() {
    setBottomConeAuto(BottomConeAuto + 1)
  }

  function BottomConeAutoMinus() {
    setBottomConeAuto(BottomConeAuto - 1)
  }

  const handleOnChangeVision = () => {
    setIsVision(!Vision)
  }

  const handleOnChangeMobility = () => {
    setMobility(!Mobility)
  }

  const handleOnChangeCrossedCable = () => {
    setIsCrossedCable(!CrossedCable)
  }

  const handleOnChangeCrossedCharge = () => {
    setIsCrossedCharge(!CrossedCharge)
  }

  const handleOnChangeWasFedPieces = () => {
    setWasFedGamePieces(!WasFedPieces)
  }

  const handleOnChangeWasDefended = () => {
    setWasDefended(!WasDefended)
  }

  const handleOnChangeCreatedLinks = () => {
    setCreatedLinks(!CreatedLinks)
  }

  const handleOnChangeStoppedEnemyDock = () => {
    setStoppedEnemyDock(!StoppedEnemyDock)
  }

  const handleOnChangeStoppedAllianceDock = () => {
    setStoppedAllianceDock(!StoppedAllianceDock)
  }

  const handleOnChangeDied = () => {
    setIsDied(!Died)
  }

  const handleOnChangeTippy = () => {
    setIsTippy(!Tippy)
  }

  const handleOnChangeSwerve = () => {
    setIsSwerve(!Swerve)
  }

  const handleOnChangeDroppedPieces = () => {
    setDroppedPieces(!DroppedPieces)
  }

  const onOptionChangeHandlerLevels = (event) => {
    console.log('User Selected Value - ', event.target.value)
    setLevel(event.target.value)
  }

  const onOptionChangeHandlerVisions = (event) => {
    console.log('User Selected Value - ', event.target.value)
    setVision(event.target.value)
  }

  const onOptionChangeHandlerAutoDock = (event) => {
    console.log('User Selected Value - ', event.target.value)
    setAutoDock(event.target.value)
  }

  const onOptionChangeHandlerPickup = (event) => {
    console.log('User Selected Value - ', event.target.value)
    setPickup(event.target.value)
  }

  const onOptionChangeHandlerEndDock = (event) => {
    console.log('User Selected Value - ', event.target.value)
    setEndDock(event.target.value)
  }

  const onOptionChangeHandlerDrive = (event) => {
    console.log('User Selected Value - ', event.target.value)
    setDrive(event.target.value)
  }

  const onOptionChangeHandlerSpeed = (event) => {
    console.log('User Selected Value - ', event.target.value)
    setSpeed(event.target.value)
  }

  const onOptionChangeHandlerDefense = (event) => {
    console.log('User Selected Value - ', event.target.value)
    setDefense(event.target.value)
  }

  async function Submit() {
    try {
      setLoading(true)

      const updates = {
        created_at: new Date().toISOString(),

        team: Team,
        side: Side,
        match: Match,
        first_name: Name,
        Match_Level: Level,
        prepared: Prepared,
        StartAndPlace: WhereStarting,
        PreNotes: PreNotes,
        CrossedCable: CrossedCable,
        CrossedCharge: CrossedCharge,
        Mobility: Mobility,
        AutoDock: AutoDock,
        TopCubeAuto: TopCubeAuto,
        MidCubeAuto: MiddleCubeAuto,
        BottomCubeAuto: BottomCubeAuto,
        TopConeAuto: TopConeAuto,
        MidConeAuto: MiddleConeAuto,
        BottomConeAuto: BottomConeAuto,
        AutoNotes: AutoNotes,
        FedPieces: WasFedPieces,
        WasDefended: WasDefended,
        CreateLinks: CreatedLinks,
        floorPickup: Pickup,
        TopCubeTeleop: TopCubeTeleop,
        MidCubeTeleop: MiddleCubeTeleop,
        BottomCubeTeleop: BottomCubeTeleop,
        TopConeTeleop: TopConeTeleop,
        MidConeTeleop: MiddleConeTeleop,
        BottomConeTeleop: BottomConeTeleop,
        TeleopNotes: TeleopNotes,
        StoppedEnemyDock: StoppedEnemyDock,
        StoppedAllianceDock: StoppedAllianceDock,
        AllianceBotsDocked: AllianceBotsDocked,
        EndDock: EndDock,
        DockNotes: EndNotes,
        Died: Died,
        Tippy: Tippy,
        DroppedPieces: DroppedPieces,
        Swerve: Swerve,
        DefenseRating: Defense,
        DriveSkills: Drive,
        Speed: Speed,
        LinksNumber: HowManyLinks,
        FinalNotes: FinalNotes,
        size: Size,
        vision: Vision,
      }

      console.log(Team)

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
        let { error } = await supabase.from('Scouter').insert(updates)
        if (error) throw error
        alert('New Scout added!')
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
        <>
          <div>{/* ... */}</div>
          <div className="flex items-center justify-center">
            <div class="xl:w-10/12 w-full px-8">
              <br />

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
                          value={Team || ''}
                          onChange={(e) => setTeam(e.target.value)}
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
                          value={Side || ''}
                          onChange={(e) => setSide(e.target.value)}
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
                          value={Match || ''}
                          onChange={(e) => setMatch(e.target.value)}
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
                          value={Prepared || ''}
                          onChange={(e) => setPrepared(e.target.value)}
                        />
                      </div>
                      <div class="md:w-64 ml-12 mt-8">
                        <select
                          onChange={onOptionChangeHandlerVisions}
                          class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-64 p-2.5"
                        >
                          <option>Vision?</option>
                          {Visions.map((level, index) => {
                            return <option key={index}>{level}</option>
                          })}
                        </select>{' '}
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
                      <div class="md:w-72 pl-10">
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
                          placeholder="Where is it starting, and what game pieces did it pick up?"
                          defaultValue={''}
                          value={WhereStarting || ''}
                          onChange={(e) => setWhereStarting(e.target.value)}
                        />
                      </div>
                    </div>

                    <div class="md:flex items-center lg:ml-24 mt-8">
                      <div>
                        <textarea
                          className="md:w-[560px] w-full md:h-[100px] h-[340px] resize-none focus:outline-none border border-gray-300 placeholder-gray-600 py-4 px-4"
                          placeholder="Notes on Pre Game?"
                          defaultValue={''}
                          value={PreNotes || ''}
                          onChange={(e) => setPreNotes(e.target.value)}
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
                        type="checkbox"
                        id="crossedCable"
                        class="w-6 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        name="crossedCable"
                        value="CrossedCable"
                        checked={CrossedCable}
                        onChange={handleOnChangeCrossedCable}
                      />{' '}
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
                          type="checkbox"
                          id="crossedCharge"
                          class="w-6 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          name="crossedCharge"
                          value="CrossedCharge"
                          checked={CrossedCharge}
                          onChange={handleOnChangeCrossedCharge}
                        />{' '}
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
                          type="checkbox"
                          id="mobility"
                          class="w-6 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          name="mobility"
                          value="Mobility"
                          checked={Mobility}
                          onChange={handleOnChangeMobility}
                        />{' '}
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
                          onChange={onOptionChangeHandlerAutoDock}
                          class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-64 p-2.5"
                        >
                          <option>Docked</option>
                          {Autodocks.map((level, index) => {
                            return <option key={index}>{level}</option>
                          })}
                        </select>
                      </div>
                    </div>
                    <h2>Point Placement Auto</h2>
                    <br />
                    <div className="flex-none">
                      <button
                        onClick={TopCubeAutoPlus}
                        className="border border-black w-12"
                      >
                        +
                      </button>
                      <label>Top Cube ({TopCubeAuto})</label>
                      <button
                        onClick={TopCubeAutoMinus}
                        className="border border-black w-12"
                      >
                        -
                      </button>

                      <button
                        onClick={TopConeAutoPlus}
                        className="border border-black w-12 ml-8"
                      >
                        +
                      </button>
                      <label>Top Cone ({TopConeAuto})</label>
                      <button
                        onClick={TopConeAutoMinus}
                        className="border border-black w-12"
                      >
                        -
                      </button>
                    </div>
                    <br />

                    <button
                      onClick={MiddleCubeAutoPlus}
                      className="border border-black w-12"
                    >
                      +
                    </button>
                    <label>Middle Cube ({MiddleCubeAuto})</label>
                    <button
                      onClick={MiddleCubeAutoMinus}
                      className="border border-black w-12"
                    >
                      -
                    </button>

                    <button
                      onClick={MiddleConeAutoPlus}
                      className="border border-black w-12 ml-8"
                    >
                      +
                    </button>
                    <label>Middle Cone ({MiddleConeAuto})</label>
                    <button
                      onClick={MiddleConeAutoMinus}
                      className="border border-black w-12"
                    >
                      -
                    </button>
                    <div className="flex-none">
                      <br />

                      <button
                        onClick={BottomCubeAutoPlus}
                        className="border border-black w-12"
                      >
                        +
                      </button>
                      <label>Bottom Cube ({BottomCubeAuto})</label>
                      <button
                        onClick={BottomCubeAutoMinus}
                        className="border border-black w-12"
                      >
                        -
                      </button>

                      <button
                        onClick={BottomConeAutoPlus}
                        className="border border-black w-12 ml-8"
                      >
                        +
                      </button>
                      <label>Bottom Cone ({BottomConeAuto})</label>
                      <button
                        onClick={BottomConeAutoMinus}
                        className="border border-black w-12"
                      >
                        -
                      </button>
                    </div>
                    <br />

                    <br />

                    <div class="md:flex items-center lg:ml-24 mt-8">
                      <div>
                        <textarea
                          className="md:w-[560px] w-full md:h-[100px] h-[340px] resize-none focus:outline-none border border-gray-300 placeholder-gray-600 py-4 px-4"
                          placeholder="Notes on the Auto?"
                          defaultValue={''}
                          value={AutoNotes || ''}
                          onChange={(e) => setAutoNotes(e.target.value)}
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
                        type="checkbox"
                        id="fedGamePieces"
                        class="w-6 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        name="fedGamePieces"
                        value="FedGamePieces"
                        checked={WasFedPieces}
                        onChange={handleOnChangeWasFedPieces}
                      />{' '}
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
                          type="checkbox"
                          id="defended"
                          class="w-6 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          name="defended"
                          value="Defended"
                          checked={WasDefended}
                          onChange={handleOnChangeWasDefended}
                        />{' '}
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
                          type="checkbox"
                          id="links"
                          class="w-6 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          name="links"
                          value="Links"
                          checked={CreatedLinks}
                          onChange={handleOnChangeCreatedLinks}
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
                          onChange={onOptionChangeHandlerPickup}
                          class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-64 p-2.5"
                        >
                          <option>Floor Pickup</option>
                          {Pickups.map((level, index) => {
                            return <option key={index}>{level}</option>
                          })}
                        </select>
                      </div>
                    </div>
                    <h2>Point Placement Teleop</h2>
                    <br />
                    <div className="flex-none">
                      <button
                        onClick={TopCubeTeleopPlus}
                        className="border border-black w-12"
                      >
                        +
                      </button>
                      <label>Top Cube ({TopCubeTeleop})</label>
                      <button
                        onClick={TopCubeTeleopMinus}
                        className="border border-black w-12"
                      >
                        -
                      </button>

                      <button
                        onClick={TopConeTeleopPlus}
                        className="border border-black w-12 ml-8"
                      >
                        +
                      </button>
                      <label>Top Cone ({TopConeTeleop})</label>
                      <button
                        onClick={TopConeTeleopMinus}
                        className="border border-black w-12"
                      >
                        -
                      </button>
                    </div>
                    <br />

                    <button
                      onClick={MiddleCubeTeleopPlus}
                      className="border border-black w-12"
                    >
                      +
                    </button>
                    <label>Middle Cube ({MiddleCubeTeleop})</label>
                    <button
                      onClick={MiddleCubeTeleopMinus}
                      className="border border-black w-12"
                    >
                      -
                    </button>

                    <button
                      onClick={MiddleConeTeleopPlus}
                      className="border border-black w-12 ml-8"
                    >
                      +
                    </button>
                    <label>Middle Cone ({MiddleConeTeleop})</label>
                    <button
                      onClick={MiddleConeTeleopMinus}
                      className="border border-black w-12"
                    >
                      -
                    </button>
                    <div className="flex-none">
                      <br />

                      <button
                        onClick={BottomCubeTeleopPlus}
                        className="border border-black w-12"
                      >
                        +
                      </button>
                      <label>Bottom Cube ({BottomCubeTeleop})</label>
                      <button
                        onClick={BottomCubeTeleopMinus}
                        className="border border-black w-12"
                      >
                        -
                      </button>

                      <button
                        onClick={BottomConeTeleopPlus}
                        className="border border-black w-12 ml-8"
                      >
                        +
                      </button>
                      <label>Bottom Cone ({BottomConeTeleop})</label>
                      <button
                        onClick={BottomConeTeleopMinus}
                        className="border border-black w-12"
                      >
                        -
                      </button>
                    </div>
                    <br />

                    <br />

                    <div class="md:flex items-center lg:ml-24 mt-8">
                      <div>
                        <textarea
                          className="md:w-[560px] w-full md:h-[100px] h-[340px] resize-none focus:outline-none border border-gray-300 placeholder-gray-600 py-4 px-4"
                          placeholder="Notes on the Teleop?"
                          defaultValue={''}
                          value={TeleopNotes || ''}
                          onChange={(e) => setTeleopNotes(e.target.value)}
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
                          type="checkbox"
                          id="stoppedEnemyDock"
                          class="w-6 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          name="stoppedEnemyDock"
                          value="StoppedEnemyDock"
                          checked={StoppedEnemyDock}
                          onChange={handleOnChangeStoppedEnemyDock}
                        />{' '}
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
                            value={AllianceBotsDocked || ''}
                            onChange={(e) =>
                              setAllianceBotsDocked(e.target.value)
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div class="md:flex items-center lg:ml-24 mt-8">
                      <div class="md:w-60">
                        <input
                          type="checkbox"
                          id="stoppedAllianceDock"
                          class="w-6 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          name="stoppedAllianceDock"
                          value="StoppedAllianceDock"
                          checked={StoppedAllianceDock}
                          onChange={handleOnChangeStoppedAllianceDock}
                        />{' '}
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
                          onChange={onOptionChangeHandlerEndDock}
                          class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-64 p-2.5"
                        >
                          <option>Docking</option>
                          {EndDocks.map((level, index) => {
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
                          value={EndNotes || ''}
                          onChange={(e) => setEndNotes(e.target.value)}
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
                        type="checkbox"
                        id="died"
                        class="w-6 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        name="died"
                        value="Died"
                        checked={Died}
                        onChange={handleOnChangeDied}
                      />{' '}
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
                          type="checkbox"
                          id="tippy"
                          class="w-6 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          name="tippy"
                          value="Tippy"
                          checked={Tippy}
                          onChange={handleOnChangeTippy}
                        />{' '}
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
                          type="checkbox"
                          id="droppedPieces"
                          class="w-6 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          name="droppedPieces"
                          value="DroppedPieces"
                          checked={DroppedPieces}
                          onChange={handleOnChangeDroppedPieces}
                        />{' '}
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
                          onChange={onOptionChangeHandlerDefense}
                          class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-64 p-2.5"
                        >
                          <option>Defense Rating</option>
                          {Defenses.map((level, index) => {
                            return <option key={index}>{level}</option>
                          })}
                        </select>
                      </div>
                    </div>
                    <div class="md:flex items-center lg:ml-24 mt-8">
                      <div class="md:w-60">
                        <input
                          type="checkbox"
                          id="swerve"
                          class="w-6 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          name="swerve"
                          value="Swerve"
                          checked={Swerve}
                          onChange={handleOnChangeSwerve}
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
                          onChange={onOptionChangeHandlerDrive}
                          class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-64 p-2.5"
                        >
                          <option>Drive Skills</option>
                          {Drives.map((level, index) => {
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
                            value={HowManyLinks || ''}
                            onChange={(e) => setHowManyLinks(e.target.value)}
                          />
                        </div>
                      </div>
                      {/* <div class="md:w-64 md:ml-12 md:mt-0 mt-4">
                <label class="text-sm leading-none text-gray-800" id="phone" >Phone number</label>
                <input type="name" tabindex="0" class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="phone" placeholder="123-1234567" />
            </div> */}

                      <div class="md:flex items-center lg:ml-12 mt-6">
                        <select
                          onChange={onOptionChangeHandlerSpeed}
                          class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-64 p-2.5"
                        >
                          <option>Speed rating</option>
                          {Speeds.map((level, index) => {
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
                          value={FinalNotes || ''}
                          onChange={(e) => setFinalNotes(e.target.value)}
                        />
                      </div>
                    </div>
                    <button
                      class="inline-block px-8 py-4 bg-blue-600 text-white mt-4 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
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

                <br />
              </div>
            </div>
          </div>
        </>
      </div>
    </div>
  )
}

export default CreateInfo
