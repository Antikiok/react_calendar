const baseUrl = 'https://614ffa90a706cd00179b734a.mockapi.io/events';

export const createEvent = (eventData) =>
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(eventData),
  }).then((response) => {
    if (!response.ok) {
      throw new Error('Failed to create event');
    }
  });

export const fetchEventLists = () =>
  fetch(baseUrl).then((res) => {
    if (!res.ok) {
      throw new Error('Failed to fetch event list');
    }
    return res.json();
  });

export const deleteEvent = (eventId) =>
  fetch(`${baseUrl}/${eventId}`, {
    method: 'DELETE',
  }).then((response) => {
    if (!response.ok) {
      throw new Error('Failed to delete event');
    }
  });
