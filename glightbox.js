import GLightbox from "glightbox";
// LIGHTBOX
const lightbox = GLightbox({
  selector: ".glightbox", // your selector
});

lightbox.on("open", () => {
  console.log("lightbox opened");
});
