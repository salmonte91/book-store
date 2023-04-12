import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa';

const StarRating = () => {

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleStarClick = (index) => {
    console.log(`Star ${index} have been clicked`)
    setRating(index)
  }

  const handleStarsRating = (index) => {
    setHover(index)
  }

  return (
    <div className="star-rating">
      {[...Array(5)].map((starValue, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= (hover || rating) ? "on" : "off"}
            onClick={() => handleStarClick(index)}
            onMouseEnter={() => handleStarsRating(index)}
            onMouseLeave={() => handleStarsRating(0)}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
    </div>
  );
};

export default StarRating