import React from 'react'
import events from './data/events'
import EventCard from './components/EventCard'

export default function App() {
  return (
    <div className="app">
      <header className="site-header">
        <h1>Neighborhood Events & Resources</h1>
        <p className="subtitle">Find activities, workshops, and helpful links around town</p>
      </header>

      <main>
        <section className="grid">
          {events.map((ev) => (
            <EventCard key={ev.id} {...ev} />
          ))}
        </section>
      </main>

      <footer className="site-footer">Made for the community — sample data</footer>
    </div>
  )
}
