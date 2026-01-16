import React from 'react';

const ResultCard = ({ data }) => {
  const { title, image, price, rating, likes, location, description, category, city } = data;

  return (
    <article className="result-card" data-category={category} data-location={city}>
      <div className="card-image">
        <img src={image} alt={title} />
      </div>
      <div className="card-content">
        <div className="content-head">
          <h3 className="card-name">{title}</h3>
          <p className="price">{price}</p>
          <p className="card-text">
            <small className="text-body-secondary">❤️{likes}</small>
          </p>
          <p className="location-display">{location}</p>
          <p className="description">{description}</p>
        </div>
      </div>
    </article>
  );
};

export default ResultCard;