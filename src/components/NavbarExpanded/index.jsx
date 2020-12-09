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
                src="./images/avatar.png"
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
                    src="./images/next-session.png"
                    alt="close-nav"
                  />
                </span>
              </button>
            </div>
            <div className="modal-body">
              <Link className="side-nav__link">Lịch Chiếu</Link>
              <Link className="side-nav__link">Cụm rạp</Link>
              <Link className="side-nav__link">Tin Tức</Link>
              <Link className="side-nav__link">Ứng dụng</Link>
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
                    <a className="dropdown-item" href="#">
                      Hồ Chí Minh
                    </a>
                    <a className="dropdown-item" href="#">
                      Hà Nội
                    </a>
                    <a className="dropdown-item" href="#">
                      Đà Nẵng
                    </a>
                    <a className="dropdown-item" href="#">
                      Hải Phòng
                    </a>
                    <a className="dropdown-item" href="#">
                      Biên Hòa
                    </a>
                    <a className="dropdown-item" href="#">
                      Nha Trang
                    </a>
                    <a className="dropdown-item" href="#">
                      Bình Dương
                    </a>
                    <a className="dropdown-item" href="#">
                      Phan Thiết
                    </a>
                    <a className="dropdown-item" href="#">
                      Hạ Long
                    </a>
                    <a className="dropdown-item" href="#">
                      Cần Thơ
                    </a>
                    <a className="dropdown-item" href="#">
                      Vũng Tàu
                    </a>
                    <a className="dropdown-item" href="#">
                      Quy Nhơn
                    </a>
                    <a className="dropdown-item" href="#">
                      Huế
                    </a>
                    <a className="dropdown-item" href="#">
                      Long Xuyên
                    </a>
                    <a className="dropdown-item" href="#">
                      Hồ Chí Minh
                    </a>
                    <a className="dropdown-item" href="#">
                      Hà Nội
                    </a>
                    <a className="dropdown-item" href="#">
                      Đà Nẵng
                    </a>
                    <a className="dropdown-item" href="#">
                      Hải Phòng
                    </a>
                    <a className="dropdown-item" href="#">
                      Biên Hòa
                    </a>
                    <a className="dropdown-item" href="#">
                      Nha Trang
                    </a>
                    <a className="dropdown-item" href="#">
                      Bình Dương
                    </a>
                    <a className="dropdown-item" href="#">
                      Phan Thiết
                    </a>
                    <a className="dropdown-item" href="#">
                      Hạ Long
                    </a>
                    <a className="dropdown-item" href="#">
                      Cần Thơ
                    </a>
                    <a className="dropdown-item" href="#">
                      Vũng Tàu
                    </a>
                    <a className="dropdown-item" href="#">
                      Quy Nhơn
                    </a>
                    <a className="dropdown-item" href="#">
                      Huế
                    </a>
                    <a className="dropdown-item" href="#">
                      Long Xuyên
                    </a>
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
