import React, { useEffect, useState } from 'react';
import axios from 'axios';
import image from '../../images/course.jpeg';
import '../../App.css';

function CourseCatalog() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/allCourses").then(res => {
      const responseData = res.data;
      setData(responseData);
      console.log(responseData);
    });
  }, []);

  return (
    <>
      <div className='title'>
        <h2>Course catalog</h2>
      </div>

      {data.map((course, index) => {
        let title = course.title;
        let description = course.description;

        return (
          <div style={{display:"inline-flex"}}>
            <div  key={index.toString()} className="card">
            <img src={image} alt="course" />
            <h5>
              <span>Title:</span> {title}
            </h5>
            <h5>
              <span>Duration:</span> {description}
              {/* {title === 'mern' && (
                <span>
                  <a href="#">Enrolled</a>
                </span>
              )} */}
            </h5>
          </div>
          </div>
        );
      })}
    </>
  );
}

export default CourseCatalog;
