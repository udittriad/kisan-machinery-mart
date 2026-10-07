import { ArrowUpRight, Phone } from 'lucide-react'
import { business, callUrl, whatsappUrl } from '../data/business.js'

export default function Offers() {
  return (
    <section className="offer-section" id="offers">
      <div className="offer-pattern" aria-hidden="true" />
      <div className="wrap offer-content">
        <div className="offer-stamp"><span>KISAN<br />SPECIAL</span><b>✳</b></div>
        <div className="offer-copy"><span className="offer-kicker">SEASON READY · FARMER FIRST</span><h2>खास <span>ऑफर</span></h2><p>नए मॉडल, दमदार परफॉर्मेंस और आकर्षक उपहार!</p><small>मौजूदा ऑफर एवं शर्तों की जानकारी के लिए संपर्क करें।</small></div>
        <div className="offer-actions"><a className="button button-yellow" href={whatsappUrl()} target="_blank" rel="noreferrer">आज ही संपर्क करें <ArrowUpRight size={18} /></a><a className="offer-call" href={callUrl()}><Phone size={17} /> {business.phones[0].replace(/(\d{5})(\d{5})/, '$1 $2')}</a></div>
        <a className="offer-poster" href={business.images.poster} target="_blank" rel="noreferrer" aria-label="डीलरशिप का प्रचार पोस्टर बड़े आकार में देखें"><img src={business.images.poster} alt="किसान मशीनरी मार्ट का Opening Soon प्रचार पोस्टर" loading="lazy" /></a>
      </div>
    </section>
  )
}
