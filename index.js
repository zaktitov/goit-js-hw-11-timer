const refs = {
  countdownWrapper: document.getElementById("timer-1"),
  day: document.querySelector(`[data-value="days"]`),
  hour: document.querySelector(`[data-value="hours"]`),
  min: document.querySelector(`[data-value="mins"]`),
  sec: document.querySelector(`[data-value="secs"]`),
};
const { countdownWrapper, day, hour, min, sec } = refs;

const countdown = () => {
  
  const targetTime = new Date("Oct 17, 2021").getTime();
  const currentTime = new Date().getTime();
  const interim = targetTime - currentTime;

  const days = Math.floor(interim / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (interim % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const mins = Math.floor((interim % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((interim % (1000 * 60)) / 1000);

  console.log(interim);

  day.textContent = days;
  hour.textContent = hours;
  min.textContent = mins;
  sec.textContent = secs;
};

setInterval(countdown, 1000);

// new CountdownTimer({
//   selector: "#timer-1",
//   targetDate: new Date("Oct 17, 2021").getTime(),
// });
