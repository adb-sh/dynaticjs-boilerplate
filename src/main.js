import "./main.css";
import "normalize.css";
import App from "./App.js";

export const $ = el => document.querySelector(el);
export const $$ = el => document.querySelectorAll(el);

new App($('#app')).mount().setup();
