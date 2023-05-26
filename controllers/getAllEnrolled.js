const course = require("../models/course");
const enrolledCourse = require("../models/enrolledCourses");
const mongoose = require("mongoose");

const getEnrolledCourse = async (req, res) => {
  try {
    const exist = await enrolledCourse.find({ studentId: req.body.studentId });
    const test = exist.map(
      (data) => new mongoose.Types.ObjectId(data?.courseId)
    );
    const getCoursesDetails = await course.aggregate([
      {
        $match: { _id: { $in: test } },
        // $lookup: {
        //   from: "Courses",
        //   localField: "_id",
        //   foreignField: "courseId",
        //   as: "coursesDetails",
        // },
      },
    ]);
    return res.status(200).json({
      data: getCoursesDetails,
      message: "You are successfully enrolled in this course",
    });

    // if(exist.length==0){
    //   return res.status(200).json({message:"sorry course not exist"})
    // }else{
    //   const enrol = await enrolledCourses.create({
    //     courseId:req.body.courseId,
    //     studentId:req.body.studentId,
    // })
    // console.log("Enrolled course:",enrol)
    // return res.status(201).json({message:"You are successfully enrolled in this course"})
    // }
  } catch (err) {
    console.log(err);
    return res.status(500).send("internal server error");
  }
};
module.exports = getEnrolledCourse;
