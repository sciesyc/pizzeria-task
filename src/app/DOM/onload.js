import createElementInDom from "./createElement";
import addCook from "../auxiliary function/addCook";
import deleteCook from "../auxiliary function/deleteCook";

export default function onLoad() {
  
    const body = document.body;
    const container = createElementInDom("container");
    const container1 = createElementInDom("div", "", "container-1");
    const container2 = createElementInDom("div", "", "container-2");
    const container3 = createElementInDom("div", "", "container-3");
    const container4 = createElementInDom("div", "", "container-4");
    const pizzeria = createElementInDom("div", "", "pizzeria");
    const pizzeriaName = createElementInDom("h1", "PAPA TONI", "");
    const name1 = createElementInDom("div", "Clients Que", "name-1");
    const name2 = createElementInDom("div", "Orders Are Cooking", "name-2");
    const name3 = createElementInDom("div", "Orders are Made", "name-3");
    
    const screen1 = createElementInDom("div", "", "screen-1");
    const screen2 = createElementInDom("div", "", "screen-2");
    const screen3 = createElementInDom("div", "", "screen-3");
    const buttonIncrement = createElementInDom("button", "+", "btn");
    const buttonDecrement = createElementInDom("button", "-", "btn");
  
    body.appendChild(container);
    body.appendChild(container1);
    body.appendChild(container2);
    body.appendChild(container3);
    body.appendChild(container4);
  
    container.appendChild(pizzeria);
    pizzeria.appendChild(pizzeriaName);
    container1.appendChild(name1);
    container1.appendChild(name2);
    container1.appendChild(name3);
    container2.appendChild(buttonIncrement);
    container2.appendChild(container3);
    container2.appendChild(buttonDecrement);
    container4.appendChild(screen1);
    container4.appendChild(screen2);
    container4.appendChild(screen3);
  
    buttonIncrement.addEventListener("click", addCook);
    buttonDecrement.addEventListener("click",  deleteCook);

     
  }

