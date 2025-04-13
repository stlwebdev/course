const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// let's draw a rectangle
ctx.fillStyle = "blue";
ctx.fillRect(20, 20, 150, 100);
// let's draw a outline rectangle
ctx.strokeStyle = "yellow";
ctx.lineWidth = 5;
ctx.strokeRect(130, 130, 100, 100);
// let's draw a circle
ctx.beginPath();
ctx.arc(300, 100, 50, 0, Math.PI * 2);
ctx.fillStyle = "green";
ctx.fill();
// draw a half circle
ctx.beginPath();
ctx.arc(300, 200, 50, 0, Math.PI);
ctx.fillStyle = "green";
ctx.fill();
// draw a line
ctx.beginPath();
ctx.moveTo(400, 100);
ctx.lineTo(450, 200);
ctx.strokeStyle = "purple";
ctx.lineWidth = 5;
ctx.stroke();
// draw some text
ctx.font = "30px Arial";
ctx.fillStyle = "black";
ctx.fillText("Hello Canvas", 200, 300);
