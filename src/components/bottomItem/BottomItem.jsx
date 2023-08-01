import React from "react";
import "./bottomItem.scss";

const BottomItem = () => {
  return (
    <div className="bottomItem">
      <div className="left">
        <iframe
          src="https://embed.windy.com/embed2.html?lat=24.056&lon=90.549&detailLat=24.056&detailLon=90.549&width=650&height=450&zoom=7&level=surface&overlay=wind&product=ecmwf&menu=&message=&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=default&metricTemp=default&radarRange=-1"
          frameborder="0"
        ></iframe>
      </div>
      <div className="right">
        <h3>
          Key Features of <span>Rapid Weather</span>
        </h3>
        <ul>
          <li>
            <span>Current Conditions:</span> Displaying the current weather
            conditions, such as temperature, humidity, wind speed and direction,
            visibility, and weather descriptions (e.g., sunny, cloudy, rainy),
            etc.
          </li>
          <li>
            <span>Radar and Satellite Maps:</span> Displaying real-time radar
            and satellite imagery to show precipitation patterns, cloud cover,
            and storms in a particular region.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BottomItem;
