import React from "react";

export default function Input({
  arrow,
  value,
  onChange,
  onMouseDown,
  onMouseUp,
}) {
  return (
    <div className="header">
      <h1> IP Address Tracker </h1>
      <div className="input-container">
        <input
          type="text"
          value={value}
          placeholder="Search for any IP address or domain"
          onChange={onChange}
        />
        <img
          className="arrow"
          src={arrow}
          alt="arrow"
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
        />
      </div>
    </div>
  );
}
