const slider = ({
    mainSelector,
    slideSelector,
    dotsSelector,
    activeSlideClass = 'slide-active', // Значение по умолчанию
    activeDotClass = 'dot-active'      // Значение по умолчанию
}) => {
    const sliderBlock = document.querySelector(mainSelector);
    const slides = document.querySelectorAll(slideSelector);
    const dotsContainer = document.querySelector(dotsSelector);
    const timeInterval = 1000;

    // ПРОВЕРКА 1: Существует ли главный блок слайдера
    if (!sliderBlock) {
        console.warn(`Slider: Элемент "${mainSelector}" не найден. Модуль остановлен.`);
        return;
    }

    // ПРОВЕРКА 2: Существуют ли слайды
    if (slides.length === 0) {
        console.warn(`Slider: Слайды "${slideSelector}" не найдены. Модуль остановлен.`);
        return;
    }

    let currentSlide = 0;
    let interval;

    // Динамическая генерация точек
    const renderDots = () => {
        if (!dotsContainer) return; // Если контейнера для точек нет, просто не рисуем их
        dotsContainer.innerHTML = '';
        slides.forEach((_, index) => {
            const dot = document.createElement('li');
            dot.classList.add('dot');
            if (index === 0) dot.classList.add(activeDotClass);
            dotsContainer.append(dot);
        });
    };

    renderDots();

    const dots = document.querySelectorAll('.dot');

    const prevSlide = (elems, index, strClass) => {
        if (elems[index]) elems[index].classList.remove(strClass);
    };

    const nextSlide = (elems, index, strClass) => {
        if (elems[index]) elems[index].classList.add(strClass);
    };

    const autoSlide = () => {
        prevSlide(slides, currentSlide, activeSlideClass);
        prevSlide(dots, currentSlide, activeDotClass);
        
        currentSlide++;
        if (currentSlide >= slides.length) currentSlide = 0;

        nextSlide(slides, currentSlide, activeSlideClass);
        nextSlide(dots, currentSlide, activeDotClass);
    };

    const startSlide = (timer = 1500) => {
        interval = setInterval(autoSlide, timer);
    };

    const stopSlide = () => {
        clearInterval(interval);
    };

    // Делегирование событий на sliderBlock
    sliderBlock.addEventListener('click', (e) => {
        e.preventDefault();
        const target = e.target;

        if (!target.closest('.dot') && !target.closest('.portfolio-btn')) {
            return;
        }

        prevSlide(slides, currentSlide, activeSlideClass);
        prevSlide(dots, currentSlide, activeDotClass);
        
        if (target.closest('#arrow-right')) {
            currentSlide++;
        } else if (target.closest('#arrow-left')) {
            currentSlide--;
        } else if (target.closest('.dot')) {
            const dotArray = Array.from(dots);
            currentSlide = dotArray.indexOf(target.closest('.dot'));
        }

        if (currentSlide >= slides.length) currentSlide = 0;
        if (currentSlide < 0) currentSlide = slides.length - 1;

        nextSlide(slides, currentSlide, activeSlideClass);
        nextSlide(dots, currentSlide, activeDotClass);
    });

  sliderBlock.addEventListener('mouseenter', (e) => {
        const target = e.target;
        if (target.closest('.dot') || target.closest('.portfolio-btn')) {
            stopSlide();
        }
    }, true);

  sliderBlock.addEventListener('mouseleave', (e) => {
        const target = e.target;
        if (target.closest('.dot') || target.closest('.portfolio-btn')) {
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