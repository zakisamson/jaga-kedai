import React, { useState } from "react";
import { assets } from "../SideBar/assets";
import "./login-register.scss";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
    console.log(showPassword);
  };

  return (
    <div className="login__page">
      <a href="/user" className="submit__btn">
        <img src={assets.logoPutihIcon} alt="" />
      </a>
      <div className="login__card">
        <h1>
          Hai,
          <br /> selamat datang!
        </h1>
        <form action="" className="form__container">
          <div className="form__control">
            <img className="input__icon" src={assets.userIcon} alt="" />
            <input type="text" name="email" id="email" placeholder="Username" />
          </div>
          <div className="form__control" style={{ marginBottom: "50px" }}>
            <img className="input__icon" src={assets.lockIcon} alt="" />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
            />
            <button type="button" onClick={handleShowPassword}>
              <img
                id="show__btn"
                src={showPassword ? assets.eyeOffIcon : assets.eyeIcon}
                alt="show password"
              />
            </button>
            <p
              style={{ fontSize: "15px", textAlign: "right", color: "#318759" }}
            >
              Lupa password?
            </p>
          </div>
          <button type="submit" className="submit__btn">
            Masuk
          </button>
          <p
            style={{
              fontWeight: "400",
              color: "#318759",
              fontSize: "13px",
              textAlign: "center",
              paddingBlock: "10px",
            }}
          >
            Belum punya akun?{" "}
            <a href="/register" style={{ fontWeight: "700", color: "#FEB74D" }}>
              Register di sini
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
