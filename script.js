const menuHamburguer = document.querySelector('.menu-hamburguer');
const contentMobile = document.querySelector('#content-mobile');
const submenuToggles = document.querySelectorAll('.has-submenu > a');
const carrosselContainer = document.querySelector('#container-carrossel-cursos');
const prevButton = document.querySelector('#cursos-prev');
const nextButton = document.querySelector('#cursos-next');
let currentIndex = 0;

if (menuHamburguer && contentMobile) {
  menuHamburguer.addEventListener('click', () => {
    contentMobile.classList.toggle('active');
    menuHamburguer.classList.toggle('active');
  });
}

submenuToggles.forEach(toggle => {
  toggle.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      const submenu = toggle.nextElementSibling;
      const parentLi = toggle.parentElement;
      parentLi.classList.toggle('active');
      submenu.style.display = parentLi.classList.contains('active') ? 'block' : 'none';
    }
  });
});

if (carrosselContainer && prevButton && nextButton) {
  const items = carrosselContainer.children;
  const totalItems = items.length;

  function updateCarrossel() {
    const offset = -currentIndex * (300 + 24);
    carrosselContainer.style.transform = `translateX(${offset}px)`;
  }

  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalItems - 1;
    updateCarrossel();
  });

  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex < totalItems - 1) ? currentIndex + 1 : 0;
    updateCarrossel();
  });
}

const galeriaImagens = [
  { src: 'imagens/cetep1.jpg', caption: 'Laboratório de Informática' },
  { src: 'imagens/cetep2.jpg', caption: 'Feira de Ciências 2024' },
  { src: 'imagens/cetep3.jpg', caption: 'Aula de Agropecuária' },
  { src: 'imagens/cetep4.jpg', caption: 'Formatura 2024' }
];
let currentImageIndex = 0;

function abrirLightbox(index) {
  currentImageIndex = index;
  const lightbox = document.getElementById('lightbox');
  const lightboxConteudo = document.getElementById('lightbox-conteudo');
  const lightboxCaption = document.getElementById('lightbox-caption');

  lightboxConteudo.innerHTML = `<img src="${galeriaImagens[index].src}" alt="${galeriaImagens[index].caption}">`;
  lightboxCaption.textContent = galeriaImagens[index].caption;
  lightbox.style.display = 'flex';
}

function fecharLightbox(event) {
  if (event.target.id === 'lightbox' || event.target.id === 'fechar') {
    document.getElementById('lightbox').style.display = 'none';
  }
}

function mudarImagem(direction) {
  currentImageIndex = (currentImageIndex + direction + galeriaImagens.length) % galeriaImagens.length;
  const lightboxConteudo = document.getElementById('lightbox-conteudo');
  const lightboxCaption = document.getElementById('lightbox-caption');

  lightboxConteudo.innerHTML = `<img src="${galeriaImagens[currentImageIndex].src}" alt="${galeriaImagens[currentImageIndex].caption}">`;
  lightboxCaption.textContent = galeriaImagens[currentImageIndex].caption;
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.aprenda-card, .curso-item, .projeto-card, .noticia-card, .depoimento-card, .galeria-item').forEach(item => {
  item.classList.add('animate');
  observer.observe(item);
});