import React from 'react'
import image from '../../images/course.jpeg'
import '../../App.css'
import { color } from 'framer-motion'

function Card(props) {
  return (
    <>
      <div
        className="card"
        onClick={() => (window.location = 'https://google.com')}
      >
        <img src={image}></img>
        <h5>
          {' '}
          <span>Title :</span> Mern-Stack Bootcamp
        </h5>
        <h5>
          {' '}
          <span>Duration :</span> Mern-Stack Bootcamp{' '}
          {props.enrol == 'true' ? (
            <span>
              <a href="#">Enrolled</a>
            </span>
          ) : (
            ''
          )}
        </h5>
      </div>
    </>
  )
}

export default Card
