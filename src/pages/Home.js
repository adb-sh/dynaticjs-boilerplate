import Component from "../../../dynaticjs/Component.js";
import Clock from "../components/Clock.js";

export default class Home extends Component {
  init() {
    return {
      components: {
        Clock,
      },
    };
  }
  render() {
    return `
      <div class="home">
        <h2>Home</h2>
        <p>Hello World :D</p>
        <h3>a simple clock</h3>
        <clock></clock>
      </div>
    `;
  }
}
