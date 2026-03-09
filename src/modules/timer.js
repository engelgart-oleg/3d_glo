// Модульная функция:
// Таймер обратного отсчета:
const timer = (deadline) => {  
  const timerHours = document.getElementById('timer-hours');
  const timerMinutes = document.getElementById('timer-minutes');
  const timerSeconds = document.getElementById('timer-seconds');

  // Вспомогательная функция для добавления ведущего нуля (04:06:50)
  const formatValue = (value) => value < 10 ? `0${value}` : value;

  const getTimeRemaining = () => {
    let dateStop = new Date(deadline).getTime();
    let dateNow = new Date().getTime();
    
    // Рассчитываем разницу. Если дата прошла, используем 0.
    let timeRemaining = Math.max(0, (dateStop - dateNow) / 1000);

    let hours = Math.floor(timeRemaining / 60 / 60);
    let minutes = Math.floor((timeRemaining / 60) % 60);
    let seconds = Math.floor(timeRemaining % 60);

    return { timeRemaining, hours, minutes, seconds };
  }

  const updateClock = () => {
    let getTime = getTimeRemaining();

    // Подставляем значения с нулями
    timerHours.textContent = formatValue(getTime.hours);
    timerMinutes.textContent = formatValue(getTime.minutes);
    timerSeconds.textContent = formatValue(getTime.seconds);

    // Проверка для самоконтроля (пункт 1 задания)
    // console.log('Тик таймера');

    // Если время вышло, останавливаем интервал
    if (getTime.timeRemaining <= 0) {
      clearInterval(idInterval);
    }
  };

  // Запускаем интервал и сохраняем его ID
  const idInterval = setInterval(updateClock, 1000);

  updateClock()  
}

// Экспорт модульной функции:
module.exports = timer;




// let days = Math.floor(timeRemaining / 60 / 60 / 24);
// let hours = Math.floor((timeRemaining / 60 / 60) % 24);