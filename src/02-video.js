import Player from "@vimeo/player";

const iframe = document.querySelector("#vimeo-player");

const player = new Player(iframe);
player.on("play", function () {
  console.log("played the video!");
});

player.on("timeupdate", function (seconds) {
  localStorage.setItem("videoplayer-current-time", JSON.stringify(seconds));
  console.log(seconds);
});

let timeFromStorage = localStorage.getItem("videoplayer-current-time");
const savedTime = JSON.parse(timeFromStorage);
window.onload = function () {
  let time = timeFromStorage;
  if (time) {
    console.log(`I'm time from Local Storage: ${timeFromStorage}`);
    console.log(`I'm time from Local Storage: ${savedTime.seconds}`);
    console.log(`It's length if Local Storage: ${localStorage.length}`);
    player
      .setCurrentTime(savedTime.seconds)
      .then(function (seconds) {
        seconds = time;
      })
      .catch(function (error) {
        switch (error.name) {
          case "RangeError":
            // the time was less than 0 or greater than the video’s duration
            break;

          default:
            // some other error occurred
            break;
        }
      });
  }
};
