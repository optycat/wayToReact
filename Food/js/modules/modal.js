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