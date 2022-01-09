import React from "react";
import Title from "./components/Title";
import Button from "./components/Button";
import Article from "./components/Article";
import img from "./images/img.png";
import { FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import {
  AiFillTwitterSquare,
  AiFillFacebook,
  AiFillInstagram,
  AiFillGithub,
} from "react-icons/ai";
import "./app.css";

export default function App() {
  const style = {
    background: "#1A1B21",
    borderRadius: "10px",
  };
  return (
    <div style={style}>
      <img src={img} alt="" />
      <Title />
      <div className="buttons-container">
        <Button icon={FiMail} text="Email" color="#374151" bgColor="#fff" />
        <Button
          icon={FaLinkedin}
          text="LinkedIn"
          color="#fff"
          bgColor="#5093E2"
        />
      </div>
      <Article
        title="About"
        content="I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn."
      />
      <Article
        title="Interests"
        content="Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic."
      />
      <div className="icons-container">
        <AiFillTwitterSquare size={25} />
        <AiFillFacebook size={25} />
        <AiFillInstagram size={25} />
        <AiFillGithub size={25} />
      </div>
    </div>
  );
}
