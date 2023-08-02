import React, { useEffect, useState } from "react";
import "./weatherInfo.scss";
import PinDropIcon from "@mui/icons-material/PinDrop";

const WeatherInfo = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Dhaka");

  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=b82e402aa4bd2134d48f5d046cb135db`
      );
      const JSONResponse = await response.json();
      setCity(JSONResponse.main);
    };
    fetchApi();
  }, [search]);

  return (
    <>
      <div className="box">
        <p className="header">
          Search with your <span>city name</span> and find weather data of your
          city
        </p>
        <div className="inputData">
          <input
            type="search"
            placeholder="Type City Name"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>

        {!city ? (
          <p className="error">No City Found</p>
        ) : (
          <div className="info">
            <h2 className="location">
              <PinDropIcon /> {search}
            </h2>
            <p className="temp">
              {city.temp}
              <sup>o</sup> C{" "}
            </p>
            <p className="min-max">
              Min: {city.temp_min}
              <sup>o</sup> C | Max: {city.temp_max}
              <sup>o</sup> C
            </p>
            <p className="feels-like">
              Feels Like: {city.feels_like}
              <sup>o</sup> C
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default WeatherInfo;
