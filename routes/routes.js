
// Imported 

const express=require('express');
const router =express.Router();
const Controllers=require('../Controllers/Controllers')



// Register Route

router.route('/Register').post(Controllers.Register)

// Login Route  

router.route('/Login').post(Controllers.Login)





module.exports=router;