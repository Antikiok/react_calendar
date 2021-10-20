import React from 'react';
import Day from '../day/Day';

import './week.scss';

const Week = ({ handleWeeks, eventsList, deleteEventData }) => {
  return (
    <div className="calendar__week">
      {handleWeeks.map((dayStart) => {
        const dayEnd = new Date(dayStart.getTime()).setHours(
          dayStart.getHours() + 24
        );

        //getting all events from the day we will render
        const dayEvents = eventsList.filter(
          (event) => event.dateFrom > dayStart && event.dateTo < dayEnd
        );
        return (
          <Day
            key={dayStart.getDate()}
            dataDay={dayStart.getDate()}
            dayEvents={dayEvents}
            eventsList={eventsList}
            deleteEventData={deleteEventData}
          />
        );
      })}
    </div>
  );
};

export default Week;
