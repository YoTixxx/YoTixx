import React from "react";

import "./popular.scss";

const PopularEvents = ({ onClick, src, title, date, location }) => {
  return (
    <div className="popular-container">
      <div className="popular-container__text-container">
        <img onClick={onClick} src={src} className="popular-container__image" />
        <p className="popular-container__text-container__title">{title}</p>
        <p className="popular-container__text-container__date">{date}</p>
        <p className="popular-container__text-container__location">
          {location}
        </p>
      </div>
    </div>
  );
};

export default PopularEvents;
