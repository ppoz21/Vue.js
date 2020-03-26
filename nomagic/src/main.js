/* js without vue
require('../node_modules/bootstrap/dist/css/bootstrap.min.css');
let counter = 1;
let container = document.createElement("div");
container.classList.add("text-center", "p-3");
let msg = document.createElement("h1");
msg.classList.add("bg-primary", "text-white", "p-3");
msg.textContent = "Przycisk nie został wciśnięty";
let button = document.createElement("button");
button.textContent = "Wciśnij mnie";
button.classList.add("btn", "btn-secondary");
button.onclick = () => msg.textContent = `Liczba wciśnięć: ${counter++}`;
container.appendChild(msg);
container.appendChild(button);
let app = document.getElementById("app");
app.parentElement.replaceChild(container, app);
*/


// Vue.js - same effect
require('../node_modules/bootstrap/dist/css/bootstrap.min.css');
import Vue from "vue";
import MyComponent from "./App";
new Vue({
    el: "#app",
    components: {"custom": MyComponent},
    template: "<custom />" });