import React, { useState } from 'react';
import EventDelete from './EventDelete.jsx';

import './event.scss';

const Event = ({ height, marginTop, title, time, deleteEventData, id }) => {
  const [showButtonDelete, setShowButtonDelete] = useState(false);

  const toggleShowDelete = () => {
    setShowButtonDelete(!showButtonDelete);
  };
  return (
    <>
      <div style={{ height, marginTop }} className="event">
        <div className="event__title" onClick={toggleShowDelete}>
          {title}
        </div>
        <div className="event__time" onClick={toggleShowDelete}>
          {time}
        </div>
        {showButtonDelete && (
          <EventDelete id={id} deleteEventData={deleteEventData} />
        )}
      </div>
    </>
  );
};

export default Event;
