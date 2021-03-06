import React from "react";
import { Link } from "react-router-dom";

import "./SignInComponent.scss";

import InputComponent from "../inputComponent/InputComponent";

import LeftSideComponent from "../leftSideComponent/LeftSideComponent";
import RightSideComponent from "../rightSideComponent/RightSideComponent";
import { signinValidate } from "shared/AuthFormValidationRules";
import useForm from "shared/useForm";

const SignInComponent = (): JSX.Element => {
  function signIn() {
    alert("No errors, submit callback called!");
  }
  const { values, errors, handleChange, handleSubmit } = useForm(
    signIn,
    signinValidate
  );
  React.useEffect(() => {
    return () => {};
  }, [errors, values]);
  return (
    <>
      <div className="signin-wrapper">
        <LeftSideComponent title="Sign In" text="Welcome, we missed you!">
          <form className="signin-form" onSubmit={handleSubmit} noValidate>
            <InputComponent
              label="Your email"
              id="email"
              inputName="email"
              inputType="text"
              pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
              placeholder="Enter your email"
              errors={errors.email || ""}
              onChange={handleChange}
              value={values.email || ""}
            />
            <InputComponent
              label="Your password"
              id="password"
              inputName="password"
              inputType="password"
              pattern="^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]{8,20})$"
              placeholder="Enter your password"
              errors={errors.password || ""}
              onChange={handleChange}
              value={values.password || ""}
            />
            <div className="remebmer-group">
              <div className="checkbox">
                <input
                  className="styled-checkbox"
                  id="styled-checkbox-1"
                  type="checkbox"
                  value="value1"
                />
                <label htmlFor="styled-checkbox-1">Remember me</label>
              </div>
              <Link to="/forgot-password">Forgot Password?</Link>
            </div>
            <button className="auth-submit bg-orange-gradient">Sign In</button>
          </form>
          <div className="continue-border">
            <p>or continue with</p>
          </div>
          <div className="button-group">
            <button className="steam">
              <span></span> Sign in with Steam
            </button>
            <button className="vk">
              <span></span>
            </button>
          </div>
        </LeftSideComponent>
        <RightSideComponent link="/signup" />
      </div>
    </>
  );
};

export default SignInComponent;
