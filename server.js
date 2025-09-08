const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const pool = require("./config/db");


app.use(cors());
app.use(express.json());


dotenv.config();

app.get('/',(req,res)=>{
    res.json("Hello");
});


const port = 3001;
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
