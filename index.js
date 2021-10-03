const refs = {
  countdownWrapper: document.getElementById("timer-1"),
  day: document.querySelector(`[data-value="days"]`),
  hour: document.querySelector(`[data-value="hours"]`),
  min: document.querySelector(`[data-value="mins"]`),
  sec: document.querySelector(`[data-value="secs"]`),
};
const { countdownWrapper, day, hour, min, sec } = refs;

function pad(value) {
  return String(value).padStart(2, `0`);
}

const countdown = () => {
  const targetTime = new Date("Oct 17, 2021").getTime();
  const currentTime = new Date().getTime();
  const interim = targetTime - currentTime;

  const days = pad(Math.floor(interim / (1000 * 60 * 60 * 24)));
  const hours = pad(
    Math.floor((interim % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  const mins = pad(Math.floor((interim % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((interim % (1000 * 60)) / 1000));

  refs.day.textContent = days;
  refs.hour.textContent = hours;
  refs.min.textContent = mins;
  refs.sec.textContent = secs;
};

setInterval(countdown, 1000);

