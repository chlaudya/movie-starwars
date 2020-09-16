import React from "react";
import { useDispatch } from "react-redux";
import "../assets/styles/footer/footer.scss";
import {
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import MobileStoreButton from "react-mobile-store-button";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer__footer-left">
          <h1 className="title">Star Wars </h1>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit Accusamus
            ipsum autem, recusandae nesciunt laboriosam blanditiis, repellendus
            aliquam rerum doloribus, deserunt voluptates suscipit amet sunt
            reprehenderit similique aperiam
          </p>
        </div>

        <div className="footer__footer-middle">
          <ul className="list">
            <li>
              <Link to="/" style={{ color: "#f2dfd0" }}>
                Tentang Kami
              </Link>
            </li>
            <li>
              <Link to="/" style={{ color: "#f2dfd0" }}>
                Blog
              </Link>
            </li>
            <li>
              <Link to="/" style={{ color: "#f2dfd0" }}>
                Layanan
              </Link>
            </li>
            <li>
              <Link to="/" style={{ color: "#f2dfd0" }}>
                Karir
              </Link>
            </li>
            <li>
              <Link to="/" style={{ color: "#f2dfd0" }}>
                Pusat Media
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer__footer-right">
          <h3 className="title"> Download </h3>
          <div className="store">
            <MobileStoreButton store="android" className="android" />
            <MobileStoreButton store="ios" className="ios" />
          </div>
          <h5 className="title"> Social Media </h5>
          <div className="sosmed-list">
            <FacebookOutlined className="sosmed" />
            <InstagramOutlined className="sosmed" />
            <LinkedinOutlined className="sosmed" />
          </div>
        </div>
      </div>

      <div>
        <p className="copyright">
          {" "}
          Copyright &Copy 2020-2020 All Rights Reserved{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
