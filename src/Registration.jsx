import { React, useState } from "react";
import "./Registration.css";
import { Link } from "react-router-dom";
import { ArrowRight } from "phosphor-react";
import axios, * as others from "axios";
function Registration() {
  const [username, setUserName] = useState("");
  const [emailid, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const register = () => {
    console.log("Inside register funciton");
    console.log(username);
    axios
      .post("http://localhost:3001/register", {
        userName: username,
        emailId: emailid,
        password: password,
      })
      .then((response) => {
        console.log(response);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <div className="Registration">
      <div className="form-container">
        <form className="register-form">
          <input
            className="form-field"
            type="text"
            placeholder="User Name"
            name="username"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
          <input
            className="form-field"
            type="email"
            placeholder="Email"
            name="emailid"
            onChange={(e) => {
              setEmailId(e.target.value);
            }}
          />
          <input
            className="form-field"
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button className="form-field" type="submit" onClick={register}>
            Register
          </button>
        </form>
        <div className="links">
          <Link to={"/login"}>
            Already have account <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Registration;
