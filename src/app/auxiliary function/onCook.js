import { COOKS_ORDER,  DONE_ORDERS, COOKING_ORDERS, CLIENTS_ORDERS } from "../constants/const";
import returnDoneClient from "../auxiliary function/returnDoneClient";
import inDomDone from "../DOM/inDomDone";


export default function onCookFunction(cookIndex) {
    COOKS_ORDER[cookIndex].isFree = true;
    DONE_ORDERS.push(COOKING_ORDERS.shift());
    returnDoneClient(
      DONE_ORDERS[DONE_ORDERS.length - 1].id,
      DONE_ORDERS[DONE_ORDERS.length - 1].fullName,
    );
    inDomDone();
    console.log(
      `The order ${DONE_ORDERS[DONE_ORDERS.length - 1].fullName} is ready`
    );
    if (CLIENTS_ORDERS.length >= 1) {
      CLIENTS_ORDERS[0].emit("orderHandler");
    }
  }

  