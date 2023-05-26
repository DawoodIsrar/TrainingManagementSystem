const enrolledCourses = require("../models/enrolledCourses");
const course = require("../models/course");
const enrolled = async (req, res) => {
  try {
    const exist = await course.find({ courseId: req.body.courseId });
    if (exist.length == 0) {
      return res.status(200).json({ message: "sorry course not exist" });
    } else {
      const exist = await enrolledCourses.find({
        courseId: req.body.courseId,
        studentId: req.body.studentId,
      });
      console.log("exist", exist);
      if (exist.length > 0) {
        return res
          .status(200)
          .json({ message: "You are already enrolled in this course" });
      } else {
        const enrol = await enrolledCourses.create({
          courseId: req.body.courseId,
          studentId: req.body.studentId,
        });
        console.log("Enrolled course:", enrol);
        return res
          .status(200)
          .json({ message: "You are successfully enrolled in this course" });
      }
    }
  } catch (err) {
    console.log(err);
    return res.status(500).send("internal server error");
  }
};
module.exports = enrolled;
