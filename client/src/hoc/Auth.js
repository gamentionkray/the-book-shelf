import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { auth } from "../actions";

export default function (ComposedFunction, reload) {
  const AuthCheck = (props) => {
    const [loading, setLoading] = useState(true);
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(auth());
    }, [dispatch]);

    useEffect(() => {
      if (Object.keys(user).length !== 0) {
        setLoading(false);
        if (!user.login.isAuth) {
          if (reload) {
            props.history.push("/login");
          }
        } else {
          if (reload === false) {
            props.history.push("/user");
          }
        }
      }
    }, [user, props.history]);

    if (loading) {
      return <div className="loader">Loading...</div>;
    }

    return <ComposedFunction {...props} user={user} />;
  };
  return AuthCheck;
}
