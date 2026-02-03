import Countdown from "./countdown.js"; 

const diasParaOMeuAniversario = new Countdown('24 March 2026 GMT-0300');

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

function updateCountdown() {
  const { days, hours, minutes, seconds } = diasParaOMeuAniversario.total;

  daysEl.textContent = days;
  hoursEl.textContent = hours;
  minutesEl.textContent = minutes;
  secondsEl.textContent = seconds;
}

updateCountdown(); 
setInterval(updateCountdown, 1000);
