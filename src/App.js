import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import CourseCatalog from "./components/pages/CourseCatalog";
import EnrolledCourses from "./components/pages/EnrolledCourses";
import AccountSetting from "./components/pages/AccountSetting";
import Sidebar from "./components/sidebar/Sidebar";
import Logout from "./components/pages/Logout";
import CourseDetail from "./components/pages/CourseDetail";
function App() {
  return (
    <>
      <Router>
        <Sidebar>
          <Routes>
            <Route path="/" element={<CourseCatalog />}></Route>
            <Route path="/enroll" element={<EnrolledCourses />}>
              
            </Route>
            <Route path="/accountsetting" element={<AccountSetting />}></Route>
            <Route path="/*" element={<div>Not Found</div>}></Route>
            <Route path="/logout" element={<Logout />}></Route>
          </Routes>
        </Sidebar>
      </Router>
    </>
  );
}

export default App;
