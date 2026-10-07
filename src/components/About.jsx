import { ArrowUpRight, MapPin, Tractor } from 'lucide-react'
import { business } from '../data/business.js'

export default function About() {
  return (
    <section className="section about-section" id="about">
      <div className="wrap about-layout">
        <div className="about-photo"><img src={business.images.field} alt="उत्तर प्रदेश के हरे-भरे खेत" loading="lazy" /><div className="about-photo-tag"><Tractor size={20} /><span>खेती के साथ,<br /><b>हर कदम पर।</b></span></div><span className="photo-credit">FIELD LIFE · BIJNOR</span></div>
        <div className="about-copy"><span className="section-kicker">ROOTED IN BIJNOR</span><h2>किसान मशीनरी<br /><span>मार्ट के बारे में</span></h2><p className="about-emphasis">बिजनौर में किसानों के लिए भरोसेमंद ट्रैक्टर पार्टनर</p><p>Kisan Machinery Mart बिजनौर और आसपास के किसानों की जरूरतों के लिए TAFE एवं Massey Ferguson ट्रैक्टरों की जानकारी और सहयोग उपलब्ध कराता है। सही मॉडल चुनने से लेकर फाइनेंस, पार्ट्स और सर्विस से जुड़ी पूछताछ तक, हमारी टीम आपकी बात सुनने के लिए मौजूद है।</p><a className="text-action" href="#contact">हमसे जुड़ें <ArrowUpRight size={16} /></a><div className="about-location"><MapPin size={17} /> बिजनौर, उत्तर प्रदेश</div></div>
      </div>
    </section>
  )
}
