import { useState } from 'react';
import './App.css';
import Sidebar from './Components/Sidebar';
import EventDetails from './components/EventDetails';
import AddEventModal from './components/AddEventModal';

export default function App() {
  // Get events from localStorage or use default events
  const getInitialEvents = () => {
    const storedEvents = localStorage.getItem('events');
    if (storedEvents) {
      return JSON.parse(storedEvents);
    }

    // Some sample events to start with
    return [
      {
        id: 1,
        title: 'Study Group Session',
        date: '2026-04-01',
        time: '16:00',
        description: 'Group study session for reviewing course materials and preparing for the upcoming exam.'
      },
      {
        id: 2,
        title: 'Final Exam Review',
        date: '2026-05-09',
        time: '18:00',
        description: 'Review session with my classmates to practice sample questions before exam.'
      }
    ];
  };

  const [events, setEvents] = useState(getInitialEvents());
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [showModal, setShowModal] = useState(false);

  // Filter events by search text
  const filteredEvents = events.filter(event =>
    event.title.toLowerCase().includes(searchText.toLowerCase())
  );

  // When user adds a new event
  const addNewEvent = (newEvent) => {
    const eventWithId = {
      ...newEvent,
      id: Date.now()
    };
    const allEvents = [...events, eventWithId];
    setEvents(allEvents);
    localStorage.setItem('events', JSON.stringify(allEvents));
    setShowModal(false);
  };

  return (
    <div className="app">
      <Sidebar
        events={filteredEvents}
        selectedEvent={selectedEvent}
        onSelectEvent={setSelectedEvent}
        searchText={searchText}
        onSearch={setSearchText}
        onAddClick={() => setShowModal(true)}
      />
      <EventDetails event={selectedEvent} />
      {showModal && (
        <AddEventModal
          onClose={() => setShowModal(false)}
          onAdd={addNewEvent}
        />
      )}
    </div>
  );
}
