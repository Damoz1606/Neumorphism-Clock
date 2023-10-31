const secHand = document.querySelector(".container .sec-hand");
const minHand = document.querySelector(".container .min-hand");
const hourHand = document.querySelector(".container .hour-hand");

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