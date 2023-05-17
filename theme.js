
// // if(seletedTool === "brush"){
// //     ctx.lineTo(e.offsetX, e.offsetY);
// //     ctx.stroke();
// // } else if(seletedTool === "rectangle"){
// //     drawRect(e);
// // }

// // HTML
// // JavaScript
// const eraserButton = document.getElementById("eraser");
// let isErasing = false;

// // Set the initial drawing settings
// // Add event listeners
// eraserButton.addEventListener("click", toggleEraserMode);
// canvas.addEventListener("mousedown", startDrawing);
// canvas.addEventListener("mousemove", draw);
// canvas.addEventListener("mouseup", stopDrawing);

// function toggleEraserMode() {
//     isErasing = !isErasing;
//     if (isErasing) {
//         context.strokeStyle = "#FFFFFF"; // white color for erasing
//     } else {
//         context.strokeStyle = "#000000"; // black color for drawing
//     }
// }
// function startDrawing(e) {
//     if (isErasing) {
//         // Start erasing
//         context.globalCompositeOperation = "destination-out";
//     } else {
//         // Start drawing
//         context.globalCompositeOperation = "source-over";
//     }
// }
// function draw(e) {
//     if (e.buttons !== 1) return;
// }

// function stopDrawing() {
//     context.closePath();
// }
