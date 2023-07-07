import getCurrentTime from './utils/getCurrentTime.js';

class Clock {
  $wrapper = null;
  time = {
    hour: null,
    minutes: null,
    seconds: null,
    year: null,
    month: null,
    date: null,
    day: null,
    amPm: null,
  };

  constructor({ $target }) {
    const $wrapper = document.createElement('section');
    $wrapper.className = 'Clock';
    this.$wrapper = $wrapper;
    $target.appendChild($wrapper);

    setInterval(() => {
      this.time = getCurrentTime();
      this.render();
    }, 1000);

    this.init();
  }

  init() {
    this.time = getCurrentTime();
    this.render();
  }

  render() {
    this.$wrapper.innerHTML = `
      <div class='Clock_wrapper'>
      <span class='Clock_main'>
        ${this.time.hour}
        <span class='dots'>:</span>
        ${this.time.minutes}      
            </span>
            <div class='Clock_sub'>
                <span>${this.time.amPm}</span>
                <span>${this.time.seconds}</span>
            </div>
        </div>
        <div class='Clock_date'>
            ${this.time.year}년 ${this.time.month}월 ${this.time.date}일 ${this.time.day}요일
        </div>
`;
  }
}

export default Clock;
