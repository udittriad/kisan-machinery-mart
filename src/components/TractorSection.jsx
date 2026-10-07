import { ArrowUpRight, Gauge, MessageCircle } from 'lucide-react'
import { business, whatsappUrl } from '../data/business.js'
import { tractors } from '../data/tractors.js'

export function TractorCard({ tractor }) {
  const message = `नमस्ते, मुझे ${tractor.model} के बारे में जानकारी चाहिए।`
  return (
    <article className="tractor-card">
      <div className="tractor-image"><img src={business.images[tractor.imageKey]} alt={`${tractor.brand} ट्रैक्टर`} loading="lazy" /><span className="tractor-brand">{tractor.brand}</span></div>
      <div className="tractor-card-content">
        <div className="tractor-title"><div><span className="card-kicker">{tractor.brand}</span><h3>{tractor.model}</h3></div><ArrowUpRight size={19} /></div>
        <p>{tractor.description}</p>
        <div className="tractor-spec"><Gauge size={17} /><span>HP</span><b>{tractor.horsepower ?? 'जानकारी के लिए संपर्क करें'}</b></div>
        <div className="tractor-actions"><a href={whatsappUrl(message)} target="_blank" rel="noreferrer" className="text-action">जानकारी लें <ArrowUpRight size={16} /></a><a className="whatsapp-icon" href={whatsappUrl(message)} target="_blank" rel="noreferrer" aria-label={`${tractor.model} के लिए WhatsApp`}><MessageCircle size={18} /></a></div>
      </div>
    </article>
  )
}

export default function TractorSection() {
  return (
    <section className="section tractors-section" id="tractors">
      <div className="wrap">
        <div className="section-heading split-heading"><div><span className="section-kicker">POWER FOR EVERY FIELD</span><h2>हमारे ट्रैक्टर <span>मॉडल</span></h2></div><p>आपकी खेती और जरूरत के अनुसार दमदार और भरोसेमंद ट्रैक्टर। मॉडल और उपलब्धता की जानकारी के लिए हमसे संपर्क करें।</p></div>
        <div className="tractor-grid">{tractors.map((tractor, index) => <TractorCard tractor={tractor} key={`${tractor.brand}-${index}`} />)}</div>
      </div>
    </section>
  )
}
