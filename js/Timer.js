export default class Timer {
  constructor(root) {
    root.innerHTML = Timer.getHTML();

    this.el = {
        minutes: root.querySelector(".timer__part--minutes"),
        minutes: root.querySelector(".timer__part--minutes"),
        control: root.querySelector(".timer__btn--control"),
        reset: root.querySelector(".timer__btn--reset")

    };
  }

  static getHTML() {
    return `
        <span class="timer__part timer__part--minutes">00</span>
        <span class="timer__part">:</span>
        <span class="timer__part timer__part--seconds">00</span>
        <button type="button" class="timer__btn timer__btn--control timer__btn--start">
            <span class="material-icons">play_arrow</span>
        </button>
        <button type="button" class="timer__btn timer__btn--reset">
            <span class="material-icons">timer</span>
        </button>
        `;
  }
}
