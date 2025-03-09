// seclec the button first
const button = document.getElementById("but");
// add event listener
button.addEventListener("click", function () {
    button.textContent = "You clicked me!";
});

// get the ul element
const ul = document.querySelector("#list");
// get the add button
const add = document.getElementById("add");
// add event listener
let c = 1;
add.addEventListener("click", function () {
    // create a new list item
    const li = document.createElement("li");
    // add text to the list item
    li.textContent = `new item ${c}`;
    // append the list item to the ul
    ul.appendChild(li);
    c++;
});
