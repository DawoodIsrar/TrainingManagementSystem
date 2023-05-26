import axios from "axios";
import { toast } from "react-toastify";

export const getUserEnrolledCourses = async (studentId) => {
  let response = [];
  await axios
    .post("http://localhost:8000/api/getEnrolledCourses", {
      studentId: studentId,
    })
    .then((res) => {
      console.log("res===>getUserEnrolledCourses", res);
      response = res?.data;
    });

  return response;
};

export const enrolledCourses = async (studentId, courseId) => {
  await axios
    .post("http://localhost:8000/api/enrolledCourse", {
      courseId: courseId,
      studentId: studentId,
    })
    .then((res) => {
      console.log("res=====>", res);
      if (res?.status === 200) toast(res?.data?.message);
      return res;
    });
};
