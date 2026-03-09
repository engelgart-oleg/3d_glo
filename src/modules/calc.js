

// переписали калькулятор по уроку 24 / с добавлением фильтрации ввода и анимации цифр общей стоимости
const calc = (price = 100) => {
  const calcBlock = document.querySelector('.calc-block');
  const calcType = document.querySelector('.calc-type');
  const calcSquare = document.querySelector('.calc-square');
  const calcCount = document.querySelector('.calc-count');
  const calcDay = document.querySelector('.calc-day');
  const totalValue = document.getElementById('total');

  // Функция анимации, которая умеет считать в обе стороны
  const animateValue = (start, end, duration) => {
    let startTimestamp = null;
    
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Рассчитываем текущее значение: оно пойдет вверх, если end > start, 
      // и вниз, если end < start.
      const current = Math.floor(progress * (end - start) + start);
      
      totalValue.textContent = current;

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  const countCalc = () => {
    const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
    const calcSquareValue = calcSquare.value;

    let totalValueResult = 0;
    let calcCountValue = 1;
    let calcDayValue = 1;

    if (calcCount.value > 1) {
        calcCountValue += +calcCount.value / 10;     
    }

    if (calcDay.value && calcDay.value < 5) {
        calcDayValue = 2;
    } else if (calcDay.value && calcDay.value < 10) {
        calcDayValue = 1.5;
    }

    if (calcType.value && calcSquare.value) {
        totalValueResult = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;
    } else {
        totalValueResult = 0;
    }
    
    // Получаем то, что сейчас написано на экране
    const startValue = parseInt(totalValue.textContent) || 0;
    const endValue = Math.round(totalValueResult);

    // Если значения разные — запускаем «бег» цифр
    if (startValue !== endValue) {
        animateValue(startValue, endValue, 500);
    }
  }
  
  calcBlock.addEventListener('input', (e) => {
    if (e.target === calcSquare || e.target === calcCount || e.target === calcDay) {
        e.target.value = e.target.value.replace(/\D/g, '');
    }
    
    if (e.target === calcType || e.target === calcSquare ||
        e.target === calcCount || e.target === calcDay) {
        countCalc();
    }
  });
};

module.exports = calc;


/*
// Переписанный калькулятор по уроку 24 с добавлением фильтрации ввода
const calc = (price = 100) => {
    const calcBlock = document.querySelector('.calc-block');
    const calcType = document.querySelector('.calc-type');
    const calcSquare = document.querySelector('.calc-square');
    const calcCount = document.querySelector('.calc-count');
    const calcDay = document.querySelector('.calc-day');
    const totalValue = document.getElementById('total');

    const countCalc = () => {
        const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
        const calcSquareValue = +calcSquare.value;

        let totalValueResult = 0; // Временная переменная для расчета
        let calcCountValue = 1;
        let calcDayValue = 1;

        // Логика из таблицы: каждое помещение > 1 дает +10% 
        if (calcCount.value > 1) {
            calcCountValue += +calcCount.value / 10;     
        }

        // Логика сроков из таблицы
        if (calcDay.value && calcDay.value < 5) {
            calcDayValue = 2;
        } else if (calcDay.value && calcDay.value < 10) {
            calcDayValue = 1.5;
        }

        // Формула: Цена * Тип * Площадь * Помещения * Срок
        if (calcTypeValue && calcSquareValue) {
            totalValueResult = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;
        } else {
            totalValueResult = 0;
        }
        
        // Выводим результат в span с id="total"
        total.textContent = Math.round(totalValueResult);
    };

    // Единый обработчик для фильтрации и расчета
    calcBlock.addEventListener('input', (e) => {
        // Если ввод происходит в числовые поля — удаляем всё, кроме цифр
        if (e.target === calcSquare || e.target === calcCount || e.target === calcDay) {
            e.target.value = e.target.value.replace(/\D/g, '');
        }

        // При любом изменении в блоке калькулятора вызываем расчет
        if (e.target.matches('select, input')) {
            countCalc();
        }
    });
};

module.exports = calc;
*/





/*
const calc = (price = 100) => {
    const calcBlock = document.querySelector('.calc-block');
    const calcType = document.querySelector('.calc-type');
    const calcSquare = document.querySelector('.calc-square');
    const calcCount = document.querySelector('.calc-count');
    const calcDay = document.querySelector('.calc-day');
    const totalValue = document.getElementById('total');

    // Находим все инпуты калькулятора для фильтрации
    const calcInputs = [calcSquare, calcCount, calcDay];

    const countSum = () => {
        let total = 0;
        let countValue = 1;
        let dayValue = 1;
        const typeValue = calcType.value;
        const squareValue = +calcSquare.value;

        if (calcCount.value > 1) {
            countValue += (calcCount.value - 1) / 10;
        }

        if (calcDay.value && calcDay.value < 10) {
            dayValue += (10 - calcDay.value) / 10;
        } else if (calcDay.value && calcDay.value > 10) {
            dayValue -= (calcDay.value - 10) / 100;
            if (dayValue < 0.5) dayValue = 0.5;
        }

        if (typeValue && squareValue) {
            total = price * squareValue * +typeValue * countValue * dayValue;
        }

        totalValue.textContent = Math.round(total);
    };

    // Фильтрация и расчет при вводе в текстовые поля
    calcInputs.forEach(input => {
        input.addEventListener('input', () => {
            // Удаляем всё, кроме цифр
            input.value = input.value.replace(/\D/g, '');
            // И сразу вызываем пересчет суммы
            countSum();
        });
    });

    // Расчет при изменении типа объекта (select)
    calcType.addEventListener('change', countSum);
};

module.exports = calc;
*/