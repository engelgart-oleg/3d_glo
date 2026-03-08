
const menu = () => {
    const menuElement = document.querySelector('menu');
    // Кнопка-мышка под формой (остается для плавного скролла)
    const scrollBtn = document.querySelector('main a[href^="#"]');

    const toggleMenu = () => menuElement.classList.toggle('active-menu');

    // Вспомогательная функция для плавного скролла
    const smoothScroll = (e, link) => {
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            e.preventDefault();
            
            // Если меню открыто — закрываем
            if (menuElement.classList.contains('active-menu')) {
                toggleMenu();
            }

            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    // ОБРАБОТЧИК №1: Делегирование внутри самого меню (ссылки и крестик)
    menuElement.addEventListener('click', (e) => {
        const target = e.target;

        // Если кликнули по крестику (или иконке внутри него)
        if (target.closest('.close-btn')) {
            e.preventDefault();
            toggleMenu();
        } 
        // Если кликнули по ссылке в списке меню
        else if (target.closest('ul li a')) {
            smoothScroll(e, target.closest('a'));
        }
    });

    // ОБРАБОТЧИК №2: Кнопка-бургер и кнопка-мышка (через делегирование на документ или родитель)
    // Мы вешаем на document, чтобы "поймать" клик по бургеру в любом месте верстки
    document.addEventListener('click', (e) => {
        const target = e.target;

        // 1. Ловим клик по бургеру (menuBtn)
        if (target.closest('.menu')) {
            toggleMenu();
        }
        
        // 2. Ловим клик по кнопке-мышке (scrollBtn)
        if (target.closest('main a[href^="#"]')) {
            smoothScroll(e, target.closest('a'));
        }
    });
};

module.exports = menu;























/*
const menu = () => {
  const menuBtn = document.querySelector('.menu');
  const menuElement = document.querySelector('menu');
  const closeBtn = menuElement.querySelector('.close-btn');
  const menuItems = menuElement.querySelectorAll('ul li a');
  
  // Кнопка-мышка под формой
  const scrollBtn = document.querySelector('main a[href^="#"]');

  const toggleMenu = () => menuElement.classList.toggle('active-menu');

  const handleLinkClick = (e) => {
    const targetId = e.currentTarget.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      e.preventDefault();
      
      // Сначала закрываем меню
      if (menuElement.classList.contains('active-menu')) {
        toggleMenu();
      }

      // Плавно скроллим
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  menuBtn.addEventListener('click', toggleMenu);
  closeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    toggleMenu();
  });

  // Применяем ко всем ссылкам в меню и к кнопке-мышке
  [...menuItems, scrollBtn].forEach(link => {
    if (link) link.addEventListener('click', handleLinkClick);
  });
};

module.exports = menu;
*/