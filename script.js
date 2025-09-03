const chicken = document.getElementById("chicken");
const sound = document.getElementById("chicken-sound");


let posX = 50;
let direction = 1; 
const step = 150; 
const maxRight = window.innerWidth - 150; 


chicken.addEventListener("click", () => {
  if (!chicken.classList.contains("jump")) {
    chicken.style.setProperty("--dir", direction); 
    chicken.classList.add("jump");
    sound.currentTime = 0;
    sound.play();
    setTimeout(() => {
      chicken.classList.remove("jump");
    }, 600);
  }
});


function walk() {
  if (Math.random() < 0.5) {
    direction *= -1;
  }
  chicken.style.setProperty("--dir", direction);

  posX += step * direction;
  if (posX < 0) posX = 0;
  if (posX > maxRight) posX = maxRight;

  chicken.classList.add("walking");
  chicken.style.left = posX + "px";

  setTimeout(() => {
    chicken.classList.remove("walking");
  }, 2000);
}

function randomWalk() {
  if (!chicken.classList.contains("jump")) {
    walk();
  }
  const delay = Math.random() * 5000 + 4000;
  setTimeout(randomWalk, delay);
}


setTimeout(randomWalk, 3000);



const container = document.getElementById('leaves-container');

function createLeaf() {
  const leaf = document.createElement('div');
  leaf.classList.add('leaf');

  
  leaf.style.left = Math.random() * window.innerWidth + 'px';

  leaf.style.animationDuration = 5 + Math.random() * 5 + 's';

  leaf.style.width = 20 + Math.random() * 40 + 'px';
  leaf.style.height = leaf.style.width;

  container.appendChild(leaf);


  leaf.addEventListener('animationend', () => {
    leaf.remove();
  });
}


setInterval(createLeaf, 1500);