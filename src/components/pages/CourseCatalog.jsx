import React, { useEffect, useState } from 'react'
import axios from 'axios'
import image from '../../images/course.jpeg'
import '../../App.css'
import { enrolledCourses } from '../apis'
import Navbar from '../sidebar/Navbar'
function CourseCatalog() {
  const [data, setData] = useState([])
 const [role,setRole] = useState(null)
  const studentId = window.sessionStorage.getItem('id')

  useEffect(() => {
    axios.get('http://localhost:8000/api/allCourses').then((res) => {
      const responseData = res.data
      setData(responseData)
      const r = window.sessionStorage.getItem("role")
      setRole(role)
      console.log(responseData)
    })
  }, [])

  return (
    <>
    <Navbar/>
      <div className="title">

        <h2>Course catalog</h2>
      </div>

      {data.map((course, index) => {
        let title = course.title
        let description = course.description
       
        return (
          <div style={{ display: 'inline-flex' }}>
            <div key={index.toString()} className="card">
              <img src={image} alt="course" />
              <h5>
                <span>Title:</span> {title}
              </h5>
              <h5>
                <span>Duration:</span> {description}
              </h5>
              <span>
               {
                role == "student"? <button
                onClick={() => {
                  enrolledCourses(studentId, course?._id)
                }}
              >
                Enrolled
              </button> :""
               }
              </span>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default CourseCatalog
