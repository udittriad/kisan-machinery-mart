import { useState } from 'react'
import { ArrowUpRight, Menu, Phone, X } from 'lucide-react'
import { business, callUrl, whatsappUrl } from '../data/business.js'

const links = [
  ['Home', '#home'], ['Tractors', '#tractors'], ['About Us', '#about'],
  ['Offers', '#offers'], ['Gallery', '#gallery'], ['Location', '#location'], ['Contact', '#contact'],
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="site-header">
      <div className="topline"><span>बिजनौर, उत्तर प्रदेश</span><span>TAFE एवं Massey Ferguson अधिकृत डीलरशिप</span></div>
      <nav className="navbar wrap" aria-label="मुख्य नेविगेशन">
        <a className="brand" href="#home" aria-label={`${business.name} होम`}>
          <span className="brand-mark">KM</span>
          <span><strong>Kisan Machinery Mart</strong><small>किसानों का भरोसेमंद साथी</small></span>
        </a>
        <div className={`nav-links ${open ? 'is-open' : ''}`}>
          {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
          <a className="mobile-nav-contact" href={whatsappUrl()} target="_blank" rel="noreferrer">WhatsApp पर बात करें <ArrowUpRight size={16} /></a>
        </div>
        <div className="nav-actions">
          <a className="nav-call" href={callUrl()} aria-label="अभी कॉल करें"><Phone size={16} /><span>Call Now</span></a>
          <a className="nav-whatsapp" href={whatsappUrl()} target="_blank" rel="noreferrer">WhatsApp</a>
        </div>
        <button className="menu-toggle" type="button" aria-label={open ? 'मेन्यू बंद करें' : 'मेन्यू खोलें'} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
    </header>
  )
}
