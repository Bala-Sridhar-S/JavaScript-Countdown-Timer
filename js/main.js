const countdown = document.querySelector(".countdown");

// Set launch date in ms
const launchDate = new Date("December 1, 2021 00:00:00").getTime();

const intvl = setInterval(() => {
  // Get the current date and time in ms
  const now = new Date().getTime();

  // Get distance between today and the launch date
  const distance = launchDate - now;

  // Time calculation
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // console.log(days, hours, minutes, seconds);

  // Display the result values
  countdown.innerHTML = `
        <div class="flex">
            <div>${days} <span>Days</span></div>
            <div>${hours} <span>Hours</span></div>
        </div>
        <div class="flex">
            <div>${minutes} <span>Minutes</span></div>
            <div>${seconds} <span>Seconds</span></div>
        </div>
    `;

  // If launch date has passes
  if (distance < 0) {
    clearInterval(intvl);
    countdown.style.color = "#17a2b8";
    countdown.innerHTML = "Launched!";
  }
}, 1000);
