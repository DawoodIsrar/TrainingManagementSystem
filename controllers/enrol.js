const Courses = require('../models/course');

const createCourse = async (req, res) => {
  try {
   
            const course = await Courses.create({
                title:req.body.title,
                description:req.body.description,
                paid:req.body.paid,
                category:req.body.category
            })
            console.log("Course created:",course)
            return res.status(201).json({message:"Course is created succesfully"})
        
       
        
        
    
  } catch (err) {
    console.log(err);
    return res.status(500).send("internal server error");
  }
};
module.exports = createCourse;
