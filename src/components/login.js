import React from "react";
import { Form, Button, PlaceholderHeader } from "semantic-ui-react";

function Login() {
  const onHandleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    alert(`${email} ${password}`);
  };
  return (
    <>
      <section className="login-section">
        <div className="login">
          <div className="flex kosh-logo align-center justify-center">
            <img className="" src="/logo.png" alt="logo" />
            <h1>Kosh.ai</h1>
          </div>
          <h2>Log in to your Account</h2>
          <form
            onSubmit={(event) => onHandleLogin(event)}
            className="flex flex-column"
          >
            <div className="control-form">
              <input type="email" name="email" placeholder="Email Address" />
              <img src="/email.png" alt="email" width="15.83" height="12.5" />
            </div>
            <div className="control-form-password">
              <input type="password" name="password" placeholder="Password" />
              <img src="/lock.png" alt="lock" width="12.5" height="16.25" />
            </div>
            <button className="purple">Continue</button>
          </form>
          <p className="text-center font-12 margin3">OR</p>
          <button className="h-36">
            <img src="/google.png" alt="google" width="24" height="24" />{" "}
            <p>Continue with Google</p>
          </button>
          <button className="h-36">
            <img src="/ms.png" alt="ms" width="18" height="18" />
            <p> Continue with Microsoft</p>
          </button>
          <button className="h-36">
            <img src="/apple.png" alt="apple" width="18" height="18" />{" "}
            <p>Continue with Apple</p>
          </button>
          <p className="text-center margin-t font-14">
            Don't have an account?{" "}
            <span className="blue pointer"> Sign Up</span>
          </p>
        </div>
        <p className="term">
          Terms and Conditions <div></div> Privacy Policy
        </p>
      </section>
    </>
  );
}

export default Login;
