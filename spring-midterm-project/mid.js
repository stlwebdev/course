function playSound(id) {
    let audio = document.getElementById(id);
    audio.currentTime = 0;
    audio.play();
}

const akey = document.getElementById("a");
const skey = document.getElementById("s");
const dkey = document.getElementById("d");
const fkey = document.getElementById("f");
const gkey = document.getElementById("g");
const hkey = document.getElementById("h");
const jkey = document.getElementById("j");
const kkey = document.getElementById("k");
const lkey = document.getElementById("l");

window.addEventListener("keydown", (event) => {
    switch (event.key) {
        case "a":
        case "A":
            akey.click();
            akey.classList.toggle("active");
            setTimeout(() => {
                akey.classList.toggle("active");
            }, 100);
            break;
        case "s":
        case "S":
            skey.click();
            skey.classList.toggle("active");
            setTimeout(() => {
                skey.classList.toggle("active");
            }, 100);
            break;
        case "d":
        case "D":
            dkey.click();
            dkey.classList.toggle("active");
            setTimeout(() => {
                dkey.classList.toggle("active");
            }, 100);
            break;
        case "f":
        case "F":
            fkey.click();
            fkey.classList.toggle("active");
            setTimeout(() => {
                fkey.classList.toggle("active");
            }, 100);
            break;
        case "g":
        case "G":
            gkey.click();
            gkey.classList.toggle("active");
            setTimeout(() => {
                gkey.classList.toggle("active");
            }, 100);
            break;
        case "h":
        case "H":
            hkey.click();
            hkey.classList.toggle("active");
            setTimeout(() => {
                hkey.classList.toggle("active");
            }, 100);
            break;
        case "j":
        case "J":
            jkey.click();
            jkey.classList.toggle("active");
            setTimeout(() => {
                jkey.classList.toggle("active");
            }, 100);
            break;
        case "k":
        case "K":
            kkey.click();
            kkey.classList.toggle("active");
            setTimeout(() => {
                kkey.classList.toggle("active");
            }, 100);
            break;
        case "l":
        case "L":
            lkey.click();
            lkey.classList.toggle("active");
            setTimeout(() => {
                lkey.classList.toggle("active");
            }, 100);
            break;
    }
});
