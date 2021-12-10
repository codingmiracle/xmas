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

class Xmastree {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.height = height / 2;
        this.width = height / Math.sqrt(5);
        ctx = canvas.getContext("2d");
    }

    draw() {
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.with, this.height);
        ctx.fillStyle = "green";
        ctx.fill();
    }

    update() {

    }
}


class MouseBubble {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = 30;
        this.resize = false;
        this.show = false;
        this.clicked = false;
        document.addEventListener("click", this.handleClick)
    }

    draw() {
        if (this.show) {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
            ctx.arc(this.x, this.y, this.size - 5, 0, 2 * Math.PI);
            ctx.strokeStyle = "white";
            ctx.stroke();
        }
        if (this.size > 20 && !this.resize) {
            this.size -= 1;
        } else {
            this.resize = true
            this.size += 1;
        }
        if (this.size < 30 && this.resize) {
            this.size += 1;
        } else {
            this.resize = false;
            this.size -= 1;
        }
    }

    setVisible() {
        this.show = true;
    }

    hide() {
        this.show = false;
    }

    isClicked() {
        return this.clicked;
    }

    reset() {
        this.clicked = false;
        this.show = false;
    }

    handleClick() {
        if (this.isHovered()) {
            this.clicked = true;
        }
    }

    isHovered() {
        let xdiff = clientX - this.x;
        let ydiff = clientY - this.y;
        if (Math.pow(xdiff) + Math.pow(ydiff) <= Math.pow(this.size)) {
            return true;
        }
        return false;
    }
}

mouseBubbles = new Array();

function drawBubbles() {
    mouseBubbles.array.forEach(bubble => {
        bubble.draw();
    });
}

// - add christmastree decoration
// - test Mouse bubbles
// - add Geschenke 
// - add laptop with link to description page
// click bubble on tree geschenke, ...