import React from "react";
import image from "../../Assets/conceptnews.jpg";

const NewsItem = ({ title, description, src, url, author, publishedAt }) => {
  const formattedDate = new Date(publishedAt).toLocaleString();
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
      />
      {author && <p className="card-text fw-bold">Author : {author}</p>}
      <div className="card-body">
        <h4 className="card-title">{title.slice(0, 60)}</h4>
        <p className="card-text">
          {description
            ? description.slice(0, 120)
            : "News is About Current Event. It is information about Something That Just Happened."}
        </p>
        {publishedAt && (
          <p className="card-text fw-bold">Published At: {formattedDate}</p>
        )}
        <a href={url} className="btn btn-primary">
          Read More..
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
