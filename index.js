const secHand = document.querySelector(".container .sec-hand");
const minHand = document.querySelector(".container .min-hand");
const hourHand = document.querySelector(".container .hour-hand");

const buttonMode = document.querySelector('[data-change="mode"]');
const body = document.querySelector("body");
const iconLight = document.querySelector(".light");
const iconDark = document.querySelector(".dark");

let mode = false;

const deg = 6;

setInterval(() => {
    const day = new Date();
    const hour = day.getHours();
    const minutes = day.getMinutes();
    const seconds = day.getSeconds();

    hourHand.style.transform = `rotateZ(${(hour * 30) + ((minutes * deg) / 12)}deg)`;
    minHand.style.transform = `rotateZ(${(minutes * deg)}deg)`;
    secHand.style.transform = `rotateZ(${(seconds * deg)}deg)`;

    document.querySelector(".digital-clock").innerHTML = `${`${hour}`.padStart(2, "0")}:${`${minutes}`.padStart(2, "0")}:${`${seconds}`.padStart(2, "0")}`
});

const toggleMode = () => {
    body.setAttribute("data-mode", mode ? "dark" : "light");
    mode = !mode;
    document.querySelectorAll(".icon").forEach((icon) => icon.classList.remove("none"));
    if (mode) {
        iconDark.classList.add("none");
    } else {
        iconLight.classList.add("none");
    }
}

buttonMode.addEventListener("click", toggleMode);