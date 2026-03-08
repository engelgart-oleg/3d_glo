const modal = () => {
  const modal = document.querySelector('.popup');
  const buttons = document.querySelectorAll('.popup-btn');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      modal.style.display = 'block';
    })
  });

  modal.addEventListener('click', (e) => {
    if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
      modal.style.display = 'none';
    }    
  });
}

module.exports = modal;


/*
const modal = () => {
  const modal = document.querySelector('.popup');
  const buttons = document.querySelectorAll('.popup-btn');
  const closeBtn = modal.querySelector('.popup-close');
  const modalContent = modal.querySelector('.popup-content');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const width = window.innerWidth;

      if (width < 768) {
          // Мобильные устройства: мгновенный показ в центре
          modal.style.display = 'block';
          modal.style.opacity = 1;
          modalContent.style.top = '50%';
          modalContent.style.left = '50%';
          modalContent.style.transform = 'translate(-50%, -50%)';
      } else {
          // Десктоп: JS анимация появления в центр
          modal.style.display = 'block';
          modal.style.opacity = 0;
          
          // Фиксируем базовое положение в центре экрана
          modalContent.style.position = 'absolute';
          modalContent.style.left = '50%';
          // Начальное состояние: сильно выше центра и прозрачно
          let currentTop = 30; // Проценты от высоты экрана
          let opacity = 0;

          const animate = () => {
              currentTop += 1;   // Двигаемся вниз к 50%
              opacity += 0.05;   // Увеличиваем видимость

              // Применяем стили: центрируем по горизонтали и двигаем по вертикали
              modalContent.style.top = currentTop + '%';
              modalContent.style.transform = 'translate(-50%, -50%)';
              modal.style.opacity = opacity;

              // Анимируем, пока не достигнем 50% высоты
              if (currentTop < 50) {
                  requestAnimationFrame(animate);
              } else {
                  // Финальная фиксация в идеальном центре
                  modalContent.style.top = '50%';
                  modal.style.opacity = 1;
              }
          };

          requestAnimationFrame(animate);
      }
    });
  });

  closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
  });
}

module.exports = modal;
*/