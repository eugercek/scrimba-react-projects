import React from "react";
import icon from "../images/location.png";
import "./Card.css";

const GOOGLE_MAPS_URL = "https://www.google.com/maps/place/";

export default function Card({
  country,
  place,
  dates: { start, end },
  content,
  img,
}) {
  const image = require(`../images/${img}`);
  const mapsUrl = `${GOOGLE_MAPS_URL}${place.split(" ").join("+")}`;
  return (
    <div className="card">
      <img src={image} alt="" className="location-image" />
      <div className="other">
        <div className="location-container">
          <img src={icon} alt="" className="icon" />
          <span className="country">{country}</span>
          <a href={mapsUrl || "#"} target="_blank" rel="noreferrer">
            View on Google Maps
          </a>
        </div>
        <h2 className="location-name">{place}</h2>
        <h5 className="dates">{`${start} - ${end}`}</h5>
        <p>{content}</p>
      </div>
    </div>
  );
}
