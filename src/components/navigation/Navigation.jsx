import React from 'react';

import { days } from '../../utils/dateUtils.js';

import './navigation.scss';

const Navigation = ({ handleWeeks }) => {
  return (
    <header className="calendar__header">
      {handleWeeks.map((dayDate) => (
        <div key={dayDate.getDate()} className="calendar__day-label day-label">
          <span className="day-label__day-name">{days[dayDate.getDay()]}</span>
          <span className="day-label__day-number">{dayDate.getDate()}</span>
        </div>
      ))}
    </header>
  );
};

export default Navigation;
