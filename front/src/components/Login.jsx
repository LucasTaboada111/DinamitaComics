import { React, useState } from "react"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router"
import { Link } from "react-router-dom"
import { userLogin } from "../store/user"
import styles from "../styles/login.module.css"

const LoginView = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const dispatch = useDispatch()
  const history = useHistory()

  const handleClick = e => {
    e.preventDefault()
    dispatch(userLogin({ email, password })).then(({ payload }) => {
      if (payload) setTimeout(() => history.push("/"), 1200)
    })
  }

  return (
    <div className={styles.container}>
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
            onChange={e => setEmail(e.target.value)}
            placeholder="Email"
            required="true"
          />
          <input
            className={styles.input}
            type="password"
            name="password"
            onChange={e => setPassword(e.target.value)}
            placeholder="Password"
            required="true"
          />
          <button className={styles.button}>Log In</button>
        </form>

        <Link to="/register">
          <div> Dont have an account? Sign up</div>
        </Link>
      </div>
    </div>
  )
}

export default LoginView
