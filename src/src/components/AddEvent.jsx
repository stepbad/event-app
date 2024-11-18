import { useState, useEffect } from "react";

const AddEvent = ({ onAdd, currentEvent }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [description, setDescription] = useState("");
  const [organizer, setOrganizer] = useState("");
  const [location, setLocation] = useState("");
  const [reminder, setReminder] = useState(false);

  // Prefill form when editing
  useEffect(() => {
    if (currentEvent) {
      setTitle(currentEvent.title);
      setDate(currentEvent.date);
      setTime(currentEvent.time);
      setDescription(currentEvent.description);
      setOrganizer(currentEvent.organizer);
      setLocation(currentEvent.location);
      setReminder(currentEvent.reminder);
    }
  }, [currentEvent]);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!title || !date || !time || !description || !organizer || !location) {
      alert("Please fill in all fields");
      return;
    }

    const eventData = {
      id: currentEvent ? currentEvent.id : undefined, // Retain ID when editing
      title,
      date,
      time,
      description,
      organizer,
      location,
      reminder,
    };

    onAdd(eventData);

    // Clear the form after submission
    setTitle("");
    setDate("");
    setTime("");
    setDescription("");
    setOrganizer("");
    setLocation("");
    setReminder(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Title</label>
        <input
          type="text"
          placeholder="Event Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Date</label>
        <input
          type="date"
          placeholder="Event Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Time</label>
        <input
          type="time"
          placeholder="Event Time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Description</label>
        <textarea
          placeholder="Event Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <div className="form-control">
        <label>Organizer</label>
        <input
          type="text"
          placeholder="Organizer Name"
          value={organizer}
          onChange={(e) => setOrganizer(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Location</label>
        <input
          type="text"
          placeholder="Event Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <div className="form-control-check">
        <label>Set Reminder</label>
        <input
          type="checkbox"
          checked={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      <input
        type="submit"
        value={currentEvent ? "Update Event" : "Save Event"}
        className="btn btn-block"
      />
    </form>
  );
};

export default AddEvent;
