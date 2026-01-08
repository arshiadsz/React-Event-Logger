import { useState } from 'react';
import './App.css';
import Sidebar from './Components/Sidebar';
import EventDetails from './Components/EventDetails';
import AddEventModal from './Components/AddEventModal';

export default function App() {
  const getInitialEvents = () => {
    const storedEvents = localStorage.getItem('events');
    if (storedEvents) {
      return JSON.parse(storedEvents);
    }
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
  
  const filteredEvents = events.filter(event =>
    event.title.toLowerCase().includes(searchText.toLowerCase())
  );
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
}
