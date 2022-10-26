import displayPopulation from "./birmingham.js";
import { fruits } from "./fruit.js";
import createListOfFruits from "./giveMeFruits.js";

const button = document.createElement("button")    
const content = document.createTextNode("Show Fruit")
button.appendChild(content)
button.onclick = () => createListOfFruits(fruits)
document.body.appendChild(button)