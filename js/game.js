/**
 * @type {HTMLCanvasElement}
 */

// const canvas = document.querySelector('#game');
// const game = canvas.getContext('2d');

// let canvasSize;
// let elementSize;

// //Para que apenas se recarga la pagina, inicie lo que esta en la funcion
// window.addEventListener('load', setCanvasSize);
// window.addEventListener('resize', setCanvasSize);



// function startGame(){
//     setCanvasSize();

//     console.log({ canvasSize, elementSize });

//     //Hay que definir una fuente
//     game.font = (elementSize - 12) + 'px Verdana';
//     game.textAlign = '';

//     for (let i = 0; i < 10; i++) {
//         for(let z = 1; z < 11; z++){
//             game.fillText(emojis['X'], elementSize * i, elementSize * z);
//         }

//     }





//     //Con esto estamos creando y accediendo al atributo width del canvas, y asi mismo le estamos dando un 75% del width de la ventana del navegador.
//     // canvas.setAttribute('width', window.innerWidth * 0.75)
//     //Con esto estamos creando y accediendo al atributo width del canvas, y asi mismo le estamos dando un 75% del width de la ventana del navegador.



//     //Todo el alto que realmente tiene la ventana del navegador
//     //window.innerHeight
//     //Todo el ancho que realmente tiene la ventana del navegador
//     //window.innerWidth

//     //Traso, x(moverlo horizontalmente),y(moverlo verticalmente),widht(ancho),height(alto)
//     //game.fillRect(0,50,100,100);
//     //Borrar algo, es decir, borraremos una zona que deseemos
//     //game.clearRect(50,50,50,50)
//     //Con este se le da un tamaño y el tipo de letra del texto
//     //game.font = '25px Verdana';
//     //Se le da un color
//     //game.fillStyle = 'purple';
//     //Se le da una posicion de acuerdo a su pocision, es decir, si su posicion es 25, desde esa linea 25 se movera hacia algun lado
//     //game.textAlign = 'left';
//     //Se hace un texto, y asi mismo se le dan cordenadas
//     //game.fillText('Platzi', 25, 25);
// }

// function setCanvasSize(){


//     if(window.innerHeight > window.innerWidth){
//         //Con esto si el height es mayor al widht, le damos un 80% porciento del width al width y al heigth
//         canvasSize = window.innerWidth * 0.8;
//     } else{
//         //Con esto si el widht es mayor a el height, el damos un 80% porciento del height al width y al height
//         canvasSize = window.innerHeight * 0.8;
//     }

//     canvas.setAttribute('width', canvasSize);
//     canvas.setAttribute('height', canvasSize);

//     //Para saber el tamaño de cada elemento dividimos el el tamaño total (canvasSize) por 10, ya que la cuadricula sera de 10 x 10
//     elementSize = (canvasSize * 0.98) / 10;

//     startGame();
// }

// const canvas = document.querySelector('#game');
// const game = canvas.getContext('2d');
// let canvasSize;
// let elementSize;

// window.addEventListener('load',setCanvasSize);
// window.addEventListener('resize', setCanvasSize);

// function setCanvasSize() {

//   //version ternario
//   //canvasSize = Math.ceil((window.innerWidth >= window.innerHeight ? window.innerHeight * 0.5 : window.innerWidth * 0.70) / 10) * 10;

//   //Dependiendo del tamaño de la pantalla, va a colocar el tamaño cuadrado del canvas
//   //Al dividir entre 10 y luego aproximar el valor a un entero garantiza que el canvas será un entero múltiplo de 10. Finalmente se multiplica la expresión por 10 para obtener el dato real del canvas

//   if (window.innerWidth >= window.innerHeight) {
//     canvasSize = Math.ceil(window.innerHeight * 0.5 / 10) * 10;
//   } else {
//     canvasSize = Math.ceil(window.innerWidth * 0.70 / 10) * 10;
//   }

//   canvas.setAttribute('width', canvasSize);
//   canvas.setAttribute('height', canvasSize);

//   elementSize = canvasSize / 10;

//   startGame();
// }

// function startGame() {
//   game.font = `${elementSize}px Verdana`;
//   game.textAlign = 'center';
//   game.textBaseline = 'middle';

//   for (let i = 1; i <= 10; i++) {
//     for (let j = 1; j <= 10; j++) {
//       game.fillText(emojis['X'], elementSize * (i - 1/2), elementSize * (j - 1/2));
//     }
//   }
// }

// const canvas = document.querySelector('#game');
// const game = canvas.getContext('2d');
// let elementSize;

// window.addEventListener('load', setCanvasSize);
// window.addEventListener('resize', setCanvasSize);

// function setCanvasSize() {
//   const canvasSize = Math.min(window.innerWidth, window.innerHeight) * 0.7;

//   canvas.setAttribute('width', canvasSize);
//   canvas.setAttribute('height', canvasSize);

//   elementSize = canvasSize / 10.20;

//   startGame();
// }

// function startGame() {
//   game.font = `${elementSize}px Verdana`;
//   game.textAlign = 'center';
//   game.textBaseline = 'middle';

//   const map = maps[2];
//   const mapRows = map.trim().split('\n');
//   const mapRowsCols = mapRows.map(row => row.trim().split(''))

//   console.log({ map, mapRows, mapRowsCols })

//   for (let i = 1; i <= 10; i++) {
//     for (let j = 1; j <= 10; j++) {
//       game.fillText(emojis[mapRowsCols[i - 1][j - 1]], elementSize * (j - 0.42), elementSize * (i - 0.32));
//     }
//   }

// }

// const canvas = document.getElementById('game');
// const game = canvas.getContext("2d");
// let canvasSize;
// let canvasElement;

// //creo un objeto literal del mapa, y agrego una propiedad que es el nivel y otra que es una funcion render
// const map = {
//   kv2: 2,
//   render: function () {
//     if (this.kv2 >= maps.length) {
//       return console.log("Ese mapa no existe")
//     }
//     // Encontramos el mapa y lo preparamos como queremos
//     const Map = maps[this.kv2].match(/[IXO\-]+/g)
//       .map(a => a.split(""))
//     console.log({ Map }, this.kv2)
//     //  le configuramos las propeidades de los elementos que vamos a dibujar
//     game.font = canvasElement + "px Verdana"
//     game.textAlign = "end"
//     // recorremos el mapa para poder obtener las coordenadas de cada una de las posiciones que necesitamos
//     Map.forEach((x, xi) => {
//       x.forEach((y, yi) => {
//         const posX = canvasElement * (xi + 1)
//         const posY = canvasElement * (yi + 1)
//         game.fillText(emojis[y], posY, posX)
//       })
//     })
//   }
// }

// window.addEventListener('load', setCanvasSize);
// window.addEventListener('resize', setCanvasSize)


// function setCanvasSize() {
//   window.innerHeight > window.innerWidth
//     ? canvasSize = window.innerWidth * 0.9
//     : canvasSize = window.innerHeight * 0.7;


//   canvas.setAttribute("height", canvasSize)
//   canvas.setAttribute("width", canvasSize)
//   canvasElement = canvasSize / 10;
//   startGame()
// }


// function startGame() {
//   map.lvl = 1
//   map.render()

// }

// window.addEventListener('keydown', moveKeys);
// const up = document.querySelector('#up').addEventListener('click', moveUp);
// const left = document.querySelector('#left').addEventListener('click', moveLeft);
// const rigth = document.querySelector('#rigth').addEventListener('click', moveRigth);
// const down = document.querySelector('#down').addEventListener('click', moveDown);

// function moveKeys(event){
//   if (event.key == 'ArrowUp') {
//     moveUp();
//   } else if (event.key == 'ArrowLeft'){
//     moveLeft();
//   } else if(event.key == 'ArrowRight'){
//     moveRigth();
//   } else if(event.key == 'ArrowDown'){
//     moveDown();
//   }
// }

// function moveUp(){
//   console.log('Me muevo hacia arriba');
// }
// function moveLeft(){
//   console.log('Me muevo hacia izquierda');
// }
// function moveRigth(){
//   console.log('Me muevo hacia direcha');
// }
// function moveDown(){
//   console.log('Me muevo hacia Abajo');
// }


const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');
const lives = document.querySelector('.lives');
const time = document.querySelector('.time');
const result = document.querySelector('.result')
const record = document.querySelector('.record')
let canvasSize;
let elementSize;
let timeInterval;
let timeStart;
let playerTIme;
let recordTime;

const playerRender = {
  level: 0,
  lives: 3,
  playerPosition: {
    x: undefined,
    y: undefined,
  },
  giftPosition: {
    x: undefined,
    y: undefined,
  },
  bombPosition: {
    x: [],
    y: [],
  },
  levelWin: function (){
    clearInterval(timeInterval)
    console.log("Ganaste")
  },
  showRecord: function() {
    recordTime = localStorage.getItem('record');

    document.querySelector('.resetRecord').addEventListener('click', ()=>{
      location.reload();
      recordTime = localStorage.removeItem('record')
    });

    record.innerText = recordTime
  },
  levelUp: function (){
    if (this.level < (maps.length - 1)) {
      this.level += 1;
      console.log(this.level)
    } else if ((this.level == (maps.length - 1)) ){
      if (playerRender.playerPosition.x == playerRender.giftPosition.x && playerRender.playerPosition.y == playerRender.giftPosition.y) {
        console.log('Impacto con regalo, ultimo nivel')

        
        const record = recordTime

        if (!record) {
          localStorage.setItem('record', playerTIme)
          result.innerHTML = 'Primer record'
          console.log('shimba', {playerTIme, record})
        } else{
          if (record >= playerTIme) {
            localStorage.setItem('record', playerTIme)
            result.innerHTML = 'SUPERASTE EL RECORD';
            clearInterval(timeInterval)
          } else {
            result.innerHTML = 'No superaste el record'
          }
        }
        clearInterval(timeInterval)
      }
      this.levelWin();
    }
    startGame();
  },
  levelLost: function(){
    this.lives--
    console.log(this.lives)

    if (this.lives == 0) {
      this.level *= 0
      console.log('Vuelve a empezar')
      this.lives += 3;
      console.log(this.lives)
      timeStart = undefined;
    } 

    this.playerPosition.x = undefined;
    this.playerPosition.y = undefined;
    startGame();
  },
  movePlayer: function () {
    const x = this.getX('PLAYER', this.playerPosition.x)
    const y = this.getY('PLAYER', this.playerPosition.y)

    game.fillText(emojis['PLAYER'], x, y);
  },
  render: function () {
    if (this.level >= maps.length) {
      return console.log("Ese mapa no existe")
    }
    const map = maps[this.level].match(/[IXO\-]+/g)
      .map(a => a.split(""))
    game.font = `${elementSize}px Verdana`;
    game.textAlign = 'center';
    game.textBaseline = 'middle';

    this.bombPosition.x = [];
    this.bombPosition.y = [];

    game.clearRect(0, 0, canvasSize, canvasSize)
    map.forEach((row, rowIndex) => {
      row.forEach((col, colIndex) => {
        const emoji = emojis[col];
        const posX = this.getX(col, colIndex + 1);
        const posY = this.getY(col, rowIndex + 1);


        if (col == 'O') {
          if (!this.playerPosition.x && !this.playerPosition.y) {
            this.playerPosition.x = colIndex + 1;
            this.playerPosition.y = rowIndex + 1;
          }
        } else if (col == 'I') {
          this.giftPosition.x = colIndex + 1;
          this.giftPosition.y = rowIndex + 1;
        } else if (col == 'X') {
          this.bombPosition.x.push(colIndex + 1);
          this.bombPosition.y.push(rowIndex + 1);
        }



        game.fillText(emoji, posX, posY);
      });
    });

    this.showRecord();

    this.movePlayer();
  },
  getX: function (icon, posicionNumber) {
    if (icon === 'X') {
      return elementSize * ((posicionNumber - 0.42));
    } else if (icon === 'I') {
      return elementSize * ((posicionNumber - 0.48));
    } else if (icon === 'O') {
      return elementSize * ((posicionNumber - 0.48));
    } else if (icon === 'PLAYER') {
      return elementSize * ((posicionNumber - 0.48));
    } else if (icon === 'BOMB_COLLISION') {
      return elementSize * ((posicionNumber - 0.42));
    }
  },
  getY: function (icon, posicionNumber) {
    if (icon === 'X') {
      return elementSize * ((posicionNumber - 0.32));
    } else if (icon === 'I') {
      return elementSize * ((posicionNumber - 0.28));
    } else if (icon === 'O') {
      return elementSize * ((posicionNumber - 0.32));
    } else if (icon === 'PLAYER') {
      return elementSize * ((posicionNumber - 0.20));
    } else if (icon === 'BOMB_COLLISION') {
      return elementSize * ((posicionNumber - 0.32));
    }
  }

}

window.addEventListener('load', setCanvasSize);
window.addEventListener('resize', setCanvasSize);

function setCanvasSize() {
  canvasSize = Math.min(window.innerWidth, window.innerHeight) * 0.7;

  canvas.setAttribute('width', canvasSize);
  canvas.setAttribute('height', canvasSize);

  elementSize = canvasSize / 10.20;

  startGame();
}



function startGame() {
  playerRender.render()
  lives.innerHTML = `Tus vidas son: ${emojis['HEART'].repeat(playerRender.lives)}`

  if (!timeStart) {
    timeStart = Date.now();
    timeInterval = setInterval(()=>{
      playerTIme = Date.now() - timeStart;
      time.innerHTML = `Tiempo: ${playerTIme}`;
    }, 100);
  }
}

// Mapeo entre teclas y direcciones
const keyToDirection = {
  ArrowUp: 'up',
  ArrowLeft: 'left',
  ArrowDown: 'down',
  ArrowRight: 'right',
  w: 'up',
  a: 'left',
  s: 'down',
  d: 'right'
};

const directionToButton = {
  up: document.querySelector('#up'),
  left: document.querySelector('#left'),
  down: document.querySelector('#down'),
  right: document.querySelector('#rigth'),
};

Object.keys(directionToButton).forEach(direction => {
  directionToButton[direction].addEventListener('click', () => {
    move(direction);
  });
});

window.addEventListener('keydown', moveByKey);

function moveByKey(event) {
  const direction = keyToDirection[event.key];
  if (direction) {
    move(direction);
  }
}

function move(direction) {
  if (direction == 'up') {
    if ((playerRender.playerPosition.y) >= 2) playerRender.playerPosition.y -= 1
  } else if (direction == 'left') {
    if ((playerRender.playerPosition.x) >= 2) playerRender.playerPosition.x -= 1
  } else if (direction == 'right') {
    if (playerRender.playerPosition.x <= 9) playerRender.playerPosition.x += 1
  } else if (direction == 'down') {
    if (playerRender.playerPosition.y <= 9) playerRender.playerPosition.y += 1
  }

  if (playerRender.playerPosition.x == playerRender.giftPosition.x && playerRender.playerPosition.y == playerRender.giftPosition.y) {
    console.log('colision jugador con regalo')
    playerRender.levelUp();
  }

  playerRender.bombPosition.x.forEach((xBombs, indexBomb) =>{
    let yBombs = playerRender.bombPosition.y[indexBomb]
    if (playerRender.playerPosition.x == xBombs && playerRender.playerPosition.y == yBombs) {
      console.log('Colision Jugador con bombas')
      playerRender.levelLost();
    }

  })

  //console.log('Posicion jugador', playerRender.playerPosition, 'Posicion bomba', playerRender.bombPosition)

  playerRender.movePlayer();
  startGame();
}


document.querySelector('.resetGame').addEventListener('click', ()=>{
  location.reload()
})





