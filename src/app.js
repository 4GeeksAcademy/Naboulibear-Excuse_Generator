import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //h
let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

function getRandomElement (array) { 
let index = Math.floor(Math.random()*array.length )
let randomElement = array[index] 
return randomElement   
}

function getExcuse(){

let randomWho = getRandomElement (who)
let randomAction = getRandomElement (action)
let randomWhat = getRandomElement (what)
let randomWhen = getRandomElement (when)

let excuse = randomWho + " " + randomAction + " " + randomWhat + " " + randomWhen
return excuse 



} 

let finalExcuse = document.getElementById ("Excuse")
finalExcuse.innerHTML = getExcuse ()



};
