import {initChampionSlider} from './modules/init-champion-slider.js';
import {swiperMode} from './modules/init-stage-slider.js';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initChampionSlider();
    swiperMode();
  });

  window.addEventListener('resize', () => {
    swiperMode();
  });
});

// ---------------------------------
