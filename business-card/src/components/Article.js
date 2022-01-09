import React from "react";
import "./Article.css";

export default function Article({ title, content }) {
  return (
    <article className="article">
      <h3>{title}</h3>
      <p className="p"> {content}</p>
    </article>
  );
}
