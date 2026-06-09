import React, { useState } from 'react'
import events from './data/events'
import EventCard from './components/EventCard'

export default function App() {
  const [selectedEvent, setSelectedEvent] = useState(null)

  function openMenu(eventData) {
    setSelectedEvent(eventData)
  }

  function closeMenu() {
    setSelectedEvent(null)
  }

  return (
    <div className="app">
      <header className="site-header">
        <h1>Neighborhood Events & Resources</h1>
        <p className="subtitle">Find activities, workshops, and helpful links around town</p>
      </header>

      <main>
        <section className="grid">
          {events.map((ev) => (
            <EventCard key={ev.id} onViewMenu={() => openMenu(ev)} {...ev} />
          ))}
        </section>
      </main>

      <footer className="site-footer">Made for the community — sample data</footer>

      {selectedEvent && (
        <div className="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="menu-title">
          <div className="modal-panel">
            <div className="modal-header">
              <h2 id="menu-title">{selectedEvent.title} Menu</h2>
              <button className="modal-close" onClick={closeMenu} aria-label="Close menu">×</button>
            </div>
            <p className="modal-subtitle">{selectedEvent.description}</p>
            <ul className="menu-list">
              {selectedEvent.menu.map((item, index) => (
                <li key={index} className="menu-item">
                  <strong>{item.name}</strong>
                  <span>{item.details}</span>
                </li>
              ))}
            </ul>
            <button className="btn btn-secondary" onClick={closeMenu}>Close</button>
          </div>
        </div>
      )}
    </div>
  )
}
