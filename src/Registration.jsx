import React from "react";
import "./Registration.css";
import { Link } from "react-router-dom";
import {ArrowRight} from "phosphor-react"
function Registration() {
  return (
    <div className="Registration">
      <div className="form-container">
        <form className="register-form">
          <input
            class="form-field"
            type="text"
            placeholder="User Name"
            name="userName"
          />
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
            Register
          </button>
        </form>
        <div className="links">
        <Link to={"/login"}>Already have account <ArrowRight size={16} /></Link>
        </div>
      </div>
    </div>
  );
}

export default Registration;
