//find the button element
var button = document.querySelector("button");
button.addEventListener("click", function () {
    //find the p element
    var p = document.querySelector("#my-p");
    p.style.color = "red";
    p.style.fontSize = "24px";
});

// highlighting example
const p2 = document.getElementById("second-p");
p2.addEventListener("mouseover", () => {
    p2.classList.add("highlight");
});
p2.addEventListener("mouseout", () => {
    p2.classList.remove("highlight");
});
