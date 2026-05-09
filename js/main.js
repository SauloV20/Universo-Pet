/* ── main.js — Veterinária Universo Pet ── */

// ── Navbar scroll effect
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 20);
});

// ── Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close menu when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ── Scroll reveal
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ── Contact form → WhatsApp
document.getElementById('submitBtn').addEventListener('click', () => {
  const nome     = document.getElementById('nome').value.trim();
  const telefone = document.getElementById('telefone').value.trim();
  const pet      = document.getElementById('pet').value.trim();

  if (!nome || !telefone || !pet) {
    alert('Por favor, preencha os campos obrigatórios: Nome, Telefone e Nome do Pet.');
    return;
  }

  const especie  = document.getElementById('especie').value  || 'Não especificada';
  const servico  = document.getElementById('servico').value  || 'Não especificado';
  const mensagem = document.getElementById('mensagem').value.trim() || 'Sem mensagem';

  const text = encodeURIComponent(
    `Olá! Gostaria de agendar uma consulta.\n\n` +
    `👤 Nome: ${nome}\n` +
    `📞 Telefone: ${telefone}\n` +
    `🐾 Pet: ${pet} (${especie})\n` +
    `🩺 Serviço: ${servico}\n` +
    `💬 Mensagem: ${mensagem}`
  );

  window.open(`https://wa.me/552433263982?text=${text}`, '_blank');

  document.getElementById('form-fields').style.display = 'none';
  document.getElementById('form-success').style.display = 'block';
});
