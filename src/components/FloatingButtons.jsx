import { MessageCircle, Phone } from 'lucide-react'
import { callUrl, whatsappUrl } from '../data/business.js'

export default function FloatingButtons() {
  return <div className="floating-actions" aria-label="त्वरित संपर्क"><a className="floating-call" href={callUrl()} aria-label="कॉल करें"><Phone size={19} /><span>Call</span></a><a className="floating-whatsapp" href={whatsappUrl()} target="_blank" rel="noreferrer" aria-label="WhatsApp पर संपर्क करें"><MessageCircle size={20} /><span>WhatsApp</span></a></div>
}
