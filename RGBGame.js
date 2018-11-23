
//Seleccionamos los cuadrados
var squares = document.querySelectorAll(".square");

//Seleccionamos el span que indica si es correcto o incorrecto el cuadro elegido
var messageDispaly = document.getElementById("message");

//Seleccionamos el encabezado de la pagina
var head = document.getElementById("head");

//Seleccionamos el boton de juego nuevo (new color)
var resetBt = document.getElementById("reset");

//Seleccionamos el SPAN en el titulo donde se muestra el color que se debe buscar
var colorDispaly = document.querySelector("span");

var easyBtn = document.getElementById("easy");
var hardBtn = document.getElementById("hard");

var pickedColor;


//Funcion que genera un color RGB random.
function getRandomRgb() {
    var num = Math.round(0xffffff * Math.random());
    var r = num >> 16;
    var g = num >> 8 & 255;
    var b = num & 255;
    return 'RGB(' + r + ', ' + g + ', ' + b + ')';
  }

//Funcion que genera un numero random entre dos valores
function getRandomArbitrary(min, max) {
    var azar = Math.round(Math.random() * (max - min) + min)    ;
    return azar;
}


//Funcion que asigna a cada cuadro un color generado al azar.
function squareColorGenerator(){

        for (var i = 0; i < squares.length; i++) {
            //Asignacion de color generado al azar
            squares[i].style.backgroundColor = getRandomRgb();   

            }
    }

//Funcion que cambia el color de cada cuadro asi tambien el de la cabezar por el color elegido.
function changeColor(color){
    for (var index = 0; index < squares.length; index++) {
        squares[index].style.backgroundColor = color;
        
    }
    head.style.backgroundColor = color;
    }

function newColor(a,b){
        //Creamos una variable que con tiene un numero al azar entre 0 y 5 el cual corresponde a un cuadrado
        var randomNum = getRandomArbitrary(a,b);
        console.log(randomNum);
        //Creamos una variable que toma el color RGB del cuadrado seleccionado anteriormente
        pickedColor = squares[randomNum].style.backgroundColor;
        console.log(pickedColor);
        //Se muestra en el titulo el color que se debe buscar
        colorDispaly.textContent = pickedColor.toUpperCase();
        return pickedColor;
}

squareColorGenerator();
newColor(0,5);
resetBt.addEventListener("click", function(){
    if (easyBtn.classList.contains("btn-dark")===true) {
        squareColorGenerator();
        newColor(0,2);
    }
    else{
        squareColorGenerator();
        newColor(0,5);

    }

})


for (var i = 0; i < squares.length; i++) {
    //Asignamos un eventListener a cada div
    squares[i].addEventListener("click", function(){
    var selectedColor =  this.style.backgroundColor;
    //Si el cuadro seleccionado contiene el color correcto se muestra el mensaje Correct! y cambia el color de cada cuadro por el color ganador
        if (selectedColor === pickedColor) {
            messageDispaly.textContent = "Correct!"
            changeColor(pickedColor);    
            resetBt.textContent = "Play Again?";
    }
    //Si no es el color correcto se mustra el mensaje Try again
    else{
            this.style.background = "#232323";
            messageDispaly.textContent = "Try again";
        }
        })}



easyBtn.addEventListener("click", function(){
    easyBtn.classList.replace("btn-secondary", "btn-dark");
    hardBtn.classList.replace("btn-dark", "btn-secondary");
    for (var i = 3; i < squares.length; i++) {
        squares[i].style.display = "none";
        
    }
    squareColorGenerator();
    newColor(0,2);
})

hardBtn.addEventListener("click", function(){
    hardBtn.classList.replace("btn-secondary", "btn-dark");
    easyBtn.classList.replace("btn-dark", "btn-secondary");
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.display = "initial";        
    }
    squareColorGenerator();
    newColor(0,5);

})