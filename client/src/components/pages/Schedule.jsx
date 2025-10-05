import React from "react";
// import useCalendar from "../../hooks/useCalendar";
//import "../../styles/schedule.css";

export default function Schedule() {
  // const { events, loading, error } = useCalendar();

  // if (loading) return <p>Loading events...</p>;
  // if (error) return <p>Error: {error}</p>;
  return (
      <div> 
        <h2>Upcoming Mass Schedule</h2>
        <iframe 
          src="https://calendar.google.com/calendar/embed?src=maldenfa%40gmail.com&ctz=America%2FNew_York"
          style={{ border: '0' }} 
          width="800" 
          height="600" 
          frameBorder="0" 
          scrolling="no">
        </iframe>
      </div>
    );
  // return (
  //   <div> 
  //     <h2>Upcoming Mass Schedule</h2>
  //        <iframe src="https://calendar.google.com/calendar/embed?src=maldenfa%40gmail.com&ctz=America%2FNew_York" style="border: 0" width="800" height="600" frameborder="0" scrolling="no"></iframe>
  //   </div>
  //   // <section className="faab-schedule">
  //   //   <div className="grid grid-2">
  //   //     {events.map((event) => (
  //   //       <div key={event.id} className="card">
  //   //         <h3>{event.summary}</h3>
  //   //         <p>
  //   //           🗓️ {new Date(event.start.dateTime || event.start.date).toLocaleString()}
  //   //         </p>
  //   //         {event.location && <p>📍 {event.location}</p>}
  //   //         {event.hangoutLink && (
  //   //           <a href={event.hangoutLink} target="_blank" rel="noopener noreferrer" className="btn btn--brand">
  //   //             Join via Zoom
  //   //           </a>
  //   //         )}
  //   //       </div>
  //   //     ))}
  //   //   </div>
  //   // </section>
   
  // );
}
