import promotionalPoster from '../../photo.jpeg'
import massey30di from '../../messy1.jpeg'
import tractorStudio from '../../messy2.jpeg'
import tractorAlternate from '../../messy5.jpeg'
import showroomImage from '../../showroom.jpeg'

export const business = {
  name: 'Kisan Machinery Mart',
  hindiName: 'किसान मशीनरी मार्ट',
  tagline: 'आपका भरोसेमंद Tractor Partner',
  contactPerson: 'Dushyant Chaudhary (Baldia Wale)',
  phones: ['9917082821', '9762828805'],
  whatsappPhone: '919917082821',
  whatsappMessage: 'नमस्ते, मुझे ट्रैक्टर के बारे में जानकारी चाहिए।',
  locationLabel: 'Bijnor, Uttar Pradesh',
  locations: [
    {
      name: 'बिजनौर',
      address: 'चक्कर रोड, सेंट मेरी स्कूल और रेलवे फाटक के बीच',
      mapUrl: '',
    },
    {
      name: 'नजीबाबाद',
      address: 'कोटद्वार रोड',
      mapUrl: '',
    },
  ],
  brands: ['TAFE', 'Massey Ferguson'],
  openingSoon: true,
  socialLinks: {
    instagram: '',
    facebook: '',
    youtube: '',
  },
  images: {
    poster: promotionalPoster,
    hero: `${import.meta.env.BASE_URL}images/showroom.jpeg`,
    field: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=85',
    tractor: massey30di,
    tractor2: tractorStudio,
    tractor3: tractorAlternate,
    delivery: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=85',
    agriculture: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1200&q=85',
    showroom: showroomImage,
    customer: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1200&q=85',
  },
}

export const whatsappUrl = (message = business.whatsappMessage) =>
  `https://wa.me/${business.whatsappPhone}?text=${encodeURIComponent(message)}`

export const callUrl = (phone = business.phones[0]) => `tel:+91${phone}`
