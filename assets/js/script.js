

document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.list-group-item');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Desactiva todos los botones
            tabButtons.forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Activa el botón clickeado
            this.classList.add('active');

            // Oculta todos los contenidos
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });

            // Muestra el contenido correspondiente al botón clickeado
            const contentToShow = document.querySelector(`.tab-content[data-content="${this.getAttribute('data-tab')}"]`);
            contentToShow.classList.add('active');
        });
    });
});
