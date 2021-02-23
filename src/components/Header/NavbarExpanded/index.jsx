import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

const NavbarExpanded = (props) => {
  const { credentials } = useSelector((state) => state.user);

  return (
    <div
      className="modal fade modal-header-expand"
      role="dialog"
      id="headerExpand"
      aria-labelledby="headerExpand"
      aria-hidden="true"
    >
      <div className="side-nav">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header side-nav__login">
              {props.isLogin ? (
                <>
                  <img src="../images/header/avatar.png" alt="avatar" />
                  <div className="logout">
                    <span className="user-name">{credentials?.taiKhoan}</span>
                    <button className="btn-logout" onClick={props.handleLogout}>
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
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">
                  <img
                    className="login-close"
                    src="../images/header/next-session.png"
                    alt="close-nav"
                  />
                </span>
              </button>
            </div>
            <div className="modal-body">
              <Link to="/" className="side-nav__link">
                Lịch Chiếu
              </Link>
              <Link to="/" className="side-nav__link">
                Cụm rạp
              </Link>
              <Link to="/" className="side-nav__link">
                Tin Tức
              </Link>
              <Link to="/" className="side-nav__link">
                Ứng dụng
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarExpanded;
