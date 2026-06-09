import React from 'react'

export default function EventCard({ title, date, location, description, link, image }) {
  return (
    <article className="card">
      {image && (
        <div className="card-media">
          <img src={image} alt={title} />
        </div>
      )}
      <h2 className="card-title">{title}</h2>
      <p className="meta">{date} — {location}</p>
      <p className="desc">{description}</p>
      <div className="card-actions">
        <a className="btn" href={link} target="_blank" rel="noopener noreferrer">View Menu</a>
      </div>
    </article>
  )
}
