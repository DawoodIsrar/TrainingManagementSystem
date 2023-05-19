import User from "../models/user";
import { hashPassword } from "../utils/auth";

export const register = async (req, res) => {
  try {
    const { email, fname, lname, password, repassword } = req.body;
    // validation
    if (!fname) return res.status(400).send("First name is required");
    if (!password || password.length < 6) {
      return res
        .status(400)
        .send("Password is required and should be at least six characters");
    }
    if (!repassword || repassword.length < 6) {
      return res
        .status(400)
        .send("Password is required and should be at least six characters");
    }
    let userExist = await User.findOne({ email }).exec();
    if (userExist) return res.status(400).send("Email is taken");

    // hash password
    const hashedPassword = await hashPassword(password);

    // register
    const newUser = await new User({
      email,
      fname,
      lname,
      password: hashedPassword,
      repassword: hashedPassword,
    }).save();
    console.log("saved user", newUser);
    return res.json({ ok: true });
  } catch (err) {
    console.log(err);
    return res.status(400).send("Error. Try again");
  }
};
