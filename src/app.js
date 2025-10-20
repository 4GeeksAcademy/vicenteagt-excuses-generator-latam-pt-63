import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = generarNumero;

// arrays
let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

// funcion para calcular indice random
function generarNumero(myArray) {
    let posicion = Math.floor(Math.random() * myArray.length);
    return posicion
}

// generacion de indices dentro de cada array

let randomWho = generarNumero(who);
let randomAction = generarNumero(action);
let randomWhat = generarNumero(what);
let randomWhen = generarNumero(when);

// generar strings de cada array

let stringWho = who[randomWho];
let stringAction = action[randomAction];
let stringWhat = what[randomWhat];
let stringWhen = when[randomWhen];



let resultado = (stringWho + " " + stringAction + " " + stringWhat + " " + stringWhen);
document.getElementById("excuse").innerText = resultado


