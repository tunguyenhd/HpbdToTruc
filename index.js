let audio = document.querySelector("audio");
let label = document.querySelector("label");
let nav = document.querySelector(".nav");
let pause = nav.querySelector(".pause");
let play = nav.querySelector(".play");

 if (audio.played) {
    
    pause.style.opacity = "1";
    play.style.opacity = "0";
    console.log("play");
}

label.addEventListener("click", () => {
   if (audio.paused) {
      audio.play();
      pause.style.opacity = "1";
      play.style.opacity = "0";
      console.log("play");
   } else {
      audio.pause();
      pause.style.opacity = "0";
      play.style.opacity = "1";
      console.log("pause");
   }
});
