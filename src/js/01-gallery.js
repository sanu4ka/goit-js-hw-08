// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');

const galleryObjects = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<div class="gallery__item">
            <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
        </div>`
  )
  .join('');
gallery.insertAdjacentHTML('beforeend', galleryObjects);

var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
