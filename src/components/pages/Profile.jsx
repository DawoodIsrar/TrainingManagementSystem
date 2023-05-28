import React, { useState, useEffect } from 'react';
import profile from '../../images/profile.jpg';
import axios from 'axios';

export default function Profile() {
  const [profileData, setProfileData] = useState(null);
 const role = window.sessionStorage.getItem("role")
  useEffect(() => {
    const id = window.sessionStorage.getItem('id');
    axios.post('http://localhost:8000/api/getUserInfo', { id }).then((res) => {
      console.log(res.data);
      setProfileData(res.data);
    });
  }, []);

  return (
    <div className="profile-div">
      <div className="pic-div">
        <img src={profile} alt="Dummy Image" className="rounded-full mb-4" />
      </div>
      {profileData && (
        <div className="profile-detail">
          <div className="heading">
            <h3>
              {profileData.fname} {profileData.lname}
            </h3>
           {
            role === "student" ?  <p>(Student TMS)</p>: <p>(Admin TMS)</p>
           }
            <hr />
          </div>
          <div className="detail-table">
            <table>
              <tr>
                <th>Personal info</th>
                <th>Detail</th>
              </tr>
              <tr>
                <td>Email</td>
                <td>{profileData.email}</td>
              </tr>
              <tr>
                <td>Role</td>
                <td>{window.sessionStorage.getItem("role")}</td>
              </tr>
             
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
