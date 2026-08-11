import React from 'react'
import { ArrowUpRight } from 'lucide-react'

export default function ProductCard({ product, request }) {
  const [title, type, text, image, tone] = product
  return (
    <article className={`product-card ${tone} reveal-item`}>
      <div className="product-image">
        <img src={image} alt={title} loading="lazy" />
      </div>
      <div className="product-copy">
        <p>{type}</p>
        <h3>{title}</h3>
        <span>{text}</span>
        <a href="#contact">
          {request} <ArrowUpRight size={18} />
        </a>
      </div>
    </article>
  )
}
