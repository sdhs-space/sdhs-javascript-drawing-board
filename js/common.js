const $canvas = document.getElementById("canvas-board");
const context = $canvas.getContext("2d");
let isMouseDown = false;

$canvas.width = 1200;
$canvas.height = 600;

// 테두리
context.beginPath();
context.rect(0, 0, $canvas.width, $canvas.height);
context.stroke();

// 그림판
$canvas.addEventListener("mousedown", function (event) {
    isMouseDown = true;
    context.beginPath();
    context.moveTo(event.offsetX, event.offsetY);
});

$canvas.addEventListener("mousemove", function (event) {
    if (!isMouseDown) return;
    context.lineTo(event.offsetX, event.offsetY);
    context.stroke();
});

$canvas.addEventListener("mouseup", function () {
    isMouseDown = false;
});

$canvas.addEventListener("mouseenter", function () {
    context.beginPath();
});
