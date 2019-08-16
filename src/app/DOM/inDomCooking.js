import {COOKING_ORDERS} from "../constants/const";

export default function inDomCooking() {
    let screen2 = document.querySelector(".screen-2");
    screen2.innerHTML = COOKING_ORDERS.map(elem => {
      return `${elem.fullName}` + "\n";
    });
  }