window.addEventListener('DOMContentLoaded', () => {

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


    /*axios.get('http://localhost:3000/menu')
        .then(response => {
            response.data.forEach(({img, altimg, title, descr, price}) => {
                new GoodsCard(img, altimg, title, descr, price, '[data-goods]').render();
            });
        });*/

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

    // Slider _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 

    const slides        = document.querySelectorAll('.offer__slide'),
          slider        = document.querySelector('.offer__slider'),
          next          = document.querySelector('.offer__slider-next'),
          prev          = document.querySelector('.offer__slider-prev'),
          totalSlides   = document.querySelector('#total'),
          current       = document.querySelector('#current'),
          slidesWrapper = document.querySelector('.offer__slider-wrapper'),
          slidesField   = document.querySelector('.offer__slider-inner'),
          width         = window.getComputedStyle(slidesWrapper).width;

    let slideIndex = 1,
        offset     = 0;

    const placeZero = (a) => a > 10 ? a : `0${a}`;

    totalSlides.textContent = placeZero(slides.length);
    current.textContent = placeZero(slideIndex);

    slidesField.style.cssText = `width: ${100 * slides.length}%;
                                 display: flex;
                                 transition: 0.5s all;`;
    slidesWrapper.style.overflow = 'hidden';
    slider.style.position = 'relative';

    const paginationDots = document.createElement('ol'),
          dots           = [];


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

    const repaintSlide = (r = +width.slice(0, width.length - 2) * (slideIndex - 1)) => {
        slidesField.style.transform = `translateX(-${r}px)`;
        dots.forEach(dot => dot.style.opacity = 0.5);
        dots[slideIndex - 1].style.opacity = 1;
        current.textContent = placeZero(slideIndex);
    };

    next.addEventListener('click', () => {
        if (offset == +width.slice(0, width.length - 2) * (slides.length - 1)) {
            offset = 0;
            slideIndex = 1;
        } else {
            offset += +width.slice(0, width.length - 2);
            slideIndex += 1;
        }

        repaintSlide(offset);
    });

    prev.addEventListener('click', () => {
        if (!offset) {
            offset = +width.slice(0, width.length - 2) * (slides.length - 1);
            slideIndex = slides.length;
        } else {
            offset -= +width.slice(0, width.length - 2);
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

});







