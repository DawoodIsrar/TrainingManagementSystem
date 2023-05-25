import React from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import CourseCatalog from "../components/pages/CourseCatalog";
import EnrolledCourses from "../components/pages/EnrolledCourses";
import AccountSetting from "../components/pages/AccountSetting";
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
// import CourseDetail from "./components/pages/CourseDetail";
import Quiz from "../components/pages/Quiz";
import Login from '../components/pages/Login';
function Student() {
  return (
   <>
     <Router>
        <Sidebar>
          <Routes>
            <Route path="/" element={<CourseCatalog />}></Route>
            <Route path="/enroll" element={<EnrolledCourses />}> </Route>
            <Route path="/accountsetting" element={<AccountSetting />}></Route>
            <Route path="/*" element={<div>Not Found</div>}></Route>
            <Route path="/logout" element={<Login />}></Route>
            <Route path="/Quiz" element={<Quiz />}></Route> 
          </Routes>
        </Sidebar>
      </Router>
   </>
  )
}

export default Student