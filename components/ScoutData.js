import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

function ScoutData({ post, id }) {
  const [showModal, setShowModal] = useState(false)
  const supabase = useSupabaseClient()
  const [loading, setLoading] = useState(null)
  const router = useRouter()

 

  async function Edit() {
    router.push(`/TeamResources/Scouter/Scout/Edit?postId=${post.id}`)
  }

  if (id == post.team) {
    return (
      <div>
        <div class="bg-gray-300 p-6 text-left w-screen border border-black">
          <button
            class="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
            onClick={() => setShowModal(!showModal)}
          >
            Match #: {post.match}
          </button>

          {showModal ? (
            <div>
              <h3 className="font-bold pt-3 text-2xl">Pre Game</h3>

              <h4 className="font-bold pt-2">Created By: {post.first_name}</h4>

              <h4 className="font-bold pt-2">Team #: {post.team}</h4>
              <h4 className="font-bold pt-2">
                Match Level: {post.Match_Level}
              </h4>
              <h4 className="font-bold pt-2">Side: {post.side}</h4>
              <h4 className="font-bold pt-2">Prepared: {post.prepared}</h4>
              <h4 className="font-bold pt-2">
                Where did it start: {post.StartAndPlace}
              </h4>
              <h4 className="font-bold pt-2">Size: {post.size}</h4>
              <h4 className="font-bold pt-2">
                Vision: {post.vision ? <>true</> : <>false</>}
              </h4>
              <h4 className="font-bold pt-2">
                Notes on Pre Game: {post.PreNotes}
              </h4>

              <h3 className="font-bold pt-3 text-2xl">Auto Time</h3>
              <h4 className="font-bold pt-2">
                Crossed Cable: {post.CrossedCable ? <>true</> : <>false</>}
              </h4>
              <h4 className="font-bold pt-2">
                Crossed Charging Station:{' '}
                {post.CrossedCharge ? <>true</> : <>false</>}
              </h4>
              <h4 className="font-bold pt-2">
                Mobility: {post.Mobility ? <>true</> : <>false</>}
              </h4>
              <h4 className="font-bold pt-2">Docked: {post.AutoDock}</h4>
              <h3 className="font-bold pt-2">Auto Point Placement:</h3>
              <ul className="list-disc pl-8 text-md">
                <li>Top Cubes: {post.TopCubeAuto}</li>
                <li>Top Cones: {post.TopConeAuto}</li>
                <li>Middle Cubes: {post.MidCubeAuto}</li>
                <li>Middle Cones: {post.MidConeAuto}</li>
                <li>Bottom Cubes: {post.BottomCubeAuto}</li>
                <li>Bottom Cones: {post.BottomConeAuto}</li>
              </ul>
              <h4 className="font-bold pt-2">Auto Notes: {post.AutoNotes}</h4>

              <h3 className="font-bold pt-3 text-2xl pt-2">Teleop Game</h3>

              <h4 className="font-bold pt-2">
                Was Fed Pieces: {post.FedPieces ? <>true</> : <>false</>}
              </h4>
              <h4 className="font-bold pt-2">
                Was defended: {post.WasDefended ? <>true</> : <>false</>}
              </h4>
              <h4 className="font-bold pt-2">
                Created Links: {post.CreateLinks ? <>true</> : <>false</>}
              </h4>
              <h4 className="font-bold pt-2">
                Floor Pickup: {post.floorPickup}
              </h4>
              <h3 className="font-bold pt-2">Teleop Point Placement:</h3>
              <ul className="list-disc pl-8 text-md">
                <li>Top Cubes: {post.TopCubeTeleop}</li>
                <li>Top Cones: {post.TopConeTeleop}</li>
                <li>Middle Cubes: {post.MidCubeTeleop}</li>
                <li>Middle Cones: {post.MidConeTeleop}</li>
                <li>Bottom Cubes: {post.BottomCubeTeleop}</li>
                <li>Bottom Cones: {post.BottomConeTeleop}</li>
              </ul>
              <h4 className="font-bold pt-2">
                Teleop Notes: {post.TeleopNotes}
              </h4>

              <h3 className="font-bold pt-3 text-2xl">End Game</h3>

              <h4 className="font-bold pt-2">
                Stopped Enemy Dock:{' '}
                {post.StoppedEnemyDock ? <>true</> : <>false</>}
              </h4>
              <h4 className="font-bold pt-2">
                Stopped Alliance Dock:{' '}
                {post.StoppedAllianceDock ? <>true</> : <>false</>}
              </h4>
              <h4 className="font-bold pt-2">
                Alliance Bots Docked: {post.AllianceBotsDocked}
              </h4>
              <h4 className="font-bold pt-2">Docking: {post.EndDock}</h4>
              <h4 className="font-bold pt-2">
                Docking Notes: {post.DockNotes}{' '}
              </h4>

              <h3 className="font-bold pt-3 text-2xl">Aftermath</h3>

              <h4 className="font-bold pt-2">
                Died/Immobilized: {post.Died ? <>true</> : <>false</>}
              </h4>
              <h4 className="font-bold pt-2">
                Tippy: {post.Tippy ? <>true</> : <>false</>}
              </h4>
              <h4 className="font-bold pt-2">
                How Many Links: {post.LinksNumber}
              </h4>
              <h4 className="font-bold pt-2">
                Dropped Pieces: {post.DroppedPieces ? <>true</> : <>false</>}
              </h4>
              <h4 className="font-bold pt-2">
                Swerve Drive: {post.Swerve ? <>true</> : <>false</>}
              </h4>
              <h4 className="font-bold pt-2">
                Defense Rating: {post.DefenseRating}
              </h4>
              <h4 className="font-bold pt-2">
                Drive Skills: {post.DriveSkills}
              </h4>
              <h4 className="font-bold pt-2">Speed Rating: {post.Speed}</h4>
              <h4 className="font-bold pt-2">Final Notes: {post.FinalNotes}</h4>

              <button
                className="bg-yellow-500 text-white py-2 px-2 rounded-lg hover:bg-yellow-600 mr-4"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>

             
              <button
                className="bg-green-500 text-white py-2 px-2 rounded-lg hover:bg-green-600"
                onClick={() => Edit()}
              >
                Edit
              </button>
            </div>
          ) : null}
        </div>
      </div>
    )
  }
}

export default ScoutData
