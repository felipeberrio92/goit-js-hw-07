import { galleryItems } from './gallery-items.js';

console.log(galleryItems);

// Change code below this line

const galleryContainer = document.querySelector(".gallery");

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


galleryContainer.addEventListener("click",openModal );
function openModal(e){
    e.preventDefault();
    if( e.target.nodeName !== "IMG"){
        return;
    }
    const instance = basicLightbox.create(`
    <div class= "modal">
    <img src= "${e.target.dataset.source}" alt= "${e.target.alt}"></img>
    </div>
`);
    instance.show();

    
    document.addEventListener("keydown", (e) => {
        if(e.code !== "Escape" && basicLightbox.visible()) {
            return;
        }
        instance.close();
    });
}