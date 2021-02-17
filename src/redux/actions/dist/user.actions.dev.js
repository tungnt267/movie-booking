"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.login = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _index = require("../../services/index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var login = function login(user) {
  return function (dispatch) {
    // userService
    //   .signIn(user)
    (0, _axios["default"])({
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      method: "POST",
      data: user
    }).then(function (res) {
      console.log(res);
    })["catch"](function (err) {
      console.log(err);
    });
  };
};

exports.login = login;