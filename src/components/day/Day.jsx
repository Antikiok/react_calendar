import React from 'react';
import Hour from '../hour/Hour';
import TodayLine from './TodayLine';

import './day.scss';

const Day = ({ dataDay, dayEvents, eventsList, deleteEventData }) => {
  const hours = Array(24)
    .fill()
    .map((val, index) => index);

  const isToday = dataDay === new Date().getDate();

  return (
    <div className="calendar__day" data-day={dataDay}>
      {hours.map((hour) => {
        //getting all events from the day we will render
        const hourEvents = dayEvents.filter(
          (event) => event.dateFrom.getHours() === hour
        );

        return (
          <Hour
            key={dataDay + hour}
            dataHour={hour}
            hourEvents={hourEvents}
            eventsList={eventsList}
            deleteEventData={deleteEventData}
            dataDay={dataDay}
          />
        );
      })}
      {isToday && <TodayLine />}
    </div>
  );
};

export default Day;
