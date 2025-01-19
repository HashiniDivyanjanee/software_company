import React from "react";
import "./header.css";
import logoimage from "../../image/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
const header = () => {
  return (
    <>
      <header>
        <div className="container flex">
          <div className="logo">
            <img src={logoimage} alt="" />
          </div>
          <div className="nav">
            <a href="">HOME</a>
            <a href="">ABOUT</a>
            <a href="">SERVICE</a>
            <a href="">PORTFOLIO</a>
            <a href="">CONTACT</a>
          </div>
          <div className="icon">
            <a>
              <FontAwesomeIcon
                icon={faFacebookF}
                
              />
            </a>
            <a>
              <FontAwesomeIcon
                icon={faInstagram}
               
              />
            </a>
            <a>
              <FontAwesomeIcon icon={faTwitter}  />
            </a>
            <a>
              <FontAwesomeIcon icon={faYoutube}  />
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default header;
