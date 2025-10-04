import React from "react";
import useCalendar from "../../hooks/useCalendar";
//import "../../styles/schedule.css";

export default function Schedule() {
  const { events, loading, error } = useCalendar();

  if (loading) return <p>Loading events...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section className="faab-schedule">
      <h2>Upcoming Mass Schedule</h2>
      <div className="grid grid-2">
        {events.map((event) => (
          <div key={event.id} className="card">
            <h3>{event.summary}</h3>
            <p>
              🗓️ {new Date(event.start.dateTime || event.start.date).toLocaleString()}
            </p>
            {event.location && <p>📍 {event.location}</p>}
            {event.hangoutLink && (
              <a href={event.hangoutLink} target="_blank" rel="noopener noreferrer" className="btn btn--brand">
                Join via Zoom
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
