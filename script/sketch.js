var width = document.width;
var height = document.height;
var canvas = document.getElementById("screen");
var ctx = canvas.getContext("2d");

var nameplaceholder = document.getElementById("nameplaceholder")

// speed adjustments
var speed = 30;


function getParameter(parameterName) {
    let parameters = new URLSearchParams(window.location.search);
    return parameters.get(parameterName);
}


function updateSize() {
    width = window.innerWidth;
    height = window.innerHeight;
    if (width != canvas.width && height != canvas.height) {
        groundflakes = new Array();
        snowflakes = new Array();
        initSnow();
    }
    canvas.width = width;
    canvas.height = height;
}

function drawbg() {
    ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, width, height);
    groundflakes.forEach(function (flake) {
        flake.draw();
    })
}

function update() {
    updateSize();
    updateSnow();
}

function draw() {
    drawbg()
    drawSnow();
    tree.draw();
    requestAnimationFrame(draw);
}

function handleClick(event) {

}

function reset() {
    addEventListener("click", handleClick);
    // edit text by name
    nameplaceholder.innerHTML = getParameter("name");
    updateSize();
    initSnow();
    requestAnimationFrame(draw);
}

tree = new Xmastree(100, 100);


var hupdate = setInterval(update, 1000 / speed);

reset();
