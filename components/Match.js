import React from 'react'

function Match({ match }) {
  const [showModal, setShowModal] = React.useState(false)

  if(match.winning_alliance == ""){

    return <></>

  }

  else{
      return (
        <div class="bg-gray-300 p-6 text-left w-screen border border-black">
          <button
            class="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
            onClick={() => setShowModal(!showModal)}
          >
            Match: {match.match_number}
          </button>

          {showModal ? (
            <div>
              <h4 className="font-bold pt-2">Alliances:</h4>
              <h3>BLUE</h3>
              <ul className="list-disc pl-8 text-md">
                <li>{match.alliances.blue.team_keys[0]}</li>
                <li>{match.alliances.blue.team_keys[1]}</li>
                <li>{match.alliances.blue.team_keys[2]}</li>
              </ul>
              <h3>RED</h3>
              <ul className="list-disc pl-8 text-md">
                <li>{match.alliances.red.team_keys[0]}</li>
                <li>{match.alliances.red.team_keys[1]}</li>
                <li>{match.alliances.red.team_keys[2]}</li>
              </ul>

              <h4 className="font-bold pt-2">
                Winner: {match.winning_alliance}
              </h4>

              <h4 className="font-bold pt-2">Points Break Down:</h4>
              <br />

              <h3 className="font-bold pt-2">BLUE: </h3>

              <h2 className="font-bold pt-2">
                Total Points: {match.score_breakdown.blue.totalPoints}
              </h2>
              <h2 className="font-bold pt-2">
                Active Bonus Achieved:{' '}
                {match.score_breakdown.blue.activeBonusAchieved ? (
                  <>true</>
                ) : (
                  <>false</>
                )}
              </h2>
              <h2 className="font-bold pt-2">
                Auto Bridge State: {match.score_breakdown.blue.autoBridgeState}
              </h2>
              <h2 className="font-bold pt-2">
                Auto Bridge Points:{' '}
                {match.score_breakdown.blue.autoChargeStationPoints}
              </h2>
              <h2 className="font-bold pt-2">
                Robot 1 Auto Charge:{' '}
                {match.score_breakdown.blue.autoChargeStationRobot1}
              </h2>
              <h2 className="font-bold pt-2">
                Robot 2 Auto Charge:{' '}
                {match.score_breakdown.blue.autoChargeStationRobot2}
              </h2>
              <h2 className="font-bold pt-2">
                Robot 3 Auto Charge:{' '}
                {match.score_breakdown.blue.autoChargeStationRobot3}
              </h2>
              <h3 className="font-bold pt-2">Auto Community:</h3>
              <h2 className="font-bold pt-2">Bottom: </h2>
              <ul className="list-disc pl-8 text-md">
                <li>{match.score_breakdown.blue.autoCommunity.B[0]}</li>
                <li>{match.score_breakdown.blue.autoCommunity.B[1]}</li>
                <li>{match.score_breakdown.blue.autoCommunity.B[2]}</li>
                <li>{match.score_breakdown.blue.autoCommunity.B[3]}</li>
                <li>{match.score_breakdown.blue.autoCommunity.B[4]}</li>
                <li>{match.score_breakdown.blue.autoCommunity.B[5]}</li>
                <li>{match.score_breakdown.blue.autoCommunity.B[6]}</li>
                <li>{match.score_breakdown.blue.autoCommunity.B[7]}</li>
                <li>{match.score_breakdown.blue.autoCommunity.B[0]}</li>
              </ul>
              <h2 className="font-bold pt-2">Middle: </h2>
              <ul className="list-disc pl-8 text-md">
                <li>{match.score_breakdown.blue.autoCommunity.M[0]}</li>
                <li>{match.score_breakdown.blue.autoCommunity.M[1]}</li>
                <li>{match.score_breakdown.blue.autoCommunity.M[2]}</li>
                <li>{match.score_breakdown.blue.autoCommunity.M[3]}</li>
                <li>{match.score_breakdown.blue.autoCommunity.M[4]}</li>
                <li>{match.score_breakdown.blue.autoCommunity.M[5]}</li>
                <li>{match.score_breakdown.blue.autoCommunity.M[6]}</li>
                <li>{match.score_breakdown.blue.autoCommunity.M[7]}</li>
                <li>{match.score_breakdown.blue.autoCommunity.M[8]}</li>
              </ul>

              <h2 className="font-bold pt-2">Top: </h2>
              <ul className="list-disc pl-8 text-md">
                <li>{match.score_breakdown.blue.autoCommunity.T[0]}</li>
                <li>{match.score_breakdown.blue.autoCommunity.T[1]}</li>
                <li>{match.score_breakdown.blue.autoCommunity.T[2]}</li>
                <li>{match.score_breakdown.blue.autoCommunity.T[3]}</li>
                <li>{match.score_breakdown.blue.autoCommunity.T[4]}</li>
                <li>{match.score_breakdown.blue.autoCommunity.T[5]}</li>
                <li>{match.score_breakdown.blue.autoCommunity.T[6]}</li>
                <li>{match.score_breakdown.blue.autoCommunity.T[7]}</li>
                <li>{match.score_breakdown.blue.autoCommunity.T[8]}</li>
              </ul>

              <h2 className="font-bold pt-2">
                Auto Dock:{' '}
                {match.score_breakdown.blue.autoDock ? <>true</> : <>false</>}
              </h2>
              <h2 className="font-bold pt-2">
                Auto Game Piece Count:{' '}
                {match.score_breakdown.blue.autoGamePieceCount}
              </h2>
              <h2 className="font-bold pt-2">
                Auto Game Piece Points:{' '}
                {match.score_breakdown.blue.autoGamePiecePoints}
              </h2>
              <h2 className="font-bold pt-2">
                Auto Mobility Points:{' '}
                {match.score_breakdown.blue.autoMobilityPoints}
              </h2>
              <h2 className="font-bold pt-2">
                Auto Points: {match.score_breakdown.blue.autoPoints}
              </h2>
              <h2 className="font-bold pt-2">
                Co-op Game Pieces:{' '}
                {match.score_breakdown.blue.coopGamePieceCount}
              </h2>
              <h2 className="font-bold pt-2">
                Co-op Criteria met:{' '}
                {match.score_breakdown.blue.coopertitionCriteriaMet ? (
                  <>true</>
                ) : (
                  <>false</>
                )}
              </h2>
              <h2 className="font-bold pt-2">
                End Game Bridge State:{' '}
                {match.score_breakdown.blue.endGameBridgeState}
              </h2>
              <h2 className="font-bold pt-2">
                End Game Charge Station Points:{' '}
                {match.score_breakdown.blue.endGameChargeStationPoints}
              </h2>
              <h2 className="font-bold pt-2">
                Robot 1 End Game Charge Station:{' '}
                {match.score_breakdown.blue.endGameChargeStationRobot1}
              </h2>
              <h2 className="font-bold pt-2">
                Robot 2 End Game Charge Station:{' '}
                {match.score_breakdown.blue.endGameChargeStationRobot2}
              </h2>
              <h2 className="font-bold pt-2">
                Robot 3 End Game Charge Station:{' '}
                {match.score_breakdown.blue.endGameChargeStationRobot3}
              </h2>
              <h2 className="font-bold pt-2">
                End Game Park Points:{' '}
                {match.score_breakdown.blue.endGameParkPoints}
              </h2>
              <h2 className="font-bold pt-2">
                foul Count: {match.score_breakdown.blue.foulCount}{' '}
              </h2>
              <h2 className="font-bold pt-2">
                foul Points: {match.score_breakdown.blue.foulPoints}
              </h2>
              <h2 className="font-bold pt-2">
                link Points: {match.score_breakdown.blue.linkPoints}
              </h2>
              <h2 className="font-bold pt-2">
                Mobility Robot 1: {match.score_breakdown.blue.mobilityRobot1}
              </h2>
              <h2 className="font-bold pt-2">
                Mobility Robot 2: {match.score_breakdown.blue.mobilityRobot2}
              </h2>
              <h2 className="font-bold pt-2">
                Mobility Robot 3: {match.score_breakdown.blue.mobilityRobot3}
              </h2>
              <h2 className="font-bold pt-2">
                Sustainability Bonus Achieved:{' '}
                {match.score_breakdown.blue.sustainabilityBonusAchieved ? (
                  <>true</>
                ) : (
                  <>false</>
                )}
              </h2>
              <h3 className="font-bold pt-2">Teleop Community: </h3>
              <h2 className="font-bold pt-2">Bottom: </h2>
              <ul className="list-disc pl-8 text-md">
                <li>{match.score_breakdown.blue.teleopCommunity.B[0]}</li>
                <li>{match.score_breakdown.blue.teleopCommunity.B[1]}</li>
                <li>{match.score_breakdown.blue.teleopCommunity.B[2]}</li>
                <li>{match.score_breakdown.blue.teleopCommunity.B[3]}</li>
                <li>{match.score_breakdown.blue.teleopCommunity.B[4]}</li>
                <li>{match.score_breakdown.blue.teleopCommunity.B[5]}</li>
                <li>{match.score_breakdown.blue.teleopCommunity.B[6]}</li>
                <li>{match.score_breakdown.blue.teleopCommunity.B[7]}</li>
                <li>{match.score_breakdown.blue.teleopCommunity.B[0]}</li>
              </ul>
              <h2 className="font-bold pt-2">Middle: </h2>
              <ul className="list-disc pl-8 text-md">
                <li>{match.score_breakdown.blue.teleopCommunity.M[0]}</li>
                <li>{match.score_breakdown.blue.teleopCommunity.M[1]}</li>
                <li>{match.score_breakdown.blue.teleopCommunity.M[2]}</li>
                <li>{match.score_breakdown.blue.teleopCommunity.M[3]}</li>
                <li>{match.score_breakdown.blue.teleopCommunity.M[4]}</li>
                <li>{match.score_breakdown.blue.teleopCommunity.M[5]}</li>
                <li>{match.score_breakdown.blue.teleopCommunity.M[6]}</li>
                <li>{match.score_breakdown.blue.teleopCommunity.M[7]}</li>
                <li>{match.score_breakdown.blue.teleopCommunity.M[8]}</li>
              </ul>

              <h2 className="font-bold pt-2">Top: </h2>
              <ul className="list-disc pl-8 text-md">
                <li>{match.score_breakdown.blue.teleopCommunity.T[0]}</li>
                <li>{match.score_breakdown.blue.teleopCommunity.T[1]}</li>
                <li>{match.score_breakdown.blue.teleopCommunity.T[2]}</li>
                <li>{match.score_breakdown.blue.teleopCommunity.T[3]}</li>
                <li>{match.score_breakdown.blue.teleopCommunity.T[4]}</li>
                <li>{match.score_breakdown.blue.teleopCommunity.T[5]}</li>
                <li>{match.score_breakdown.blue.teleopCommunity.T[6]}</li>
                <li>{match.score_breakdown.blue.teleopCommunity.T[7]}</li>
                <li>{match.score_breakdown.blue.teleopCommunity.T[8]}</li>
              </ul>
              <h2 className="font-bold pt-2">
                Teleop Game Piece Count:{' '}
                {match.score_breakdown.blue.teleopGamePieceCount}
              </h2>
              <h2 className="font-bold pt-2">
                Teleop Game Piece Points:{' '}
                {match.score_breakdown.blue.teleopGamePiecePoints}
              </h2>
              <h2 className="font-bold pt-2">
                teleop Points: {match.score_breakdown.blue.teleopPoints}
              </h2>
              <h2 className="font-bold pt-2">
                total Charge Station Points:{' '}
                {match.score_breakdown.blue.totalChargeStationPoints}
              </h2>
              <br />

              <h3 className="font-bold pt-2">RED: </h3>
              <h2 className="font-bold pt-2">
                Total Points: {match.score_breakdown.red.totalPoints}
              </h2>
              <h2 className="font-bold pt-2">
                Active Bonus Achieved:{' '}
                {match.score_breakdown.red.activeBonusAchieved ? (
                  <>true</>
                ) : (
                  <>false</>
                )}
              </h2>
              <h2 className="font-bold pt-2">
                Auto Bridge State: {match.score_breakdown.red.autoBridgeState}
              </h2>
              <h2 className="font-bold pt-2">
                Auto Bridge Points:{' '}
                {match.score_breakdown.red.autoChargeStationPoints}
              </h2>
              <h2 className="font-bold pt-2">
                Robot 1 Auto Charge:{' '}
                {match.score_breakdown.red.autoChargeStationRobot1}
              </h2>
              <h2 className="font-bold pt-2">
                Robot 2 Auto Charge:{' '}
                {match.score_breakdown.red.autoChargeStationRobot2}
              </h2>
              <h2 className="font-bold pt-2">
                Robot 3 Auto Charge:{' '}
                {match.score_breakdown.red.autoChargeStationRobot3}
              </h2>
              <h3 className="font-bold pt-2">Auto Community:</h3>
              <h2 className="font-bold pt-2">Bottom: </h2>
              <ul className="list-disc pl-8 text-md">
                <li>{match.score_breakdown.red.autoCommunity.B[0]}</li>
                <li>{match.score_breakdown.red.autoCommunity.B[1]}</li>
                <li>{match.score_breakdown.red.autoCommunity.B[2]}</li>
                <li>{match.score_breakdown.red.autoCommunity.B[3]}</li>
                <li>{match.score_breakdown.red.autoCommunity.B[4]}</li>
                <li>{match.score_breakdown.red.autoCommunity.B[5]}</li>
                <li>{match.score_breakdown.red.autoCommunity.B[6]}</li>
                <li>{match.score_breakdown.red.autoCommunity.B[7]}</li>
                <li>{match.score_breakdown.red.autoCommunity.B[0]}</li>
              </ul>
              <h2 className="font-bold pt-2">Middle: </h2>
              <ul className="list-disc pl-8 text-md">
                <li>{match.score_breakdown.red.autoCommunity.M[0]}</li>
                <li>{match.score_breakdown.red.autoCommunity.M[1]}</li>
                <li>{match.score_breakdown.red.autoCommunity.M[2]}</li>
                <li>{match.score_breakdown.red.autoCommunity.M[3]}</li>
                <li>{match.score_breakdown.red.autoCommunity.M[4]}</li>
                <li>{match.score_breakdown.red.autoCommunity.M[5]}</li>
                <li>{match.score_breakdown.red.autoCommunity.M[6]}</li>
                <li>{match.score_breakdown.red.autoCommunity.M[7]}</li>
                <li>{match.score_breakdown.red.autoCommunity.M[8]}</li>
              </ul>

              <h2 className="font-bold pt-2">Top: </h2>
              <ul className="list-disc pl-8 text-md">
                <li>{match.score_breakdown.red.autoCommunity.T[0]}</li>
                <li>{match.score_breakdown.red.autoCommunity.T[1]}</li>
                <li>{match.score_breakdown.red.autoCommunity.T[2]}</li>
                <li>{match.score_breakdown.red.autoCommunity.T[3]}</li>
                <li>{match.score_breakdown.red.autoCommunity.T[4]}</li>
                <li>{match.score_breakdown.red.autoCommunity.T[5]}</li>
                <li>{match.score_breakdown.red.autoCommunity.T[6]}</li>
                <li>{match.score_breakdown.red.autoCommunity.T[7]}</li>
                <li>{match.score_breakdown.red.autoCommunity.T[8]}</li>
              </ul>

              <h2 className="font-bold pt-2">
                Auto Dock:{' '}
                {match.score_breakdown.red.autoDock ? <>true</> : <>false</>}
              </h2>
              <h2 className="font-bold pt-2">
                Auto Game Piece Count:{' '}
                {match.score_breakdown.red.autoGamePieceCount}
              </h2>
              <h2 className="font-bold pt-2">
                Auto Game Piece Points:{' '}
                {match.score_breakdown.red.autoGamePiecePoints}
              </h2>
              <h2 className="font-bold pt-2">
                Auto Mobility Points:{' '}
                {match.score_breakdown.red.autoMobilityPoints}
              </h2>
              <h2 className="font-bold pt-2">
                Auto Points: {match.score_breakdown.red.autoPoints}
              </h2>
              <h2 className="font-bold pt-2">
                Co-op Game Pieces:{' '}
                {match.score_breakdown.red.coopGamePieceCount}
              </h2>
              <h2 className="font-bold pt-2">
                Co-op Criteria met:{' '}
                {match.score_breakdown.red.coopertitionCriteriaMet ? (
                  <>true</>
                ) : (
                  <>false</>
                )}
              </h2>
              <h2 className="font-bold pt-2">
                End Game Bridge State:{' '}
                {match.score_breakdown.red.endGameBridgeState}
              </h2>
              <h2 className="font-bold pt-2">
                End Game Charge Station Points:{' '}
                {match.score_breakdown.red.endGameChargeStationPoints}
              </h2>
              <h2 className="font-bold pt-2">
                Robot 1 End Game Charge Station:{' '}
                {match.score_breakdown.red.endGameChargeStationRobot1}
              </h2>
              <h2 className="font-bold pt-2">
                Robot 2 End Game Charge Station:{' '}
                {match.score_breakdown.red.endGameChargeStationRobot2}
              </h2>
              <h2 className="font-bold pt-2">
                Robot 3 End Game Charge Station:{' '}
                {match.score_breakdown.red.endGameChargeStationRobot3}
              </h2>
              <h2 className="font-bold pt-2">
                End Game Park Points:{' '}
                {match.score_breakdown.red.endGameParkPoints}
              </h2>
              <h2 className="font-bold pt-2">
                foul Count: {match.score_breakdown.red.foulCount}{' '}
              </h2>
              <h2 className="font-bold pt-2">
                foul Points: {match.score_breakdown.red.foulPoints}
              </h2>
              <h2 className="font-bold pt-2">
                link Points: {match.score_breakdown.red.linkPoints}
              </h2>
              <h2 className="font-bold pt-2">
                Mobility Robot 1: {match.score_breakdown.red.mobilityRobot1}
              </h2>
              <h2 className="font-bold pt-2">
                Mobility Robot 2: {match.score_breakdown.red.mobilityRobot2}
              </h2>
              <h2 className="font-bold pt-2">
                Mobility Robot 3: {match.score_breakdown.red.mobilityRobot3}
              </h2>
              <h2 className="font-bold pt-2">
                Sustainability Bonus Achieved:{' '}
                {match.score_breakdown.red.sustainabilityBonusAchieved ? (
                  <>true</>
                ) : (
                  <>false</>
                )}
              </h2>
              <h3 className="font-bold pt-2">Teleop Community: </h3>
              <h2 className="font-bold pt-2">Bottom: </h2>
              <ul className="list-disc pl-8 text-md">
                <li>{match.score_breakdown.red.teleopCommunity.B[0]}</li>
                <li>{match.score_breakdown.red.teleopCommunity.B[1]}</li>
                <li>{match.score_breakdown.red.teleopCommunity.B[2]}</li>
                <li>{match.score_breakdown.red.teleopCommunity.B[3]}</li>
                <li>{match.score_breakdown.red.teleopCommunity.B[4]}</li>
                <li>{match.score_breakdown.red.teleopCommunity.B[5]}</li>
                <li>{match.score_breakdown.red.teleopCommunity.B[6]}</li>
                <li>{match.score_breakdown.red.teleopCommunity.B[7]}</li>
                <li>{match.score_breakdown.red.teleopCommunity.B[0]}</li>
              </ul>
              <h2 className="font-bold pt-2">Middle: </h2>
              <ul className="list-disc pl-8 text-md">
                <li>{match.score_breakdown.red.teleopCommunity.M[0]}</li>
                <li>{match.score_breakdown.red.teleopCommunity.M[1]}</li>
                <li>{match.score_breakdown.red.teleopCommunity.M[2]}</li>
                <li>{match.score_breakdown.red.teleopCommunity.M[3]}</li>
                <li>{match.score_breakdown.red.teleopCommunity.M[4]}</li>
                <li>{match.score_breakdown.red.teleopCommunity.M[5]}</li>
                <li>{match.score_breakdown.red.teleopCommunity.M[6]}</li>
                <li>{match.score_breakdown.red.teleopCommunity.M[7]}</li>
                <li>{match.score_breakdown.red.teleopCommunity.M[8]}</li>
              </ul>

              <h2 className="font-bold pt-2">Top: </h2>
              <ul className="list-disc pl-8 text-md">
                <li>{match.score_breakdown.red.teleopCommunity.T[0]}</li>
                <li>{match.score_breakdown.red.teleopCommunity.T[1]}</li>
                <li>{match.score_breakdown.red.teleopCommunity.T[2]}</li>
                <li>{match.score_breakdown.red.teleopCommunity.T[3]}</li>
                <li>{match.score_breakdown.red.teleopCommunity.T[4]}</li>
                <li>{match.score_breakdown.red.teleopCommunity.T[5]}</li>
                <li>{match.score_breakdown.red.teleopCommunity.T[6]}</li>
                <li>{match.score_breakdown.red.teleopCommunity.T[7]}</li>
                <li>{match.score_breakdown.red.teleopCommunity.T[8]}</li>
              </ul>
              <h2 className="font-bold pt-2">
                Teleop Game Piece Count:{' '}
                {match.score_breakdown.red.teleopGamePieceCount}
              </h2>
              <h2 className="font-bold pt-2">
                Teleop Game Piece Points:{' '}
                {match.score_breakdown.red.teleopGamePiecePoints}
              </h2>
              <h2 className="font-bold pt-2">
                teleop Points: {match.score_breakdown.red.teleopPoints}
              </h2>
              <h2 className="font-bold pt-2">
                total Charge Station Points:{' '}
                {match.score_breakdown.red.totalChargeStationPoints}
              </h2>

              
            </div>
          ) : null}
        </div>
      )
  }


}

export default Match
