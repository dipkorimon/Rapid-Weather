import React from "react";
import "./about.scss";

const About = () => {
  return (
    <div className="about">
      <h1>About Rapid Weather</h1>
      <ul>
        <li>
          Access current weather data for any location including over{" "}
          <span>200,000</span> cities.
        </li>
        <li>
          Rapid Weather is a web application that provides users with real-time
          or forecasted weather information. This application is designed to
          help users stay informed about current weather conditions,
          temperature, humidity, wind speed, precipitation, and other relevant
          meteorological data for a specific location or multiple locations.
        </li>
        <li>
          Weather applications typically use data from meteorological agencies,
          weather stations, satellites, and weather models to provide accurate
          and up-to-date information. But this weather application uses data
          from real-time API.
        </li>
      </ul>
    </div>
  );
};

export default About;
