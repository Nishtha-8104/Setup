const express = require("express");
const app = express();
// const http = require("http");
const cors = require("cors");
const dotenv = require("dotenv");
const pool = require("./config/db");
const sumRoutes=require("./Routes/sumRoutes");


app.use(cors());
app.use(express.json());

// const server = http.createServer(app); 

dotenv.config();

app.get('/',(req,res)=>{
    res.json("Hello");
});

app.use('/sum',sumRoutes);

const port = 3001;
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
