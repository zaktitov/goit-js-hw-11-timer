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
    document.querySelector("div.timer").setAttribute("id", this.selector);

    setInterval(() => {
      const currentDate = new Date().getTime();
      const deltaTime = this.targetDate - currentDate;
      const time = this.getTimeComp(deltaTime);
      updateTime(time)
    }, 1000);
  }

  getTimeComp(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));

    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
  }

  pad(value) {
    return String(value).padStart(2, `0`);
  }
}

const newTimer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Oct 11, 2021").getTime(),
});

function updateTime({ days, hours, mins, secs }) {
  refs.day.textContent = `${days}`;
  refs.hour.textContent = `${hours}`;
  refs.min.textContent = `${mins}`;
  refs.sec.textContent = `${secs}`;
}

newTimer.start()
