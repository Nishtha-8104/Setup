const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const pool = require("./config/db");
const shipment_routes=require("./Routes/shipment_routes")

app.use(cors());
app.use(express.json());


dotenv.config();



app.get('/',(req,res)=>{
    res.json("Hello");
});

app.use('/shipments',shipment_routes);
app.use('/flights',shipment_routes);

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
