// Define Node.js function
async function myFunction() {
  console.log('Hello from Node.js')
}

// Export serverless function
export default async (req, res) => {
  // Connect to Azure SQL database
  //const data = req.body;

  //console.log(data.name)

  var xmlHttp = new XMLHttpRequest()
  xmlHttp.open(
    'GET',
    'https://www.thebluealliance.com/api/v3/event/2023ksla/matches',
    false
  )
  xmlHttp.setRequestHeader(
    'X-TBA-Auth-Key',
    'zldOgyr0zcuk7znnToBy3rbs8B6SmCnwaLd0Ew74DXSnPENUs58vPsYMYnpX3hyh'
  )
  xmlHttp.send()
  //    return xmlHttp.responseText;

  try {
    const res = await fetch(
      `https://www.thebluealliance.com/api/v3/event/2023ksla/matches`
    )
    const data = await res.json()
    console.log(data)
    if (data) {
      return data
    }
  } catch (err) {
    console.log(err)
  }

  // Call Node.js function
  await myFunction()

  // Send response back to client
  res
    .status(200)
    .json({ message: /*JSON.stringify(resultSet, null, 2)*/ 'good' })
}
