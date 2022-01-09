import React from "react";
import "./Button.css";

export default function Button({ icon, text, color, bgColor }) {
  const Icon = icon;
  const style = {
    color: color,
    backgroundColor: bgColor,
  };
  return (
    <div className="button" style={style}>
      <Icon />
      <span>{text}</span>
    </div>
  );
}
