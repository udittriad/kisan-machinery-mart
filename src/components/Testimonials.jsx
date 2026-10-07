import { Quote } from 'lucide-react'

const testimonials = [
  { name: 'ग्राहक प्रतिक्रिया', location: 'बिजनौर' },
  { name: 'ग्राहक प्रतिक्रिया', location: 'नजीबाबाद' },
  { name: 'ग्राहक प्रतिक्रिया', location: 'आसपास का क्षेत्र' },
]

export default function Testimonials() {
  return (
    <section className="section testimonials-section">
      <div className="wrap">
        <div className="section-heading split-heading"><div><span className="section-kicker">LOCAL TRUST, REAL PEOPLE</span><h2>किसानों की <span>आवाज़</span></h2></div><p>वास्तविक ग्राहक अनुभव मिलते ही यहाँ उनकी अनुमति से साझा किए जाएंगे।</p></div>
        <div className="testimonial-grid">{testimonials.map((item, index) => <article className="testimonial-card" key={index}><div className="testimonial-top"><Quote size={21} /><span className="review-status">समीक्षा प्रतीक्षित</span></div><p className="review-placeholder">सत्यापित ग्राहक की प्रतिक्रिया यहाँ जोड़ी जाएगी।</p><div className="review-author"><span className="review-avatar">क</span><span><b>{item.name}</b><small>{item.location} · ग्राहक समीक्षा</small></span></div></article>)}</div>
      </div>
    </section>
  )
}
