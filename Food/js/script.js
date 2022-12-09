window.addEventListener('DOMContentLoaded', () => {
    const calc   = require('./modules/calc'),
          forms  = require('./modules/forms'),
          goods  = require('./modules/goods'),
          modal  = require('./modules/modal'),
          slider = require('./modules/slider'),
          tabs   = require('./modules/tabs'),
          timer  = require('./modules/timer');

    calc();
    forms();
    goods();
    modal();
    slider();
    tabs();
    timer();
});






