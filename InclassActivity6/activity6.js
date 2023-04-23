const btnHight = 50;
const btnWidth = 100;
const maxwidth = window.innerWidth - btnWidth;
const maxheight = window.innerHeight - btnHight;
let clc = 0;
let t = 500;
let lvl = 1;
let time;
function randomPos() {
  let x = Math.floor(Math.random() * maxwidth);
  let y = Math.floor(Math.random() * maxheight);
  document.getElementById("btn").style.top = y + "px";
  document.getElementById("btn").style.left = x + "px";
  time = setTimeout(randomPos, t);
}
window.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btn");
  btn.addEventListener("click", () => {
    clc++;
    if (clc >= 3) {
      clearTimeout(time);
      const x = Math.floor(Math.random() * maxwidth);
      const y = Math.floor(Math.random() * maxheight);
      btn.style.top = y + "px";
      btn.style.left = x + "px";
      t = t - 100;
      alert("You are the winner you can go next level" + lvl + " " );
      lvl++;
      clc = 0;
    }
    if (lvl == 7) {
      document.getElementById("lvl").innerHTML = "You Win!";
      btn.style.display = "none";
    }
  });
  randomPos();
});

