// script.js

document.addEventListener('DOMContentLoaded', () => {
  // Burger menu toggle
  const burger = document.getElementById('burger');
  const nav = document.getElementById('main-nav');

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-open');
  });

  // Hero slider logic
  const slides = document.querySelectorAll('.hero-slider img');
  let currentSlide = 0;

  function showNextSlide() {
    slides[currentSlide].classList.remove('active-slide');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active-slide');
  }

  setInterval(showNextSlide, 3000);
});

// About

document.addEventListener('DOMContentLoaded', function () {
  const btn = document.querySelector('.read-more-btn');
  const aboutText = document.querySelector('.about-text');

  btn.addEventListener('click', () => {
    aboutText.classList.toggle('collapsed');
    btn.textContent = aboutText.classList.contains('collapsed') ? 'Weiterlesen' : 'Weniger anzeigen';
  });
});

// Fotos

  const viewer = document.getElementById('fullscreenViewer');
  const fullscreenImg = document.getElementById('fullscreenImage');
  const closeBtn = document.getElementById('closeViewer');
  const images = document.querySelectorAll('.gallery-img');

  let current = 0;
  let imageArray = Array.from(images);

  function showImage(index) {
    fullscreenImg.src = imageArray[index].src;
    viewer.style.display = 'flex';
    current = index;
  }

  images.forEach((img, index) => {
    img.addEventListener('click', () => showImage(index));
  });

  closeBtn.addEventListener('click', () => {
    viewer.style.display = 'none';
  });

  fullscreenImg.addEventListener('click', () => {
    current = (current + 1) % imageArray.length;
    fullscreenImg.src = imageArray[current].src;
  });

  // Esc to close
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') viewer.style.display = 'none';
  });

// Gallery
// Галерея
const galleryImages = document.querySelectorAll('.gallery-img');
const galleryLightbox = document.getElementById('galleryLightbox');
const galleryLightboxImg = document.getElementById('galleryLightboxImg');
const galleryCloseBtn = document.getElementById('galleryCloseBtn');
const galleryPrevBtn = document.getElementById('galleryPrevBtn');
const galleryNextBtn = document.getElementById('galleryNextBtn');

let galleryCurrentIndex = 0;

function showGalleryLightbox(index) {
  galleryCurrentIndex = index;
  galleryLightboxImg.src = galleryImages[galleryCurrentIndex].src;
  galleryLightbox.classList.add('active');
}

function closeGalleryLightbox() {
  galleryLightbox.classList.remove('active');
}

function showGalleryPrev() {
  galleryCurrentIndex = (galleryCurrentIndex - 1 + galleryImages.length) % galleryImages.length;
  galleryLightboxImg.src = galleryImages[galleryCurrentIndex].src;
}

function showGalleryNext() {
  galleryCurrentIndex = (galleryCurrentIndex + 1) % galleryImages.length;
  galleryLightboxImg.src = galleryImages[galleryCurrentIndex].src;
}

galleryImages.forEach((img, index) => {
  img.addEventListener('click', () => showGalleryLightbox(index));
});

galleryCloseBtn.addEventListener('click', closeGalleryLightbox);
galleryPrevBtn.addEventListener('click', showGalleryPrev);
galleryNextBtn.addEventListener('click', showGalleryNext);

galleryLightboxImg.addEventListener('click', showGalleryNext);

galleryLightbox.addEventListener('click', (e) => {
  if (e.target === galleryLightbox) closeGalleryLightbox();
});

document.addEventListener('keydown', (e) => {
  if (!galleryLightbox.classList.contains('active')) return;
  if (e.key === 'Escape') closeGalleryLightbox();
  else if (e.key === 'ArrowLeft') showGalleryPrev();
  else if (e.key === 'ArrowRight') showGalleryNext();
});


// Фото-секция
const photosImages = document.querySelectorAll('.photos-img');
const photosViewer = document.getElementById('photosViewer');
const photosViewerImg = document.getElementById('photosViewerImg');
const photosCloseBtn = document.getElementById('photosCloseBtn');

let photosCurrentIndex = 0;

function showPhotosViewer(index) {
  photosCurrentIndex = index;
  photosViewerImg.src = photosImages[photosCurrentIndex].src;
  photosViewer.classList.add('active');
}

function closePhotosViewer() {
  photosViewer.classList.remove('active');
}

photosImages.forEach((img, index) => {
  img.addEventListener('click', () => showPhotosViewer(index));
});

photosCloseBtn.addEventListener('click', closePhotosViewer);

photosViewerImg.addEventListener('click', () => {
  photosCurrentIndex = (photosCurrentIndex + 1) % photosImages.length;
  photosViewerImg.src = photosImages[photosCurrentIndex].src;
});

photosViewer.addEventListener('click', (e) => {
  if (e.target === photosViewer) closePhotosViewer();
});

document.addEventListener('keydown', (e) => {
  if (!photosViewer.classList.contains('active')) return;
  if (e.key === 'Escape') closePhotosViewer();
});

  
