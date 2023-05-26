import React, { useEffect, useState } from 'react'
import '../../App.css'
import Card from '../card/Card'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CourseDetail from './CourseDetail'
import { getUserEnrolledCourses } from '../apis'
function EnrolledCourses() {
  const [enrolledCourses, setEnrolledCourses] = useState(null)

  const studentId = window.sessionStorage.getItem('id')

  useEffect(() => {
    doGetUserEnrolledCourses()
  }, [])

  const doGetUserEnrolledCourses = async () => {
    const res = await getUserEnrolledCourses(studentId)

    console.log('ressetEnrolledCourses', res)
    setEnrolledCourses(res?.data)
  }
  return (
    <>
      <div className="title">
        {' '}
        <h2>Enrolled Courses</h2>
      </div>
      <div className="enroll">
        {enrolledCourses?.map((data, index) => {
          return (
            <>
              <Card key={index} data={data} />
            </>
          )
        })}
      </div>
    </>
  )
}

export default EnrolledCourses
