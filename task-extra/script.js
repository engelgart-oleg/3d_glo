const updateWidget = () => {
    const timeOfDayEl = document.getElementById('time-of-day');
    const todayEl = document.getElementById('today');
    const currentTimeEl = document.getElementById('current-time');
    const newYearEl = document.getElementById('new-year');
    const iconEl = document.getElementById('icon-time');
    const body = document.body;

    const now = new Date();
    const hours = now.getHours();

    // Приветствие и тема
    let greeting = '', icon = '', themeClass = '';
    if (hours >= 5 && hours < 12) { greeting = 'Доброе утро'; icon = '🌅'; themeClass = 'morning'; }
    else if (hours >= 12 && hours < 18) { greeting = 'Добрый день'; icon = '☀️'; themeClass = 'day'; }
    else if (hours >= 18 && hours < 24) { greeting = 'Добрый вечер'; icon = '🌙'; themeClass = 'evening'; }
    else { greeting = 'Доброй ночи'; icon = '🌌'; themeClass = 'night'; }

    body.className = themeClass;

    // Склонения для дней
    const declOfNum = (number, titles) => {
        const cases = [2, 0, 1, 1, 1, 2];
        return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
    };

    // Вывод "Сегодня: День недели"
    const weekDays = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    todayEl.textContent = `Сегодня: ${weekDays[now.getDay()]}`;

    // Вывод "Текущее время"
    const timeString = now.toLocaleTimeString('en-US'); // Формат AM/PM
    currentTimeEl.innerHTML = `Текущее время:<br><span class="highlight">${timeString}</span>`;

    // Вывод "До Нового года осталось"
    const getDaysToNewYear = () => {
        const nextYear = now.getFullYear() + 1;
        const newYearDate = new Date(`January 1, ${nextYear}`);
        const diff = newYearDate - now;
        const daysLeft = Math.floor(diff / (1000 * 60 * 60 * 24));
        const word = declOfNum(daysLeft, ['день', 'дня', 'дней']);
        
        return `До Нового года осталось:<br>${daysLeft} ${word}`;
    };

    timeOfDayEl.textContent = `${greeting}!`;
    iconEl.textContent = icon;
    newYearEl.innerHTML = getDaysToNewYear();
};

setInterval(updateWidget, 1000);
updateWidget();