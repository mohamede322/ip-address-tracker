import React from "react";

export default function Info({ data }) {
  const ip = data.ip === undefined ? "Unknown" : data.ip;
  const city = data.city === undefined ? "Unknown" : data.city;
  const country =
    data.country_name === undefined ? "Unknown" : data.country_name;
  const timezone = data.timezone === undefined ? "Unknown" : data.timezone;
  const isp = data.org === undefined ? "Unknown" : data.org;
  const utc = data.utc_offset === undefined ? "Unknown" : data.utc_offset;
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
        <h3>
          {" "}
          {utc} {timezone}
        </h3>
      </div>
      <div className="box">
        <p>ISP</p>
        <h3>{isp}</h3>
      </div>
    </div>
  );
}
