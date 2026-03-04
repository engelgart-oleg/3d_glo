/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js"
/*!******************!*\
  !*** ./index.js ***!
  \******************/
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("{// Подключаем модули:\r\nconst timer = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\r\nconst menu = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\r\nconst modal = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\r\n\r\n// Вызов модулей:\r\ntimer('10 March 2026');\r\nmenu();\r\nmodal();\n\n//# sourceURL=webpack:///./index.js?\n}");

/***/ },

/***/ "./modules/menu.js"
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
(module) {

eval("{// Модульная функция:\r\nconst menu = () => {\r\n  const menuBtn = document.querySelector('.menu');\r\n  const menu = document.querySelector('menu');\r\n  const closeBtn = menu.querySelector('.close-btn');\r\n  const menuItems = menu.querySelectorAll('ul>li>a');\r\n\r\n  // Функция открытия/закрытия меню:\r\n  const handleMenu = () => {\r\n    menu.classList.toggle('active-menu');\r\n  }  \r\n  \r\n  menuBtn.addEventListener('click', handleMenu); // кнопка бургер \r\n  closeBtn.addEventListener('click', handleMenu); // кнопка close в меню\r\n  menuItems.forEach(menuItem => menuItem.addEventListener('click', handleMenu)); // Перебор коллекции ссылок в меню  \r\n}\r\n\r\n// Экспорт модульной функции:\r\nmodule.exports = menu;\n\n//# sourceURL=webpack:///./modules/menu.js?\n}");

/***/ },

/***/ "./modules/modal.js"
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
(module) {

eval("{const modal = () => {\r\n  const modal = document.querySelector('.popup');\r\n  const buttons = document.querySelectorAll('.popup-btn');\r\n  const closeBtn = modal.querySelector('.popup-close');\r\n\r\n  buttons.forEach(btn => {\r\n    btn.addEventListener('click', () => {\r\n      modal.style.display = 'block';\r\n    })\r\n  });  \r\n\r\n  closeBtn.addEventListener('click', () => {\r\n    modal.style.display = 'none';\r\n  });\r\n}\r\n\r\n// Экспорт модульной функции:\r\nmodule.exports = modal;\n\n//# sourceURL=webpack:///./modules/modal.js?\n}");

/***/ },

/***/ "./modules/timer.js"
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
(module) {

eval("{// Модульная функция:\r\n// Таймер обратного отсчета:\r\nconst timer = (deadline) => {  \r\n  const timerHours = document.getElementById('timer-hours');\r\n  const timerMinutes = document.getElementById('timer-minutes');\r\n  const timerSeconds = document.getElementById('timer-seconds');\r\n\r\n  // Вспомогательная функция для добавления ведущего нуля (04:06:50)\r\n  const formatValue = (value) => value < 10 ? `0${value}` : value;\r\n\r\n  const getTimeRemaining = () => {\r\n    let dateStop = new Date(deadline).getTime();\r\n    let dateNow = new Date().getTime();\r\n    \r\n    // Рассчитываем разницу. Если дата прошла, используем 0.\r\n    let timeRemaining = Math.max(0, (dateStop - dateNow) / 1000);\r\n\r\n    let hours = Math.floor(timeRemaining / 60 / 60);\r\n    let minutes = Math.floor((timeRemaining / 60) % 60);\r\n    let seconds = Math.floor(timeRemaining % 60);\r\n\r\n    return { timeRemaining, hours, minutes, seconds };\r\n  }\r\n\r\n  const updateClock = () => {\r\n    let getTime = getTimeRemaining();\r\n\r\n    // Подставляем значения с нулями\r\n    timerHours.textContent = formatValue(getTime.hours);\r\n    timerMinutes.textContent = formatValue(getTime.minutes);\r\n    timerSeconds.textContent = formatValue(getTime.seconds);\r\n\r\n    // Проверка для самоконтроля (пункт 1 задания)\r\n    console.log('Тик таймера');\r\n\r\n    // Если время вышло, останавливаем интервал\r\n    if (getTime.timeRemaining <= 0) {\r\n      clearInterval(idInterval);\r\n    }\r\n  };\r\n\r\n  // Запускаем интервал и сохраняем его ID\r\n  const idInterval = setInterval(updateClock, 1000);\r\n\r\n  updateClock()  \r\n}\r\n\r\n// Экспорт модульной функции:\r\nmodule.exports = timer;\r\n\r\n\r\n\r\n\r\n// let days = Math.floor(timeRemaining / 60 / 60 / 24);\r\n// let hours = Math.floor((timeRemaining / 60 / 60) % 24);\n\n//# sourceURL=webpack:///./modules/timer.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;