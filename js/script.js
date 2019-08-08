"use strict";

window.onload =  function() {
  
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
  const buttonIncrement = createElementInDom("button", "+", "btn")
  const buttonDecrement = createElementInDom("button", "-", "btn")

 
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

  buttonIncrement.addEventListener("click", addCook
  );

  console.log(COOKS_ORDER);

   buttonDecrement.addEventListener("click",  deleteCook);

}

function createShefBox() {
  let body = document.body;
  let container3 = body.querySelector(".container-3");
  const shefBox = createElementInDom("div", "", "shefbox");
  container3.appendChild(shefBox);
}

function removeShefBox() {
  let body = document.body;
  let shefQue = body.getElementsByClassName("shefbox");
  if (shefQue.length >= 1) {
    shefQue[shefQue.length - 1].remove(); 
    checkingShefs(); 
  }
}

function checkingShefs() {
  let body = document.body;
  let shefQue = body.getElementsByClassName("shefbox");
  for (let i = 0; i < COOKS_ORDER.length; i++){
    for(let j = 0; j < shefQue.length; j++) {
      if(COOKS_ORDER.length === shefQue.length) {
        return [...shefQue];
      } 
    }
  }
}


function createElementInDom(name = "div", text = "", classElName = "") {
  const elem = document.createElement(name);
  elem.textContent = text;
  elem.className = classElName;

  return elem;
}


// CONTAINERS \\
const CLIENTS_ORDERS = [];
const COOKS_ORDER = [];
const COOKING_ORDERS = [];
const DONE_ORDERS = [];
const firstNames = [
  "Anton",
  "Hope",
  "Launa",
  "Katherine",
  "Walker",
  "Moses",
  "Tayna",
  "Rosia",
  "Yahaira",
  "Tommy",
  "Elwanda",
  "Clorinda",
  "Sheron",
  "Kayla",
  "Clementina",
  "Rene",
  "Rex",
  "Kathy",
  "Latoya",
  "Shirleen",
  "Shoshana"
];
const secondNames = [
  "Chauncey",
  "Houchins",
  "Lama",
  "Frasca",
  "Houston",
  "Stseshyts",
  "Ake",
  "Shankles",
  "Cantor",
  "Mizell",
  "Cleland",
  "Maltby",
  "Tirrell",
  "Cary",
  "Mace",
  "Horta",
  "Carlile",
  "Deegan",
  "Torrez",
  "Humfeld",
  "Helgeson"
];
// CONTAINERS \\

// // // INGREDIENTS \\ \\ \\
function Ingredients(name, readinessTime) {
  this.name = name;
  this.readinessTime = readinessTime;
}

const INGREDIENTS = [
  new Ingredients("cheese", 1500),
  new Ingredients("pepperoni", 3000),
  new Ingredients("pepper", 1000),
  new Ingredients("base", 3000),
  new Ingredients("tomatoes", 2000),
  new Ingredients("chicken", 3000),
  new Ingredients("pinaple", 2000)
];

// // // INGREDIENTS \\ \\ \\

// /// The COOK \\\ \\


function addCook() {
  if (COOKS_ORDER.length < 6){
    COOKS_ORDER.push(new CookGenerator());
    COOKS_ORDER[COOKS_ORDER.length - 1].on("cookIsFree", onCookFunction);
    console.log(COOKS_ORDER.length);  
    createShefBox();
  }
}


function deleteCook() {
  if (COOKS_ORDER .length >= 1 && COOKS_ORDER[COOKS_ORDER.length - 1].isFree === true){
    COOKS_ORDER.splice(COOKS_ORDER.length - 1, 1); 
    removeShefBox();
  } 
  console.log(COOKS_ORDER.length);
}

function Cook(id, fullName) {
  this.id = id;
  this.fullName = fullName;
  this.order = [];
  this.isFree = true;

  this.cookingTime = function() {
    let TotalaReadinessTime = this.order.reduce(
      (sum, ingredient) => sum + ingredient.readinessTime,
      0
    );
    return TotalaReadinessTime;
  };
}

const theCook = new Cook();
const CookGenerator = inherit(EventEmmiter, theCook);


// // // COOK END \\ \\ \\

// Clinents \\

function Client(id, order, fullName) {
  this.id = id;
  this.order = order;
  this.fullName = fullName;
}

// Clinents END\\

//  BOB \\

const client = new Client();
const ClientGenerator = inherit(EventEmmiter, client);


setTimeout(function addClients() {
  CLIENTS_ORDERS.push(
    new ClientGenerator(
      generateId(),
      generatingOrder(INGREDIENTS),
      generateName()
    )
  );
  inDomClient();
  console.log(CLIENTS_ORDERS);
  console.log(DONE_ORDERS);
  console.log(CLIENTS_ORDERS[CLIENTS_ORDERS.length - 1].on(
    "orderHandler",
    onClientFunction
  ));

  CLIENTS_ORDERS[0].emit("orderHandler");
  setTimeout(addClients, randomInteger(2, 7) * 1000);
}, randomInteger(2, 7) * 1000);

console.log(CLIENTS_ORDERS);
// console.log(realBob);

//  BOB  END\\

// onClientFunction \\

function onClientFunction() {
  if (COOKS_ORDER.length !== 0) {

    for (let i = 0; i < COOKS_ORDER.length; i++) {
      if (COOKS_ORDER[i].isFree === true && CLIENTS_ORDERS.length >= 1){

        COOKS_ORDER[i].id = CLIENTS_ORDERS[0].id;
        COOKS_ORDER[i].order = CLIENTS_ORDERS[0].order;
        COOKS_ORDER[i].fullName = CLIENTS_ORDERS[0].fullName;
        COOKS_ORDER[i].isFree = false;

        COOKING_ORDERS.push(CLIENTS_ORDERS.shift());
        inDomClient();
        inDomCooking();
        console.log(COOKING_ORDERS[0].id);
        
        setTimeout(() => {
          COOKS_ORDER[i].emit("cookIsFree", i);
        }, COOKS_ORDER[i].cookingTime());


      }
    }
  }
}


// onClientFunction End\\

// onCookFunction \\

function onCookFunction(cookIndex) {
  COOKS_ORDER[cookIndex].isFree = true;
  DONE_ORDERS.push(COOKING_ORDERS.shift());
  returnDoneClient(
    DONE_ORDERS[DONE_ORDERS.length - 1].id,
    DONE_ORDERS[DONE_ORDERS.length - 1].fullName,
  );

  // deleteClientFromDone();
  inDomDone();
  console.log(
    `The order ${DONE_ORDERS[DONE_ORDERS.length - 1].fullName} is ready`
  );

  if (CLIENTS_ORDERS.length >= 1) {
    CLIENTS_ORDERS[0].emit("orderHandler");
  }
}

// onCookFunction End\\

// INHERIT FUNCTION \\
function inherit(parentObj, data) {
  const { constructor, ...prototype } = data;

  let clientObj = function() {
    parentObj.apply(this);
    constructor.apply(this, arguments);
  };

  clientObj.prototype = Object.create(parentObj.prototype);
  clientObj.prototype.constructor = clientObj;

  for (let key in prototype) {
    clientObj.prototype[key] = prototype[key];
  }

  return clientObj;
}

// INHERIT FUNCTION END \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

//  EVENT EMMITER \\
function EventEmmiter() {
  this.events = {};

  this.on = function(eventName, fn) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(fn);

    return () =>
      (this.events[eventName] = this.events[eventName].filter(
        functionEl => fn !== functionEl
      ));
  };

  this.emit = function(eventName, ...args) {
    const event = this.events[eventName];
    if (event) {
      event.forEach(fn => {
        fn(...args);
      });
    }
  };
}

//  EVENT EMMITER \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// Generating Id Function\\\\\\\\\\

function generateId() {
  return (
    "_" +
    Math.random()
      .toString(36)
      .substr(2, 10) +
    "_"
  );
}

// End of the Generating Func\\\\\\\\
 
function generateName() {
  return (
    "_" +
    `${firstNames[randomInteger(0, firstNames.length - 1)]} ${
      secondNames[randomInteger(0, secondNames.length - 1)]
    }` +
    "_"
  );
}

// Function randomInteger \\

function randomInteger(min, max) {
  let random = Math.floor(min + Math.random() * (max - min) + 1);
  return random;
}

// End of function \\

// Generating ORDER Function\\\\\\\\\\
function generatingOrder(INGREDIENTS) {
  let newOrder = [];

  for (let i = 0; i < randomInteger(2, 7); i++) {
    newOrder.push(INGREDIENTS[randomInteger(0, 6)]);
  }

  return newOrder;
}

// End of generated ORDER\\\\\\\


// DOM \\
function inDomClient() {
  let screen1 = document.querySelector(".screen-1");
  screen1.innerHTML = CLIENTS_ORDERS.map(elem => {
    return `${elem.fullName}` + "\n";
  });
}
function inDomCooking() {
  let screen2 = document.querySelector(".screen-2");
  screen2.innerHTML = COOKING_ORDERS.map(elem => {
    return `${elem.fullName}` + "\n";
  });
}
function inDomDone() {
  let screen3 = document.querySelector(".screen-3");
  screen3.innerHTML = DONE_ORDERS.map(elem => {
    return `${elem.fullName} ` + "\n";
  });
}
// DOM \\


// FUNCTION DONE CLIENT \\
function returnDoneClient(id, fullName) {
  let randNum = Math.ceil(Math.random() * 100);
  console.log(randNum);
  if (randNum <= 25) {
    CLIENTS_ORDERS.push(
      new ClientGenerator(id, generatingOrder(INGREDIENTS), fullName)
    );
    CLIENTS_ORDERS[CLIENTS_ORDERS.length - 1].on(
      "orderHandler",
      onClientFunction
    );
  }
}
//END FUNCTION DONE CLIENT \\