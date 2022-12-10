const closeModal = (modalSelector) => {
          const modalForm = document.querySelector(modalSelector);
          modalForm.classList.remove('show');
          document.body.style.overflow = '';
      },
      openModal = (modalSelector, timeoutFormId) => {
          const modalForm = document.querySelector(modalSelector);
          modalForm.classList.add('show');
          document.body.style.overflow = 'hidden';
          console.log(timeoutFormId);
          if (timeoutFormId){
              clearInterval(timeoutFormId);
          }
      };

function modal(triggerSelector, modalSelector, timeoutFormId) {
    
    const modalTriggerBtns = document.querySelectorAll(triggerSelector),
        modalForm = document.querySelector(modalSelector),
        d = document.documentElement;

    modalTriggerBtns.forEach((item) => {
        item.addEventListener('click', () => openModal(modalSelector, timeoutFormId));
    });

    modalForm.addEventListener('click', (e) => {
        if (e.target === modalForm || e.target.getAttribute('data-close') == '') {
            closeModal(modalSelector);
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modalForm.classList.contains('show')) {
            closeModal(modalSelector);
        }
    });


    function showModalByScroll() {
        if (window.pageYOffset + d.clientHeight >= d.scrollHeight) {
            openModal(modalSelector, timeoutFormId);
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll);

}
export default modal; 
export {closeModal, openModal};