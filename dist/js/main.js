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

eval("{// Подключаем модули:\r\nconst timer = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\r\nconst menu = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\r\nconst modal = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\r\nconst calc = __webpack_require__(/*! ./modules/calc */ \"./modules/calc.js\");\r\nconst checkInputs = __webpack_require__(/*! ./modules/checkInputs */ \"./modules/checkInputs.js\");\r\nconst tabs = __webpack_require__(/*! ./modules/tabs */ \"./modules/tabs.js\");\r\n// const forms = require('./modules/forms');\r\n\r\n// Вызов модулей:\r\ntimer('10 March 2026');\r\nmenu();\r\nmodal();\r\ncalc(100); // передаем базовую стоимость за кв. метр\r\ncheckInputs();\r\ntabs();\n\n//# sourceURL=webpack:///./index.js?\n}");

/***/ },

/***/ "./modules/calc.js"
/*!*************************!*\
  !*** ./modules/calc.js ***!
  \*************************/
(module) {

eval("{const calc = (price = 100) => {\r\n    const calcBlock = document.querySelector('.calc-block');\r\n    const calcType = document.querySelector('.calc-type');\r\n    const calcSquare = document.querySelector('.calc-square');\r\n    const calcCount = document.querySelector('.calc-count');\r\n    const calcDay = document.querySelector('.calc-day');\r\n    const totalValue = document.getElementById('total');\r\n\r\n    // Находим все инпуты калькулятора для фильтрации\r\n    const calcInputs = [calcSquare, calcCount, calcDay];\r\n\r\n    const countSum = () => {\r\n        let total = 0;\r\n        let countValue = 1;\r\n        let dayValue = 1;\r\n        const typeValue = calcType.value;\r\n        const squareValue = +calcSquare.value;\r\n\r\n        if (calcCount.value > 1) {\r\n            countValue += (calcCount.value - 1) / 10;\r\n        }\r\n\r\n        if (calcDay.value && calcDay.value < 10) {\r\n            dayValue += (10 - calcDay.value) / 10;\r\n        } else if (calcDay.value && calcDay.value > 10) {\r\n            dayValue -= (calcDay.value - 10) / 100;\r\n            if (dayValue < 0.5) dayValue = 0.5;\r\n        }\r\n\r\n        if (typeValue && squareValue) {\r\n            total = price * squareValue * +typeValue * countValue * dayValue;\r\n        }\r\n\r\n        totalValue.textContent = Math.round(total);\r\n    };\r\n\r\n    // Фильтрация и расчет при вводе в текстовые поля\r\n    calcInputs.forEach(input => {\r\n        input.addEventListener('input', () => {\r\n            // Удаляем всё, кроме цифр\r\n            input.value = input.value.replace(/\\D/g, '');\r\n            // И сразу вызываем пересчет суммы\r\n            countSum();\r\n        });\r\n    });\r\n\r\n    // Расчет при изменении типа объекта (select)\r\n    calcType.addEventListener('change', countSum);\r\n};\r\n\r\nmodule.exports = calc;\n\n//# sourceURL=webpack:///./modules/calc.js?\n}");

/***/ },

/***/ "./modules/checkInputs.js"
/*!********************************!*\
  !*** ./modules/checkInputs.js ***!
  \********************************/
(module) {

eval("{const checkInputs = () => {\r\n    // --- КОНСТАНТЫ РЕГУЛЯРНЫХ ВЫРАЖЕНИЙ ---\r\n    const regexCyrillic = /[^а-яё\\s\\-]/gi;          // Только кириллица, пробел, дефис\r\n    const regexPhone = /[^0-9\\(\\)\\-]/g;             // Цифры, скобки, дефис\r\n    const regexDigitsOnly = /\\D/g;                  // Всё, что НЕ цифра\r\n    const regexEmail = /[^a-z0-9@\\-\\_\\.\\!\\~\\*']/gi; // Латиница и спецсимволы почты\r\n    const regexMultiDash = /\\-+/g;                  // Повторяющиеся дефисы\r\n    const regexMultiSpace = /\\s+/g;                 // Повторяющиеся пробелы\r\n    const regexEdgeDashes = /^\\-+|\\-+$/g;           // Дефисы в начале и конце строки\r\n\r\n    const cyrillicInputs = document.querySelectorAll('.form-name, #form2-name, .mess');\r\n    const emailInputs = document.querySelectorAll('.form-email');\r\n    const phoneInputs = document.querySelectorAll('.form-phone');\r\n\r\n    // --- ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ ---\r\n    const formatText = (str) => {\r\n        let newStr = str.replace(regexCyrillic, '');\r\n        // Используем константы для чистки повторов и краев\r\n        newStr = newStr.replace(regexMultiDash, '-').replace(regexMultiSpace, ' ');\r\n        newStr = newStr.trim().replace(regexEdgeDashes, '');\r\n        \r\n        if (newStr) {\r\n            return newStr.split(' ').map(word => {\r\n                if (word.length > 0) {\r\n                    return word[0].toUpperCase() + word.substring(1).toLowerCase();\r\n                }\r\n                return word;\r\n            }).join(' ');\r\n        }\r\n        return newStr;\r\n    };\r\n\r\n    // --- ОБРАБОТКА СОБЫТИЙ ---\r\n    cyrillicInputs.forEach(input => {\r\n        input.addEventListener('input', () => {\r\n            input.value = input.value.replace(regexCyrillic, '');\r\n        });\r\n        input.addEventListener('blur', () => {\r\n            input.value = formatText(input.value);\r\n        });\r\n    });\r\n\r\n    phoneInputs.forEach(input => {\r\n        input.addEventListener('input', () => {\r\n            input.value = input.value.replace(regexPhone, '');\r\n        });\r\n        input.addEventListener('blur', () => {\r\n            // Используем константу для очистки до цифр\r\n            input.value = input.value.replace(regexDigitsOnly, '');\r\n            input.style.border = '';\r\n        });\r\n    });\r\n\r\n    emailInputs.forEach(input => {\r\n        input.addEventListener('input', () => {\r\n            input.value = input.value.replace(regexEmail, '');\r\n        });\r\n    });\r\n\r\n    // --- ЛОГИКА ОТПРАВКИ ФОРМ ---\r\n    const allForms = document.querySelectorAll('form[name=\"user_form\"]');\r\n    const popup = document.querySelector('.popup');\r\n\r\n    allForms.forEach(form => {\r\n        form.addEventListener('submit', (event) => {\r\n            event.preventDefault();\r\n            const phoneInput = form.querySelector('.form-phone');\r\n            \r\n            if (phoneInput) {\r\n                const cleanValue = phoneInput.value.replace(regexDigitsOnly, '');\r\n                \r\n                if (cleanValue.length !== 11) {\r\n                    alert('Номер телефона должен содержать ровно 11 цифр');\r\n                    phoneInput.style.border = '2px solid red';\r\n                    return; \r\n                }\r\n                phoneInput.value = cleanValue;\r\n            }\r\n\r\n            if (popup) {\r\n                popup.style.display = 'none';\r\n                popup.style.opacity = '0';\r\n            }\r\n\r\n            form.reset();\r\n            if (phoneInput) phoneInput.style.border = '';\r\n            console.log('Форма успешно отправлена');\r\n        });\r\n    });\r\n};\r\n\r\nmodule.exports = checkInputs;\n\n//# sourceURL=webpack:///./modules/checkInputs.js?\n}");

/***/ },

/***/ "./modules/menu.js"
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
(module) {

eval("{\r\nconst menu = () => {\r\n    const menuElement = document.querySelector('menu');\r\n    \r\n    // Функция переключения \r\n    const toggleMenu = () => menuElement.classList.toggle('active-menu');\r\n\r\n    // Функция плавного скролла\r\n    const smoothScroll = (e, link) => {\r\n        const targetId = link.getAttribute('href').substring(1);\r\n        const targetElement = document.getElementById(targetId);\r\n\r\n        if (targetElement) {\r\n            e.preventDefault();\r\n            targetElement.scrollIntoView({\r\n                behavior: 'smooth',\r\n                block: 'start'\r\n            });\r\n        }\r\n    };\r\n\r\n    // ЕДИНЫЙ ОБРАБОТЧИК для всего функционала меню\r\n    document.addEventListener('click', (event) => {\r\n        const target = event.target;\r\n\r\n        // Открытие меню\r\n        if (target.closest('.menu')) {\r\n            toggleMenu();\r\n        } \r\n        \r\n        // Закрытие и навигация \r\n        else if (menuElement.classList.contains('active-menu')) {\r\n            \r\n            // Клик по крестику ИЛИ по пункту меню\r\n            if (target.closest('.close-btn') || target.closest('ul li a')) {\r\n                if (target.closest('a')) {\r\n                    smoothScroll(event, target.closest('a'));\r\n                }\r\n                toggleMenu();\r\n            } \r\n            \r\n            // Клик \"мимо\" меню \r\n            else if (!target.closest('menu')) {\r\n                toggleMenu();\r\n            }\r\n        }\r\n        \r\n        // Отдельно ловим клик по \"мышке\" (scrollBtn) вне зависимости от состояния меню\r\n        else if (target.closest('main a[href^=\"#\"]')) {\r\n            smoothScroll(event, target.closest('a'));\r\n        }\r\n    });\r\n};\r\n\r\nmodule.exports = menu;\r\n\r\n\r\n/*\r\nconst menu = () => {\r\n  const menuBtn = document.querySelector('.menu');\r\n  const menuElement = document.querySelector('menu');\r\n  const closeBtn = menuElement.querySelector('.close-btn');\r\n  const menuItems = menuElement.querySelectorAll('ul li a');\r\n  \r\n  // Кнопка-мышка под формой\r\n  const scrollBtn = document.querySelector('main a[href^=\"#\"]');\r\n\r\n  const toggleMenu = () => menuElement.classList.toggle('active-menu');\r\n\r\n  const handleLinkClick = (e) => {\r\n    const targetId = e.currentTarget.getAttribute('href').substring(1);\r\n    const targetElement = document.getElementById(targetId);\r\n\r\n    if (targetElement) {\r\n      e.preventDefault();\r\n      \r\n      // Сначала закрываем меню\r\n      if (menuElement.classList.contains('active-menu')) {\r\n        toggleMenu();\r\n      }\r\n\r\n      // Плавно скроллим\r\n      targetElement.scrollIntoView({\r\n        behavior: 'smooth',\r\n        block: 'start'\r\n      });\r\n    }\r\n  };\r\n\r\n  menuBtn.addEventListener('click', toggleMenu);\r\n  closeBtn.addEventListener('click', (e) => {\r\n    e.preventDefault();\r\n    toggleMenu();\r\n  });\r\n\r\n  // Применяем ко всем ссылкам в меню и к кнопке-мышке\r\n  [...menuItems, scrollBtn].forEach(link => {\r\n    if (link) link.addEventListener('click', handleLinkClick);\r\n  });\r\n};\r\n\r\nmodule.exports = menu;\r\n*/\n\n//# sourceURL=webpack:///./modules/menu.js?\n}");

/***/ },

/***/ "./modules/modal.js"
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
(module) {

eval("{const modal = () => {\r\n  const modal = document.querySelector('.popup');\r\n  const buttons = document.querySelectorAll('.popup-btn');\r\n\r\n  buttons.forEach(btn => {\r\n    btn.addEventListener('click', () => {\r\n      modal.style.display = 'block';\r\n    })\r\n  });\r\n\r\n  modal.addEventListener('click', (e) => {\r\n    if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {\r\n      modal.style.display = 'none';\r\n    }    \r\n  });\r\n}\r\n\r\nmodule.exports = modal;\r\n\r\n\r\n/*\r\nconst modal = () => {\r\n  const modal = document.querySelector('.popup');\r\n  const buttons = document.querySelectorAll('.popup-btn');\r\n  const closeBtn = modal.querySelector('.popup-close');\r\n  const modalContent = modal.querySelector('.popup-content');\r\n\r\n  buttons.forEach(btn => {\r\n    btn.addEventListener('click', () => {\r\n      const width = window.innerWidth;\r\n\r\n      if (width < 768) {\r\n          // Мобильные устройства: мгновенный показ в центре\r\n          modal.style.display = 'block';\r\n          modal.style.opacity = 1;\r\n          modalContent.style.top = '50%';\r\n          modalContent.style.left = '50%';\r\n          modalContent.style.transform = 'translate(-50%, -50%)';\r\n      } else {\r\n          // Десктоп: JS анимация появления в центр\r\n          modal.style.display = 'block';\r\n          modal.style.opacity = 0;\r\n          \r\n          // Фиксируем базовое положение в центре экрана\r\n          modalContent.style.position = 'absolute';\r\n          modalContent.style.left = '50%';\r\n          // Начальное состояние: сильно выше центра и прозрачно\r\n          let currentTop = 30; // Проценты от высоты экрана\r\n          let opacity = 0;\r\n\r\n          const animate = () => {\r\n              currentTop += 1;   // Двигаемся вниз к 50%\r\n              opacity += 0.05;   // Увеличиваем видимость\r\n\r\n              // Применяем стили: центрируем по горизонтали и двигаем по вертикали\r\n              modalContent.style.top = currentTop + '%';\r\n              modalContent.style.transform = 'translate(-50%, -50%)';\r\n              modal.style.opacity = opacity;\r\n\r\n              // Анимируем, пока не достигнем 50% высоты\r\n              if (currentTop < 50) {\r\n                  requestAnimationFrame(animate);\r\n              } else {\r\n                  // Финальная фиксация в идеальном центре\r\n                  modalContent.style.top = '50%';\r\n                  modal.style.opacity = 1;\r\n              }\r\n          };\r\n\r\n          requestAnimationFrame(animate);\r\n      }\r\n    });\r\n  });\r\n\r\n  closeBtn.addEventListener('click', () => {\r\n      modal.style.display = 'none';\r\n  });\r\n}\r\n\r\nmodule.exports = modal;\r\n*/\n\n//# sourceURL=webpack:///./modules/modal.js?\n}");

/***/ },

/***/ "./modules/tabs.js"
/*!*************************!*\
  !*** ./modules/tabs.js ***!
  \*************************/
(module) {

eval("{const tabs = () => {\r\n  const tabPanel = document.querySelector('.service-header');\r\n  const tabs = document.querySelectorAll('.service-header-tab');\r\n  const tabContent = document.querySelectorAll('.service-tab');\r\n\r\n  tabPanel.addEventListener('click', (e) => { \r\n    if (e.target.closest('.service-header-tab')) {\r\n      const tabBtn = e.target.closest('.service-header-tab');\r\n      \r\n      tabs.forEach((tab, index) => {\r\n        if (tab === tabBtn) {\r\n          tab.classList.add('active')\r\n          tabContent[index].classList.remove('d-none')\r\n        } else {\r\n          tab.classList.remove('active')\r\n          tabContent[index].classList.add('d-none')\r\n        }\r\n      });\r\n    }\r\n  });\r\n}\r\n\r\nmodule.exports = tabs;\n\n//# sourceURL=webpack:///./modules/tabs.js?\n}");

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