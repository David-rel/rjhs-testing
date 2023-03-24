// Import mssql module
const sql = require('mssql')

// Define connection config
const config = {
  user: process.env.NEXT_PUBLIC_SQL_USER,
  password: process.env.NEXT_PUBLIC_PASSWORD,
  server: process.env.NEXT_PUBLIC_DATABASE,
  database: process.env.NEXT_PUBLIC_NAME,
  options: {
    encrypt: true, // Required for Azure SQL
  },
}

// Define Node.js function
async function myFunction() {
  console.log('Hello from Node.js')
}

// Export serverless function
export default async (req, res) => {
  // Connect to Azure SQL database
  const { name } = req.body

  console.log(name)

  var poolConnection = await sql.connect(config)

  var resultSet = await poolConnection.query(
    `INSERT INTO finaltesttable (name) VALUES ('${name}')`
  )

  // Call Node.js function
  await myFunction()

  // Send response back to client
  res
    .status(200)
    .json({ message: /*JSON.stringify(resultSet, null, 2)*/ 'good' })
}
