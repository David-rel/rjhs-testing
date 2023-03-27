import React, { useState } from 'react'

function EPARanking({info, event_key}) {

    const [EPAinfo, EPAsetInfo] = useState([])

    var XMLHttpRequest = require('xhr2')
    var request = new XMLHttpRequest()
    request.open(
      'GET',
      `https://api.statbotics.io/v2/team_event/${info.team_key.substring(
        3,
        7
      )}/${event_key}`
    )
    request.send()
    request.onload = () => {
      const data = JSON.parse(request.response)
      //console.log(data)
      EPAsetInfo(data)
    }  
    
    let a = [];
    let b = [];
    
    return (
        <div className="text-3xl py-1">
          <div className="grid grid-cols-2">
            <h1>{info.team_key.substring(3, 7)}:</h1>
            <h1>{EPAinfo.epa_max}</h1>
          </div>
        </div>
    )
}

function bigSmallSorter(arr) {

    let sortedArr = [...arr.sort((n, k) => n - k)]
    let newArr = [];
    let flip = true;

    for( let i of arr ) {
        let temp = flip 
            ? sortedArr.shift()
            : sortedArr.pop()
        newArr.push(temp)
        flip = !flip;
    }

    return newArr;
}

export default EPARanking