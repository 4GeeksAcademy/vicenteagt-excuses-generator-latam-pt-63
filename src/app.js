import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = calculateRandomIndex;

let whos = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let actions = ['ate', 'peed', 'crushed', 'broke'];
let whats = ['my homework', 'my phone', 'the car'];
let whens = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

function calculateRandomIndex(excuseArray) {
    let positionArray = Math.floor(Math.random() * excuseArray.length);
    return positionArray
}

let randomWhos = calculateRandomIndex(whos);
let randomActions = calculateRandomIndex(actions);
let randomWhats = calculateRandomIndex(whats);
let randomWhens = calculateRandomIndex(whens);

let excuseGenerated = (whos[randomWhos] + " " + actions[randomActions] + " " + whats[randomWhats] + " " + whens[randomWhens]);
document.getElementById("excuse").innerText = excuseGenerated


