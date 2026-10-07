import { BadgeIndianRupee, Handshake, HeartHandshake, Settings, ShieldCheck, WalletCards } from 'lucide-react'

const benefits = [
  { icon: ShieldCheck, title: 'भरोसेमंद ट्रैक्टर', text: 'TAFE और Massey Ferguson के विकल्पों के साथ सही जानकारी।' },
  { icon: BadgeIndianRupee, title: 'आकर्षक कीमत', text: 'मॉडल और मौजूदा ऑफर की जानकारी सीधे हमारी टीम से।' },
  { icon: WalletCards, title: 'फाइनेंस सुविधा', text: 'फाइनेंस विकल्पों और पात्रता पर बातचीत के लिए संपर्क करें।' },
  { icon: HeartHandshake, title: 'बेहतर ग्राहक सेवा', text: 'खरीदारी से जुड़ी जानकारी में स्थानीय और सहज सहयोग।' },
  { icon: Settings, title: 'पार्ट्स एवं सर्विस', text: 'स्पेयर पार्ट्स और सर्विस की उपलब्धता के बारे में पूछें।' },
  { icon: Handshake, title: 'किसानों का भरोसा', text: 'बिजनौर और आसपास के किसानों के करीब, आपकी जरूरत के साथ।' },
]

export default function WhyChooseUs() {
  return (
    <section className="section why-section">
      <div className="wrap">
        <div className="section-heading"><span className="section-kicker">A PARTNER YOU CAN REACH</span><h2>क्यों चुनें किसान<br className="desktop-only" /> मशीनरी मार्ट?</h2></div>
        <div className="benefit-grid">{benefits.map(({ icon: Icon, title, text }, index) => <article className="benefit-card" key={title}><span className="benefit-index">0{index + 1}</span><span className="benefit-icon"><Icon size={22} strokeWidth={1.8} /></span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </div>
    </section>
  )
}
