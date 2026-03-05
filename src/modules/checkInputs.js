const checkInputs = () => {
  const cyrillicInputs = document.querySelectorAll('.form-name, #form2-name, .mess');
  const emailInputs = document.querySelectorAll('.form-email');
  const phoneInputs = document.querySelectorAll('.form-phone');

  // ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ 
  const formatText = (str) => {
      let newStr = str.replace(/[^а-яё\s\-]/gi, '');
      newStr = newStr.replace(/\-+/g, '-').replace(/\s+/g, ' ');
      newStr = newStr.trim().replace(/^\-+|\-+$/g, '');
      
      if (newStr) {
          return newStr.split(' ').map(word => {
              if (word.length > 0) {
                  return word[0].toUpperCase() + word.substring(1).toLowerCase();
              }
              return word;
          }).join(' ');
      }
      return newStr;
  };

  // ОБРАБОТКА СОБЫТИЙ
  cyrillicInputs.forEach(input => {
      input.addEventListener('input', () => {
          input.value = input.value.replace(/[^а-яё\s\-]/gi, '');
      });
      input.addEventListener('blur', () => {
          input.value = formatText(input.value);
      });
  });

  phoneInputs.forEach(input => {
      input.addEventListener('input', () => {
          input.value = input.value.replace(/[^0-9\(\)\-]/g, '');
      });

      input.addEventListener('blur', () => {
          // При выходе из поля оставляем только цифры
          input.value = input.value.replace(/\D/g, '');
          input.style.border = '';
      });
  });

  emailInputs.forEach(input => {
      input.addEventListener('input', () => {
          input.value = input.value.replace(/[^a-z0-9@\-\_\.\!\~\*']/gi, '');
      });
  });


  // ЛОГИКА ОТПРАВКИ ФОРМ 
  const allForms = document.querySelectorAll('form[name="user_form"]');
  const popup = document.querySelector('.popup');

  allForms.forEach(form => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const phoneInput = form.querySelector('.form-phone');
      
      if (phoneInput) {
          // Извлекаем только цифры
          const cleanValue = phoneInput.value.replace(/\D/g, '');
          
          // СТРОГАЯ ПРОВЕРКА: должно быть ровно 11 цифр
          // (Для РФ: 8 или 7 + 10 цифр номера)
          if (cleanValue.length !== 11) {
              alert('Номер телефона должен содержать ровно 11 цифр (например, 89991234567)');
              phoneInput.style.border = '2px solid red';
              return; // Блокируем отправку
          }

          // Перезаписываем очищенное значение в поле перед отправкой
          phoneInput.value = cleanValue;
      }

      // Если валидация пройдена
      if (popup) {
          popup.style.display = 'none';
          popup.style.opacity = '0';
      }

      form.reset();
      if (phoneInput) phoneInput.style.border = '';
      console.log('Форма успешно отправлена: номер содержит ровно 11 цифр');
    });
  });
};

module.exports = checkInputs;