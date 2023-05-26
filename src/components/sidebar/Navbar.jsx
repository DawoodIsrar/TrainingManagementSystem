import React from 'react';
import { Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom';
const Navbar = () => {
    const handleSignOut = async (e) => {
        e.preventDefault();
        try {
          window.sessionStorage.removeItem("access-token");
          window.sessionStorage.removeItem("id");
    
          // Toast.fire({
          //   icon: 'success',
          //   title: 'Logout successfully'
          // })
          alert("Log Out Successful")
          setTimeout(() => {
            window.location.assign('/');
          }, 1600);
        } catch (error) {
          console.error(error);
        }
      };

    return (

        <div>
    <Nav className='above-nav' variant="pills" defaultActiveKey="/home">
      <Nav.Item>
        {/* <Nav.Link className='logout-btn'  onClick={()=>{<Link to="/Login"></Link>
        }}>Logout</Nav.Link> */}
        <Link
                        to="/login"
                        onClick={handleSignOut}
                      >
                        Sign out
                      </Link>
      </Nav.Item>
    </Nav>

        </div>
    );
}

export default Navbar;