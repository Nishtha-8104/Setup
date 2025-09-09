const express=require("express");
const {create,addhops}=require("../controller/shipment");
const {addflight,updateflight}=require("../controller/flights");
const router=express.Router();

router.route('/create').post(create);
router.route('/:id/hops/add').post(addhops);
router.route('/:id/flights/add').post(addflight);
router.route(':id/status').put(updateflight);
module.exports=router;