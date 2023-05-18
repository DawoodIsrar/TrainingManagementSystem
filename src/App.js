import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import CourseCatalog from "./components/pages/CourseCatalog";
import EnrolledCourses from "./components/pages/EnrolledCourses";
import AccountSetting from "./components/pages/AccountSetting";
import Sidebar from "./components/sidebar/Sidebar";
import Logout from "./components/pages/Logout";
// import CourseDetail from "./components/pages/CourseDetail";
import Quiz from "./components/pages/Quiz";
import Signup from "./components/pages/Signup";
import Login from "./components/pages/Login";
import CourseCreate from "./CourseCreate";

function App() {
  return (
    <>
      <Router>
        <Sidebar>
          <Routes>
            <Route path="/" element={<CourseCatalog />}></Route>
            <Route path="/enroll" element={<EnrolledCourses />}> </Route>
            <Route path="/CourseCreate" element={<CourseCreate/>}> </Route>
            <Route path="/accountsetting" element={<AccountSetting />}></Route>
            <Route path="/*" element={<div>Not Found</div>}></Route>
            <Route path="/logout" element={<Logout />}></Route>
            <Route path="/Quiz" element={<Quiz />}></Route>
            <Route path="/SignUp" element={<Signup />}></Route>
            <Route path="/Login" element={<Login />}></Route>
            
          </Routes>
        </Sidebar>
      </Router>
      
    </>
  );
}

export default App;
