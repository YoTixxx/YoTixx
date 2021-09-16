import React from "react";

import "./sidebar.scss";

const SideBar = ({ src, title, description, onClick }) => {
  return (
    <div className="main-container">
      <img className="main-container__image" src={src} onClick={onClick} />
      <div className="main-container__text-container">
        <p
          className="main-container__text-container__text-title"
          onClick={onClick}
        >
          {title}
        </p>
        <p className="main-container__text-container__description-text">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SideBar;
