import React from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { ArrowRight } from "phosphor-react";
function Login() {
  return (
    <div>
      <div className="form-container">
        <form className="register-form">
          <input
            class="form-field"
            type="email"
            placeholder="Email"
            name="emailId"
          />
          <input
            class="form-field"
            type="password"
            placeholder="Password"
            name="password"
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
