
export default function EventList({ events, selectedEvent, onSelectEvent }) {
  if (events.length == 0) {
    return (
      <div>
        <p>No events find</p>
      </div>
    );
  }
  return (
    <div>
      {events.map(event => (
        <EventItem
          key={event.id}
          event={event}
          isSelected={selectedEvent && selectedEvent.id == event.id}
          onSelect={() => onSelectEvent(event)}
        />
      ))}
    </div>
  );
}