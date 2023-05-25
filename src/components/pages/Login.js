import axios from "axios";
import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { toast } from "react-toastify";
import { Link, useHistory } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8000/api/logIn", {
        email,
        password,
      });
      console.log(res);
      const data = res.data; // Extract the response data

      console.log(email, password, data.id, data.accessToken, data.role);
      toast("Logging In successfully.");

      sessionStorage.setItem("access-token",data.accessToken);
      sessionStorage.setItem("id", data.id); // Wrap the key in quotes
      sessionStorage.setItem("role", data.role); // Wrap the key in quotes
      // Wrap the key in quotes

      setTimeout(() => {
        window.location.assign("/");
      }, 5000);
    } catch (err) {
      toast("error");
    }
  };

  return (
    <>
      <h1 className="jumbotron  text-center bg-primary square">Login</h1>
      <div className="reg">
        <div className="form">
          <form className="regform" onSubmit={handleSubmit}>
            <div className="fields">
              <input
                className="inputform"
                type="text"
                placeholder="Enter id"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              ></input>
              <br></br>

              <input
                className="inputform"
                type="password"
                placeholder="Type Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              ></input>
              <br></br>
              <div style={{ margin: "0 30%", display: "inline" }}>
                <span style={{ marginRight: "5%" }}>Role:</span>
                <select>
                  <option>Teacher</option>
                  <option>Student</option>
                </select>
                <br></br>
              </div>

              <button className="form-btn">Sign In</button>
              <div style={{ marginTop: "5%" }}>
                Did Not Have Account ? <a href="/Signup">Sign Up</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
