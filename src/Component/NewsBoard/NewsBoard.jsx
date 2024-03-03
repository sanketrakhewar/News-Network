import React, { useState } from "react";
import NewsItem from "../NewsItem/NewsItem";
import { useEffect } from "react";

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let url = ` https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${process.env.REACT_APP_API_KEY}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles));
  }, [category]);
  //${import.meta.env.NEWS_API_KEY}

  return (
    <div>
      <h2 className="text-center p-2">
        Latest <span className="badge bg-dark ">News</span>
      </h2>
      {articles.map((news, index) => {
        return (
          <NewsItem
            key={index}
            title={news.title}
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
