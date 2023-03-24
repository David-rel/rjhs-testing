const config = {
    user: process.env.NEXT_PUBLIC_SQL_USER,
    password: process.env.NEXT_PUBLIC_SQL_PASSWORD,
    server: process.env.NEXT_PUBLIC_SQL_DATABASE,
    database: process.env.NEXT_PUBLIC_SQL_NAME,
    port: 1433,
    options: {
      encrypt: true, // Required if using Azure SQL Database
      trustServerCertificate: true // Required if using Azure SQL Database
    }
    
  };
  
  
export default config;

