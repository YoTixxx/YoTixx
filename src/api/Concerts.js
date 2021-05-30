import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useQuery } from "react-query";

const useStyles = makeStyles({
  container: {
    position: "relative",
  },
  header: {
    marginTop: "200px",
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

function Concerts() {
  const classes = useStyles();

  const fetchConcertsAPI = (key) => {
    const API_KEY = process.env.REACT_APP_TICKETMASTER_API_KEY;
    let concertsURL = `https://app.ticketmaster.com/discovery/v2/events.json?classificationName=rap&dmaId=324&apikey=${API_KEY}&size=6`;

    return fetch(concertsURL)
      .then((res) => res.json())
      .then(data);
  };

  const { data, error, isLoading, isError } = useQuery(
    "concerts",
    fetchConcertsAPI
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1 className={classes.header}>Concerts</h1>

      {data._embedded.events.map((concertEvent) => (
        <div className={classes.container} key={concertEvent.id}>
          <figure>
            <img className={classes.image} src={concertEvent.images[2].url} />

            <figcaption className={classes.text}>
              {concertEvent.name}
            </figcaption>
          </figure>
        </div>
      ))}
    </div>
  );
}

export default Concerts;
