import React from 'react'
import image from '../../images/course.jpeg'
import '../../App.css'
import { color } from 'framer-motion'

function Card({ data }) {
  return (
    <>
      <div
        className="card"
        onClick={() => (window.location = 'https://google.com')}
      >
        <img src={image}></img>
        <h5>
          <span>Title :</span> {data?.title}
        </h5>
        <h5>
          <span>Description :</span> {data?.description}
          {/* {props.enrol == 'true' ? (
            <span>
              <a href="#">Enrolled</a>
            </span>
          ) : (
            ''
          )} */}
        </h5>
      </div>
    </>
  )
}

export default Card
