'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

const vehicles = [
  { id: 1, make: 'Toyota', model: 'Harrier', year: 2020, price: '4.85M', mileage: '48,000 km', image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1000&q=85' },
  { id: 2, make: 'Mazda', model: 'CX-5', year: 2021, price: '4.25M', mileage: '36,000 km', image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=1000&q=85' },
  { id: 3, make: 'Subaru', model: 'Forester', year: 2019, price: '3.18M', mileage: '62,000 km', image: 'https://images.unsplash.com/photo-1551830820-330a71b99659?auto=format&fit=crop&w=1000&q=85' },
]

export default function ShortlistPage() {
  const [saved, setSaved] = useState<number[]>([])
  useEffect(() => { const value = window.localStorage.getItem('clearlake-shortlist'); setSaved(value ? JSON.parse(value) : []) }, [])
  const shortlisted = vehicles.filter((vehicle) => saved.includes(vehicle.id))
  const remove = (id: number) => { const next = saved.filter((item) => item !== id); setSaved(next); window.localStorage.setItem('clearlake-shortlist', JSON.stringify(next)) }
  return <main><header className="site-header"><Link href="/" className="brand"><span className="brand-mark">C</span><span><strong>Clearlake</strong><small>Automotives · Mombasa</small></span></Link><Link href="/cars" className="text-link">← Browse cars</Link></header><section className="inventory-section shortlist-page"><div className="section-label">YOUR SAVED CARS</div><h1>My <em>shortlist.</em></h1><p>Keep the vehicles you want to compare in one place. Your shortlist is saved on this device.</p>{shortlisted.length === 0 ? <div className="empty-state"><strong>No cars saved yet.</strong><span>Save a vehicle while browsing and it will appear here.</span><Link href="/cars" className="button button-dark">Browse cars <span>↗</span></Link></div> : <div className="simple-cars">{shortlisted.map((car) => <article className="simple-car" key={car.id}><img className="shortlist-photo" src={car.image} alt={`${car.year} ${car.make} ${car.model}`} /><div className="eyebrow">{car.make} · {car.year}</div><h3>{car.model}</h3><strong>KSh {car.price}</strong><p>{car.mileage} · Automatic</p><div className="shortlist-actions"><Link href={`/cars/${car.make.toLowerCase()}/${car.model.toLowerCase()}`} className="text-link">View details ↗</Link><button onClick={() => remove(car.id)}>Remove</button></div></article>)}</div>}</section></main>
}

export const dynamic = 'force-dynamic'

/* Styles are shared from route-styles.css. */

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const _shortlistStyles = ''

// This route intentionally keeps shortlist persistence client-side as requested.
