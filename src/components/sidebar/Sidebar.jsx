import React, { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FaHome, FaBars } from 'react-icons/fa'
import { FaRegListAlt } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

import { BsGearFill, BsFillArrowLeftSquareFill } from 'react-icons/bs'
import { useState } from 'react'
import '../../App.css'
const studentRoutes = [
  {
    path: '/',
    name: 'Course Catalog',
    icon: <FaHome />,
  },
  {
    path: '/enroll',
    name: 'Enrolled Courses',
    icon: <FaRegListAlt />,
  },
  // {
  //     path:'/CourseCreate',
  //     name:"Create Course",
  //     icon:<BsGearFill/>
  // },

  {
    path: '/Quiz',
    name: 'Quiz',
    icon: <BsFillArrowLeftSquareFill />,
  },
  {
    path: '/accountsetting',
    name: 'Account setting',
    icon: <BsGearFill />,
  },
  {
    path: '/logout',
    name: 'Log Out',
    icon: <BsGearFill />,
  },
]
const teacherRoutes = [
  {
    path: '/',
    name: 'Course Catalog',
    icon: <FaHome />,
  },
  // {
  //     path:'/enroll',
  //     name:"Enrolled Courses",
  //     icon:<FaRegListAlt/>
  // },
  {
    path: '/CourseCreate',
    name: 'Create Course',
    icon: <BsGearFill />,
  },
  {
    path: '/accountsetting',
    name: 'Account setting',
    icon: <BsGearFill />,
  },
  {
    path: '/createQuiz',
    name: 'Quiz',
    icon: <BsFillArrowLeftSquareFill />,
  },
  // {
  //     path:'/Signup',
  //     name:"signup",
  //     icon:<BsFillArrowLeftSquareFill/>
  // },
  {
    path: '/logout',
    name: 'Log out',
    icon: <BsFillArrowLeftSquareFill />,
  },
]

function Sidebar({ children }) {
  const [isOpen, setIsopen] = useState(false)
  const [role, setRole] = useState('student')
  const toggle = () => setIsopen(!isOpen)
  useEffect(() => {
    const roleName = window.sessionStorage.getItem('role')
    console.log(roleName)
    setRole(roleName)
  }, [role])

  return (
    <div className="sidebar-main-container">
      <motion.div
        animate={{ width: isOpen ? '200px' : '30px' }}
        className="sidebar"
      >
        <div className="top">
          {isOpen ? <h3>TMS</h3> : ''}

          <div>
            <FaBars onClick={toggle} />
          </div>
        </div>
        <section>
          {role == 'student'
            ? studentRoutes.map((rout) => {
                return (
                  <NavLink
                    activeClassName="active"
                    to={rout.path}
                    key={rout.name}
                    className="navlink"
                  >
                    <div className="icon">{rout.icon}</div>
                    <AnimatePresence>
                      {isOpen ? (
                        <div className="routeName">{rout.name} </div>
                      ) : (
                        ''
                      )}
                    </AnimatePresence>
                  </NavLink>
                )
              })
            : teacherRoutes.map((rout) => {
                return (
                  <NavLink
                    activeClassName="active"
                    to={rout.path}
                    key={rout.name}
                    className="navlink"
                  >
                    <div className="icon">{rout.icon}</div>
                    <AnimatePresence>
                      {isOpen ? (
                        <div className="routeName">{rout.name} </div>
                      ) : (
                        ''
                      )}
                    </AnimatePresence>
                  </NavLink>
                )
              })}
        </section>
      </motion.div>
      <main>{children}</main>
    </div>
  )
}

export default Sidebar
