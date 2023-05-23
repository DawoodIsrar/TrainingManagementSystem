
import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify';




const Signup= () => {
  const [email, setEmail] = useState("ali@gmail.com");
  const [fname, setFName] = useState("Ali");
  const [lname, setLName] = useState("Jan");
  const [password, setPassword] = useState("123456");
  const [repassword, setRepassword] = useState("123456");


const handleSubmit = async (e) => {
  e.preventDefault();
  // console.table({ email, fname, lname, password,repassword });
try{
  await axios.post(`http://localhost:8000/api/register` , 
  {email,fname,lname,password,repassword});
 
  toast("Registration successful. please login");
} catch(err){
       toast(err.response.data)
}
};



  return (
    <>
    <h1 className="jumbotron  text-center bg-primary square">Register</h1>
    <div className='reg'>
        <div className='form'>
        <form className='regform' onSubmit={handleSubmit}>
            <div className='fields'>
            <input className='inputform' value={email}  onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Email'></input><br></br>
            <input className='inputform' value={fname}  onChange={(e) => setFName(e.target.value)} type="text" placeholder='First Name'></input><br></br>
        <input className='inputform' value={lname}  onChange={(e) => setLName(e.target.value)} type="text" placeholder='Last Name'></input><br></br>
        
        <input className='inputform' value={password}  onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Type Password' ></input><br></br>
        
        <input className='inputform' value={repassword}  onChange={(e) => setRepassword(e.target.value)} type="password" placeholder='Re-Type Password'></input><br></br>
            <button className='form-btn'>Create Account</button>
        
            </div>
      
        </form>
      
        </div>
        <div className='half'>
        <div className='half-card'>
            <h2>TMS </h2>
            <h4>Welcome to Training management system</h4>
        </div>
        </div>
    </div>
    </>
  )
}

export default Signup;