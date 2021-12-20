var width = document.width;
var height = document.height;
var canvas = document.getElementById("screen");
var ctx = canvas.getContext("2d");
var bg = document.getElementById("bg-image");
var mouseX;
var mouseY;

var nameplaceholder = document.getElementById("nameplaceholder")

// speed adjustments
var speed = 30;


function getParameter(parameterName) {
    let parameters = new URLSearchParams(window.location.search);
    return parameters.get(parameterName);
}

function mobileCheck() {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];
    
    return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
    });
};

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  

function updateSize() {
    width = window.innerWidth;
    height = window.innerHeight;
    if (width != canvas.width || height != canvas.height) {
        canvas.width = width;
        canvas.height = height;
        groundflakes = new Array();
        snowflakes = new Array();
        initSnow();
    }

}

function drawbg() {
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

function reset() {
    // edit text by name
    nameplaceholder.innerHTML = getParameter("name");
    if(mobileCheck()) {
        bg.style.display = "none";
        document.getElementsByClassName(".tooltip.pressie")[0].style.left = 0;
        document.getElementsByClassName("overlay")[0].style.display = "block";
    }
    updateSize();
    initSnow();
    document.addEventListener('mousemove', (event) => {
        mouseX = event.clientX;
        mouseY = event.clientY;
    })
    resetanimations();
}

requestAnimationFrame(draw);

var hupdate = setInterval(update, 1000 / speed);

reset();
