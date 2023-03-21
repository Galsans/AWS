const player = document.getElementById("player");

//variabel yang tidak dapat di deklrasikan ulang
let playerLeft = 175;
let playerBottom = 200;
let gravity = 2;
let isGameOver = false;

//fungsi untuk lompat
function jump() {
  if (playerBottom < 200) {
    playerBottom += 30;
    player.style.bottom = playerBottom + "px";
    console.log(playerBottom);
  }
}

document.addEventListener("keydown", (KeyboardEvent) => {
  if (KeyboardEvent.code == "Space") {
    jump();
  }
});

function fall() {
  if (playerBottom > 0) {
    playerBottom -= gravity;
    player.style.bottom = playerBottom + "px";
  } else {
    alert("game over");
  }
}

setInterval(fall, 20);

function border() {}
