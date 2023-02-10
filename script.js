const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".second");
const hours = document.querySelector(".hours");

setInterval(() => {
  const date = new Date();

  const secondDate = date.getSeconds();
  const minutesDate = date.getMinutes();
  const hoursDate = date.getHours();

  seconds.style.transform = `rotate(${(secondDate / 60) * 360}deg)`;
  minutes.style.transform = `rotate(${(minutesDate / 60) * 360}deg)`;
  hours.style.transform = `rotate(${(hoursDate / 12) * 360}deg)`;
}, 1000);
