const burgerTrigger = document.querySelector('.menu'),
  burgerClose = document.querySelector('.menu_close'),
  burgerItem = document.querySelector('.inner'),
  body = document.querySelector('body'),
  headerLink = document.querySelectorAll('.links__link')

burgerTrigger.addEventListener('click', (e) => {
  toggleBurger()
})

burgerClose.addEventListener('click', (e) => {
  toggleBurger()
})
headerLink.forEach((item) => {
  item.addEventListener('click', (e) => {
    toggleBurger()
  })
})

function toggleBurger() {
  burgerItem.classList.toggle('active')
  body.classList.toggle('active')
  burgerTrigger.classList.toggle('active')
  burgerClose.classList.toggle('active')
}
