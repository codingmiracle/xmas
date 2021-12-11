var tree = document.getElementsByClassName("tree");
var layers = document.getElementsByClassName("layer");
var lines = document.getElementsByClassName("line");
var stars = document.getElementsByClassName("star");
var present = document.getElementsByClassName("pressie");
var bubbles = document.getElementsByClassName("bauble");

console.log(tree);
console.log(layers);
console.log(lines);
console.log(stars);
console.log(bubbles);
console.log(present);

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