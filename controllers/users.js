const User = require('../models/users');

const  index  = function(req,res,next){
  User.find({},function(err,user){
      if(err){
        next(err);
      }
      res.status(200).json(user);
  });
}

const newUser = function(req,res,next){
  console.log(req.body);
  const newUser = new User(req.body);
  console.log(newUser);



}

module.exports ={
  index,
  newUser
}
