import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__content">
        <div className="footer__contact container">
          <div className="row row-contact">
            <div className="col-lg-4">
              <p className="footer__contact__title d-none d-lg-block">TIX</p>
              <div className="row">
                <div className="col-6 d-none d-lg-block">
                  <div className="contact-tix">
                    <NavLink to="/">FAQ</NavLink>
                    <NavLink to="/">Brand Guidelines</NavLink>
                  </div>
                </div>
                <div className="col-6 col-6--config">
                  <div className="contact-tix contact-tix--config">
                    <NavLink to="/">Thỏa thuận sử dụng</NavLink>
                    <NavLink to="/">Chính sách bảo mật</NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 d-none d-lg-block">
              <p className="footer__contact__title">ĐỐI TÁC</p>
              <div className="row col-sm-12 col-xs-12 line-partner">
                <NavLink target="_blank" to="https://www.cgv.vn/" title="CGV">
                  <img
                    className="partner-img"
                    src="../images/footer/cgv.png"
                    alt="partner1"
                  />
                </NavLink>
                <NavLink target="_blank" to="http://bhdstar.vn" title="BHD">
                  <img
                    className="partner-img"
                    src="../images/footer/bhd.png"
                    alt="partner1"
                  />
                </NavLink>
                <NavLink
                  target="_blank"
                  to="http://galaxycine.vn"
                  title="Galaxy"
                >
                  <img
                    className="partner-img"
                    src="../images/footer/galaxycine.png"
                    alt="galaxycine"
                  />
                </NavLink>
                <NavLink
                  target="_blank"
                  to="http://cinestar.com.vn"
                  title="Cinestar"
                >
                  <img
                    className="partner-img"
                    src="../images/footer/cinestar.png"
                    alt="partner1"
                  />
                </NavLink>
                <NavLink
                  target="_blank"
                  to="http://lottecinemavn.com"
                  title="Lotte Cinema"
                >
                  <img
                    className="partner-img"
                    ng-src="https://s3img.vcdn.vn/123phim/2018/09/404b8c4b80d77732e7426cdb7e24be20.png"
                    src="https://s3img.vcdn.vn/123phim/2018/09/404b8c4b80d77732e7426cdb7e24be20.png"
                    alt="partner1"
                  />
                </NavLink>
              </div>
              <div className="row col-sm-12 col-xs-12 line-partner">
                <NavLink
                  target="_blank"
                  to="https://www.megagscinemas.vn"
                  title="MegaGS"
                >
                  <img
                    className="partner-img"
                    src="../images/footer/megags.png"
                    alt="partner1"
                  />
                </NavLink>
                <NavLink
                  target="_blank"
                  to="https://www.betacineplex.vn/"
                  title="Beta"
                >
                  <img
                    className="partner-img"
                    src="../images/footer/bt.jpg"
                    alt="partner1"
                  />
                </NavLink>
                <NavLink target="_blank" to="http://ddcinema.vn" title="DDC">
                  <img
                    className="partner-img"
                    src="../images/footer/dongdacinema.png"
                    alt="partner1"
                  />
                </NavLink>
                <NavLink
                  target="_blank"
                  to="https://touchcinema.com/"
                  title="Touch Cinema"
                >
                  <img
                    className="partner-img"
                    src="../images/footer/TOUCH.png"
                    alt="partner1"
                  />
                </NavLink>
                <NavLink
                  target="_blank"
                  to="https://cinemaxvn.com/"
                  title="Cinemax"
                >
                  <img
                    className="partner-img"
                    src="../images/footer/cnx.jpg"
                    alt="partner1"
                  />
                </NavLink>
              </div>
              <div className="row col-sm-12 col-xs-12 line-partner">
                <NavLink
                  target="_blank"
                  to="http://starlight.vn/"
                  title="Starlight"
                >
                  <img
                    className="partner-img"
                    src="../images/footer/STARLIGHT.png"
                    alt="partner1"
                  />
                </NavLink>
                <NavLink
                  target="_blank"
                  to="https://www.dcine.vn/"
                  title="Dcine"
                >
                  <img
                    className="partner-img"
                    src="../images/footer/dcine.png"
                    alt="partner1"
                  />
                </NavLink>
                <NavLink
                  target="_blank"
                  to="https://zalopay.vn/"
                  title="ZaloPay"
                >
                  <img
                    className="partner-img"
                    src="../images/footer/zalopay_icon.png"
                    alt="partner1"
                  />
                </NavLink>
                <NavLink
                  target="_blank"
                  to="https://www.payoo.vn/"
                  title="Payoo"
                >
                  <img
                    className="partner-img"
                    src="../images/footer/payoo.jpg"
                    alt="partner1"
                  />
                </NavLink>
                <NavLink
                  target="_blank"
                  to="https://www.vietcombank.com.vn/"
                  title="Vietcombank"
                >
                  <img
                    className="partner-img"
                    src="../images/footer/VCB.png"
                    alt="partner1"
                  />
                </NavLink>
              </div>
              <div className="row col-sm-12 col-xs-12 line-partner">
                <NavLink
                  target="_blank"
                  to="http://www.agribank.com.vn/"
                  title="Agribank"
                >
                  <img
                    className="partner-img"
                    src="../images/footer/AGRIBANK.png"
                    alt="partner1"
                  />
                </NavLink>
                <NavLink
                  target="_blank"
                  to="https://www.vietinbank.vn/"
                  title="Vietinbank"
                >
                  <img
                    className="partner-img"
                    src="../images/footer/VIETTINBANK.png"
                    alt="partner1"
                  />
                </NavLink>
                <NavLink
                  target="_blank"
                  to="https://www.indovinabank.com.vn/"
                  title="IVB"
                >
                  <img
                    className="partner-img"
                    src="../images/footer/IVB.png"
                    alt="partner1"
                  />
                </NavLink>
                <NavLink target="_blank" to="http://123go.vn" title="123Go">
                  <img
                    className="partner-img"
                    src="../images/footer/123go.png"
                    alt="partner1"
                  />
                </NavLink>
                <NavLink target="_blank" to="http://laban.vn" title="La Bàn">
                  <img
                    className="partner-img"
                    src="../images/footer/laban.png"
                    alt="partner1"
                  />
                </NavLink>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="row text-center">
                <div className="col-6 d-none d-lg-block">
                  <p className="footer__contact__title">MOBILE APP</p>
                  <div className="contact-app">
                    <Link to="/">
                      <img
                        className="icon-app"
                        src="../images/footer/apple-logo.png"
                        alt="app-logo"
                      />
                    </Link>
                    <Link to="/">
                      <img
                        className="icon-app"
                        src="../images/footer/android-logo.png"
                        alt="app-logo"
                      />
                    </Link>
                  </div>
                </div>
                <div className="col-6 col-6--config">
                  <p className="footer__contact__title d-none d-lg-block">
                    SOCIAL
                  </p>
                  <div className="contact-social">
                    <Link to="/">
                      <img
                        className="icon-social"
                        src="../images/footer/facebook-logo.png"
                        alt="social-logo"
                      />
                    </Link>
                    <Link to="/">
                      <img
                        className="icon-social"
                        src="../images/footer/zalo-logo.png"
                        alt="social-logo"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="footer__hr" />
        <div className="footer__copyright container">
          <div className="row">
            <div className="col-md-1 text-center text-md-left mb-3 mb-md-0 pl-md-0">
              <img
                className="zion-logo"
                src="../images/footer/zion-logo.jpg"
                alt="zion-logo"
              />
            </div>
            <div className="col-md-8 col-lg-9 text-center text-lg-left copyright-middle">
              <p className="copyright__title">
                TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION
              </p>
              <p className="copyright__text">
                Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ
                Chí Minh, Việt Nam. <br />
                Giấy chứng nhận đăng ký kinh doanh số: 0101659783, <br />
                đăng ký thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở kế
                hoạch và đầu tư Thành phố Hồ Chí Minh cấp. <br />
                Số Điện Thoại (Hotline): 1900 545 436 <br />
                Email: <Link to="/">support@tix.vn</Link>
              </p>
            </div>
            <div className="col-md-3 col-lg-2 text-center text-md-right mt-3 mt-md-0 p-md-0">
              <Link to="/">
                <img
                  className="img-bo-co"
                  alt="bo-cong-thuong"
                  src="../images/footer/bo-cong-thuong.png"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
