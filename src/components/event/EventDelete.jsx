import React from 'react';

const EventDelete = ({ id, deleteEventData }) => {
  return (
    <button className="delete-event-btn" onClick={() => deleteEventData(id)}>
      Delete
    </button>
  );
};

export default EventDelete;
