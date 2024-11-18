import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Events from "./components/Events";
import AddEvent from "./components/AddEvent";

function App() {
  const [showAddEvent, setShowAddEvent] = useState(false);
  const [events, setEvents] = useState([]);
  const [eventToEdit, setEventToEdit] = useState(null);

  useEffect(() => {
    const getEvents = async () => {
      const eventsFromServer = await fetchEvents();
      setEvents(eventsFromServer);
    };
    getEvents();
  }, []);

  // Fetch events from server
  const fetchEvents = async () => {
    const res = await fetch("http://localhost:5001/events");
    const data = await res.json();
    return data;
  };

  // Add new event
  const addEvent = async (event) => {
    const res = await fetch("http://localhost:5001/events", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(event),
    });

    const data = await res.json();
    setEvents([...events, data]);
  };

  // Edit existing event
  const editEvent = async (updatedEvent) => {
    const res = await fetch(`http://localhost:5001/events/${updatedEvent.id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updatedEvent),
    });

    const data = await res.json();
    setEvents(
      events.map((event) =>
        event.id === updatedEvent.id ? { ...event, ...data } : event
      )
    );
    setEventToEdit(null); // Clear edit state
  };

  // Delete event
  const deleteEvent = async (id) => {
    await fetch(`http://localhost:5001/events/${id}`, { method: "DELETE" });
    setEvents(events.filter((event) => event.id !== id));
  };

  return (
    <div className="container">
      <Header
        title="Event Tracker"
        onAdd={() => {
          setShowAddEvent(!showAddEvent);
          setEventToEdit(null); // Clear edit state if adding a new event
        }}
        showAdd={showAddEvent}
      />
      {showAddEvent && (
        <AddEvent
          onAdd={eventToEdit ? editEvent : addEvent}
          currentEvent={eventToEdit}
        />
      )}
      {events.length > 0 ? (
        <Events
          events={events}
          onDelete={deleteEvent}
          onEdit={(event) => {
            setEventToEdit(event); // Set the event to edit
            setShowAddEvent(true); // Show the form for editing
          }}
        />
      ) : (
        "No events to show!"
      )}
    </div>
  );
}

export default App;
