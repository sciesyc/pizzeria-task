import { CLIENTS_ORDERS } from "../constants/const";

export default function inDomClient() {
    let screen1 = document.querySelector(".screen-1");
    screen1.innerHTML = CLIENTS_ORDERS.map(elem => {
      return `${elem.fullName}` + "\n";
    });
  }