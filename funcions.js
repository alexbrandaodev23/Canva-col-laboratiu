//const canvas = document.querySelector("canvas");
var canvas = document.querySelector("#canvas");
var ctx = canvas.getContext("2d");

canvas.width = 600;
canvas.height = 600;
canvas.style.background = "#0FF";


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



//dibujo redonda

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);


    ctx.beginPath();
    ctx.arc(mouseX, mouseY, 12, 0, 2 * Math.PI, true);
    ctx.fillStyle = "#FF6A6A";
    ctx.fill();

    requestAnimationFrame(update);
}
update();








/*function elePos(e) {
    var dx = e.offsetLeft;
    var dy = e.offsetTop;
    while (e.offsetParent) {
        e = e.offsetParent;
        dx += e.offsetLeft;
        dy += e.offsetTop;
    }
    return { "dx": dx, "dy": dy };
}

var clientx = 0.0;
var clienty = 0.0;

var cv = document.getElementById('canvas');
var pos = elePos(cv);
var ctx = cv.getContext('2d');



cv.addEventListener('mousemove', function (e) {
    clientx = e.clientX;
    clienty = e.clientY;
    ctx.arc(clientx, clienty, 10, 0, 2 * Math.PI);
    ctx.stroke();
})

function draw() {
    var x = clientx - pos.dx;
    var y = clienty - pos.dy;
    window.requestAnimationFrame(draw);

};
window.requestAnimationFrame(draw);*/

