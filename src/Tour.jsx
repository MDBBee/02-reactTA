import { useState } from 'react';

const Tour = ({ image, info, name, price, removeTour, id }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" />
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>
          {showMore ? info : `${info.substring(0, 200)}... `}
          <button
            type="button"
            className="info-btn"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? 'Show less' : ' Read more'}
          </button>
        </p>
        {/* {showMore ? <p>{info}</p> : <p>{info.substring(0, 200)}....</p>} */}

        <button
          type="button"
          className="btn btn-block delete-btn"
          onClick={() => removeTour(id)}
        >
          not interested
        </button>
      </div>
    </article>
  );
};
export default Tour;
