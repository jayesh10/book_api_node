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
    const user = await User.find({});
    res.status(200).json(user);
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

const getUser = async function(req,res,next){
  const userId = req.params.userId;
  const user= await User.findById(userId);
  res.status(200).json(user);

}

const replaceUser = async function(req,res,next){
  const userId = req.params.userId;
  const newUser = req.body;

  const result = await User.findByIdAndUpdate(userId,newUser);
  res.status(200).json({
    suucess: true,
    message : "user updated"
  });

}
const updateUser = async function(req,res,next){
  const userId = req.params.userId;
  const newUser = req.body;

  const result = await User.findByIdAndUpdate(userId,newUser);
  res.status(200).json({
    suucess: true,
    message : "user updated"
  });

}


module.exports ={
  index,
  newUser,
  getUser,
  replaceUser,
  updateUser
}
