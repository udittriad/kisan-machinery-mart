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
}

const year = document.querySelector('#current-year')
if (year) year.textContent = String(new Date().getFullYear())
