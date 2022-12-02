import Component from "dynaticjs/Component";
import { routes } from "./routes.js";
import RouterLink from "dynaticjs/components/RouterLink.js";
import RouterView from "dynaticjs/components/RouterView.js";
import { propFactory } from "dynaticjs/helpers.js";

export default class App extends Component {
  init() {
    return {
      components: {
        RouterLink,
        RouterView,
      },
    };
  }

  data() {
    return {
      routes: propFactory(routes),
    };
  }

  render(state) {
    return `
      <div id="app">
        <nav>
          <router-link class="btn btn-primary" to="home">Home</router-link>
          <router-link class="btn btn-primary" to="about">About</router-link>
        </nav>
        <main>
          <h1>DynaticJS Boilerplate</h1>
          <router-view ref="routerView" bind:routes="routes"></router-view>  
        </main>
      </div>
    `;
  }

  setup() {
    console.log('Hello World :D');
  }
};
