const User = require('../models/user');
const Quests = require('../models/question');
const bcrypt = require('bcrypt')
const userInfo = async (req,res) =>{
const profile = await User.findOne({id:req.body.id})
console.log(profile)
res.status(200).send(profile)
}
module.exports = userInfo;