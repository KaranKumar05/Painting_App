// Buttons Dropdown 
let dropdownToggle = document.querySelector(".dropdown-toggle");
let dropdownMenu = document.querySelector(".dropdown-menu");
let dropdownButtons = document.querySelectorAll(".dropdown-menu button");

dropdownToggle.addEventListener("click", () => {
  dropdownMenu.classList.toggle("show");
});
dropdownButtons.forEach((button) => {
  button.addEventListener("click", () => {
    dropdownMenu.classList.remove("show");
  });
});
// Save Btn js
let saveBtn = document.querySelector('#saveBtn');

saveBtn.addEventListener('click', function () {
  let imageData = canvas.toDataURL('image/png');
  let downloadLink = document.createElement('a');
  downloadLink.href = imageData;
  downloadLink.download = 'my-painting.png';
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
});
// Clear Btn js 
function clear_canvas() {
  context.fillStyle = initial_bgColor;
  context.clearRect(0, 0, canvas.width, canvas.height)
  context.fillRect(0, 0, canvas.width, canvas.height)

  undo_array = [];
  index = -1;
}
// Undo Btn js 
//parameters
let undo_array = [];
let index = -1;

function undo_last() {
  if (index <= 0) {
    clear_canvas();
  } else {
    index -= 1;
    undo_array.pop();
    context.putImageData(undo_array[index], 0, 0)
  }
}

// Shapes button dropdown
let dropdownToggle_2 = document.querySelector(".dropdown-toggle-2");
let dropdownMenu_2 = document.querySelector(".dropdown-menu-2");
let dropdownButtons_2 = document.querySelectorAll(
  ".dropdown-menu-2 button"
);
dropdownToggle_2.addEventListener("click", () => {
  dropdownMenu_2.classList.toggle("show");
});
dropdownButtons_2.forEach((button) => {
  button.addEventListener("click", () => {
    dropdownMenu_2.classList.remove("show");
  });
});

// Canvas js  
let canvas = document.querySelector("#canvas");

canvas.width = canvas.offsetWidth
canvas.height = canvas.offsetHeight

let context = canvas.getContext("2d");
let initial_bgColor = "white"
context.fillStyle = initial_bgColor;
context.fillRect(0, 0, canvas.width, canvas.height)
// color drawing start with 
let initial_color = "black";
// Set colors js 
function change_color(element) {
  initial_color = element.style.background;
}
// initial thickenss of pen
let initial_width = "2";

// Gettinf Thickness Value from dropdown 
let thickness = document.querySelector("#thickness");
thickness.addEventListener("change", function () {
  // alert(thickness.value);
  initial_width = thickness.value;
});

// without any event initial drawing fasle
let drawing = false;
// mouse function for devices connected with mouse
canvas.addEventListener("mousedown", start, false);
canvas.addEventListener("mousemove", draw, false);

// To stop the Drawing When click is relesed 
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

  // Undo button js for mouse 
  if (event.type != 'mouseout') {
    undo_array.push(context.getImageData(0, 0, canvas.width, canvas.height));
    index += 1;
  }
}

// touch function for Touch screen devices
canvas.addEventListener("touchstart", start_touch, false);
canvas.addEventListener("touchmove", draw_touch, false);
canvas.addEventListener("touchend", stop, false);
function start_touch(event) {
  drawing = true;
  let touch = event.touches[0];
  context.beginPath();
  context.moveTo(touch.pageX - canvas.offsetLeft, touch.pageY - canvas.offsetTop)
  event.preventDefault();
}

function draw_touch(event) {
  if (drawing) {
    let touch = event.touches[0];
    context.lineTo(touch.pageX - canvas.offsetLeft, touch.pageY - canvas.offsetTop)
    context.strokeStyle = initial_color;
    context.lineWidth = initial_width;
    context.lineCap = "Round";
    context.lineJoin = "Round";
    context.stroke();
  }
  event.preventDefault();
}

// To stop the Drawing When click is relesed 
canvas.addEventListener("touchend", stop, false);

function stop(event) {
  if (drawing) {
    context.stroke();
    context.closePath();
    drawing = false;
  }
  event.preventDefault();

  // undo button for touch devices 
  if (event.type != 'mouseout') {
    undo_array.push(context.getImageData(0, 0, canvas.width, canvas.height));
    index += 1;
  }
}


// Js for Active class 
let seletedTool = "brush";
toolBtn = document.querySelectorAll(".tool");

toolBtn.forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelector(".active").classList.remove("active");
    btn.classList.add("active")
    seletedTool = btn.id;
    console.log(seletedTool)
  })
});

const letDrawing = (e) => {
  if (!drawing) return;

  if (seletedTool === "brush") {
    ctx.lineTo(e.offsetX, e.offsetY)
    ctx.stroke()
  }else if(seletedTool === "rectangle"){
    drawRect(e);
  }else if(seletedTool === "brush"){

  }else if(seletedTool === "brush"){

  }else if(seletedTool === "brush"){

  }else if(seletedTool === "brush"){
}
}

