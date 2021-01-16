import React from "react";
import { Link, NavLink } from "react-router-dom";
import NavbarExpanded from "../NavbarExpanded";
import "./header.scss";

const Header = () => {
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
                  <img src="../images/header/avatar.png" alt="avatar" />
                  <NavLink to="/login" className="login">
                    Đăng Nhập
                  </NavLink>
                </div>
                <div className="navbar__right__location dropdown d-none d-md-block">
                  <Link
                    to="/"
                    className="nav-link dropdown-toggle"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <img
                      className="location-icon"
                      src="../images/header/location-header.png"
                      alt="location-header"
                    />
                    <span>Hồ Chí Minh</span>
                    <img
                      className="dropdown-icon"
                      src="../images/header/dropdown-icon.png"
                      alt="dropdown-icon"
                    />
                  </Link>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <Link to="/" className="dropdown-item">
                      Hồ Chí Minh
                    </Link>
                    <Link to="/" className="dropdown-item">
                      Hà Nội
                    </Link>
                    <Link to="/" className="dropdown-item">
                      Đà Nẵng
                    </Link>
                    <Link to="/" className="dropdown-item">
                      Hải Phòng
                    </Link>
                    <Link to="/" className="dropdown-item">
                      Biên Hòa
                    </Link>
                    <Link to="/" className="dropdown-item">
                      Nha Trang
                    </Link>
                    <Link to="/" className="dropdown-item">
                      Bình Dương
                    </Link>
                    <Link to="/" className="dropdown-item">
                      Phan Thiết
                    </Link>
                    <Link to="/" className="dropdown-item">
                      Hạ Long
                    </Link>
                    <Link to="/" className="dropdown-item">
                      Cần Thơ
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>

      <NavbarExpanded />
    </div>
  );
};

export default Header;
