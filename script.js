// Menu mobile
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.navbar nav');

toggle.addEventListener('click', () => {
  nav.classList.toggle('open');
});

// Fechar o menu mobile ao clicar numa ligação
nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
  });
});

// Validação simples do formulário
const form = document.getElementById('contact-form');
const feedback = document.getElementById('form-feedback');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!name || !emailValido || !message) {
    feedback.style.color = 'crimson';
    feedback.textContent = 'Preencha todos os campos com um email válido.';
    return;
  }

  feedback.style.color = 'green';
  feedback.textContent = 'Obrigado! Esta é uma demonstração, a mensagem não foi enviada.';
  form.reset();
});