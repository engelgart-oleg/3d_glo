
const menu = () => {
    const menuElement = document.querySelector('menu');
    
    // Функция переключения 
    const toggleMenu = () => menuElement.classList.toggle('active-menu');

    // Функция плавного скролла
    const smoothScroll = (e, link) => {
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            e.preventDefault();
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    // ЕДИНЫЙ ОБРАБОТЧИК для всего функционала меню
    document.addEventListener('click', (event) => {
        const target = event.target;

        // Открытие меню
        if (target.closest('.menu')) {
            toggleMenu();
        } 
        
        // Закрытие и навигация 
        else if (menuElement.classList.contains('active-menu')) {
            
            // Клик по крестику ИЛИ по пункту меню
            if (target.closest('.close-btn') || target.closest('ul li a')) {
                if (target.closest('a')) {
                    smoothScroll(event, target.closest('a'));
                }
                toggleMenu();
            } 
            
            // Клик "мимо" меню 
            else if (!target.closest('menu')) {
                toggleMenu();
            }
        }
        
        // Отдельно ловим клик по "мышке" (scrollBtn) вне зависимости от состояния меню
        else if (target.closest('main a[href^="#"]')) {
            smoothScroll(event, target.closest('a'));
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