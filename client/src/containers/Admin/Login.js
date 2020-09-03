import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../../actions";

const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [error, setError] = useState("");
  // const [success, setSuccess] = useState(false);

  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(loginUser(email, password));
  };

  useEffect(() => {
    if (Object.keys(user).length !== 0) {
      if (user.login.isAuth) {
        return history.push("/user");
      }
    }
  }, [user, history]);

  return (
    <div className="rl_container">
      <form onSubmit={submitForm}>
        <h2>Login</h2>

        <div className="form_element">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form_element">
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit">Log in</button>
        <div className="error">
          {user.login ? <>{user.login.message}</> : null}
        </div>
      </form>
    </div>
  );
};

export default Login;
