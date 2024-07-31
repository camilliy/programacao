<script>
    document.addEventListener('DOMContentLoaded', function() {
        const form = document.getElementById('contact-form');
        const thankYouMessage = document.getElementById('thank-you-message');

        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Impede o envio padrão do formulário

            // Exibe a mensagem de agradecimento
            thankYouMessage.style.display = 'block';

            // Limpa os campos do formulário
            form.reset();
        });
    });
</script>
