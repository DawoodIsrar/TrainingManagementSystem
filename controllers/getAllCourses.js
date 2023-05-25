const Courses = require('../models/course');

const getAllCourse = async (req, res) => {
  try {
    let courses = await Courses.find().exec();
            console.log("Course created:",courses)
            return res.status(201).json(courses)
        
        
    
  } catch (err) {
    console.log(err);
    return res.status(500).send("internal server error");
  }
};
module.exports = getAllCourse;
