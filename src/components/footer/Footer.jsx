import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="left">
        <p>
          Copyright &copy; <span>Rapid Weather</span>
        </p>
      </div>
      <div className="right">
        <p>
          Made with &#129505; by <span>Dip Kor Imon</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
