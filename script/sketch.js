var width = document.width;
var height = document.height;
var canvas = document.getElementById("screen");

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
        canvas.width = width;
        canvas.height = height;
        groundflakes = new Array();
        for (let i = 0; i < Math.floor(width / 40); i++) {
            groundflakes.push(new Snowflake(height))
            groundflakes[i].itensity = 1;
        }
    }
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

var hupdate = setInterval(update, 1000 / speed);

reset();
