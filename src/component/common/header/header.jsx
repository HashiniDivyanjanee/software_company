import React, { useState } from "react";
import "./header.css";
import logoimage from "../../image/logo.png";
import { navi } from '../../data/data';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
const Header = () => {
  const [navlist, setnavlist] = useState(false);
  return (
    <>
      <header>
        <div className="container flex">
          <div className="logo">
            <img src={logoimage} alt="" />
          </div>
          <div className="nav">
          <ul className={navlist ? "small" : "flex"}>
              {navi.map((list, index) => (
                <li key={index}>
                  <Link to={list.path}>{list.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="icon">
            <ul className="flex">
              <li><FontAwesomeIcon icon={faFacebookF} /></li>
              <li><FontAwesomeIcon icon={faInstagram} /></li>
              <li><FontAwesomeIcon icon={faTwitter} /></li>
              <li><FontAwesomeIcon icon={faYoutube} /></li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
