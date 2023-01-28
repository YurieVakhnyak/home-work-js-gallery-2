import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

let gallery = document.querySelector(".gallery");

const itemGallery = `
<a class="gallery__item" href="large-image.jpg">
  <img class="gallery__image" src="small-image.jpg" alt="Image description" />
</a>`;

galleryItems.forEach((item) => {
  gallery.insertAdjacentHTML("afterbegin", itemGallery);
  const galleryImage = document.querySelector(".gallery__image");
  const galleryLink = document.querySelector(".gallery__item");
  galleryImage.src = item.preview;
  galleryImage.alt = item.description;
  galleryLink.href = item.original;
});

gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 400,
});
gallery.on("show.simplelightbox", function (event) {
    
});

