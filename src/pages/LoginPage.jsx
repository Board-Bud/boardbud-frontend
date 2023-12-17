import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/login.css";
import SurfImage from "../images/SurfImage.jpg"


const Login = () => {
  return (
    <div className="login">

      <div className="lsurfImg"> 

            <img src={SurfImage} className="surfImg" alt="img" />

      </div>

      <div className="lContainer">

        <h2 
        className="boardBud"
        type="text"
        >Welcome to BoardBud!
        </h2>

        <input
          type="text"
          placeholder="username"
          id="username"
          className="lInput"
        />

        <input
          type="password"
          placeholder="password"
          id="password"
          className="lInput"
        />


        <button className="lButton">
          Login
        </button>

        <Link to="/auth/register" className="registerLink">
          Don't have an account? Register here.
        </Link>

      </div>
    </div>
  );
};

export default Login;

