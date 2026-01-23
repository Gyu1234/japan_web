import React from 'react';

const ResultCard = ({ data }) => {
  const { image, name, rating, likes } = data;

  return (
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
  );
};

export default ResultCard;