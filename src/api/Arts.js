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

function Arts() {
  const classes = useStyles();

  const fetchArtsAPI = (key) => {
    const API_KEY = process.env.REACT_APP_TICKETMASTER_API_KEY;
    let artsURL = `https://app.ticketmaster.com/discovery/v2/events.json?classificationName=arts&countryCode=US&apikey=${API_KEY}&size=6`;

    return fetch(artsURL)
      .then((res) => res.json())
      .then(data);
  };

  const { data, error, isLoading, isError } = useQuery("arts", fetchArtsAPI);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Arts</h1>

      {data._embedded.events.map((artEvent) => (
        <div className={classes.container} key={artEvent.id}>
          <figure>
            <img className={classes.image} src={artEvent.images[2].url} />

            <figcaption className={classes.text}>{artEvent.name}</figcaption>
          </figure>
        </div>
      ))}
    </div>
  );
}

export default Arts;
