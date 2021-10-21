import React, { useState, useEffect } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';
import {
  createEvent,
  fetchEventLists,
  deleteEvent,
} from './gateway/eventsGateway.jsx';

import { getWeekStartDate, generateWeekRange } from '../src/utils/dateUtils.js';

import './common.scss';

const App = () => {
  const weekDates = generateWeekRange(getWeekStartDate(new Date()));
  const sevenDays = 604800000;

  const [handleWeeks, setHandleWeeks] = useState(weekDates);

  const [eventsList, setEventsList] = useState([]);

  const onCreateEvent = (e, eventFormData) => {
    e.preventDefault();
    const { title, date, startTime, endTime, description } = eventFormData;

    const newEvent = {
      title,
      description,
      dateFrom: new Date(`${date} ${startTime}`),
      dateTo: new Date(`${date} ${endTime}`),
    };
    createEvent(newEvent).then(() => fetchEvents());
  };

  const fetchEvents = () => {
    fetchEventLists().then((eventsList) => {
      const updatedEventList = eventsList.map((event) => {
        return {
          ...event,
          dateFrom: new Date(event.dateFrom),
          dateTo: new Date(event.dateTo),
        };
      });
      setEventsList(updatedEventList);
    });
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const deleteEventData = (id) => {
    deleteEvent(id).then(() => fetchEvents());
  };

  const togglePrevWeek = () => {
    setHandleWeeks(
      handleWeeks.map((date) => new Date(Date.parse(date) - sevenDays))
    );
  };

  const toggleNextWeek = () => {
    setHandleWeeks(
      handleWeeks.map((date) => new Date(Date.parse(date) + sevenDays))
    );
  };

  const setPresentWeek = () => {
    setHandleWeeks(weekDates);
  };

  return (
    <>
      <Header
        handleWeeks={handleWeeks}
        togglePrevWeek={togglePrevWeek}
        toggleNextWeek={toggleNextWeek}
        setPresentWeek={setPresentWeek}
        onCreateEvent={onCreateEvent}
      />

      <Calendar
        handleWeeks={handleWeeks}
        eventsList={eventsList}
        deleteEventData={deleteEventData}
      />
    </>
  );
};

export default App;
