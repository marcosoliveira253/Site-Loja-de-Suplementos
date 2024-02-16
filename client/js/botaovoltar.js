// Seleciona o botão "voltar ao topo"
var btn = document.querySelector('.back-to-top');

// Adiciona um ouvinte de eventos para o botão
btn.addEventListener('click', function() {
  // Anima a página de volta ao topo
window.scrollTo({
    top: 0,
    behavior: 'smooth'
    });
});


 // Seleciona o botão "voltar ao topo"
var btn = document.querySelector('.back-to-top');

 // Esconde o botão no carregamento da página
btn.style.display = 'none';

 // Adiciona um ouvinte de eventos para detectar o scroll da página
window.addEventListener('scroll', function() {
   // Se o usuário rolou a página em 100px, exibe o botão
    if (window.scrollY > 100) {
    btn.style.display = 'block';
    } else {
    btn.style.display = 'none';
    }
});

 // Adiciona um ouvinte de eventos para o clique do botão
btn.addEventListener('click', function() {
   // Anima a página de volta ao topo
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
