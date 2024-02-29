import React from "react";
import image from "../../Assets/conceptnews.jpg";

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div
      className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2"
      style={{ maxWidth: "345px" }}
    >
      <img
        className="card-img-top img-fluid"
        src={src ? src : image}
        style={{ height: "200px", width: "360px" }}
        alt={src}
      ></img>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          {description
            ? description
            : "News is About Current Event. It is information about Something That Just Happended."}
        </p>
        <a href={url} className="btn btn-primary" target="_blank">
          Read More...
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
