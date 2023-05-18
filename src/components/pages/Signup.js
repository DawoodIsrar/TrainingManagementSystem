import React from 'react'

function Signup() {
  return (
    <div className='reg'>
        <div className='form'>
        <form className='regform'>
            <div className='fields'>
            <input className='inputform' type="text" placeholder='First Name'></input><br></br>
        <input className='inputform' type="text" placeholder='Last Name'></input><br></br>
        
        <input className='inputform' type="password" placeholder='Type Password' ></input><br></br>
        
        <input className='inputform' type="password" placeholder='Re-Type Password'></input><br></br>
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
  )
}

export default Signup