document.querySelectorAll('.project').forEach(project => {
    project.addEventListener('click', () => {
        const images = JSON.parse(project.getAttribute('data-images'));
        const modal = document.createElement('div');
        modal.classList.add('modal');

        const modalContent = images.map(img => {
            return `<img src="${img}" alt="Projeto Imagem" class="modal-image">`;
        }).join('');

        modal.innerHTML = modalContent + '<button class="close-modal">Fechar</button>';
        document.body.appendChild(modal);

        document.querySelector('.close-modal').addEventListener('click', () => {
            document.body.removeChild(modal);
        });

        modal.addEventListener('click', () => {
            document.body.removeChild(modal);
        });
    });
});
