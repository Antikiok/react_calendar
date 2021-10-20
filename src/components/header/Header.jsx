import React from 'react';
import moment from 'moment';

import './header.scss';

const Header = ({
  toggleNextWeek,
  togglePrevWeek,
  setPresentWeek,
  handleWeeks,
  createModal,
}) => {
  const firstDayOfWeek = moment(handleWeeks[0]).format('MMM');
  const lastDayOfWeek = moment(handleWeeks[6]).format('MMM');

  let currentMonth = firstDayOfWeek;
  if (firstDayOfWeek !== lastDayOfWeek) {
    currentMonth = `${firstDayOfWeek} - ${lastDayOfWeek}`;
  }

  return (
    <header className="header">
      <button className="button create-event-btn" onClick={createModal}>
        <i className="fas fa-plus create-event-btn__icon"></i>Create
      </button>
      <div className="navigation">
        <button
          className="navigation__today-btn button"
          onClick={setPresentWeek}
        >
          Today
        </button>
        <button
          className="icon-button navigation__nav-icon"
          onClick={togglePrevWeek}
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <button
          className="icon-button navigation__nav-icon"
          onClick={toggleNextWeek}
        >
          <i className="fas fa-chevron-right"></i>
        </button>
        <span className="navigation__displayed-month">{currentMonth}</span>
      </div>
    </header>
  );
};

export default Header;
