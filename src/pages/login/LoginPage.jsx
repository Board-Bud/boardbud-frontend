import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./login.css";
import SurfImage from "../../images/SurfImage.jpg"

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate()

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      navigate("/surfboards")
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };


  return (
    <div className="login">

      <div className="lsurfImg"> 
            <img src={SurfImage} className="surfImg" alt="img" />
      </div>
      <div className="lContainer">
        <h2 
        className="boardBud"
        type="text"
        >BoardBud
        </h2>
        <input
          type="text"
          placeholder="username"
          id="username"
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
          className="lInput"
        />


        <button disabled={loading} onClick={handleClick} className="lButton">
          Login
        </button>
        <Link to="/auth/register" className="registerLink">
          Don't have an account? Register here.
        </Link>
        {error && <span>{error.message}</span>}
      </div>
    </div>
  );
};

export default Login;

