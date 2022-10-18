import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import PropTypes from 'prop-types'

const Rating = ({value, text, color}) => {
  return (
    <div className="mt-1">
      <span>
        <i style={{color}}
          className={
            value >= 1
              ? "bi bi-star-fill"
              : value >= 0.5
              ? "bi bi-star-half"
              : "bi bi-star"
          }
        ></i>
      </span>
      <span>
        <i style={{color, marginLeft: '4px'}}
          className={
            value >= 2
              ? "bi bi-star-fill"
              : value >= 1.5
              ? "bi bi-star-half"
              : "bi bi-star"
          }
        ></i>
      </span>
      <span>
        <i style={{color, marginLeft: '4px'}}
          className={
            value >= 3
              ? "bi bi-star-fill"
              : value >= 2.5
              ? "bi bi-star-half"
              : "bi bi-star"
          }
        ></i>
      </span>
      <span>
        <i style={{color, marginLeft: '4px'}}
          className={
            value >= 4
              ? "bi bi-star-fill"
              : value >= 3.5
              ? "bi bi-star-half"
              : "bi bi-star"
          }
        ></i>
      </span>
      <span>
        <i style={{color, marginLeft: '4px'}}
          className={
            value >= 5
              ? "bi bi-star-fill"
              : value >= 4.5
              ? "bi bi-star-half"
              : "bi bi-star"
          }
        ></i>
      </span>
      <span className="text-sm" style={{marginLeft: '4px'}}>{text && text}</span>
    </div>
  );
};

Rating.defaultProps = {
  color: "#2f6c58",
}

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string
}

export default Rating;
