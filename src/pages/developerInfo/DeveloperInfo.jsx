import React from "react";
import "./developerInfo.scss";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import Dip from "../../../public/dip.jpg";

const DeveloperInfo = () => {
  return (
    <div className="developerInfo">
      <div className="left">
        <div className="img">
          <img src={Dip} alt="" />
        </div>
        <h3>Competitive Programmer</h3>
        <div className="icon">
          <a href="https://www.linkedin.com/in/dipkorimon/">
            <LinkedInIcon />
          </a>
          <a href="https://www.facebook.com/dipkorimon/">
            <FacebookIcon />
          </a>
          <a href="https://github.com/dipkorimon">
            <GitHubIcon />
          </a>
          <a href="/contact">
            <EmailIcon />
          </a>
        </div>
      </div>
      <div className="right">
        <h3>
          From <span>Noakhali Science and Technology University</span>
        </h3>
        <h5>
          Department of{" "}
          <span>Computer Science and Telecommunication Engineering</span>
        </h5>
      </div>
    </div>
  );
};

export default DeveloperInfo;
