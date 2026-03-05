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