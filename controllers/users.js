const User = require('../models/users');

//callback
/*const  index  = function(req,res,next){
  User.find({},function(err,user){
    if(err){
      next(err);
    }
    res.status(200).json(user);
  });
}

//promise
const  index  = function(req,res,next){
  User.find({})
  .then(data =>{
      res.status(200).json(data);
  })
  .catch(err =>{
    next(err);
  })
}
*/
const  index  = async function(req,res,next){
  try{
    const user =await  User.find({});
    res.status(200).json(user);
  }
  catch(err)
  {
    next(err);
  }
}

//promise
const newUser = function(req,res,next){
  const newUser = new User(req.body)
  newUser.save()
    .then(data =>{
    res.status(201).json(data)
  })
    .catch(err =>{
    next(err);
  })
}

module.exports ={
  index,
  newUser
}
