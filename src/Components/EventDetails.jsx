import './EventDetails.css';

export default function EventDetails({ event }) {
  if (!event) {
    return (
      <div className="event-details">
        <div className="empty-state">
          <h2>Select an event to view details</h2>
        </div>
      </div>
    );
  }
  return (
    <div className="event-details">
      <div className="details-content">
        <h1>{event.title}</h1>
        <div className="info">
          <p><strong>Date:</strong> {event.date}</p>
          <p><strong>Time:</strong> {event.time}</p>
        </div>
        <div className="description">
          <h3>Description:</h3>
          <p>{event.description}</p>
        </div>
      </div>
    </div>
  );
}