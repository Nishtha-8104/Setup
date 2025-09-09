const pool=require("../config/db");

const addflight=async(req,res)=>{
    const {id}=req.params;
    console.log(id);
    const {carrier,f_from ,f_to,flight_number,departure,arrival}=(req.body);
    console.log(carrier);
    try{
       const userExist=await pool.query(`select * from shipment where shipment_no=$1`,[id]);
        if(userExist.rows.length==0){
            return res.json({success: false,message:"Shipment with ID not found."});
        }
        else{
            await pool.query(`insert into flight (carrier,f_from ,f_to,flight_number,departure,arrival,ship_id) values ($1,$2,$3,$4,$5,$6,$7)`,[carrier,f_from ,f_to,flight_number,departure,arrival,id]);
            const user = await pool.query(`SELECT * FROM flight WHERE ship_id = $1`, [id]);
        }
        
    return res.status(201).json({
        success:true,
        message:"Flight information added successfully.",
        data:{shipmnent_number: id,
             flight_number: user.rows[0].flight_number,
    flight_path: user.rows[0].f_from-user.rows[0].carrier-user.rows[0].f_to,
    departure: user.rows[0].departure,
    arrival: user.rows[0].arrival,
    status: user.rows[0].status
}
    });
    }catch(err){
        return res.json({success: false,
  message: "Unable to add a flight. The 'from' and 'to' locations are not consecutive hops for this shipment."
});
    }
};

const updateflight=async(req,res)=>{
    const {id}=req.params.id;
    const {status}=req.body;
    const result=await pool.query(`update flights set status=$1 where flight_number=$2 returning *`,[status,id]);
    if(result.rows.length==0){
        return res.json({ success: false,message: "Flight with ID 'em-789' not found."});
    }
    else{
        return res.status(200).json({
            success: true,message: "Flight status updated successfully.",data: {flight_number: result.rows[0].flight_number,status: result.rows[0].status}});
    }
}

module.exports={addflight,updateflight};