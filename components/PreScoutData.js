import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

function ScoutData({ post, id }) {
  const [showModal, setShowModal] = useState(false)
  const supabase = useSupabaseClient()
  const [loading, setLoading] = useState(null)
  const router = useRouter()

 

  async function Edit() {
    router.push(`/TeamResources/Scouter/PreScout/Edit?postId=${post.id}`)
  }

  if (id == post.team) {
    return (
      <div>
        <div class="bg-gray-400 p-6 text-left w-screen border border-black">
          <button
            class="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
            onClick={() => setShowModal(!showModal)}
          >
            Scout: {post.id}
          </button>

          {showModal ? (
            <div>
              <h4 className="font-bold pt-2">Created By: {post.first_name}</h4>
              <h3 className="font-bold pt-3 text-2xl">General</h3>
              <h4 className="font-bold pt-2">
                Estimated Teleop Points: {post.EstimatedTeleopPoints}
              </h4>
              <h4 className="font-bold pt-2">
                Estimated Auto Points: {post.EstimatedAutoPoints}
              </h4>
              <h4 className="font-bold pt-2">Friendly: {post.friendly}</h4>
              <h4 className="font-bold pt-2">Size: {post.size}</h4>
              <h4 className="font-bold pt-2">Vision: {post.VisionType}</h4>
              <h4 className="font-bold pt-2">
                Drive Train: {post.DriveTrainType}
              </h4>
              <h4 className="font-bold pt-2">
                Auto Balance: {post.AutoBalance ? <>true</> : <>false</>}
              </h4>
              <h4 className="font-bold pt-2">Auto Routes: {post.autoRoutes}</h4>
              <h4 className="font-bold pt-2">Team Notes: {post.teamNotes}</h4>

              <h3 className="font-bold pt-3 text-2xl">Cones</h3>

              <h4 className="font-bold pt-2">
                Cone Intake: {post.ConeIntake ? <>true</> : <>false</>}
              </h4>
              <h4 className="font-bold pt-2">
                Cone Pickup Method: {post.PickUpMethodCone}
              </h4>
              <h4 className="font-bold pt-2">
                Deposit Level for Cone: {post.DepositLevelsCone}
              </h4>
              <h4 className="font-bold pt-2">
                Team Cone Notes: {post.coneNotes}
              </h4>

              <h3 className="font-bold pt-3 text-2xl">Cubes</h3>

              <h4 className="font-bold pt-2">
                Box Intake: {post.BoxIntake ? <>true</> : <>false</>}
              </h4>
              <h4 className="font-bold pt-2">
                Box Pickup Method: {post.PickUpMethodBox}
              </h4>
              <h4 className="font-bold pt-2">
                Deposit Level for Box: {post.DepositLevelBox}
              </h4>
              <h4 className="font-bold pt-2">
                Team Box Notes: {post.boxNotes}
              </h4>

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
