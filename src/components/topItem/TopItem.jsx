import React from "react";
import "./topItem.scss";
import home from "../../../public/home.png";

const Home = () => {
  return (
    <div className="topItem">
      <div className="left">
        <h3>
          Welcome to <span>Rapid Weather</span>
        </h3>
        <p>
          Access current weather data for any location including over{" "}
          <span>200,000</span> cities.
        </p>
        <a href="/weatherInfo">
          <button>Check Here</button>
        </a>
      </div>
      <div className="right">
        <img src={home} alt="" />
      </div>
    </div>
  );
};

export default Home;
