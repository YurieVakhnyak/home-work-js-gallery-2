import Player from "@vimeo/player";
const _ = require("lodash");

const iframe = document.querySelector("#vimeo-player");

const player = new Player(iframe);
player.on("play", function () {
  console.log("played the video!");
});

function saveDataTime(seconds) {
  localStorage.setItem("videoplayer-current-time", JSON.stringify(seconds));
  console.log(seconds);
}
player.on("timeupdate", _.throttle(saveDataTime, 1000));

let timeFromStorage = localStorage.getItem("videoplayer-current-time");
try {
  const savedTime = JSON.parse(timeFromStorage);
  window.onload = function () {
    let time = timeFromStorage;
    if (time) {
      console.log(`It's time-object from Local Storage: ${timeFromStorage}`);
      console.log(`It's time from Local Storage: ${savedTime.seconds}`);

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
} catch (error) {
  console.log(error.name); // "SyntaxError"
  console.log(error.message); // "Unexpected token u in JSON at position 1"
}
