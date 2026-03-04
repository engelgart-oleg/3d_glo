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