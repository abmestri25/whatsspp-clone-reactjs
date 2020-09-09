import React from "react";
import { Button } from "@material-ui/core";
import "./Login.css";
import { auth, provider } from "./firebase";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";


function Login() {
const [{},dispatch] = useStateValue()

  const signin = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => 
    dispatch({
        type : actionTypes.SET_USER,
        user : result.user, 
    })
      )
      .catch((err) => alert(err.message));
  };
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://img.icons8.com/fluent/200/000000/whatsapp.png"
          alt="whatsapp_ong"
        />

        <div className="login__text">
          <h1>Sign in to Whatsapp</h1>
        </div>

        <Button onClick={signin}>Sign In With Google</Button>
      </div>
    </div>
  );
}

export default Login;
