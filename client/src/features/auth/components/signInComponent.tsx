import React from "react";
import { Link } from "react-router-dom";

import "./signInComponent.scss";
import pubg from "../../../assets/img/pubg.png";
import fortnite from "../../../assets/img/fortnite.png";
import dota from "../../../assets/img/dota.png";
import cs from "../../../assets/img/cs.png";
import navi from "../../../assets/img/navi.png";
// import steam from '../../../assets/img/steam.png'

const SignInComponent = (): JSX.Element => {
  const checkPassword = (event: any) => {
    var password = event.target.value; // Получаем пароль из формы
    var s_letters = "qwertyuiopasdfghjklzxcvbnm"; // Буквы в нижнем регистре
    var b_letters = "QWERTYUIOPLKJHGFDSAZXCVBNM"; // Буквы в верхнем регистре
    var digits = "0123456789"; // Цифры
    var specials = "!@#$%^&*()_-+=|/.,:;[]{}"; // Спецсимволы
    var is_s = false; // Есть ли в пароле буквы в нижнем регистре
    var is_b = false; // Есть ли в пароле буквы в верхнем регистре
    var is_d = false; // Есть ли в пароле цифры
    var is_sp = false; // Есть ли в пароле спецсимволы
    for (var i = 0; i < password.length; i++) {
      /* Проверяем каждый символ пароля на принадлежность к тому или иному типу */
      if (!is_s && s_letters.indexOf(password[i]) != -1) is_s = true;
      else if (!is_b && b_letters.indexOf(password[i]) != -1) is_b = true;
      else if (!is_d && digits.indexOf(password[i]) != -1) is_d = true;
      else if (!is_sp && specials.indexOf(password[i]) != -1) is_sp = true;
    }
    var rating = 0;
    var text = "";
    if (is_s) rating++; // Если в пароле есть символы в нижнем регистре, то увеличиваем рейтинг сложности
    if (is_b) rating++; // Если в пароле есть символы в верхнем регистре, то увеличиваем рейтинг сложности
    if (is_d) rating++; // Если в пароле есть цифры, то увеличиваем рейтинг сложности
    if (is_sp) rating++; // Если в пароле есть спецсимволы, то увеличиваем рейтинг сложности
    /* Далее идёт анализ длины пароля и полученного рейтинга, и на основании этого готовится текстовое описание сложности пароля */
    if (password.length < 6 && rating < 3) text = "Простой";
    else if (password.length < 6 && rating >= 3) text = "Средний";
    else if (password.length >= 8 && rating < 3) text = "Средний";
    else if (password.length >= 8 && rating >= 3) text = "Сложный";
    else if (password.length >= 6 && rating == 1) text = "Простой";
    else if (password.length >= 6 && rating > 1 && rating < 4) text = "Средний";
    else if (password.length >= 6 && rating == 4) text = "Сложный";
    if (event.keyCode === 13 && event.ctrlKey) alert(text); // Выводим итоговую сложность пароля
    return false; // Форму не отправляем
  };

  return (
    <>
      <div className="signin-wrapper">
        <div className="left-side">
          <h3 className="title">Sign In</h3>
          <p className="text">Welcome, we missed you!</p>
          <form className="signin-form">
            <label htmlFor="email" className="input">
              Your Email
              <input
                type="text"
                id="email"
                placeholder="Enter your email"
                pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                required
              />
              <svg
                width="14px"
                height="12px"
                viewBox="0 0 14 12"
                className="check"
              >
                <path d="M1 7 5.5 11 L13 1"></path>
              </svg>
              <svg
                className="invalid-check"
                width="15px"
                height="12px"
                viewBox="0 0 350 350"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="#f44336">
                  <path d="m21.339844 329.398438c-5.460938 0-10.925782-2.089844-15.082032-6.25-8.34375-8.339844-8.34375-21.824219 0-30.164063l286.589844-286.59375c8.339844-8.339844 21.824219-8.339844 30.164063 0 8.34375 8.339844 8.34375 21.824219 0 30.164063l-286.589844 286.59375c-4.183594 4.179687-9.621094 6.25-15.082031 6.25zm0 0" />
                  <path d="m307.929688 329.398438c-5.460938 0-10.921876-2.089844-15.082032-6.25l-286.589844-286.59375c-8.34375-8.339844-8.34375-21.824219 0-30.164063 8.339844-8.339844 21.820313-8.339844 30.164063 0l286.589844 286.59375c8.34375 8.339844 8.34375 21.824219 0 30.164063-4.160157 4.179687-9.621094 6.25-15.082031 6.25zm0 0" />
                </g>
              </svg>
              <span className="tooltip">
                <ul>
                  Email must be with:
                  <li>@</li>
                  <li>.</li>
                  <li>example: mail@gmail.com</li>
                </ul>
              </span>
            </label>

            {/* <div className="wrapper">
              <input type="text" />

              {isInvalid ? (
                <div className="invalid-wrapper">
                  {isInvalidEmail ? <div className=""> @</div> : null}
                  {isInvalidDoth ? <div className=""> .</div> : null}
                </div>
              ) : null}
            </div> */}

            <label htmlFor="password" className="input">
              Password
              <input
                type="password"
                id="password"
                onKeyDown={checkPassword}
                placeholder="Enter your password"
                pattern="^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]{8,20})$"
                required
              />
              <svg
                width="14px"
                height="12px"
                viewBox="0 0 14 12"
                className="check"
              >
                <path d="M1 7 5.5 11 L13 1"></path>
              </svg>
              <svg
                className="invalid-check"
                width="15px"
                height="12px"
                viewBox="0 0 350 350"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="#f44336">
                  <path d="m21.339844 329.398438c-5.460938 0-10.925782-2.089844-15.082032-6.25-8.34375-8.339844-8.34375-21.824219 0-30.164063l286.589844-286.59375c8.339844-8.339844 21.824219-8.339844 30.164063 0 8.34375 8.339844 8.34375 21.824219 0 30.164063l-286.589844 286.59375c-4.183594 4.179687-9.621094 6.25-15.082031 6.25zm0 0" />
                  <path d="m307.929688 329.398438c-5.460938 0-10.921876-2.089844-15.082032-6.25l-286.589844-286.59375c-8.34375-8.339844-8.34375-21.824219 0-30.164063 8.339844-8.339844 21.820313-8.339844 30.164063 0l286.589844 286.59375c8.34375 8.339844 8.34375 21.824219 0 30.164063-4.160157 4.179687-9.621094 6.25-15.082031 6.25zm0 0" />
                </g>
              </svg>
              <span className="tooltip">
                <ul>
                  Password must include:
                  <li>Uppercase letter</li>
                  <li>Lowercase letter</li>
                  <li>Number</li>
                  <li>Password length: (8-20)</li>
                  <li>Symbol</li>
                </ul>
              </span>
            </label>
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
        </div>
        <div className="right-side">
          <div className="top-group">
            <h2 className="title">Natus Vincere —</h2>
            <span className="text">Online team management</span>
          </div>

          <div className="animation-block">
            <img className="pubg" src={pubg} alt="" />
            <img className="fortnite" src={fortnite} alt="" />
            <img className="dota" src={dota} alt="" />
            <img className="cs" src={cs} alt="" />
            <img className="navi" src={navi} alt="" />
          </div>
          <p className="link">
            Don't have an account? <Link to="/signup"> Click here</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignInComponent;
