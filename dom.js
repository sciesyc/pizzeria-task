"use strict";

window.onload =  function() {
    const body = document.body;
    let container = createElementInDom(".container");
    let container1 = createElementInDom("div", "", ".container-1");
    let container2 = createElementInDom("div", "", ".container-2");
    let container3 = createElementInDom("div", "", ".container-3");
    let container4 = createElementInDom("div", "", ".container-4");
    let pizzeria = createElementInDom("div", "", ".pizzeria");
    let pizzeriaName = createElementInDom("h1", "PAPA TONI", "");
    let name1 = createElementInDom("div", "Clients Que", ".name-1");
    let name2 = createElementInDom("div", "Orders Are Cooking", ".name-2");
    let name3 = createElementInDom("div", "Orders are Made", ".name-3");
    let shefBox = createElementInDom("div", "", ".shef");
    let screen1 = createElementInDom("div", "", ".screen-1");
    let screen2 = createElementInDom("div", "", ".screen-1");
    let screen3 = createElementInDom("div", "", ".screen-1");
    let buttonIncrement = createElementInDom("button", "+", "btn")
    let buttonDecrement = createElementInDom("button", "-", "btn")
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
    container3.appendChild(shefBox);
    container2.appendChild(buttonDecrement);
    container4.appendChild(screen1);
    container4.appendChild(screen2);
    container4.appendChild(screen3);
}


function createElementInDom(name = "div", text = "", classElName = "") {
    const elem = document.createElement(name);
    elem.textContent = text;
    elem.className = classElName;
  
    return elem;
  }