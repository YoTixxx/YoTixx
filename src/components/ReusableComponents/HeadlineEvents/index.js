import "./HeadlineEvents.scss";

const HeadlineEvents = ({
  image,
  title,
  location,
  city,
  state,
  onClick,
  btnText,
}) => {
  return (
    <div className="headline-events">
      <img className="headline-events__image" src={image} />
      <h2 className="headline-events__title">{title}</h2>
      <div className="headline-events__bottom">
        <p className="headline-events__bottom__description">
          {location} - {city}, {state}
        </p>
        <button onClick={onClick} className="headline-events__bottom__button">
          {btnText}
        </button>
      </div>
    </div>
  );
};

export default HeadlineEvents;
