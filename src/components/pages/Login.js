import React from 'react'

function Login() {

  return (
    <>
    <div className='reg'>
    <div className='form'>
    <form className='regform'>
        <div className='fields'>
        <input className='inputform' type="text" placeholder='Enter id'></input><br></br>
    <input className='inputform' type="password" placeholder='Type Password' ></input><br></br>
      <div style={{margin:"0 30%" , display:"inline"}}> 
        <span style={{marginRight:"5%"}}>Role:</span>
        <select >
                <option >Teacher</option>
                <option >Student</option>
            </select><br></br>
      </div>
    
        <button className='form-btn'>Sign In</button>
        <div style={{marginTop:"5%"}}>
            Did Not Have Account ? <a href='/Signup' >Sign Up</a>
        </div>
        </div>
    </form>
    </div>
   
</div></>
  )
}

export default Login
