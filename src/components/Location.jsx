import { ArrowUpRight, MapPin, Navigation } from 'lucide-react'
import { business } from '../data/business.js'

const mapSearch = (location) => location.mapUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${location.address}, ${location.name}, Bijnor, Uttar Pradesh`)}`

export default function Location() {
  return (
    <section className="section location-section" id="location">
      <div className="wrap location-layout">
        <div className="location-copy"><span className="section-kicker">COME SAY NAMASTE</span><h2>हमारा <span>शोरूम</span></h2><p>हमारा शोरूम अब नए पते पर है। बिजनौर और नजीबाबाद में अपने नजदीकी स्थान से संपर्क करें। दिशा देखने से पहले पता फोन पर पक्का कर लें।</p>
          <div className="location-cards">{business.locations.map((location, index) => <article className="location-card" key={location.name}><span className="location-pin"><MapPin size={18} /></span><div><span className="card-kicker">स्थान 0{index + 1}</span><h3>{location.name}</h3><p>{location.address}</p><a href={mapSearch(location)} target="_blank" rel="noreferrer">Google Maps पर दिशा देखें <ArrowUpRight size={15} /></a></div></article>)}</div>
        </div>
        <div className="map-placeholder"><div className="map-grid" /><div className="map-road road-one" /><div className="map-road road-two" /><div className="map-marker"><MapPin size={24} fill="currentColor" /></div><div className="map-label"><Navigation size={15} /><span><b>Bijnor</b><small>Uttar Pradesh, India</small></span></div><span className="map-caption">स्थानीय पता · बिजनौर</span></div>
      </div>
    </section>
  )
}
