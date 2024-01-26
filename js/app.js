// --faq

let spoilers = document.querySelectorAll('.spoiler')

spoilers.forEach((el) =>
  el.addEventListener('click', (e) => {
    if (e.target.closest('.spoiler__head')) {
      let thisSpoiler = e.target.parentElement

      if (thisSpoiler.classList.contains('open'))
        thisSpoiler.classList.remove('open')
      else {
        spoilers.forEach((el) => el.classList.remove('open'))
        thisSpoiler.classList.add('open')
      }
    }
  })
)

// --menu

const body = document.querySelector('body')
const mobileMenu = document.querySelector('.header__menu-button')
mobileMenu.addEventListener('click', () =>
  body.classList.toggle('mobile-menu-open')
)

// --btn-up

const btnUp = document.querySelector('.btn-up')
window.addEventListener('scroll', () => {
  if (window.scrollY > 500) {
    btnUp.classList.add('visible')
  } else {
    btnUp.classList.remove('visible')
  }
})

btnUp.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
})
