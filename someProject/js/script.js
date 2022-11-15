window.addEventListener('DOMContentLoaded', () => {

    // Tabs _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 

    const tabs       = document.querySelectorAll('.tabheader__item'),
          tabContent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent() {
        tabContent.forEach( item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach( item => {
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
            tabs.forEach( (item, index) => {
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
        const t       = Date.parse(endTime) - Date.parse(new Date());

        if (t <= 0){
            days = 0;
            hours = 0;
            minutes = 0;
            seconds = 0;
        } else {
            days    = Math.floor(t / (1000 * 60 * 60 * 24)),
            hours   = Math.floor((t / (1000 * 60 * 60)) % 24),
            minutes = Math.floor((t / 1000 / 60) % 60),
            seconds = Math.floor((t / 1000) % 60);
        }

        return {
            'total':   t,
            'days':    days,
            'hours':   hours,
            'minutes': minutes,
            'seconds': seconds
        };
    };

    const getZero = (num) => {
        return num < 10 ? `0${num}`: num;
    };

    const setClock = (selector, endTime) => {
        const timer     = document.querySelector(selector),
              days      = timer.querySelector('#days'),
              hours     = timer.querySelector('#hours'),
              minutes   = timer.querySelector('#minutes'),
              seconds   = timer.querySelector('#seconds'),
              timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endTime);

            days.innerHTML    = getZero(t.days);
            hours.innerHTML   = getZero(t.hours);
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
          modalCloseForm = modalForm.querySelector('[data-close]');

    const closeModal = () => {
        modalForm.classList.toggle('show');
        document.body.style.overflow = '';
    };
    


    modalTriggerBtns.forEach( (item) => {
        item.addEventListener('click', () => {
            modalForm.classList.toggle('show');
            document.body.style.overflow = 'hidden';
        });
    });

    modalCloseForm.addEventListener('click', closeModal);

    modalForm.addEventListener('click', (e) => {
        if (e.target === modalForm) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modalForm.classList.contains('show')) {
            closeModal();
        }
    });


});