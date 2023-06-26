import React, {useState} from "react";
import "./signUp.css";
import NavBar from "../navBar/navBar";
import { useNavigate } from "react-router-dom";

export default function SignUp(props) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  function handleSubmit(event) {
    event.preventDefault();

    const emailValue = email;
    const passwordValue = password;
    // if email address and password are correct, it will navigate to the home page
    // else display an error message saying that the email address or password is incorrect as an alert
    //test@gmail.com
    //test123
    if(emailValue === "test@gmail.com" && passwordValue === "test123"){
      navigate("/")

  } else{
    alert("Email or password is incorrect")
  }
  console.log(emailValue, passwordValue)
}
  return (
    <>
      <header>
        <NavBar/>
      </header>
      <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={handleSubmit}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="form-group mt-3">
              <label>Email address:</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password:</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary" >
                Submit
              </button>
            </div>
            <p className="forgot-password text-right mt-2">
              Forgot <a href="#">password?</a>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}
