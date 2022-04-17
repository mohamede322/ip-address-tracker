import React from "react";

export default function Info({ data }) {
  const ip = data.query === undefined ? "Unknown" : data.query;
  const city = data.city === undefined ? "Unknown" : data.city;
  const country = data.country === undefined ? "Unknown" : data.country;
  const timezone = data.timezone === undefined ? "Unknown" : data.timezone;
  const isp = data.isp === undefined ? "Unknown" : data.isp;
  return (
    <div className="info-container">
      <div className="box">
        <p>IP ADDRESS</p>
        <h3>{ip}</h3>
      </div>
      <div className="box">
        <p>LOCATION</p>
        <h3>{`${city}, ${country}`}</h3>
      </div>
      <div className="box">
        <p>TIMEZONE</p>
        <h3>{timezone}</h3>
      </div>
      <div className="box">
        <p>ISP</p>
        <h3>{isp}</h3>
      </div>
    </div>
  );
}
