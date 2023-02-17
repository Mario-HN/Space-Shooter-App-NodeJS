(function () {
  const TAMX = 1720;
  const TAMY = 1080;
  const FPS = 100;

  const PROB_ENEMY_SHIP = 2;
  const PROB_ASTEROID_BIG = 0.75;
  const PROB_ASTEROID_SMALL = 1;
  const PROB_DISCO_VOADOR = 0.5;
  const dificuldade = 20;
  

  let space, ship, placar, spaceCheck = 0;
  let enemies = [];
  let vidas = [];
  let stopped = true;
  let elapsedTime = 0;
  let startTime = null;
  let isPaused = false;
  let score = 0;
  let interval = 0;
  let contVidas = 4;
  let gameStarted = true;
  
  const gameOverText = document.createElement('div');
  gameOverText.innerText = 'GAME OVER';
  gameOverText.style.color = 'red';
  gameOverText.style.fontSize = '100px';
  gameOverText.style.position = 'absolute';
  gameOverText.style.top = `${parseInt(TAMY / 2)}px`;
  gameOverText.style.left = `${parseInt(TAMX / 2)}px`;
  gameOverText.style.transform = 'translate(-50%, -50%)';
  gameOverText.style.border = 'solid 5px black';

  const StartGameText = document.createElement('div');
  StartGameText.innerText = 'Press Space Bar To Begin!';
  StartGameText.style.color = 'red';
  StartGameText.style.fontSize = '50px';
  StartGameText.style.position = 'absolute';
  StartGameText.style.top = `${parseInt(TAMY / 2)}px`;
  StartGameText.style.left = `${parseInt(TAMX / 2)}px`;
  StartGameText.style.transform = 'translate(-50%, -50%)';
  StartGameText.style.border = 'solid 5px black';
  

  const restartButton = document.getElementById("restart-button");
  restartButton.style.border = '3px solid black';
  restartButton.style.fontSize = '30px';
  restartButton.style.position = 'absolute';
  restartButton.style.backgroundColor = 'black';
  restartButton.style.color = 'red';
  restartButton.style.top = `${parseInt(TAMY / 2) + 150}px`;
  restartButton.style.left = `${parseInt(TAMX / 2) - 100}px`;
  restartButton.addEventListener("click", restartGame);

  function init() {
    space = new Space();
    ship = new Ship();
    for (let i=0; i<3; i++){
      vida = new Vida();
      vidas.push(vida);
    }
    vidas[1].element.style.left = `${TAMX-250}px`;
    vidas[2].element.style.left = `${TAMX-200}px`;

    document.body.appendChild(StartGameText);

    window.clearInterval(interval);
    setInterval(function() {
      if (dificuldade>1){dificuldade = dificuldade - 1;}
      PROB_ENEMY_SHIP = PROB_ENEMY_SHIP + 1;
      PROB_ASTEROID_BIG = PROB_ASTEROID_BIG + 0.75;
      PROB_ASTEROID_SMALL = PROB_ASTEROID_SMALL + 1;
      PROB_DISCO_VOADOR = PROB_DISCO_VOADOR + 0.5;
    }, 60 * 1000);
    
    document.addEventListener('keydown', e => {
      if(e.code === 'Space' && spaceCheck === 0){
        spaceCheck++;
        StartGameText.remove();
        startCount();
        interval = window.setInterval(run, 1000/FPS);
        StartGameText.style.display = 'none';
          
        document.addEventListener('keydown', e => {
          if (e.code === 'KeyP') {
            stopped = !stopped;
              switch (stopped) {
                case true:
                  resumeCount();
                  interval = window.setInterval(run, 1000/FPS);
                  break;
                case false:
                  pauseCount();
                  window.clearInterval(interval);
                  break;
              }
            }
          })
        }
      }); 

      

      setInterval(() => {
        ship.checkCollision();
        if(contVidas === 0){
          pauseCount();
          window.clearInterval(interval);
          document.body.appendChild(gameOverText);
          document.getElementById('restart-button').style.display = 'block';
        }
      }, 1000/FPS);
      
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

  function restartGame() {
    location.reload();
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
      this.element.style.backgroundpositionY = "0px";
      this.leftLimit = 0;
      this.rightLimit = TAMX;
      this.topLimit = 0;
      this.bottomLimit = TAMY;
    }

    move() {
      this.element.style.backgroundpositionY = `${parseInt(this.element.style.backgroundpositionY) + 1}px`;
    }

  }

  

  class Ship {
    constructor() {
      this.element = document.getElementById("ship");
      this.AssetsDirecoes = [
        "assets/playerLeft.png",
        "assets/player.png",
        "assets/playerRight.png",
        "assets/playerDamaged.png"
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
    checkCollision() {
      enemies.forEach(enemy => {
        const enemyRect = enemy.element.getBoundingClientRect();
        const shipRect = this.element.getBoundingClientRect();
  
        if (
        enemyRect.bottom >= shipRect.top &&
        enemyRect.top <= shipRect.bottom &&
        enemyRect.right >= shipRect.left &&
        enemyRect.left <= shipRect.right) {
          enemy.element.remove();
          const index = enemies.indexOf(enemy);
          enemies.splice(index, 1);
          contVidas--;
          vidas[0].element.remove();
          vidas[0].element.classList.remove('vida'); 
          vidas.splice(0, 1);
        }
      });
    }
  
    move() {
      if (this.direcao === 0)
        this.element.style.left = `${parseInt(this.element.style.left) - (3)}px`;
      if (this.direcao === 2)
        this.element.style.left = `${parseInt(this.element.style.left) + (3)}px`;
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
      this.element.speed = Math.ceil((Math.random()*100)/dificuldade);
      space.element.appendChild(this.element);
    }
    move() {
      if (this.element.style.top ===`${TAMY}px`) {
        this.element.remove();
        this.element.classList.remove('enemy-ship'); 
        const index = enemies.indexOf(this);
        enemies.splice(index, 1);
      } else {
        this.element.style.top = `${parseInt(this.element.style.top) + (this.element.speed)}px`;
      }  
    }
  }

  class AsteroidBig {
    constructor() {
      this.element = document.createElement("img");
      this.element.className = "asteroid-big";
      this.element.src = "assets/meteorBig.png";
      this.element.style.top = "0px";
      this.element.style.left = `${Math.floor(Math.random() * TAMX)}px`;
      this.element.speed = Math.ceil((Math.random()*100)/dificuldade);
      space.element.appendChild(this.element);
    }
    move() {
      if (this.element.style.top ===`${TAMY}px`) {
        this.element.remove();
        this.element.classList.remove('asteroid-big');
        const index = enemies.indexOf(this);
        enemies.splice(index, 1);
      } else {
        this.element.style.top = `${parseInt(this.element.style.top) + (this.element.speed)}px`;
      }  
    }
  }

  class AsteroidSmall {
    constructor() {
      this.element = document.createElement("img");
      this.element.className = "asteroid-small";
      this.element.src = "assets/meteorSmall.png";
      this.element.style.top = "0px";
      this.element.style.left = `${Math.floor(Math.random() * TAMX)}px`;
      this.element.speed = Math.ceil((Math.random()*100)/dificuldade);
      space.element.appendChild(this.element);
    }
    move() {
      if (this.element.style.top ===`${TAMY}px`) {
        this.element.remove();
        this.element.classList.remove('asteroid-small');
        const index = enemies.indexOf(this);
        enemies.splice(index, 1);
      } else {
        this.element.style.top = `${parseInt(this.element.style.top) + (this.element.speed)}px`;
      }  
    }
  }

  class DiscoVoador {
    constructor() {
      this.element = document.createElement("img");
      this.element.className = "disco-voador";
      this.element.src = "assets/enemyUFO.png";
      this.element.style.top = "0px";
      this.element.style.left = `${Math.floor(Math.random() * TAMX)}px`;
      this.element.speed = Math.ceil((Math.random()*100)/dificuldade);
      space.element.appendChild(this.element);
    }
    move() {
      if (this.element.style.top === `${TAMY}px`) {
        this.element.remove();
        this.element.classList.remove('.disco-voador');
        const index = enemies.indexOf(this);
        enemies.splice(index, 1);
      } else {
        this.element.style.top = `${parseInt(this.element.style.top) + (this.element.speed)}px`;
      }   
    }
  }

  class Vida {
    constructor() {
      this.element =  document.createElement("img");
      this.element.className = "vida"
      this.element.src = "assets/player.png";
      this.element.style.top = `1px`;
      this.element.style.left = `${TAMX-300}px`;
      this.element.style.width = `50px`;
      space.element.appendChild(this.element);
    }
  }

  function run() {
    space.move();

    // const shipTop = parseInt(ship.element.style.top);
    // const shipLeft = parseInt(ship.element.style.left);
    // const shipWidth = ship.element.clientWidth;
    // const shipHeight = ship.element.clientHeight;

    const random_enemy_ship = Math.random() * 100;
    if (random_enemy_ship <= PROB_ENEMY_SHIP) {
      enemies.push(new EnemyShip());
    }

    const random_asteroid_big = Math.random() * 100;
    if (random_asteroid_big <= PROB_ASTEROID_BIG) {
      enemies.push(new AsteroidBig());
    }

    const random_asteroid_small = Math.random() * 100;
    if (random_asteroid_small <= PROB_ASTEROID_SMALL) {
      enemies.push(new AsteroidSmall());
    }

    const random_disco_voador = Math.random() * 100;
    if (random_disco_voador <= PROB_DISCO_VOADOR) {
      enemies.push(new DiscoVoador());
    }


    enemies.forEach((enemy) => {
      const enemyTop = parseInt(enemy.element.style.top);
      const enemyHeight = enemy.element.clientHeight;

      if (enemyTop + enemyHeight > this.bottomLimit) {
        enemy.element.remove();
        const index = enemies.indexOf(enemy);
        enemies.splice(index, 1);
      } else {
        enemy.move()
      }
    });


    
    
    ship.move();
    

  }

  init();
})();