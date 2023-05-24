import React from 'react'
import {AnimatePresence, motion} from 'framer-motion'
import {FaHome, FaBars } from 'react-icons/fa'
import {FaRegListAlt} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import {BsPersonAdd, BsGearFill,BsFillFileEarmarkPlusFill} from "react-icons/bs";
import {BiLogOutCircle, BiLogIn , BiBookAdd} from 'react-icons/bi'
import {SiTestcafe} from 'react-icons/si'
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
        path:'/CourseCreate',
        name:"Create Course",
        icon:<BiBookAdd/>
    },
    {
        path:'/accountsetting',
        name:"Account setting",
        icon:<BsGearFill/>
    },{
        path:'/logout',
        name:"Logout",
        icon:<BiLogOutCircle/>
    },
    {
        path:'/Quiz',
        name:"Quiz",
        icon:<SiTestcafe/>
    },
    {
        path:'/Signup',
        name:"signup",
        icon:<BsPersonAdd/>
    },
    {
        path:'/Login',
        name:"Login",
        icon:<BiLogIn/>
    }
    ,
 {
    path:'/AddQuestion',
    name:"Add Question",
    icon:<BsFillFileEarmarkPlusFill/>
}

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

export default Sidebar;