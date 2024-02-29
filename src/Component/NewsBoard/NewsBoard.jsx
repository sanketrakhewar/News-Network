import React, { useState } from "react";
import NewsItem from "../NewsItem/NewsItem";
import { useEffect } from "react";

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let url = ` https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=c9f4cfb99b084762907ef8fb7c2a7fbc`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles));
  }, [category]);

  return (
    <div>
      <h2 className="text-center p-2">
        Latest <span className="badge bg-dark ">News</span>
      </h2>
      {articles.map((news, index) => {
        return (
          <NewsItem
            key={index}
            tittle={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          ></NewsItem>
        );
      })}
    </div>
  );
};

export default NewsBoard;
