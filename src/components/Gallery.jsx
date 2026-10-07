import { ArrowUpRight } from 'lucide-react'
import { business } from '../data/business.js'

const galleryItems = [
  { key: 'showroom', label: 'शोरूम', className: 'gallery-large' },
  { key: 'agriculture', label: 'खेती और फसल', className: '' },
  { key: 'delivery', label: 'डिलीवरी', className: '' },
  { key: 'tractor', label: 'ट्रैक्टर', className: '' },
  { key: 'customer', label: 'किसान समुदाय', className: 'gallery-wide' },
]

export default function Gallery() {
  return (
    <section className="section gallery-section" id="gallery">
      <div className="wrap">
        <div className="section-heading split-heading"><div><span className="section-kicker">FIELD NOTES</span><h2>खेत से <span>शोरूम तक</span></h2></div><p>हमारी गैलरी में जल्द जुड़ेंगी शोरूम, डिलीवरी और किसान समुदाय की असली तस्वीरें।</p></div>
        <div className="gallery-grid">{galleryItems.map((item) => <figure className={`gallery-item ${item.className}`} key={item.key}><img src={business.images[item.key]} alt={`${item.label} की तस्वीर`} loading="lazy" /><figcaption><span>{item.label}</span><ArrowUpRight size={16} /></figcaption></figure>)}</div>
        <p className="gallery-note">वर्तमान तस्वीरें उदाहरण के लिए हैं। वास्तविक डीलरशिप और ग्राहक तस्वीरों से बदलें।</p>
      </div>
    </section>
  )
}
