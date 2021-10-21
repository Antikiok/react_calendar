import React from 'react';

import Navigation from '../navigation/Navigation';
import Week from '../week/Week';
import Sidebar from '../sidebar/Sidebar';

import './calendar.scss';

const Calendar = ({ handleWeeks, eventsList, deleteEventData }) => {
  return (
    <section className="calendar">
      <Navigation handleWeeks={handleWeeks} />
      <div className="calendar__body">
        <div className="calendar__week-container">
          <Sidebar />
          <Week
            handleWeeks={handleWeeks}
            eventsList={eventsList}
            deleteEventData={deleteEventData}
          />
        </div>
      </div>
    </section>
  );
};

export default Calendar;
