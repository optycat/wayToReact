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