import React from "react";

const User = ({ user }) => {
  const { name, lastname, email } = user.login;
  return (
    <div className="user_container">
      <div className="avatar">
        <img src="/images/avatar.png" alt="avatar" />
      </div>
      <div className="nfo">
        <div>
          <span>First Name: </span>
          {name}
        </div>
        <div>
          <span>Last Name: </span>
          {lastname}
        </div>
        <div>
          <span>Email: </span>
          {email}
        </div>
      </div>
    </div>
  );
};

export default User;
