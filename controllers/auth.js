const User = require('../models/user');
const bcrypt = require('bcrypt')

 const register = async (req, res) => {
  try {
    
    const { email, fname, lname, password, repassword } = req.body;
    // validation
    if (!fname) {
      return res.status(400).send("First name is required");
    }
    if (!password || password.length < 6) {
      return res
        .status(400)
        .send("Password is required and should be at least six characters");
    }
    if (!repassword || repassword.length < 6) {
      return res
        .status(400)
        .send("Re-entered password is required and should be at least six characters");
    }

    let userExist = await User.findOne({ email }).exec();
    if (userExist) {
      return res.status(400).send("Email is already taken");
    }

    // hash password
    const hashedPassword =  bcrypt.hashSync(password,8);

    // register
    const newUser = await User.create({
      email,
      fname,
      lname,
      password: hashedPassword,
      repassword: hashedPassword,
    });

    console.log("saved user", newUser);
    return res.json({ ok: true, message: "Registration successful" });
  } catch (err) {
    console.log(err);
    return res.status(400).send("Error. Please try again");
  }
};
module.exports = register;
