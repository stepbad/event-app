import { FaAccusoft, FaTimes } from "react-icons/fa";
const Event = ({ event, onDelete, onToggle }) => {
  return (
    <div
      className={`event ${event.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(event.id)}
    >
      <h3>
        {event.title}
        <FaTimes
          style={{ color: "red", marginLeft: "10px" }}
          onClick={() => onDelete(event.id)}
        />
      </h3>
      <p>{event.date}</p>
      <p>{event.time}</p>
      <p>{event.description}</p>
      <p>{event.organizer}</p>
      <p>{event.location}</p>
    </div>
  );
};

export default Event;