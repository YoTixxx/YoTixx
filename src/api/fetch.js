import React, { useState } from "react";
import { useQuery } from "react-query";

function FetchData() {
  const [information, setInformation] = useState([]);

  const fetchAPI = (key) => {
    const API_KEY = process.env.REACT_APP_TICKETMASTER_API_KEY;
    let url = `https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=324&apikey=${API_KEY}&size=10`;

    return fetch(url)
      .then((res) => res.json())
      .then(data);
  };

  const { data, error, isLoading, isError } = useQuery(
    "ticketmaster",
    fetchAPI
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Concerts</h1>

      {data._embedded.events.map((event) => (
        <div key={event.id}>
          <h2>This is the event name: {event.name}</h2>
          {console.log(event.images[0].url)}
        </div>
      ))}

      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </div>
  );
}

export default FetchData;
