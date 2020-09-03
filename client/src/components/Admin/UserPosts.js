import React, { useEffect } from "react";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import { getUserPosts } from "../../actions";
import { Link } from "react-router-dom";

const UserPosts = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserPosts(user.login.id));
  }, [dispatch, user.login.id]);

  const showUserPosts = (user) =>
    user.userPosts
      ? user.userPosts.map((item) => (
          <tr key={item._id}>
            <td>
              <Link to={`/user/editPost/${item._id}`}>{item.name}</Link>
            </td>
            <td>{item.author}</td>
            <td>{moment(item.createdAt).format("DD/MM/YYYY")}</td>
          </tr>
        ))
      : null;

  return (
    <div className="user_posts">
      <h4>Your reviews</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Author</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>{showUserPosts(user)}</tbody>
      </table>
    </div>
  );
};

export default UserPosts;
