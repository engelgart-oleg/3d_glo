// Подключаем модули:
const timer = require('./modules/timer');
const menu = require('./modules/menu');
const modal = require('./modules/modal');
const calc = require('./modules/calc');
const checkInputs = require('./modules/checkInputs');
// const forms = require('./modules/forms');

// Вызов модулей:
timer('10 March 2026');
menu();
modal();
calc(100); // передаем базовую стоимость за кв. метр
checkInputs();