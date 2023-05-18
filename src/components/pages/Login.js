import React from 'react'

function Login() {



  return (
    <div>
        <form>
            <input type="text"  placeholder='Enter id'></input><br></br>
            <input type="password"  placeholder='Enter Password'></input><br></br>
            <select>
                <option>Teacher</option>
                <option>Student</option>
            </select><br></br>
            <button >Log in</button>

        </form>

        <span>
            Did Not Have Account ? <a href='Signup' >Sign Up</a>
        </span>



    </div>
  )
}

export default Login
