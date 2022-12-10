import     calc      from './modules/calc';
import     forms     from './modules/forms';
import     goods     from './modules/goods';
import     modal     from './modules/modal';
import     slider    from './modules/slider';
import     tabs      from './modules/tabs';
import     timer     from './modules/timer';
import { openModal } from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {
    const timeoutFormId = setTimeout(() => openModal('.modal', timeoutFormId), 50000);
    calc();
    forms('form', '.modal', timeoutFormId);
    goods();
    modal('[data-modal]', '.modal', timeoutFormId);
    slider({
        container: '.offer__slider',
        slide: '.offer__slide',
        nextArrow: '.offer__slider-next',
        prewArrow: '.offer__slider-prev',
        countContainer: '.offer__slider-counter',
        slidesContainer: '.offer__slider-wrapper'
    });
    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    timer('2023-01-20', '.timer');
});






