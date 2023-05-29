const User = require('../models/user');

const updateUserInfo = async (req, res) => {
  const { id, fname, lname, email } = req.body;

  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.fname = fname;
    user.lname = lname;
    user.email = email;

    const updatedUser = await user.save();
    res.status(200).json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = updateUserInfo;
