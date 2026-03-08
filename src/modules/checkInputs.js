const checkInputs = () => {
    // --- КОНСТАНТЫ РЕГУЛЯРНЫХ ВЫРАЖЕНИЙ ---
    const regexCyrillic = /[^а-яё\s\-]/gi;          // Только кириллица, пробел, дефис
    const regexPhone = /[^0-9\(\)\-]/g;             // Цифры, скобки, дефис
    const regexDigitsOnly = /\D/g;                  // Всё, что НЕ цифра
    const regexEmail = /[^a-z0-9@\-\_\.\!\~\*']/gi; // Латиница и спецсимволы почты
    const regexMultiDash = /\-+/g;                  // Повторяющиеся дефисы
    const regexMultiSpace = /\s+/g;                 // Повторяющиеся пробелы
    const regexEdgeDashes = /^\-+|\-+$/g;           // Дефисы в начале и конце строки

    const cyrillicInputs = document.querySelectorAll('.form-name, #form2-name, .mess');
    const emailInputs = document.querySelectorAll('.form-email');
    const phoneInputs = document.querySelectorAll('.form-phone');

    // --- ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ ---
    const formatText = (str) => {
        let newStr = str.replace(regexCyrillic, '');
        // Используем константы для чистки повторов и краев
        newStr = newStr.replace(regexMultiDash, '-').replace(regexMultiSpace, ' ');
        newStr = newStr.trim().replace(regexEdgeDashes, '');
        
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

    // --- ОБРАБОТКА СОБЫТИЙ ---
    cyrillicInputs.forEach(input => {
        input.addEventListener('input', () => {
            input.value = input.value.replace(regexCyrillic, '');
        });
        input.addEventListener('blur', () => {
            input.value = formatText(input.value);
        });
    });

    phoneInputs.forEach(input => {
        input.addEventListener('input', () => {
            input.value = input.value.replace(regexPhone, '');
        });
        input.addEventListener('blur', () => {
            // Используем константу для очистки до цифр
            input.value = input.value.replace(regexDigitsOnly, '');
            input.style.border = '';
        });
    });

    emailInputs.forEach(input => {
        input.addEventListener('input', () => {
            input.value = input.value.replace(regexEmail, '');
        });
    });

    // --- ЛОГИКА ОТПРАВКИ ФОРМ ---
    const allForms = document.querySelectorAll('form[name="user_form"]');
    const popup = document.querySelector('.popup');

    allForms.forEach(form => {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const phoneInput = form.querySelector('.form-phone');
            
            if (phoneInput) {
                const cleanValue = phoneInput.value.replace(regexDigitsOnly, '');
                
                if (cleanValue.length !== 11) {
                    alert('Номер телефона должен содержать ровно 11 цифр');
                    phoneInput.style.border = '2px solid red';
                    return; 
                }
                phoneInput.value = cleanValue;
            }

            if (popup) {
                popup.style.display = 'none';
                popup.style.opacity = '0';
            }

            form.reset();
            if (phoneInput) phoneInput.style.border = '';
            console.log('Форма успешно отправлена');
        });
    });
};

module.exports = checkInputs;