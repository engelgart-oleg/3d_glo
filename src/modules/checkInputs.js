const checkInputs = () => {
  // ЛОГИКА ВАЛИДАЦИИ (ФИЛЬТРАЦИЯ ВВОДА)
  
  const cyrillicInputs = document.querySelectorAll('.form-name, #form2-name, .mess');
  const emailInputs = document.querySelectorAll('.form-email');
  const phoneInputs = document.querySelectorAll('.form-phone');
  const calcInputs = document.querySelectorAll('.calc-square, .calc-count, .calc-day');

  const applyFilter = (elements, regex) => {
      elements.forEach(input => {
          input.addEventListener('input', () => {
              input.value = input.value.replace(regex, '');
          });
      });
  };

  // Применяем фильтры
  applyFilter(cyrillicInputs, /[^а-яё\s\-]/gi);
  applyFilter(emailInputs, /[^a-z0-9@\-\_\.\!\~\*']/gi);
  applyFilter(phoneInputs, /[^0-9\(\)\-]/g);
  applyFilter(calcInputs, /\D/g);


  // ЛОГИКА ОТПРАВКИ ФОРМ

  const allForms = document.querySelectorAll('form[name="user_form"]');
  const popup = document.querySelector('.popup');

  allForms.forEach(form => {
      form.addEventListener('submit', (event) => {
          // Отменяем стандартную отправку и перезагрузку страницы
          event.preventDefault();

          // Если есть открытое модальное окно — закрываем его
          if (popup) {
              popup.style.display = 'none';
          }

          // Очищаем все поля формы после "отправки"
          form.reset();

          // console.log('Данные проверены и отправлены без перезагрузки');
      });
  });
};

module.exports = checkInputs;