const link = document.querySelector(".play");
const close = document.querySelector(".close");
const trailer = document.querySelector(".trailer");
const video = document.querySelector(".trailer video");

link.addEventListener("click", () => {
  trailer.style.visibility = "visible";
  trailer.style.opacity = "1";
  video.play();
  video.currentTime = 0;
})
close.addEventListener("click", () => {
  video.pause();
  trailer.style.visibility = "hidden";
  trailer.style.opacity = "0";
})