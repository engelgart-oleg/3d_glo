// Модульная функция:
const menu = () => {
  const menuBtn = document.querySelector('.menu');
  const menu = document.querySelector('menu');
  const closeBtn = menu.querySelector('.close-btn');
  const menuItems = menu.querySelectorAll('ul>li>a');

  // Функция открытия/закрытия меню:
  const handleMenu = () => {
    menu.classList.toggle('active-menu');
  }  
  
  menuBtn.addEventListener('click', handleMenu); // кнопка бургер 
  closeBtn.addEventListener('click', handleMenu); // кнопка close в меню
  menuItems.forEach(menuItem => menuItem.addEventListener('click', handleMenu)); // Перебор коллекции ссылок в меню  
}

// Экспорт модульной функции:
module.exports = menu;