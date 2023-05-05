import * as flsFunctions from './modules/functions.js'
import Swiper from 'swiper'
import {
  Navigation,
  EffectFade,
  Pagination,
  Thumbs,
  Controller,
  FreeMode,
  Scrollbar,
  A11y,
  Mousewheel,
} from 'swiper'
import AOS from 'aos'

flsFunctions.isWebp()

// Создание объекта свайпера. принимает строку (css класс) и объект.
// объект представляет собой набор свойств для свайпера
const swiper = new Swiper('.auctions-slider', {
  loop: false, // бесконечный режим
  navigation: {
    nextEl: '.swiper-button-next1', // css классы стрелок
    prevEl: '.swiper-button-next1', // включить стрелочки
  },
  modules: [Navigation, EffectFade, Pagination, FreeMode], // модули которые будут использоваться
  autoHeight: true, // авто высота
  speed: 500, // скорость прокрутки
  slidesPerView: 3, // Количество слайдов которые будут видны.
  spaceBetween: 42,
  freeMode: true,
  grabCursor: true,
})
