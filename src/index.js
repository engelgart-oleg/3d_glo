// Подключаем модули:
const timer = require('./modules/timer');
const menu = require('./modules/menu');
const modal = require('./modules/modal');
const calc = require('./modules/calc');
const checkInputs = require('./modules/checkInputs');
const tabs = require('./modules/tabs');
const slider = require('./modules/slider');
const sliderCarousel = require('./modules/slider_carousel');
// const forms = require('./modules/forms');

// Вызов модулей:
timer('31 March 2026');
menu();
modal();
calc(100); // передаем базовую стоимость за кв. метр
checkInputs();
tabs();

// Передаем настройки: селектор блока, слайдов, контейнера точек и кастомные классы активности
slider({
  mainSelector: '.portfolio-content',
  slideSelector: '.portfolio-item',
  dotsSelector: '.portfolio-dots',
  activeSlideClass: 'portfolio-item-active',
  activeDotClass: 'dot-active'
});
sliderCarousel();