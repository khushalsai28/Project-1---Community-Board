import React from 'react'

export default function EventCard({ title, date, location, description, link }) {
  return (
    <article className="card">
      <h2 className="card-title">{title}</h2>
      <p className="meta">{date} — {location}</p>
      <p className="desc">{description}</p>
      <div className="card-actions">
        <a className="btn" href={link} target="_blank" rel="noopener noreferrer">Learn more</a>
      </div>
    </article>
  )
}
