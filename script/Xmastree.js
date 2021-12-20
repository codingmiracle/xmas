var lines = document.getElementsByClassName("line");
var present = document.getElementsByClassName("pressie");
var bubbles = document.getElementsByClassName("bauble");
var tooltips = document.getElementsByClassName("tooltip");

console.log(bubbles);

function decorateTree() {
    tooltips[1].style.visibility = "hidden";
    setTimeout(() => {
        tooltips[0].style.visibility = "visible";
        tooltips[0].style.animation = "fall-in 1.5s";
        if(!mobileCheck()) {
            document.getElementsByClassName("box")[0].style.animation = "fall-in .5s";
            document.getElementsByClassName("box")[0].style.visibility = "visible";
        }
    }, 500);
    for(let  i = 0; i<5;i++) {
        bubbles[i].style.backgroundColor = getRandomColor();
        if(mobileCheck()) {
            bubbles[i].style.display = "none";
        }
        let size = Math.floor(Math.random() * 10) + 10;
        bubbles[i].style.width = size;
        bubbles[i].style.height = size;
    }
    for(let i = 0; i < lines.length; i++) {
        lines[i].style.visibility = "visible";
    }
    for(let i = 0; i < bubbles.length; i++) {
        if(i>5) {
            setTimeout(() => {
                bubbles[i].style.animation = "zoom-in 0.5s";
                bubbles[i].style.visibility = "visible";
            }, Math.random()*1000);
        } else {
            setTimeout(() => {
                bubbles[i].style.animation = "zoom-in 0.5s";
                bubbles[i].style.visibility = "visible";
            }, (Math.random()*500) + 500);
        }
        
    }
}

function resetanimations() {
    tooltips[0].style.visibility = "hidden";
    tooltips[0].style.animation = "";
    tooltips[1].style.visibility = "visible";
    document.getElementsByClassName("box")[0].style.animation = "";
        document.getElementsByClassName("box")[0].style.visibility = "hidden";
    for(let i = 0; i < lines.length; i++) {
        lines[i].style.visibility = "hidden";
    }
    for(let i = 0; i < bubbles.length; i++) {
        setTimeout(() => {
            bubbles[i].style.animation = "";
            bubbles[i].style.visibility = "hidden";
        }, Math.random()*1000);
    }
}

function closepopup() {
    document.getElementsByClassName("overlay")[0].style.display = "none";
}

//drag and drop decoration:

interact('.bauble')
  .draggable({
    onmove: function(event) {
      const target = event.target;

      const dataX = target.getAttribute('data-x');
      const dataY = target.getAttribute('data-y');
      const initialX = parseFloat(dataX) || 0;
      const initialY = parseFloat(dataY) || 0;

      const deltaX = event.dx;
      const deltaY = event.dy;

      const newX = initialX + deltaX;
      const newY = initialY + deltaY;

      target
        .style
        .transform = `translate(${newX}px, ${newY}px)`;

      target.setAttribute('data-x', newX);
      target.setAttribute('data-y', newY);
    }
  })

  interact('.dropzone')
  .dropzone({
    accept: '.bauble',
    overlap: 0.75,
    ondropactivate: function (event) {
      const item = event.relatedTarget
      item.classList.add('dragging')
    },
    ondropdeactivate: function (event) {
      const item = event.relatedTarget
      item.classList.remove('dragging', 'cannot-drop')
    },
    ondragenter: function(event) {
      const item = event.relatedTarget
      item.classList.remove('cannot-drop')
      item.classList.add('can-drop')
    },
    ondragleave: function(event) {
      const item = event.relatedTarget
      item.classList.remove('can-drop')
      item.classList.add('cannot-drop')
    },
    
  })


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


// - add Geschenke 
// - add laptop with link to description page
// - add present page
// - link with myAwesomewebsite