import React, { useState } from 'react';

import './modal.scss';

const Modal = ({ onCreateEvent, toggleModal }) => {
  const [eventFormData, setEventFormData] = useState({
    title: '',
    date: '',
    startTime: '00:00',
    endTime: '00:00',
    description: '',
  });

  const { title, date, startTime, endTime, description } = eventFormData;

  const handleEventForm = (e) => {
    const { name, value } = e.target;
    setEventFormData({
      ...eventFormData,
      [name]: value,
    });
  };

  return (
    <div className="modal overlay">
      <div className="modal__content">
        <div className="create-event">
          <button className="create-event__close-btn" onClick={toggleModal}>
            +
          </button>
          <form
            className="event-form"
            onSubmit={(e) => onCreateEvent(e, eventFormData)}
          >
            <input
              type="text"
              value={title}
              name="title"
              placeholder="Title"
              className="event-form__field"
              onChange={handleEventForm}
            />
            <div className="event-form__time">
              <input
                type="date"
                value={date}
                name="date"
                className="event-form__field"
                onChange={handleEventForm}
              />
              <input
                type="time"
                value={startTime}
                name="startTime"
                className="event-form__field"
                onChange={handleEventForm}
              />
              <span>-</span>
              <input
                type="time"
                value={endTime}
                name="endTime"
                className="event-form__field"
                onChange={handleEventForm}
              />
            </div>
            <textarea
              name="description"
              value={description}
              placeholder="Description"
              className="event-form__field"
              onChange={handleEventForm}
            ></textarea>
            <button type="submit" className="event-form__submit-btn">
              Submit Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
