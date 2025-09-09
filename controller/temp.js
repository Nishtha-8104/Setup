// const fs=require('fs');
// const path=require('path');

// fs.writeFile(
//             path.join(__dirname,"../MOCK_DATA.json"),
//             JSON.stringify(data),
//             (err)=>{
//                 if(err){
//                     console.log("Error Writing file:",err);
//                     return res.status(500).json("Something Went Wrong!!");
//                 }
//                 res.json("SuccessFully user added");
//             }
//         )


// const pool = require("../config/db");
// const data = require("../MOCK_DATA.json");

// async function insertMockData() {
//   const client = await pool.connect();

//   try {
//     await client.query('BEGIN');

//     for (const item of data) {
//       const { id, first_name, last_name, email,gender,job_title } = item;

//       await client.query(
//         `INSERT INTO users (id, first_name, last_name, email,gender,job_title)
//          VALUES ($1, $2, $3, $4,$5,$6)
//          ON CONFLICT (id) DO NOTHING`, 
//         [id, first_name, last_name, email,gender,job_title]
//       );
//     }

//     await client.query('COMMIT');
//     console.log("Data inserted successfully.");
//   } catch (err) {
//     await client.query('ROLLBACK');
//     console.error("Error inserting data:", err);
//   } finally {
//     client.release();
//   }
// }

// module.exports = {
//   insertMockData
// };
