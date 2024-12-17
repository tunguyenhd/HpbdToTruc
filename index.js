let audio = document.querySelector("audio");
let label = document.querySelector("label");

label.addEventListener("click", () => {
   if (audio.paused) {
      audio.play();
   } else {
      audio.pause();
   }
});
