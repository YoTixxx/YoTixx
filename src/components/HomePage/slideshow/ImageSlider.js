import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useQuery } from "react-query";

const useStyles = makeStyles({
  slider: {
    position: "relative",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "1000px",
    height: "600px",
    borderRadius: "10px",
  },
  slide: {
    opacity: "0",
    transitionDuration: "1s ease",
  },
  active: {
    opacity: "1",
    transitionDuration: "1s",
    transform: "scale(1.08)",
  },
});

const ImageSlider = () => {
  const classes = useStyles();
  const [current, setCurrent] = useState(0);
  //   const length = ;
  const delay = 2500;

  useEffect(() => {
    setTimeout(
      () =>
        setCurrent((prevIndex) =>
          prevIndex === data._embedded.events.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );
    return () => {};
  }, [current]);

  const fetchArtsAPI = (key) => {
    const API_KEY = process.env.REACT_APP_TICKETMASTER_API_KEY;
    let artsURL = `https://app.ticketmaster.com/discovery/v2/events.json?classificationName=sports&countryCode=US&apikey=${API_KEY}&size=6`;

    return fetch(artsURL)
      .then((res) => res.json())
      .then(data);
  };

  const { data, error, isLoading, isError } = useQuery("sports", fetchArtsAPI);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>{error}</p>;
  }

  return (
    <section className={classes.slider}>
      {data._embedded.events.map((artEvent, index) => {
        return (
          <div
            key={index}
            style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
          >
            {index === current && (
              <img
                src={artEvent.images[2].url}
                alt="Slideshow Images"
                className={classes.image}
              />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
