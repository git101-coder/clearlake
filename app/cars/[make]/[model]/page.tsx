'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'

const vehicles = [
  { make: 'Toyota', model: 'Harrier', year: 2020, price: 'KSh 4.85M', mileage: '48,000 km', transmission: 'Automatic', fuel: 'Petrol', location: 'Mombasa', image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1600&q=90' },
  { make: 'Mazda', model: 'CX-5', year: 2021, price: 'KSh 4.25M', mileage: '36,000 km', transmission: 'Automatic', fuel: 'Petrol', location: 'Nairobi', image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=1600&q=90' },
  { make: 'Subaru', model: 'Forester', year: 2019, price: 'KSh 3.18M', mileage: '62,000 km', transmission: 'Automatic', fuel: 'Petrol', location: 'Mombasa', image: 'https://images.unsplash.com/photo-1551830820-330a71b99659?auto=format&fit=crop&w=1600&q=90' },
]

export default function VehicleDetail() {
  const params = useParams<{ make: string; model: string }>()
  const vehicle = vehicles.find((item) => item.make.toLowerCase() === params.make && item.model.toLowerCase() === params.model) ?? vehicles[0]
  const message = encodeURIComponent(`Hello, I would like to inquire about the ${vehicle.year} ${vehicle.make} ${vehicle.model} listed on Clearlake Automotives.`)

  return <main className="detail-page">
    <header className="detail-header"><Link href="/cars" className="text-link">← Back to results</Link><Link href="/" className="brand"><span className="brand-mark">C</span><span><strong>Clearlake</strong><small>Automotives · Mombasa</small></span></Link></header>
    <div className="detail-layout">
      <div className="detail-gallery"><img src={vehicle.image} alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`} /></div>
      <section className="detail-copy"><div className="section-label">AVAILABLE THROUGH OUR NETWORK</div><h1>{vehicle.year} {vehicle.make}<br /><em>{vehicle.model}</em></h1><div className="detail-price">{vehicle.price}</div><div className="spec-grid"><div><span>Mileage</span><strong>{vehicle.mileage}</strong></div><div><span>Transmission</span><strong>{vehicle.transmission}</strong></div><div><span>Fuel</span><strong>{vehicle.fuel}</strong></div><div><span>Location</span><strong>{vehicle.location}</strong></div></div><p>This vehicle is listed as a sample option while our showroom is being connected to the live inventory. Confirm availability, ownership, pricing and payment arrangements directly with the relevant dealership or seller before making any transaction.</p><div className="detail-actions"><a className="button button-dark" href={`mailto:hello@clearlakeautomotives.co.ke?subject=Inquiry about ${vehicle.year} ${vehicle.make} ${vehicle.model}&body=${message}`}>Inquire about this car ↗</a><a className="button button-light" href={`https://wa.me/254700000000?text=${message}`} target="_blank" rel="noreferrer">WhatsApp</a></div></section>
    </div>
  </main>
}

<style jsx>{
  `.detail-page{min-height:100vh;background:var(--paper)}.detail-header{height:84px;padding:0 7vw;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid var(--line)}.detail-layout{max-width:1280px;margin:0 auto;padding:7vw;display:grid;grid-template-columns:1.15fr .85fr;gap:7vw;align-items:center}.detail-gallery{height:520px;overflow:hidden;background:#dfe4df}.detail-gallery img{width:100%;height:100%;object-fit:cover}.detail-copy h1{font-size:clamp(46px,5vw,74px);margin:22px 0}.detail-price{font-size:28px;font-weight:600;margin-bottom:34px}.spec-grid{display:grid;grid-template-columns:1fr 1fr;border-top:1px solid var(--line);border-bottom:1px solid var(--line);margin-bottom:25px}.spec-grid div{padding:16px 0;display:flex;flex-direction:column;gap:5px}.spec-grid span{font-size:10px;letter-spacing:.12em;color:var(--muted);text-transform:uppercase}.spec-grid strong{font-size:14px}.detail-actions{display:flex;gap:12px;margin-top:28px}@media(max-width:800px){.detail-header{padding:0 6vw}.detail-header .brand{display:none}.detail-layout{display:flex;flex-direction:column;padding:9vw 6vw;gap:35px;align-items:stretch}.detail-gallery{height:300px}.detail-copy h1{font-size:50px}.detail-actions{flex-direction:column}.detail-actions .button{text-align:center}}`
}</style>
