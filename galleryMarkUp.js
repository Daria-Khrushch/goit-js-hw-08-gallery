import gallery from './gallery-items.js';

const createGalleryMarkUp = ({ preview, original, description }) => {
    return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
    class="gallery__image"
    src = "${preview}"
    data-source="${original}"
    alt = "${description}"
    />
    </a>
    </li>`;
};

const makeMarkup = gallery.map(img => createGalleryMarkUp(img)).join('');

const galleryContainer = document.querySelector('.js-gallery');
galleryContainer.insertAdjacentHTML("afterbegin", makeMarkup);

galleryContainer.addEventListener('click', onImageClick);
const lightboxEL = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox__image');
const lightboxContent = document.querySelector('.lightbox__content');

const closeButton = document.querySelector('[data-action="close-lightbox"]');
closeButton.addEventListener('click', onCloseButtonClick);

function onImageClick(evt) {
    const isImageSwatchEl = evt.target.classList.contains('gallery__image');
    if (!isImageSwatchEl) {
        return;
    }
    evt.preventDefault();
    lightboxEL.classList.add('is-open');
    lightboxImg.src = evt.target.dataset.source;
};



function onCloseButtonClick(evt) {
    lightboxEL.classList.remove('is-open');
    currentActiveImage.removeAttribute('src');
};
