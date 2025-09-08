const express=require("express");
const {sum}=require("../controller/sum");
const router=express.Router();

router.route('/').post(sum);

module.exports=router;