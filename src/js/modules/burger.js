const burgerTrigger = document.querySelector('.menu'),
  burgerClose = document.querySelector('.menu_close'),
  burgerItem = document.querySelector('.inner'),
  body = document.querySelector('body')
headerLink = document.querySelector('.links__link')

burgerTrigger.addEventListener('click', (e) => {
  burgerItem.classList.add('active')
  body.classList.add('active')
  burgerTrigger.style.display = 'none'
  burgerClose.style.display = 'block'
})

burgerClose.addEventListener('click', (e) => {
  burgerItem.classList.remove('active')
  body.classList.remove('active')
  burgerClose.style.display = 'none'
  burgerTrigger.style.display = 'block'
})
