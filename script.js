const menuButton = document.querySelector('.menu-toggle')
const navigation = document.querySelector('#nav-links')

function closeMenu() {
  if (!menuButton || !navigation) return
  menuButton.setAttribute('aria-expanded', 'false')
  menuButton.setAttribute('aria-label', 'मेन्यू खोलें')
  menuButton.textContent = '☰'
  navigation.classList.remove('is-open')
}

if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') !== 'true'
    menuButton.setAttribute('aria-expanded', String(isOpen))
    menuButton.setAttribute('aria-label', isOpen ? 'मेन्यू बंद करें' : 'मेन्यू खोलें')
    menuButton.textContent = isOpen ? '×' : '☰'
    navigation.classList.toggle('is-open', isOpen)
  })

  navigation.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu)
  })

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu()
  })

  document.addEventListener('click', (event) => {
    if (!navigation.contains(event.target) && !menuButton.contains(event.target)) closeMenu()
  })
}

const year = document.querySelector('#current-year')
if (year) year.textContent = String(new Date().getFullYear())

const navLinks = [...document.querySelectorAll('.nav-links a[href^="#"]')]
const observedSections = navLinks
  .map((link) => document.querySelector(link.getAttribute('href')))
  .filter((section) => section)

if ('IntersectionObserver' in window) {
  const revealTargets = document.querySelectorAll(
    '.intro-layout, .section-heading, .tractor-card, .benefit-card, .field-notes-card, .gallery-item, .contact-panel'
  )

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return
      entry.target.classList.add('is-visible')
      observer.unobserve(entry.target)
    })
  }, { threshold: 0.12 })

  revealTargets.forEach((target) => {
    target.classList.add('reveal-on-scroll')
    revealObserver.observe(target)
  })

  const activeSectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return
      navLinks.forEach((link) => {
        link.classList.toggle('is-active', link.hash === `#${entry.target.id}`)
      })
    })
  }, { rootMargin: '-25% 0px -65% 0px' })

  observedSections.forEach((section) => activeSectionObserver.observe(section))
}
