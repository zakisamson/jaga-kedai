import React, { useState } from "react";
import { assets } from "../SideBar/assets";
import "./login-register.scss";
import { useNavigate } from "react-router-dom";
import { validUsername, validEmail, validPassword } from "../../Regex";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setConfirmShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    if (!validUsername.test(username))
      return alert("Username doesn't match the requirement");

    if (!validEmail.test(email)) return alert("Email isn't valid.");

    if (!validPassword.test(password))
      return alert("Password doesn't match the requirement");

    if (!validPassword.test(confPassword))
      return alert("Confirmation password doesn't match the requirement");

    if (password !== confPassword) {
      alert("Password doesn't match.");
      return false;
    } else {
      return navigate("../login");
    }
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleConfirmShowPassword = () => {
    setConfirmShowPassword(!showConfirmPassword);
  };

  return (
    <div className="login__page">
      <img src={assets.logoPutihIcon} alt="" />
      <div className="login__card">
        <h1 style={{ paddingBottom: "0" }}>Mulai buka tokomu</h1>
        <p
          style={{
            fontWeight: "400",
            fontSize: "12px",
            color: "#318759",
            paddingBottom: "30px",
          }}
        >
          Buat akun tokomu sekarang juga
        </p>
        <form
          action=""
          className="form__container"
          onSubmit={handleSubmitLogin}
        >
          <div className="form__control">
            <img className="input__icon" src={assets.userIcon} alt="" />
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form__control">
            <img className="input__icon" src={assets.mailIcon} alt="" />
            <input
              type="text"
              name="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form__control">
            <img className="input__icon" src={assets.lockIcon} alt="" />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="button" onClick={handleShowPassword}>
              <img
                id="show__btn"
                src={showPassword ? assets.eyeOffIcon : assets.eyeIcon}
                alt="show password"
              />
            </button>
          </div>
          <div className="form__control" style={{ marginBottom: "50px" }}>
            <img className="input__icon" src={assets.lockIcon} alt="" />
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="password"
              placeholder="Confirm password"
              onChange={(e) => setConfPassword(e.target.value)}
            />
            <button type="button" onClick={handleConfirmShowPassword}>
              <img
                id="show__btn"
                src={showConfirmPassword ? assets.eyeOffIcon : assets.eyeIcon}
                alt="show password"
              />
            </button>
          </div>
          <button type="submit" className="submit__btn">
            Daftar
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
            Sudah punya akun?{" "}
            <a href="/login" style={{ fontWeight: "700", color: "#FEB74D" }}>
              Login di sini
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
