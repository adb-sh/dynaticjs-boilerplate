import Home from "./pages/Home.js";
import About from "./pages/About.js";

export const routes = [
  {
    name: 'home',
    title: 'Home',
    path: '/',
    Component: Home,
  },
  {
    name: 'about',
    title: 'About',
    path: '/about',
    Component: About,
  },
];
