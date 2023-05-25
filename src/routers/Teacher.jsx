import React from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import CourseCreate from "../components/pages/CourseCreate";
import CourseCatalog from "../components/pages/CourseCatalog";
import AccountSetting from "../components/pages/AccountSetting";
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Login from '../components/pages/Login';
import CreateQuestion from '../components/pages/CreateQuestion';
function Teacher() {
  return (
    <> 
      <Router>
        <Sidebar>
          <Routes>
            <Route path="/" element={<CourseCatalog />}></Route>
            <Route path="/CourseCreate" element={<CourseCreate/>}> </Route>
            <Route path='/createQuiz' element={<CreateQuestion/>}></Route>
            <Route path="/accountsetting" element={<AccountSetting />}></Route>
            <Route path="/*" element={<div>Not Found</div>}></Route>
            <Route path="/logout" element={<Login />}></Route>
            
          </Routes>
        </Sidebar>
      </Router>
    </>
  )
}

export default Teacher