const player = document.getElementById("player");

// Player yang tidak dapat dideklarasikan ulang
let playerLeft = 175;
let playerBottom = 300;
let gravity = 2;
let isGameOver = false;

function jump() {
  playerBottom += 30;
  player.style.bottom = playerBottom + "px";
  console.log(playerBottom);
}

// TOMBOL LONCAT/JUMP
document.addEventListener("keydown", (KeyboardEvent) => {
  if (KeyboardEvent.code == "Space") {
    jump();
  }
});

function fall() {
  if (playerBottom > 0) {
    playerBottom -= gravity;
    playerBottom.style.bottom = playerBottom + "px";
  } else {
    gameOver();
  }
}

setInterval(fall, 20);

function gameOver() {
  isGameOver = true;
  alert("Game Over!");
}
