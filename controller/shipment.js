const pool=require("../config/db");

const create=async(req,res)=>{
    const {origin,destination,shipment_number}=req.body;
    try{
        if(!origin || !destination || !shipment_number){
            return res.json("Origin and destination are required fields.");
        }
        const userExist=await pool.query(`select * from shipment where shipment_no=$1`,[shipment_number]);
        if(userExist.rows.length>0){
            return res.json({ message: "Shipment already exists" });
        }
        try{
            await pool.query('insert into shipment (origin,destination,shipment_no,hops) values ($1,$2,$3,$4)',[origin,destination,shipment_number,[origin,destination]]);
            const user = await pool.query(`SELECT * FROM shipment WHERE shipment_no = $1`, [shipment_number]);

    return res.status(201).json({
        success:true,
        message:"Shipment Created Successfully",
        data:{shipmnent_number: user.rows[0].shipment_no,
            hops:user.rows[0].hops}
    });
        }
        catch(error){
            console.log(error);
        }
    }catch(err){
        console.log(err);
    }
};


const addhops=async(req,res)=>{
    
    const {id}=req.params;
    console.log(id);
    const {previous_hop,next_hop,new_hop}=req.body;
    try{
        //const ind=await pool.query(`select id from shipments where shipment_no=$1`,[id]);
        const userExist=await pool.query(`UPDATE shipment
   SET hops = hops[:hops.length-2] || ARRAY[$1] || hops[array_length(hops)-1:]
   WHERE id = $2;`,[new_hop,id]);
        if(userExist.rows.length==0){
            return res.json({success: false,message:"Shipment with ID not found."});
        }
        
    return res.status(201).json({
        success:true,
        message:"Hop added successfully.",
        data:{shipmnent_number: user.rows[0].shipment_no,
            hops:user.rows[0].hops}
    });
    }catch(err){
        console.log(err);
    }
};

module.exports={create,addhops};