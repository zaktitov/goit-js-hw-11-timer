const refs = {
  countdownWrapper: document.getElementById("timer-1"),
  day: document.querySelector(`[data-value="days"]`),
  hour: document.querySelector(`[data-value="hours"]`),
  min: document.querySelector(`[data-value="mins"]`),
  sec: document.querySelector(`[data-value="secs"]`),
};
const { countdownWrapper, day, hour, min, sec } = refs;

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }

  countdown() {
    setInterval(() => {
      this.currentDate = new Date().getTime();
      this.interim = this.targetDate - this.currentDate;

      function pad(value) {
        return String(value).padStart(2, `0`);
      }

      const days = pad(Math.floor(this.interim / (1000 * 60 * 60 * 24)));
      const hours = pad(
        Math.floor((this.interim % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );
      const mins = pad(
        Math.floor((this.interim % (1000 * 60 * 60)) / (1000 * 60))
      );
      const secs = pad(Math.floor((this.interim % (1000 * 60)) / 1000));

      refs.day.textContent = days;
      refs.hour.textContent = hours;
      refs.min.textContent = mins;
      refs.sec.textContent = secs;
    }, 1000);
  }
}

const newTimer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Oct 17, 2021").getTime(),
});

console.log(newTimer.countdown());