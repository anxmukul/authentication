import { React, useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight } from "phosphor-react";
import axios, * as others from "axios";

function Login() {
  const [emailid, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const navigate = useNavigate();

  const signin = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3001/login", {
        emailId: emailid,
        password: password,
      })
      .then((response) => {
        if (response.data.rowCount > 0) {
          navigate("/home");
        } else {
          setLoginStatus(response.data.message);
        }
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <div>
      <div className="form-container">
        <p className="invalidMessage">{loginStatus}</p>
        <form className="register-form" onSubmit={signin}>
          <input
            class="form-field"
            type="email"
            placeholder="Email"
            name="emailId"
            onChange={(e) => {
              setEmailId(e.target.value);
            }}
          />
          <input
            class="form-field"
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button class="form-field" type="submit">
            Login
          </button>
        </form>
        <div className="links">
          <Link to={"/"}>
            Signup <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
