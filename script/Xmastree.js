var container = document.getElementsByClassName("tree-container")[0];
var tree = document.getElementsByClassName("tree")[0];
var layers = document.getElementsByClassName("layer");
var lines = document.getElementsByClassName("line");
var stars = document.getElementsByClassName("star");
var present = document.getElementsByClassName("pressie");
var bubbles = document.getElementsByClassName("bauble");
var tooltips = document.getElementsByClassName("tooltip");

function decorateTree() {
    tooltips[1].style.visibility = "hidden";
    setTimeout(() => {
        tooltips[0].style.visibility = "visible";
        tooltips[0].style.animation = "fall-in 1.5s";
    }, 500);
    for(let i in lines.length) {
        lines[i].style.animation = "zoom-in 1s";
        lines[i].style.visibility = "visible";
    }
    for(let i in lines.length) {
        bubbles[i].style.animation = "zoom-in 1s";
        bubbles[i].style.visibility = "visible";
    }
}

function resetanimations() {
    tooltips[0].style.visibility = "hidden";
    tooltips[0].style.animation = "";
    tooltips[1].style.visibility = "visible";
}
class Bubble {
    constructor(x, y, size) {

    }
}


// class MouseBubble {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//         this.size = 30;
//         this.resize = false;
//         this.show = true;
//         this.clicked = false;
//         this.fcounter = 0;
//         document.addEventListener("click", this.handleClick)
//     }

//     draw() {
//         if (this.show) {
//             ctx.beginPath();
//             ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
//             ctx.strokeStyle = "white";
//             ctx.stroke();
//             ctx.beginPath()
//             ctx.arc(this.x, this.y, this.size - 5, 0, 2 * Math.PI);
//             ctx.fillStyle = "white";
//             ctx.fill();
//         }
//         if(this.isHovered()) {
//             ctx.font = "20px Arial white"
//             ctx.fillText("Click here !", this.x, this.y - this.size - 20);
//         }
//         if (this.fcounter > 3) {
//             if (this.size > 20 && !this.resize) {
//                 this.size -= 1;
//             } else {
//                 this.resize = true
//                 this.size += 1;
//             }
//             if (this.size < 30 && this.resize) {
//                 this.size += 1;
//             } else {
//                 this.resize = false;
//                 this.size -= 1;
//             }
//             this.fcounter = 0;
//         }
//         this.fcounter += 1;
//     }

//     setVisible() {
//         this.show = true;
//     }

//     hide() {
//         this.show = false;
//     }

//     isClicked() {
//         return this.clicked;
//     }

//     reset() {
//         this.clicked = false;
//         this.show = false;
//     }

//     isHovered() {
//         let xdiff = mouseX - this.x;
//         let ydiff = mouseY - this.y;
//         if (Math.pow(xdiff) + Math.pow(ydiff) <= Math.pow(this.size)) {
//             return true;
//         }
//         return false;
//     }

//     handleClick() {
//         if (this.isHovered()) {
//             console.log(this);
//             this.clicked = true;
//             this.hide();
//         }
//     }
// }

// mouseBubbles = new Array();

// function handlemouseBubbles() {
//     mouseBubbles.forEach(bubble => {
//         bubble.handleClick();
//     });
// }

// function drawmouseBubbles() {
//     mouseBubbles.forEach(bubble => {
//         bubble.draw();
//     });
// }


// - add christmastree decoration
// - test Mouse bubbles
// - add Geschenke 
// - add laptop with link to description page
// click bubble on tree geschenke, ...