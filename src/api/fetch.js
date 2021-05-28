import React, { useState } from "react";
import { useQuery } from "react-query";

function FetchData() {
  const [information, setInformation] = useState([]);

  const fetchAPI = (key) => {
    const API_KEY = process.env.REACT_APP_TICKETMASTER_API_KEY;
    let url = `https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=324&apikey=${API_KEY}&size=10`;
    // let url = "https://api.randomuser.me/";

    return fetch(url)
      .then((res) => res.json())
      .then((data) => {
        data._embedded.events.map((event) => {
          let eventObj = {
            title: event.name,
          };
          setInformation((information) => [...information, eventObj]);
        });
      });
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

      {/* {information.map((event, index) => {
        <div>
          <p>{event.title}</p>
        </div>;
      })} */}

      {/* {JSON.stringify({information})} */}

      {/* <pre>{JSON.stringify(information, null, 2)}</pre> */}
      {/* 
      {information.map((info, index) => {
        <div key={index}>
          <div>{info.name}</div>
        </div>;
      })} */}
    </div>
  );
}

export default FetchData;
