const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const logIn = async (req, res) => {
  try {
    const email = req.body.email;
    let userExist = await User.findOne({ email }).exec();
    console.log(userExist)
    if (userExist!== null) {
        console.log(" ",req.body.password," ",userExist.password)
      const passwordIsValid = bcrypt.compareSync(req.body.password,userExist.password)
      console.log("pass: ",passwordIsValid)
      if(passwordIsValid){
        let token = jwt.sign({ id: userExist.id },"tms", {
            expiresIn: 86400 // 24 hours
          });
        if(userExist.email=="admin@tms.com"){
            return  res.status(200).send({
                id: userExist.id,
                username: `${userExist.fname} ${userExist.lname}`,
                email: userExist.email,
                accessToken: token,
                role:"admin"
              });}

        else{
            return  res.status(200).send({
                id: userExist.id,
                username: `${userExist.fname}${userExist.lname}`,
                email: userExist.email,
                accessToken: token,
                role:"student"
              });
        }
        
          
      }else{
        return res.status(400).json({
            message:"Please enter correct password"
        })
      }
    }

  } catch (err) {
    console.log(err);
    return res.status(400).send("Error. Please try again");
  }
};
module.exports = logIn;
