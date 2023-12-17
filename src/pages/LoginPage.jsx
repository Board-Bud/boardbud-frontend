import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/login.css";
import SurfImage from "../images/SurfImage.jpg"


const Login = () => {

  const [user, setUser] = useState({
    username: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
  setUser({ ...user, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        const data = await response.json();
        // Handle successful login response
        console.log(data);
        // Redirect to a new page 
        navigate('/surfboards/all');
      } else {
        // Handle login error
        console.error('Login failed:', response.statusText);
      }
    } catch (error) {
      // Handle fetch error
      console.error('Error during fetch:', error);
    }
  };

  return (
    <div className="login">

      <div className="lsurfImg"> 

            <img src={SurfImage} className="surfImg" alt="img" />

      </div>

      <form className="lContainer" onSubmit={handleLogin}>

        <h2 
        className="boardBud"
        type="text"
        >Welcome to BoardBud!
        </h2>

        <input
          type="text"
          placeholder="username"
          id="username"
          name="username"
          className="lInput"
          value={user.username}
          onChange={handleInputChange}
          required
        />

        <input
          type="password"
          placeholder="password"
          id="password"
          name="password"
          className="lInput"
          value={user.password}
          onChange={handleInputChange}
          required
        />


        <button type = "submit" className="lButton">
          Login
        </button>

        <Link to="/auth/register" className="registerLink">
          Don't have an account? Register here.
        </Link>

      </form>
    </div>
  );
};

export default Login;

