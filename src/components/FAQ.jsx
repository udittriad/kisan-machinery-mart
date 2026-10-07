import { ChevronDown } from 'lucide-react'

const questions = [
  ['कौन-कौन से ट्रैक्टर उपलब्ध हैं?', 'TAFE और Massey Ferguson ट्रैक्टरों के उपलब्ध मॉडल जानने के लिए हमें कॉल या WhatsApp करें।'],
  ['क्या फाइनेंस सुविधा उपलब्ध है?', 'फाइनेंस विकल्प, पात्रता और जरूरी दस्तावेजों की जानकारी के लिए हमारी टीम से संपर्क करें।'],
  ['ट्रैक्टर की कीमत कैसे पता करें?', 'कीमत मॉडल, फीचर्स और मौजूदा ऑफर के अनुसार बदल सकती है। सटीक जानकारी के लिए कॉल करें।'],
  ['सर्विस और स्पेयर पार्ट्स की सुविधा है?', 'सर्विस और पार्ट्स की उपलब्धता के बारे में अपनी जरूरत बताकर हमारी टीम से पुष्टि करें।'],
  ['शोरूम कहाँ स्थित है?', 'बिजनौर में चक्कर रोड पर, सेंट मेरी स्कूल और रेलवे फाटक के बीच। नजीबाबाद स्थान कोटद्वार रोड पर है।'],
  ['WhatsApp पर कैसे संपर्क करें?', 'इस पेज के WhatsApp बटन से सीधे संदेश भेजें; आपका संदेश पहले से तैयार रहेगा।'],
]

export default function FAQ() {
  return (
    <section className="section faq-section" id="faq">
      <div className="wrap faq-layout"><div className="section-heading"><span className="section-kicker">HERE TO HELP</span><h2>आपके सवाल,<br /><span>हमारे जवाब।</span></h2><p>कुछ और जानना है? हमारी टीम से सीधे बात करें।</p><a href="#contact" className="text-action">संपर्क करें <span>→</span></a></div>
        <div className="faq-list">{questions.map(([question, answer], index) => <details className="faq-item" key={question} open={index === 0}><summary><span className="faq-number">0{index + 1}</span><span>{question}</span><ChevronDown size={18} /></summary><p>{answer}</p></details>)}</div>
      </div>
    </section>
  )
}
