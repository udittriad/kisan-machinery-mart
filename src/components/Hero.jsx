import { ArrowDown, ArrowUpRight, BadgeCheck, MapPin, MessageCircle, Phone } from 'lucide-react'
import { business, callUrl, whatsappUrl } from '../data/business.js'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-sun" />
      <div className="wrap hero-layout">
        <div className="hero-copy reveal-up">
          <div className="eyebrow"><span className="eyebrow-line" /> TAFe & MASSEY FERGUSON <span className="eyebrow-line" /></div>
          {business.openingSoon && <span className="opening-badge"><span /> Opening Soon</span>}
          <h1>किसान मशीनरी<br /><em>मार्ट</em></h1>
          <p className="hero-lead">नए मॉडल, दमदार परफॉर्मेंस और आकर्षक ऑफर के साथ TAFE एवं Massey ट्रैक्टर</p>
          <p className="hero-support"><MapPin size={16} /> बिजनौर में किसानों के लिए भरोसेमंद ट्रैक्टर और बेहतर सेवा</p>
          <div className="hero-actions">
            <a className="button button-red" href="#tractors">ट्रैक्टर देखें <ArrowDown size={17} /></a>
          </div>
          <div className="hero-proof"><BadgeCheck size={18} /><span>TAFE एवं Massey Ferguson के साथ<br />किसानों की जरूरतों के लिए</span></div>
        </div>
        <div className="hero-visual">
          <div className="hero-image-frame">
            <img src={business.images.hero} alt="बिजनौर में किसान मशीनरी मार्ट का शोरूम" fetchPriority="high" />
            <div className="hero-image-overlay">
              <h2>बिजनौर में एकमात्र Massey एजेंसी</h2>
              <div className="hero-overlay-actions">
                <a className="button hero-call-button" href={callUrl()}><Phone size={16} /> Call Now</a>
                <a className="button hero-whatsapp-button" href={whatsappUrl()} target="_blank" rel="noreferrer"><MessageCircle size={16} /> WhatsApp</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-bottom wrap"><span>मिट्टी से जुड़ा भरोसा</span><span className="scroll-cue">SCROLL TO EXPLORE <ArrowDown size={14} /></span><span>बिजनौर · उत्तर प्रदेश</span></div>
    </section>
  )
}
