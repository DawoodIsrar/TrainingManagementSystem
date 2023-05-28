const Courses = require("../models/course");

const createCourse = async (req, res) => {
  try {
    if (req.body !== null) {
      if (req.body.title == null) {
        return res
          .status(400)
          .json({ message: "Please fill the title field is require" });
      } else if (req.body.description == null) {
        return res
          .status(400)
          .json({ message: "Please fill the title field is require" });
      } else if (req.body.level == null) {
        return res
          .status(400)
          .json({ message: "Please fill the title field is require" });
      } else if (req.body.duration == null) {
        return res
          .status(400)
          .json({ message: "Please fill the title field is require" });
      } else {
        const find = await Courses.find({ title: req.body.title });
        console.log("====", find);
        if (find?.length > 0) {
          return res.status(200).json({ message: "Course already exist" });
        } else {
          const course = await Courses.create({
            title: req.body.title,
            description: req.body.description,
            level: req.body.level,
            duration: req.body.duration,
          });
          console.log("Course created:", course);
          return res
            .status(201)
            .json({ message: "Course is created succesfully" });
        }
      }
    }
  } catch (err) {
    console.log(err);
    return res.status(500).send("internal server error");
  }
};
module.exports = createCourse;
