import Component from "dynaticjs/Component.js";

export default class Clock extends Component {
  data() {
    return {
      timeString: getCurrentTimeStr(),
    };
  }
  render() {
    return `
      <div class="clock">${ this.data().timeString } <slot></slot></div>
    `;
  }
  setup() {
    setTimeout(() => {
      this.data().timeString = getCurrentTimeStr();
    }, 1000);
  }
}

function getCurrentTimeStr() {
  return new Date().toLocaleTimeString()
}
