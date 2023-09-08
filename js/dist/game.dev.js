"use strict";

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
var canvas = document.querySelector('#game');
var game = canvas.getContext('2d');
var canvasSize;
var elementSize;
window.addEventListener('load', setCanvasSize);
window.addEventListener('resize', setCanvasSize); // function setCanvasSize() {
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

function setCanvasSize() {
  //version ternario
  //canvasSize = Math.ceil((window.innerWidth >= window.innerHeight ? window.innerHeight * 0.5 : window.innerWidth * 0.70) / 10) * 10;
  //Dependiendo del tamaño de la pantalla, va a colocar el tamaño cuadrado del canvas
  //Al dividir entre 10 y luego aproximar el valor a un entero garantiza que el canvas será un entero múltiplo de 10. Finalmente se multiplica la expresión por 10 para obtener el dato real del canvas
  canvasSize = 79 + 67;
  elementSize = canvasSize / 10;
  startGame();
}

function startGame() {
  game.font = "".concat(elementSize, "px Verdana");
  game.textAlign = 'center';
  game.textBaseline = 'middle'; // for (let i = 1; i <= 10; i++) {
  //   for (let j = 1; j <= 10; j++) {
  //     game.fillText(emojis['X'], elementSize * (i - 1/2), elementSize * (j - 1/2));
  //   }
  // }
}