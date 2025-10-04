import { useState, useEffect } from "react";

export default function useCalendar() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCalendar() {
      const apiKey = import.meta.env.VITE_GCAL_KEY;
      const calendarId = import.meta.env.VITE_GCAL_ID;
      const url = `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${apiKey}`;

      try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.items) {
          setEvents(data.items);
        } else {
          throw new Error("No events found.");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchCalendar();
  }, []);

  return { events, loading, error };
}
