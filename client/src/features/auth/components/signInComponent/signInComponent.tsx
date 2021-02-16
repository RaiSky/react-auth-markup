import React from "react";
import { Link } from "react-router-dom";

import "./signInComponent.scss";

import InputComponent from "../inputComponent/InputComponent";
import RightSideComponent from "../rightSideComponent/RightSideComponent";
import LeftSideComponent from "../leftSideComponent/LeftSideComponent";

const SignInComponent = (): JSX.Element => {
  return (
    <>
      <div className="signin-wrapper">
        <LeftSideComponent title="Sign In" text="Welcome, we missed you!">
          <form className="signin-form">
            <InputComponent
              label="Your email"
              id="email"
              inputType="text"
              pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
              placeholder="Enter your email"
              errors="Some error"
            />
            <InputComponent
              label="Your password"
              id="password"
              inputType="password"
              pattern="^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]{8,20})$"
              placeholder="Enter your password"
              errors="Some error"
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
            <button className="submit">Sign In</button>
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