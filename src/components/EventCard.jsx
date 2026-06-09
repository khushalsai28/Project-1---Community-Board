import React from 'react'

function makePlaceholderDataUrl(text){
  const escaped = text.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  const svg = `
  <svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>
    <rect width='100%' height='100%' fill='#e6eefc'/>
    <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='#0b6efd' font-size='28' font-family='Arial, sans-serif'>${escaped}</text>
  </svg>`
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`
}

export default function EventCard({ title, date, location, description, image, onViewMenu }) {
  const placeholder = makePlaceholderDataUrl(title || 'Image')

  function handleError(e){
    e.currentTarget.onerror = null
    e.currentTarget.src = placeholder
  }

  return (
    <article className="card">
      <div className="card-media">
        <img src={image || placeholder} alt={title} loading="lazy" onError={handleError} />
      </div>
      <h2 className="card-title">{title}</h2>
      <p className="meta">{date} — {location}</p>
      <p className="desc">{description}</p>
      <div className="card-actions">
        <button className="btn" type="button" onClick={onViewMenu}>View Menu</button>
      </div>
    </article>
  )
}
