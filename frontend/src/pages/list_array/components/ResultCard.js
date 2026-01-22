import React from 'react';

const ResultCard = ({ data }) => {
  const { image, name, rating, likes } = data;

  return (
    <article className="result-card">
      <div className="card-image">
        <img src={image} alt="..." />
      </div>
      <div className="card-content">
        <div className="content-head">
          <h2 className="card-name">
            {name}
          </h2>
          <h4 className="card-text">
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