import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
var lightbox = new SimpleLightbox('.gallery a', {});
function createGallery(galleryItems){
   return galleryItems.map(({ preview, original, description }) => `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a></li>`
).join(" ");

}
galleryContainer.insertAdjacentHTML("afterbegin", createGallery(galleryItems));

document.addEventListener('DOMContentLoaded', function() {
    const lightbox = new SimpleLightbox('.gallery a', {
        captions: true,
        captionsData: 'alt',
        captionDelay: 250,
        captionPosition: 'bottom'
      });
  });

