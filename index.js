class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }

  pad(value) {
    return String(value).padStart(2, `0`);
  }

  start() {
    // document.querySelector("body").insertAdjacentHTML(
    //   "afterbegin",
    //   `<div class="timer" id=${this.selector}">
    //     <div class="field">
    //       <span class="value" data-value="days">00</span>
    //       <span class="label">Days</span>
    //     </div>

    //     <div class="field">
    //       <span class="value" data-value="hours">
    //         00
    //       </span>
    //       <span class="label">Hours</span>
    //     </div>

    //     <div class="field">
    //       <span class="value" data-value="mins">
    //         00
    //       </span>
    //       <span class="label">Minutes</span>
    //     </div>

    //     <div class="field">
    //       <span class="value" data-value="secs">
    //         00
    //       </span>
    //       <span class="label">Seconds</span>
    //     </div>
    //   </div>`
    // );
    
    document.querySelector("div.timer").setAttribute("id", this.selector);

    setInterval(() => {
      this.currentDate = new Date().getTime();
      this.time = this.targetDate - this.currentDate;

      const days = this.pad(Math.floor(this.time / (1000 * 60 * 60 * 24)));
      const hours = this.pad(
        Math.floor((this.time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );
      const mins = this.pad(
        Math.floor((this.time % (1000 * 60 * 60)) / (1000 * 60))
      );
      const secs = this.pad(Math.floor((this.time % (1000 * 60)) / 1000));

      document.querySelector(`[data-value="days"]`).textContent = days;
      document.querySelector(`[data-value="hours"]`).textContent = hours;
      document.querySelector(`[data-value="mins"]`).textContent = mins;
      document.querySelector(`[data-value="secs"]`).textContent = secs;
    }, 1000);
  }
}

const newTimer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Oct 10, 2021").getTime(),
});

newTimer.start();

