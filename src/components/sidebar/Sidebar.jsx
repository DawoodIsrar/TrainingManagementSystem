import React from 'react'
import {AnimatePresence, motion} from 'framer-motion'
import {FaHome, FaBars } from 'react-icons/fa'
import {FaRegListAlt} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { BsGearFill,BsFillArrowLeftSquareFill } from "react-icons/bs";
import { useState } from 'react'
import '../../App.css';
const routes = [
    {
        path:'/',
        name:"Course Catalog",
        icon:<FaHome/>
    },
    {
        path:'/enroll',
        name:"Enrolled Courses",
        icon:<FaRegListAlt/>
    },
    {
        path:'/accountsetting',
        name:"Account setting",
        icon:<BsGearFill/>
    },{
        path:'/logout',
        name:"Logout",
        icon:<BsFillArrowLeftSquareFill/>
    },
]
function Sidebar({children}) {
    const [isOpen,setIsopen] = useState(false)
    const toggle = () => setIsopen(!isOpen)
  return (
    <div className='sidebar-main-container'>
        <motion.div animate={{width: isOpen? '200px' : "30px"}} className="sidebar">
            <div className='top'>
                {isOpen?<h3>TMS</h3>:""}
                
                <div>
                     <FaBars onClick={toggle}/>
                </div>
            </div>
          <section>
            {routes.map((rout)=>{
                return(
                    <NavLink activeClassName = "active" to={rout.path} key={rout.name} className="navlink">
                    <div className='icon'>
                        {rout.icon}
                    </div>
                    <AnimatePresence>
                    {isOpen?<div className='routeName'>{rout.name} </div>:""}
                   
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