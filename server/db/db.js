

import mysql from "mysql2/promise";


const pool = mysql.createPool({
  host:"localhost",
  user:"root",
  password: "root",
  database: "test2",
  connectionLimit: 10,
  waitForConnections: true,
  queueLimit: 0,
});
 
const checkConnection = async () => {
  try {
    const connection = await pool.getConnection();
    console.log("Database is connected!!");
    connection.release();
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
};
 
export { pool, checkConnection };
 