import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const itemGallery = `
<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</div>
</li>`;

galleryItems.forEach((item) => {
  gallery.insertAdjacentHTML("afterbegin", itemGallery);
  const galleryImage = document.querySelector(".gallery__image");
  const galleryLink = document.querySelector(".gallery__link");
  galleryImage.src = item.preview;
  galleryImage.dataset.source = item.original;
  galleryImage.alt = item.description;
  galleryLink.href = item.original;
});

gallery.addEventListener("click", (event) => {
  event.preventDefault();
  const target = event.target;
  target.src = target.dataset.source;
  // const galleryImage = document.querySelector(".gallery__image");

  const instance = basicLightbox.create(`
    ${target.outerHTML.toString()};  
`);
  instance.show();

  document.addEventListener("keydown", function (event) {
    if (event.code === "Escape") {
      instance.close();
    }
  });
});
