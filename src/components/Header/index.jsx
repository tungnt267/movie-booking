import React from "react";
import { Link, NavLink } from "react-router-dom";
import NavbarExpanded from "./NavbarExpanded";
import { useSelector } from "react-redux";

import "./header.scss";
import { useState } from "react";

const Header = () => {
  let { credentials } = useSelector((state) => state.user);

  let [isLogin, setIsLogin] = useState(
    localStorage.getItem("credentials") !== null
  );

  const handleLogout = () => {
    localStorage.removeItem("credentials");
    setIsLogin(false);
  };

  return (
    <div>
      <div id="header" className="header">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-md navbar-light">
            <NavLink className="navbar-brand" to="/">
              <img src="../images/header/web-logo.png" alt="web-logo" />
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="modal"
              data-target="#headerExpand"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarTix">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    Lịch Chiếu
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    Cụm rạp
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    Tin Tức
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    Ứng dụng
                  </Link>
                </li>
              </ul>
              <div className="navbar__right">
                <div className="navbar__right__login">
                  {isLogin ? (
                    <>
                      <img src="../images/header/avatar.png" alt="avatar" />
                      <div className="logout">
                        <span className="user-name">
                          {credentials?.taiKhoan}
                        </span>
                        <button className="btn-logout" onClick={handleLogout}>
                          Đăng xuất
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      <NavLink to="/login" className="login-item">
                        Đăng nhập
                      </NavLink>
                      <NavLink to="/signup" className="signup-item">
                        Đăng ký
                      </NavLink>
                    </>
                  )}
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>

      <NavbarExpanded
        handleLogout={handleLogout}
        isLogin={isLogin}
        setIsLogin={setIsLogin}
      />
    </div>
  );
};

export default Header;
