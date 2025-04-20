const canvas = document.getElementById("mycanvas");
const ctx = canvas.getContext("2d");
const img = new Image();
img.src = "smile.png";
img.onload = () => ctx.drawImage(img, 10, 10, 100, 100);
const gradient = ctx.createLinearGradient(0, 0, 200, 0);
gradient.addColorStop(0, "red");
gradient.addColorStop(1, "blue");
ctx.fillStyle = gradient;
ctx.fillRect(120, 100, 200, 100);
let x = 0;
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillRect(x, 300, 30, 30);
    x += 2;
    requestAnimationFrame(animate);
}
animate();
