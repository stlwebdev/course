let count = 0;
const button = document.getElementById("counter");
const display = document.getElementById("count");

button.addEventListener("click", () => {
    count++;
    display.textContent = count;
});

document.getElementById("theme-toggle").addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");
    document.body.classList.toggle("light-theme");
});
