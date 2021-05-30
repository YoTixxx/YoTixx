import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useQuery } from "react-query";

const useStyles = makeStyles({
  container: {
    position: "relative",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  image: {
    height: "225px",
    width: "400px",
  },
  text: {
    position: "absolute",
    bottom: "1rem",
    margin: "0 1rem",
    color: "white",
  },
});

function Sports() {
  const classes = useStyles();

  const fetchSportsAPI = (key) => {
    const API_KEY = process.env.REACT_APP_TICKETMASTER_API_KEY;
    let sportsURL = `https://app.ticketmaster.com/discovery/v2/events.json?classificationName=sports&countryCode=US&apikey=${API_KEY}&size=6`;

    return fetch(sportsURL)
      .then((res) => res.json())
      .then(data);
  };

  const { data, error, isLoading, isError } = useQuery(
    "sports",
    fetchSportsAPI
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Sports</h1>

      {data._embedded.events.map((sportEvent) => (
        <div className={classes.container} key={sportEvent.id}>
          <figure>
            <img className={classes.image} src={sportEvent.images[2].url} />

            <figcaption className={classes.text}>{sportEvent.name}</figcaption>
          </figure>
        </div>
      ))}
    </div>
  );
}

export default Sports;
