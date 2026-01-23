import React from 'react';
import { Link } from "react-router-dom";

const ResultCard = ({ data }) => {
  const { image, name, rating, likes, slug } = data;

  return (
    <Link to={slug} className="result-card-link">
      <article className="result-card">
        <div className="result-card-image">
          <img src={image} alt="..." />
        </div>
        <div className="result-card-content">
          <div className="result-content-head">
            <h2 className="result-card-name">
              {name}
            </h2>
            <h4>
              <small className="text-body-secondary rating">
                ⭐{rating}
              </small>
              <small className="text-body-secondary">
                ❤️{likes}
              </small>
            </h4>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default ResultCard;