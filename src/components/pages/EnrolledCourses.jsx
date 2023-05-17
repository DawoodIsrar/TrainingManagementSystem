import React from 'react'
import '../../App.css';
import Card from '../card/Card';
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom';
import CourseDetail from './CourseDetail';
function EnrolledCourses() {
  return (
    <>
    <div className='title'> <h2>Enrolled Courses</h2></div>
    <div className='enroll'>
      <Card enrol='false'/>
      
        </div>
    </>
  )
}

export default EnrolledCourses