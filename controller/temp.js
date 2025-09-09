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

// async function insertMockData() {
//   const client = await pool.connect();

//   try {
//     await client.query('BEGIN');
//data of json

//     await client.query('COMMIT');
//     console.log("Data inserted successfully.");
//   } catch (err) {
//     await client.query('ROLLBACK');
//     console.error("Error inserting data:", err);
//   } finally {
//     client.release();
//   }
// }

