//const canvas = document.querySelector("canvas");
/*const express = require('express');
const {createServer} = require ('node:http');
const {join} = require('node:path');
const {server} = require('socket.io');

const app = express();



*/
//Agregar nombre del usuario
const formEntrada = document.getElementById('form-entrada');
const inputName = document.getElementById('input-name');
const errorNom = document.getElementById('error-nom');
const enter = document.getElementById('enter');
const canvasColb = document.getElementById('canvaColb');
var nom = "";
let qt = "";

formEntrada.addEventListener('submit', (e) => {
    e.preventDefault();

    const valor = inputName.value.trim();
    
    if (valor === '') {
        errorNom.textContent = 'En nom no pot estar buit';
        errorNom.hidden = false;
        return;
    }
    if(valor.lenght > 20){
        errorNom.textContent = 'Màxim 20 carácters';
        errorNom.hidden = false;
        return;
    }
    enter.hidden = true;
    canvasColb.hidden = false;
    nom = valor;
    qt = ctx.measureText(nom);
    canvasPos = getPosition(canvas);


});



var canvas = document.querySelector("#canvas");
var ctx = canvas.getContext("2d");

canvas.width = 600;
canvas.height = 600;
canvas.style.background = "#FFF";


//deteccion mouse
var canvasPos = getPosition(canvas);
var mouseX = 0;
var mouseY = 0;


canvas.addEventListener("mousemove", setMousePosition, false);

function setMousePosition(e) {
    mouseX = e.clientX - canvasPos.x;
    mouseY = e.clientY - canvasPos.y;
    
}
function getPosition(el) {
    var xPosition = 0;
    var yPosition = 0;


    while (el) {
        xPosition += (el.offsetLeft - el.scrollLeft + el.clientLeft);
        yPosition += (el.offsetTop - el.scrollTop + el.clientTop);
        el = el.offsetParent;
    }

    return {
        x: xPosition,
        y: yPosition
    };


}

//random color

var cr = 'rgb('+
      Math.floor(Math.random()*256)+','+
      Math.floor(Math.random()*256)+','+
      Math.floor(Math.random()*256)+')';

var cr2 = 'rgb('+
      Math.floor(Math.random()*256)+','+
      Math.floor(Math.random()*256)+','+
      Math.floor(Math.random()*256)+')';





function update() {
    
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle =cr;
    ctx.fillRect(mouseX +15, mouseY - 8, (qt.width + 10), 10);
    
    
    ctx.fillStyle = '#000';
    ctx.fillText(nom, mouseX +20, mouseY, 500);

    
    
    
    
    ctx.beginPath();
    ctx.arc(mouseX, mouseY, 10, 0, 2 * Math.PI, true);
    ctx.fillStyle = cr2 ;
    ctx.fill();

    requestAnimationFrame(update);
}
update();
