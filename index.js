const refs = {
  day: document.querySelector(`[data-value="days"]`),
  hour: document.querySelector(`[data-value="hours"]`),
  min: document.querySelector(`[data-value="mins"]`),
  sec: document.querySelector(`[data-value="secs"]`),
  divId: document.querySelector("div.timer"),
};

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }

  start() {
    const timerId = document.querySelector(this.selector);

    setInterval(() => {
      const currentDate = new Date().getTime();
      const time = this.targetDate - currentDate;

      const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));

      const hours = this.pad(
        Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );
      const mins = this.pad(
        Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))
      );
      const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

      timerId.querySelector(`[data-value="days"]`).textContent = days;
      timerId.querySelector(`[data-value="hours"]`).textContent = hours;
      timerId.querySelector(`[data-value="mins"]`).textContent = mins;
      timerId.querySelector(`[data-value="secs"]`).textContent = secs;
    }, 1000);
  }

  pad(value) {
    return String(value).padStart(2, `0`);
  }
}

const newTimer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Oct 11, 2021").getTime(),
});

newTimer.start();

const brandNewTimer = new CountdownTimer({
  selector: "#timer-2",
  targetDate: new Date("Nov 28, 2021").getTime(),
});

brandNewTimer.start()
