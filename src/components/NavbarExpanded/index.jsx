import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavbarExpanded = () => {
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
              <img
                className="login-avatar"
                src="./images/header/avatar.png"
                alt="avatar"
              />
              <NavLink to="/login" className="modal-title login-text">
                Đăng Nhập
              </NavLink>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">
                  <img
                    className="login-close"
                    src="./images/header/next-session.png"
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
            {/* Button trigger modal */}
            <button
              type="button"
              className="side-nav__link btn-location text-left"
              data-toggle="modal"
              data-target="#sideNavModal"
            >
              <span>Hồ Chí Minh</span>
            </button>
            {/* Modal */}
            <div
              className="modal fade modal-location"
              id="sideNavModal"
              role="dialog"
              aria-labelledby="modelTitleId"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-body">
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
                    <Link to="/" className="dropdown-item">
                      Vũng Tàu
                    </Link>
                    <Link to="/" className="dropdown-item">
                      Quy Nhơn
                    </Link>
                    <Link to="/" className="dropdown-item">
                      Huế
                    </Link>
                    <Link to="/" className="dropdown-item">
                      Long Xuyên
                    </Link>
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
                    <Link to="/" className="dropdown-item">
                      Vũng Tàu
                    </Link>
                    <Link to="/" className="dropdown-item">
                      Quy Nhơn
                    </Link>
                    <Link to="/" className="dropdown-item">
                      Huế
                    </Link>
                    <Link to="/" className="dropdown-item">
                      Long Xuyên
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarExpanded;
