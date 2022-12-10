import { closeModal, openModal } from './modal';
import { postData } from '../servises/servises';

function forms(formSelector, modalSelector, timeoutFormId) {
        
        const forms = document.querySelectorAll(formSelector);

        const message = {
            loading: 'img/form/spinner.svg',
            sucsess: 'Thnk! We contact with u soon.',
            failure: 'Smth goes wrong'
        };
    
        forms.forEach(i => bindPostData(i));
    
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
    
            openModal(modalSelector, timeoutFormId);
    
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
                closeModal(modalSelector);
            }, 4000);
        }
        fetch('http://localhost:3000/menu')
            .then(data => data.json())
            .then(res => console.log(res));
    
}
export default forms; 