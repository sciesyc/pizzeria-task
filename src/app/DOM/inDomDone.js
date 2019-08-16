import { DONE_ORDERS } from "../constants/const";

export default function inDomDone() {
    let screen3 = document.querySelector(".screen-3");
    screen3.innerHTML = DONE_ORDERS.map(elem => {
      return `${elem.fullName} ` + "\n";
    });
  }