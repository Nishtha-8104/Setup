const pool=require("../config/db");

const sum=async(req,res)=>{
    const {a,b}=(req.body);
    console.log(req.body)
    const total=a+b;
    res.json({"Total":total});
 
}
 



module.exports={sum};