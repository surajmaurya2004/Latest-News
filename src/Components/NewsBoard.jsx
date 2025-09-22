

import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${
      import.meta.env.VITE_API_KEY
    }`;

    console.log("Fetching category:", category); 

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log("API Response:", data); 
        setArticles(data.articles || []);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [category]); 

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">
        Latest <span className="badge bg-danger">{category.toUpperCase()}</span>
      </h2>

      <div className="row">
        {articles.map((news) => (
          <div className="col-md-4 d-flex align-items-stretch mb-4" key={news.url}>
            <NewsItem
              title={news.title}
              description={news.description}
              src={news.urlToImage}
              url={news.url}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsBoard;



