import React, { useState, useEffect } from 'react';
import profile from '../../images/profile.jpg';
import axios from 'axios';

export default function Profile() {
  const [profileData, setProfileData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedProfileData, setEditedProfileData] = useState(null);

  useEffect(() => {
    const id = window.sessionStorage.getItem('id');
    axios.post('http://localhost:8000/api/getUserInfo', { id })
      .then((res) => {
        console.log(res.data);
        setProfileData(res.data);
        setEditedProfileData(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSaveChanges = () => {
    axios.put('http://localhost:8000/api/updateUserInfo', editedProfileData)
      .then((res) => {
        console.log(res.data);
        setProfileData(editedProfileData);
        setIsEditing(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

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
            <p>{window.sessionStorage.getItem('role')}</p>
            <hr />
          </div>
          <div className="detail-table">
            <table>
              <tbody>
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
                  <td>{window.sessionStorage.getItem('role')}</td>
                </tr>
              </tbody>
            </table>
          </div>
          {isEditing ? (
            <div>
              <input
                type="text"
                name="fname"
                value={editedProfileData.fname}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="lname"
                value={editedProfileData.lname}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="email"
                value={editedProfileData.email}
                onChange={handleInputChange}
              />
              <button onClick={handleSaveChanges}>Save Changes</button>
            </div>
          ) : (
            <button onClick={handleEdit}>Edit Profile</button>
          )}
        </div>
      )}
    </div>
  );
}
