import { ArrowUpRight, Facebook, Instagram, Youtube } from 'lucide-react'
import { business, callUrl, whatsappUrl } from '../data/business.js'

const quickLinks = [['Home', '#home'], ['Tractors', '#tractors'], ['About', '#about'], ['Offers', '#offers'], ['Gallery', '#gallery'], ['Contact', '#contact']]
const social = [
  { key: 'instagram', label: 'Instagram', Icon: Instagram },
  { key: 'facebook', label: 'Facebook', Icon: Facebook },
  { key: 'youtube', label: 'YouTube', Icon: Youtube },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-main"><div className="footer-brand"><a className="brand footer-logo" href="#home"><span className="brand-mark">KM</span><span><strong>{business.name}</strong><small>{business.tagline}</small></span></a><p>बिजनौर और आसपास के किसानों के लिए TAFE एवं Massey Ferguson ट्रैक्टरों की जानकारी और सहयोग।</p><div className="social-links">{social.map(({ key, label, Icon }) => business.socialLinks[key] ? <a href={business.socialLinks[key]} key={key} aria-label={label} target="_blank" rel="noreferrer"><Icon size={17} /></a> : <span key={key} aria-label={`${label} लिंक सेट नहीं है`} title={`${label} लिंक business.js में जोड़ें`}><Icon size={17} /></span>)}</div></div>
        <div className="footer-column"><h3>Quick Links</h3>{quickLinks.map(([label, href]) => <a href={href} key={href}>{label}<ArrowUpRight size={13} /></a>)}</div>
        <div className="footer-column"><h3>संपर्क</h3>{business.phones.map((phone) => <a href={callUrl(phone)} key={phone}>{phone.replace(/(\d{5})(\d{5})/, '$1 $2')}<ArrowUpRight size={13} /></a>)}<span className="footer-address">{business.locationLabel}</span><a href={whatsappUrl()} target="_blank" rel="noreferrer">WhatsApp पर बात करें<ArrowUpRight size={13} /></a></div>
      </div>
      <div className="footer-bottom wrap"><span>© {new Date().getFullYear()} {business.name}</span><span>बिजनौर, उत्तर प्रदेश · भारत</span><a href="#home">ऊपर जाएँ ↑</a></div>
    </footer>
  )
}
