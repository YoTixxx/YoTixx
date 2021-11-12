import React, { useEffect, useState } from "react";
import HeadlineEvents from "../../ReusableComponents/HeadlineEvents/index";

const HomeHeadline = () => {
  const API_KEY = process.env.REACT_APP_TICKETMASTER_API_KEY;
  let sportsURL = `https://app.ticketmaster.com/discovery/v2/events.json?classificationName=sports&countryCode=US&apikey=${API_KEY}&size=1`;

  let [eventImage, setEventImage] = useState(null);
  let [eventTitle, setEventTitle] = useState(null);
  let [eventLocation, setEventLocation] = useState(null);
  let [eventCity, setEventCity] = useState(null);
  let [eventState, setEventState] = useState(null);

  useEffect(() => {
    fetch(sportsURL)
      .then((response) => response.json())
      .then((data) => {
        setEventImage(data._embedded.events[0].images[3].url);
        setEventTitle(data._embedded.events[0].name);
        setEventLocation(data._embedded.events[0]._embedded.venues[0].name);
        setEventCity(data._embedded.events[0]._embedded.venues[0].city.name);
        setEventState(data._embedded.events[0]._embedded.venues[0].state.name);
      });
  }, []);

  return (
    <div>
      <HeadlineEvents
        image={eventImage}
        title={eventTitle}
        location={eventLocation}
        city={eventCity}
        state={eventState}
        btnText="See Tickets"
      />
    </div>
  );
};

export default HomeHeadline;
