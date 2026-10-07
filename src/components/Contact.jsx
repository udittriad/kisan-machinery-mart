import { ArrowUpRight, Clock3, MapPin, MessageCircle, Phone } from 'lucide-react'
import { business, callUrl, whatsappUrl } from '../data/business.js'

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="wrap contact-layout">
        <div className="contact-copy"><span className="section-kicker">LET'S TALK TRACTORS</span><h2>आपकी अगली<br /><span>फसल बेहतर हो।</span></h2><p>मॉडल, कीमत, फाइनेंस या शोरूम आने की जानकारी चाहिए? हमसे बात करें।</p><div className="contact-person"><span className="contact-avatar">DC</span><span><b>{business.contactPerson}</b><small>आपकी सहायता के लिए संपर्क व्यक्ति</small></span></div></div>
        <div className="contact-panel"><span className="contact-panel-kicker">KISAN MACHINERY MART</span><h3>हमसे संपर्क करें</h3>
          <div className="contact-phone-list">{business.phones.map((phone) => <a href={callUrl(phone)} key={phone}><Phone size={17} /><span>+91 {phone.replace(/(\d{5})(\d{5})/, '$1 $2')}</span><ArrowUpRight size={15} /></a>)}</div>
          <a className="button button-green contact-whatsapp" href={whatsappUrl()} target="_blank" rel="noreferrer"><MessageCircle size={18} /> WhatsApp पर बात करें <ArrowUpRight size={17} /></a>
          <div className="contact-meta"><span><MapPin size={14} /> बिजनौर, उत्तर प्रदेश</span><span><Clock3 size={14} /> समय जानने के लिए कॉल करें</span></div>
        </div>
      </div>
    </section>
  )
}
