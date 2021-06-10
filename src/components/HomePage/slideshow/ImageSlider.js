import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
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
    width: "600px",
    height: "300px",
    borderRadius: "10px",
  },
});

const ImageSlider = () => {
  const classes = useStyles();

  const fetchArtsAPI = (key) => {
    const API_KEY = process.env.REACT_APP_TICKETMASTER_API_KEY;
    let artsURL = `https://app.ticketmaster.com/discovery/v2/events.json?classificationName=rap&dmaId=324&apikey=${API_KEY}&size=6`;

    return fetch(artsURL)
      .then((res) => res.json())
      .then(data);
  };

  const { data, error, isLoading, isError } = useQuery(
    "concerts",
    fetchArtsAPI
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>{error}</p>;
  }

  return (
    <div className={classes.slider}>
      <AliceCarousel
        autoPlay
        autoPlayInterval="2000"
        infinite={true}
        disableButtonsControls={true}
      >
        {data._embedded.events.map((concertsEvent, index) => {
          return (
            <div key={index}>
              <img
                src={concertsEvent.images[2].url}
                alt="Slideshow Images"
                className={classes.image}
              />
            </div>
          );
        })}
      </AliceCarousel>
    </div>
  );
};

export default ImageSlider;
