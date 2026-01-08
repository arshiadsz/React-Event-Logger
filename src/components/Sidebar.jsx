import './Sidebar.css';

export default function Sidebar({ events, selectedEvent, onSelectEvent, searchText, onSearch, onAddClick }) {
  return (
    <div className="sidebar">
      <div className="header">
        <h1>Event Logger</h1>
        <button onClick={onAddClick}>Add Event</button>
      </div>
      
      <div className="search-box">
        <input
          type="text"
          placeholder="Search the events"
          value={searchText}
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>

      <div className="event-list">
        {events.length == 0 && <p className="no-events">No events find</p>}
        {events.map(event => {
          const selected = selectedEvent && selectedEvent.id === event.id;
          return (
            <div
              key={event.id}
              className={selected ? 'event-item selected' : 'event-item'}
              onClick={() => onSelectEvent(event)}
            >
              <h3>{event.title}</h3>
              <p>{event.date} {event.time}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}