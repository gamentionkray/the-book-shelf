import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers, registerUser } from "../../actions";

const Register = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const showUsers = (user) =>
    user.users
      ? user.users.map((item) => (
          <tr key={item._id}>
            <td>{item.name}</td>
            <td>{item.lastname}</td>
            <td>{item.email}</td>
          </tr>
        ))
      : null;

  useEffect(() => {
    if (Object.keys(user).length !== 0) {
      if (user.register === false) {
        setError("Something went wrong, try again!!!");
      } else {
        setName("");
        setLastname("");
        setEmail("");
        setPassword("");
      }
    }
  }, [user]);

  console.log(user);

  const submitForm = (e) => {
    e.preventDefault();
    setError("");
    let data = {
      name,
      lastname,
      email,
      password,
    };
    dispatch(registerUser(data, user.users));
  };

  return (
    <div className="rl_container">
      <form onSubmit={submitForm}>
        <h2>Add user</h2>

        <div className="form_element">
          <input
            type="text"
            placeholder="Enter first name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form_element">
          <input
            type="text"
            placeholder="Enter last name"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
        </div>

        <div className="form_element">
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form_element">
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit">Add User</button>
        <div className="error">{error}</div>
      </form>
      <div className="current_users">
        <h4>Current users</h4>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>{showUsers(user)}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Register;
