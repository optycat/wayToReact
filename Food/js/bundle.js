/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/calc.js":
/*!****************************!*\
  !*** ./js/modules/calc.js ***!
  \****************************/
/***/ ((module) => {

function calc() {
    const calcResult = document.querySelector(".calculating__result>span");
    let sex, height, weight, age, ratio;

    sex = localStorage.getItem('sex') ? localStorage.getItem('sex')
        : 'female';
    ratio = localStorage.getItem('ratio') ? localStorage.getItem('ratio')
        : 1.375;

    const initLocalSettings = (selector, activeClass) => {
        const array = document.querySelectorAll(selector);

        array.forEach(item => {
            item.classList.remove(activeClass);
            if (item.getAttribute('id') === localStorage.getItem('sex')) {
                item.classList.add(activeClass);
            }
            if (item.getAttribute('data-ratio') === localStorage.getItem('ratio')) {
                item.classList.add(activeClass);
            }
        });
    };

    const calcTotal = () => {
        if (!sex || !height || !weight || !age || !ratio) {
            calcResult.textContent = '____';
            return;
        }
        if (sex === 'female') {
            calcResult.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
        } else {
            calcResult.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
        }

    };

    const getStaticInfo = (selector, activeClass) => {
        const elements = document.querySelectorAll(selector);

        elements.forEach(elem => {
            elem.addEventListener('click', (e) => {
                if (e.target.getAttribute('data-ratio')) {
                    ratio = +e.target.getAttribute('data-ratio');
                    localStorage.setItem('ratio', +e.target.getAttribute('data-ratio'));
                } else {
                    sex = e.target.getAttribute('id');
                    localStorage.setItem('sex', e.target.getAttribute('id'));
                }

                elements.forEach(elem => {
                    elem.classList.remove(activeClass);
                });

                e.target.classList.add(activeClass);

                calcTotal();
            });
        });
    };

    const getDinamicInfo = (selector) => {
        const input = document.querySelector(selector);

        input.addEventListener('input', () => {

            if (input.value.match(/\D/g)) {
                input.style.border = '1px solid red';
            } else {
                input.style.border = 'none';
            }

            switch (input.getAttribute('id')) {
                case 'height':
                    height = +input.value;
                    break;
                case 'weight':
                    weight = +input.value;
                    break;
                case 'age':
                    age = +input.value;
                    break;
            }

            calcTotal();
        });
    };

    initLocalSettings('#gender div', 'calculating__choose-item_active');
    initLocalSettings('.calculating__choose_big div', 'calculating__choose-item_active');

    calcTotal();

    getStaticInfo('#gender div', 'calculating__choose-item_active');
    getStaticInfo('.calculating__choose_big div', 'calculating__choose-item_active');

    getDinamicInfo('#height');
    getDinamicInfo('#weight');
    getDinamicInfo('#age');

}
module.exports = calc;

/***/ }),

/***/ "./js/modules/forms.js":
/*!*****************************!*\
  !*** ./js/modules/forms.js ***!
  \*****************************/
/***/ ((module) => {

function forms() {
        // Forms _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _

        const forms = document.querySelectorAll('form');

        const message = {
            loading: 'img/form/spinner.svg',
            sucsess: 'Thnk! We contact with u soon.',
            failure: 'Smth goes wrong'
        };
    
        forms.forEach(i => bindPostData(i));
    
        const postData = async (url, data) => {
            const result = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: data
            });
    
            return await result.json();
        };
    
        function bindPostData(form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
    
                const statusMassage = document.createElement('img');
                statusMassage.src = message.loading;
                statusMassage.style.cssText = `
                    display: block;
                    margin: 0 auto;
                `;
                form.parentElement.appendChild(statusMassage);
    
                const formData = new FormData(form);
    
                const json = JSON.stringify(Object.fromEntries(formData.entries()));
    
                postData('http://localhost:3000/requests', json)
                  .then(data => {
                    console.log(data);
                    showTHNKModal(message.sucsess);
                    statusMassage.remove();
                }).catch(() => showTHNKModal(message.failure))
                  .finally(() => form.reset());
            });
        }
    
        function showTHNKModal(message) {
            const previosModal = document.querySelector('.modal__dialog');
    
            previosModal.classList.add('hide');
    
            openModal();
    
            const thnkModal = document.createElement('div');
            thnkModal.classList.add('modal__dialog');
            thnkModal.innerHTML = `
                <div class="modal__content">
                    <div data-close class="modal__close">&times;</div>
                    <div class="modal__title">${message}</div>
                </div>
            `;
            document.querySelector('.modal').append(thnkModal);
            previosModal.parentElement.classList.add('show');
    
            setTimeout(() => {
                thnkModal.remove();
                previosModal.classList.remove('hide');
                closeModal();
            }, 4000);
        }
        fetch('http://localhost:3000/menu')
            .then(data => data.json())
            .then(res => console.log(res));
    
}
module.exports = forms;

/***/ }),

/***/ "./js/modules/goods.js":
/*!*****************************!*\
  !*** ./js/modules/goods.js ***!
  \*****************************/
/***/ ((module) => {

function goods() {
    // Goods _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _

    class GoodsCard {
        constructor(imgLink, alt, title, description, price, parentSelector, ...classes) {
            this.parent = document.querySelector(parentSelector);
            this.imgLink = imgLink;
            this.alt = alt;
            this.title = title;
            this.classes = classes;
            this.description = description;
            this.price = price;
            this.transfer = 29;
            this.changeCurrency();
        }

        render() {
            const element = document.createElement('div');

            if (this.classes.length === 0) {
                this.element = 'menu__item';
                element.classList.add('menu__item');
            } else {
                this.classes.forEach(className => element.classList.add(className));
            }
            element.innerHTML = `
                <img src="${this.imgLink}" alt="${this.alt}">
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.description}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>
            `;
            this.parent.append(element);
        }

        changeCurrency() {
            this.prise = +this.prise * this.transfer;
        }
    }

    
    const getResouses = async (url) => {
        const result = await fetch(url);

        if (!result.ok) {
            throw new Error(`Could not fetch ${url}, status: ${result.status}`);
        }

        return await result.json();
    };
    
    getResouses('http://localhost:3000/menu')
        .then(response => {
            response.forEach(({img, altimg, title, descr, price}) => {
                new GoodsCard(img, altimg, title, descr, price, '[data-goods]').render();
            });
        });

}
module.exports = goods;

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((module) => {

function modal() {
    // Modal _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _

    const modalTriggerBtns = document.querySelectorAll('[data-modal]'),
        modalForm = document.querySelector('.modal'),
        d = document.documentElement,
        closeModal = () => {
            modalForm.classList.toggle('show');
            document.body.style.overflow = '';
        },
        openModal = () => {
            modalForm.classList.toggle('show');
            document.body.style.overflow = 'hidden';
            clearInterval(timeoutFormId);
        },
        timeoutFormId = setTimeout(openModal, 50000);

    modalTriggerBtns.forEach((item) => {
        item.addEventListener('click', openModal);
    });

    modalForm.addEventListener('click', (e) => {
        if (e.target === modalForm || e.target.getAttribute('data-close') == '') {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modalForm.classList.contains('show')) {
            closeModal();
        }
    });


    function showModalByScroll() {
        if (window.pageYOffset + d.clientHeight >= d.scrollHeight) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll);

}
module.exports = modal;

/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/***/ ((module) => {

function slider() {
    // Slider _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 

    const slides = document.querySelectorAll('.offer__slide'),
        slider = document.querySelector('.offer__slider'),
        next = document.querySelector('.offer__slider-next'),
        prev = document.querySelector('.offer__slider-prev'),
        totalSlides = document.querySelector('#total'),
        current = document.querySelector('#current'),
        slidesWrapper = document.querySelector('.offer__slider-wrapper'),
        slidesField = document.querySelector('.offer__slider-inner'),
        width = window.getComputedStyle(slidesWrapper).width;

    let slideIndex = 1,
        offset = 0;

    const placeZero = (a) => a > 10 ? a : `0${a}`;
    const laeveJustNumbers = (b, multiplier = -1) => multiplier <= -1 ? +b.replace(/\D/g, '') : +b.replace(/\D/g, '') * multiplier;

    totalSlides.textContent = placeZero(slides.length);
    current.textContent = placeZero(slideIndex);

    slidesField.style.cssText = `width: ${100 * slides.length}%;
                       display: flex;
                       transition: 0.5s all;`;
    slidesWrapper.style.overflow = 'hidden';
    slider.style.position = 'relative';

    const paginationDots = document.createElement('ol'),
        dots = [];


    paginationDots.classList.add('carousel-indicators');
    paginationDots.style.cssText = `
position: absolute;
right: 0;
bottom: 0;
left: 0;
z-index: 15;
display: flex;
justify-content: center;
margin-right: 15%;
margin-left: 15%;
list-style: none;
`;

    slider.append(paginationDots);

    slides.forEach((slide, i) => {
        slide.style.width = width;
        const dot = document.createElement('li');
        dot.classList.add('dot');
        dot.style.cssText = `
  box-sizing: content-box;
  flex: 0 1 auto;
  width: 30px;
  height: 6px;
  margin-right: 3px;
  margin-left: 3px;
  cursor: pointer;
  background-color: #fff;
  background-clip: padding-box;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  opacity: .5;
  transition: opacity .6s ease;
`;
        dot.setAttribute('data-slide-to', i + 1);
        if (i == 0) {
            dot.style.opacity = 1;
        }
        paginationDots.append(dot);
        dots.push(dot);
    });

    const repaintSlide = (r = laeveJustNumbers(width, slideIndex - 1)) => {
        slidesField.style.transform = `translateX(-${r}px)`;
        dots.forEach(dot => dot.style.opacity = 0.5);
        dots[slideIndex - 1].style.opacity = 1;
        current.textContent = placeZero(slideIndex);
    };

    next.addEventListener('click', () => {
        if (offset == laeveJustNumbers(width, slides.length - 1)) {
            offset = 0;
            slideIndex = 1;
        } else {
            offset += laeveJustNumbers(width);
            slideIndex += 1;
        }

        repaintSlide(offset);
    });

    prev.addEventListener('click', () => {
        if (!offset) {
            offset = laeveJustNumbers(width, slides.length - 1);
            slideIndex = slides.length;
        } else {
            offset -= laeveJustNumbers(width);
            slideIndex -= 1;
        }

        repaintSlide(offset);
    });

    paginationDots.addEventListener('click', (e) => {
        if (e.target.classList.contains('dot')) {

            slideIndex = e.target.getAttribute('data-slide-to');

            repaintSlide();
        }
    });

}
module.exports = slider;

/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/***/ ((module) => {

function tabs() {
    // Tabs _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 

    const tabs = document.querySelectorAll('.tabheader__item'),
        tabContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent() {
        tabContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i = 0) {
        tabContent[i].classList.add('show', 'fade');
        tabContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (e) => {
        const target = e.target;

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, index) => {
                if (target === item) {
                    hideTabContent();
                    showTabContent(index);
                }
            });
        }
    });
}

module.exports = tabs;

/***/ }),

/***/ "./js/modules/timer.js":
/*!*****************************!*\
  !*** ./js/modules/timer.js ***!
  \*****************************/
/***/ ((module) => {

function timer() {
    // Timer _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _

    const deadline = '2023-01-20';

    const getTimeRemaining = (endTime) => {
        let days, hours, minutes, seconds;
        const t = Date.parse(endTime) - Date.parse(new Date());

        if (t <= 0) {
            days = 0;
            hours = 0;
            minutes = 0;
            seconds = 0;
        } else {
            days = Math.floor(t / (1000 * 60 * 60 * 24)),
                hours = Math.floor((t / (1000 * 60 * 60)) % 24),
                minutes = Math.floor((t / 1000 / 60) % 60),
                seconds = Math.floor((t / 1000) % 60);
        }

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    };

    const getZero = (num) => {
        return num < 10 ? `0${num}` : num;
    };

    const setClock = (selector, endTime) => {
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endTime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    };

    setClock('.timer', deadline);

}
module.exports = timer;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
window.addEventListener('DOMContentLoaded', () => {
    const calc   = __webpack_require__(/*! ./modules/calc */ "./js/modules/calc.js"),
          forms  = __webpack_require__(/*! ./modules/forms */ "./js/modules/forms.js"),
          goods  = __webpack_require__(/*! ./modules/goods */ "./js/modules/goods.js"),
          modal  = __webpack_require__(/*! ./modules/modal */ "./js/modules/modal.js"),
          slider = __webpack_require__(/*! ./modules/slider */ "./js/modules/slider.js"),
          tabs   = __webpack_require__(/*! ./modules/tabs */ "./js/modules/tabs.js"),
          timer  = __webpack_require__(/*! ./modules/timer */ "./js/modules/timer.js");

    calc();
    forms();
    goods();
    modal();
    slider();
    tabs();
    timer();
});







})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map