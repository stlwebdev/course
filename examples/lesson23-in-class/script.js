const toggle = document.querySelector("#toggle");
const body = document.querySelector("body");
toggle.addEventListener("click", () => {
    body.classList.toggle("dark");
    body.classList.toggle("light");
});

const toggle2 = document.querySelector("#toggle2");
toggle2.addEventListener("click", () => {
    body.classList.toggle("dark");
    body.classList.toggle("light");
});
