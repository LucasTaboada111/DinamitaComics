import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { loginUser } from "../store/user";
import styles from '../styles/login.module.css'

const LoginView = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(
      loginUser({
        email: email,
        password: password,
      }),
      history.push("/me")
    ) 
      .catch(() => setError(true));
  };

  const Error = () => (
    <div className="error-in-log-in-or-sign-up"> Invalid Email or Password</div>
  );

  return (
    <div className={styles.container}>
    <div className={styles.form}>
      <h2 style={{color:"white"}}>
        Welcome back
        <hr />
      </h2>
      <form onSubmit={handleClick}>
       
        <input
        className={styles.input}
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        
        <input
        className={styles.input}
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button className={styles.button} >Log In</button>
      </form>
      <Link to="/register">
        <br>
        </br>
        <div>
          Don't have an account?     Sign up
        </div>
      </Link>
      {error && <Error />}
    </div>
    </div>
  );
};

export default LoginView;
