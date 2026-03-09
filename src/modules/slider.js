

const slider = () => {  
    const sliderBlock = document.querySelector('.portfolio-content');
    const slides = document.querySelectorAll('.portfolio-item');
    const dotsContainer = document.querySelector('.portfolio-dots');
    const timeInterval = 2000;

    let currentSlide = 0;
    let interval;

    // 1. Динамическая генерация точек
    const renderDots = () => {
        dotsContainer.innerHTML = ''; // Очищаем на всякий случай
        slides.forEach((slide, index) => {
            const dot = document.createElement('li');
            dot.classList.add('dot');
            if (index === 0) dot.classList.add('dot-active');
            dotsContainer.append(dot);
        });
    };

    renderDots();

    // Переопределяем dots ПОСЛЕ рендера
    const dots = document.querySelectorAll('.dot');

    const prevSlide = (elems, index, strClass) => {
        if (elems[index]) elems[index].classList.remove(strClass);
    };

    const nextSlide = (elems, index, strClass) => {
        if (elems[index]) elems[index].classList.add(strClass);
    };

    const autoSlide = () => {
        prevSlide(slides, currentSlide, 'portfolio-item-active');
        prevSlide(dots, currentSlide, 'dot-active');
        
        currentSlide++;
        if (currentSlide >= slides.length) currentSlide = 0;

        nextSlide(slides, currentSlide, 'portfolio-item-active');
        nextSlide(dots, currentSlide, 'dot-active');
    };

    const startSlide = (timer = 1500) => {
        interval = setInterval(autoSlide, timer);
    };

    const stopSlide = () => {
        clearInterval(interval);
    };

    // ГЛАВНЫЙ ОБРАБОТЧИК КЛИКА
    sliderBlock.addEventListener('click', (e) => {
        e.preventDefault();
        const target = e.target;

        // Если кликнули не по кнопке и не по точке — выходим
        if (!target.closest('.dot') && !target.closest('.portfolio-btn')) {
            return;     
        }

        // Скрываем текущий слайд
        prevSlide(slides, currentSlide, 'portfolio-item-active');
        prevSlide(dots, currentSlide, 'dot-active');
        
        // Логика определения индекса
        if (target.closest('#arrow-right')) {
            currentSlide++;      
        } else if (target.closest('#arrow-left')) {
            currentSlide--;  
        } else if (target.closest('.dot')) {
            // Вариант без forEach: находим индекс точки в массиве
            const dotArray = Array.from(dots);
            currentSlide = dotArray.indexOf(target.closest('.dot'));
        }

        // Зацикливание
        if (currentSlide >= slides.length) currentSlide = 0;
        if (currentSlide < 0) currentSlide = slides.length - 1;

        // Показываем новый слайд
        nextSlide(slides, currentSlide, 'portfolio-item-active');
        nextSlide(dots, currentSlide, 'dot-active');
    });

    // Остановка/запуск при наведении
    sliderBlock.addEventListener('mouseenter', (e) => {
        if (e.target.closest('.dot') || e.target.closest('.portfolio-btn')) {
            stopSlide();    
        }
    }, true);

    sliderBlock.addEventListener('mouseleave', (e) => {
        if (e.target.closest('.dot') || e.target.closest('.portfolio-btn')) {  
            startSlide(timeInterval);
        }
    }, true);
    
    startSlide(timeInterval);
};

module.exports = slider;






/*
const slider = () => {  
  const sliderBlock = document.querySelector('.portfolio-content');
  const slides = document.querySelectorAll('.portfolio-item');
  const dots = document.querySelectorAll('.dot');
  const timeInterval = 2000;

  let currentSlide = 0;
  let interval;

  const prevSlide = (elems, index, strClass) => {
    elems[index].classList.remove(strClass);
  }

  const nextSlide = (elems, index, strClass) => {
    elems[index].classList.add(strClass);
  }

  const autoSlide = () => {
    prevSlide(slides, currentSlide, 'portfolio-item-active');
    prevSlide(dots, currentSlide, 'dot-active');
    currentSlide++

    if (currentSlide >= slides.length) {
      currentSlide = 0
    }

    nextSlide(slides, currentSlide, 'portfolio-item-active');
    nextSlide(dots, currentSlide, 'dot-active');
  }

  const startSlide = (timer = 1500) => {
    interval = setInterval(autoSlide, timer);
  }

  const stopSlide = () => {
    clearInterval(interval);
  }

  sliderBlock.addEventListener('click', (e) => {
    e.preventDefault();

    if (!e.target.matches('.dot, .portfolio-btn')) {
      return     
    }

    prevSlide(slides, currentSlide, 'portfolio-item-active');
    prevSlide(dots, currentSlide, 'dot-active');
    
    if (e.target.matches('#arrow-right')) {
      currentSlide++      
    } else if (e.target.matches('#arrow-left')) {
      currentSlide--  
    } else if (e.target.classList.contains('dot')) {
      dots.forEach((dot, index) => {
        if (e.target === dot) {
          currentSlide = index
        }
      }); 
    }

    if (currentSlide >= slides.length) {
      currentSlide = 0
    }

    if (currentSlide < 0) {
      currentSlide = slides.length - 1
    }

    nextSlide(slides, currentSlide, 'portfolio-item-active');
    nextSlide(dots, currentSlide, 'dot-active');
    
  });

  sliderBlock.addEventListener('mouseenter', (e) => {
    if (e.target.matches('.dot, .portfolio-btn')) {
      stopSlide();    
    }
  }, true);

  sliderBlock.addEventListener('mouseleave', (e) => {
    if (e.target.matches('.dot, .portfolio-btn')) {  
      startSlide(timeInterval);
    }
  }, true);
  
  startSlide(timeInterval);

}

module.exports = slider;
*/