import { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { setUserName } from "./utils/userSlice";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  function changeUserName() {
    dispatch(setUserName(name));
  }

  return (
    <div className="Login">
      <div className="card">
        <div>
          <label htmlFor="username">Name : </label>
          <input
            type="text"
            id="username"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password : </label>
          <input type="text" id="password" onChange={setPassword} />
        </div>
        <Link to="/profile">
          <button className="btn" onClick={changeUserName}>
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
