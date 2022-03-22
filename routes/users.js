var express = require('express');
var router = express.Router();

let usersModel = require("../models/users")

/* GET users listing. */
router.get('/', async function(req, res, next) {

  let users = await usersModel.find({});
  console.log(users)

  res.render('users/usersViews', { title: 'User', users: users });;
});

router.post('/', async(req , res, next)=>{
  console.log(req.body);

  let user = {
    name: req.body.name,
    email : req.body.email,
    phone: req.body.phone,
    address: req.body.address

  };
  await usersModel(user).save();


  router.delete('/', async(req , res, next)=>{
   
  
    })
    await usersModel(user).delete();


  res.redirect("/users")
})

module.exports = router;
