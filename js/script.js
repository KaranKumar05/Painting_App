let canvas = document.querySelector("#canvas");
canvas.width = window.innerWidth - 50;
canvas.height = 450;

let context = canvas.getContext("2d");
let initial_bgColor = "white"
context.fillStyle = initial_bgColor;
context.fillRect(0, 0, canvas.width, canvas.height)

// color drawing start with 
let initial_color = "black";
// Working of Default Colors 

// not Working for defaults color
function change_color(element) {
    initial_color = element.style.background;
}

// initial thickenss of pen
let initial_width = "2";

let thickness = document.querySelector("#thickness");
thickness.addEventListener("change", function () {
    // alert(thickness.value);
    initial_width = thickness.value;
});

// woud'nt do anythind before click or touch 
let drawing = false;

// Undo Button Parameters
let undo_array = [];
let index = -1;

// touch function foe moblie and tablets
canvas.addEventListener("touchstart", start, false);
canvas.addEventListener("touchmove", draw, false);

// mouse function for computer
canvas.addEventListener("mousedown", start, false);
canvas.addEventListener("mousemove", draw, false);

// To stop the Drawing When click is relesed 
canvas.addEventListener("touchend", stop, false);
canvas.addEventListener("mouseup", stop, false);
canvas.addEventListener("mouseout", stop, false);

function start(event) {
    drawing = true;
    context.beginPath();
    context.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop)
    event.preventDefault();
}

function draw(event) {
    if (drawing) {
        context.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop)
        context.strokeStyle = initial_color;
        context.lineWidth = initial_width;
        context.lineCap = "Round";
        context.lineJoin = "Round";
        context.stroke();
    }
    event.preventDefault();
}
function stop(event) {
    if (drawing) {
        context.stroke();
        context.closePath();
        drawing = false;
    }
    event.preventDefault();

    // Undo button js 
    if (event.type != 'mouseout') {
        undo_array.push(context.getImageData(0, 0, canvas.width, canvas.height));
        index += 1;
    }
}

// Clear Button js
function clear_canvas() {
    context.fillStyle = initial_bgColor;
    context.clearRect(0, 0, canvas.width, canvas.height)
    context.fillRect(0, 0, canvas.width, canvas.height)

    undo_array = [];
    index = -1;
}

// Undo buttons js 
function undo_last() {
    if(index <= 0){
        clear_canvas();
    }else {
        index -= 1;
        undo_array.pop();
        context.putImageData(undo_array[index], 0, 0)
    }

}