(function () {
  const TAMX = 600;
  const TAMY = 800;
  const FPS = 100;

  const PROB_ENEMY_SHIP = 0.5;

  let space, ship, placar;
  let enemies = [];
  let stopped = true;
  let elapsedTime = 0;
  let startTime = null;
  let isPaused = false;
  let score = 0;
  let interval = 0;
  

  function init() {
    space = new Space();
    ship = new Ship();
    resetCount();
    window.clearInterval(interval);

    document.addEventListener('keydown', e => {
      if(e.code === 'Space'){
        if(document.getElementById('score').textContent != '0'){location.reload();}
        startCount();
        interval = window.setInterval(run, 1000/FPS);
          
        document.addEventListener('keydown', e => {
          if (e.code === 'KeyP') {
            stopped = !stopped;
              switch (stopped) {
                case true:
                  resumeCount();
                  interval = window.setInterval(run, 1000/FPS);
                  console.log('resume');
                  break;
                case false:
                  pauseCount();
                  window.clearInterval(interval);
                  console.log('pause');
                  break;
              }
            }
          })
        }
      }); 
  }

  function startCount() {
    startTime = Date.now() - elapsedTime;
    isPaused = false;
    setInterval(function() {
      if(!isPaused){
        elapsedTime = Date.now() - startTime;
        score = FPS*Math.floor(elapsedTime/1000);
        document.getElementById('score').textContent = score;
      }
    }, 10);
  }

  function pauseCount(){
    isPaused = true;
    elapsedTime = Date.now() - startTime;
    window.clearInterval(interval);
  }

  function resumeCount(){
    isPaused = false;
    startTime = Date.now() - elapsedTime;
  }

  function resetCount(){
    startTime = null;
    elapsedTime = 0;
    isPaused = false;
    score = 0;
    document.getElementById('score').textContent = score;
  }




  window.addEventListener("keydown", (e) => {
    if (e.key == "ArrowLeft") ship.mudaDirecao(-1);
    else if (e.key == "ArrowRight") ship.mudaDirecao(+1);
  });

  class Space {
    constructor() {
      this.element = document.getElementById("space");
      this.element.style.width = `${TAMX}px`;
      this.element.style.height = `${TAMY}px`;
      this.element.style.backgroundPositionY = "0px";
    }

    move() {
      this.element.style.backgroundPositionY = `${parseInt(this.element.style.backgroundPositionY) + 1}px`;
    }

  }

  class Ship {
    constructor() {
      this.element = document.getElementById("ship");
      this.AssetsDirecoes = [
        "assets/playerLeft.png",
        "assets/player.png",
        "assets/playerRight.png",
      ];
      this.direcao = 1;
      this.element.src = this.AssetsDirecoes[this.direcao];
      this.element.style.bottom = "20px";
      this.element.style.left = `${parseInt(TAMX / 2) - 50}px`;
    }
    mudaDirecao(giro) {
      if (this.direcao + giro >= 0 && this.direcao + giro <= 2) {
        this.direcao += giro;
        this.element.src = this.AssetsDirecoes[this.direcao];
      }
    }
    move() {
      if (this.direcao === 0)
        this.element.style.left = `${parseInt(this.element.style.left) - 1}px`;
      if (this.direcao === 2)
        this.element.style.left = `${parseInt(this.element.style.left) + 1}px`;
      space.move();
    }
  }

  class EnemyShip {
    constructor() {
      this.element = document.createElement("img");
      this.element.className = "enemy-ship";
      this.element.src = "assets/enemyShip.png";
      this.element.style.top = "0px";
      this.element.style.left = `${Math.floor(Math.random() * TAMX)}px`;
      space.element.appendChild(this.element);
    }
    move() {
      this.element.style.top = `${parseInt(this.element.style.top) + 2}px`;
    }
  }

  class AsteroidBig {
    constructor() {
      this.element = document.createElement("img");
      this.element.className = "asteroid-big";
      this.element.src = "assets/meteorBig.png";
      this.element.style.top = "0px";
      this.element.style.left = `${Math.floor(Math.random() * TAMX)}px`;
      space.element.appendChild(this.element);
    }
    move() {
      this.element.style.top = `${parseInt(this.element.style.top) + 2}px`;
    }
  }

  // class EnemyShip {
  //   constructor() {
  //     this.element = document.createElement("img");
  //     this.element.className = "enemy-ship";
  //     this.element.src = "assets/enemyShip.png";
  //     this.element.style.top = "0px";
  //     this.element.style.left = `${Math.floor(Math.random() * TAMX)}px`;
  //     space.element.appendChild(this.element);
  //   }
  //   move() {
  //     this.element.style.top = `${parseInt(this.element.style.top) + 2}px`;
  //   }
  // }

  // class Placar {
  //   constructor() {
  //     this.element.style.position = `re`;
  //     this.element.src = "assets/player.png";
  //     this.element.style.top = `1px`;
  //     this.element.style.left = `5px`;
  //     this.element.style.display = `flex`
  //     space.element.appendChild(this.element);
  //   }
  // }

  function run() {

    const random_enemy_ship = Math.random() * 100;
    if (random_enemy_ship <= PROB_ENEMY_SHIP) {
      enemies.push(new EnemyShip());
    }

    const random_asteroid_big = Math.random() * 100;
    if (random_asteroid_big <= PROB_ENEMY_SHIP) {
      enemies.push(new AsteroidBig());
    }

    enemies.forEach((e) => e.move());
    ship.move();

  }

  init();
})();