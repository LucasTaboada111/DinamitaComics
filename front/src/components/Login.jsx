import { React, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { userLogin } from "../store/user";
import styles from "../styles/login.module.css";

//Lo relacionado a este componente es meramente estetico, esta todo comentado


const LoginView = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
 
  const [ setShowMessage] = useState(false)
/* 
  const alert = 
    <div>
      <Dialog
        onHide={()=>setShowMessage(true)}
        visible={showMessage}
        style={{ width: "30vw" }}
        contentStyle={{ backgroundColor: "rgba(1,2,3,.5)", color: "white" }}
        position="top-left"
      >
        ¡Las credenciales ingresadas son invalidas!
      </Dialog>
    </div>
  ; */

  const validatorLogin = (payload) => {
    if (!payload) return setShowMessage(true)
    return history.push("/");
  };

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(userLogin({ email, password })).then((data) =>
      validatorLogin(data.payload)
    );
    setTimeout(setShowMessage(false),2000)
  };

  const Error = () => (
    <div className="error-in-log-in-or-sign-up"> Invalid Email or Password</div>
  );

  return (
    
    <div className={styles.container}>
    {/*   {validatorLogin?alert:null} */}
      <div className={styles.form}>
        <h2 style={{ color: "white" }}>
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
            required="true"
          />

          <input
            className={styles.input}
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required="true"
          />
          <button className={styles.button}>Log In</button>
        </form>

        <Link to="/register">
          <div> Dont have an account? Sign up</div>
        </Link>

        {error && <Error />}
      </div>
    </div>
  );
};

export default LoginView;
