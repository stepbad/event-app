import { useState } from "react";

const Events = ({ events, onDelete, onEdit }) => {
  const [expandedEventId, setExpandedEventId] = useState(null);

  const toggleDetails = (id) => {
    setExpandedEventId(expandedEventId === id ? null : id); // Toggle visibility
  };

  return (
    <>
      {events.map((event) => (
        <div key={event.id} className="event">
          <h3>
            <span
              style={{ cursor: "pointer" }}
              onClick={() => toggleDetails(event.id)}
            >
              {event.title}
            </span>
            <div>
              <button
                style={{ marginRight: "10px" }}
                onClick={() => onEdit(event)}
                className="btn btn-small"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(event.id)}
                className="btn btn-small"
              >
                Delete
              </button>
            </div>
          </h3>
          {expandedEventId === event.id && (
            <div className="event-details">
              <p>
                {event.date} at {event.time}
              </p>
              <p>{event.description}</p>
              <p>
                Organized by: {event.organizer} at {event.location}
              </p>
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default Events;
