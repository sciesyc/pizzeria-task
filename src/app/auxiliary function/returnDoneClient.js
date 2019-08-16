import { CLIENTS_ORDERS, INGREDIENTS } from "../constants/const";
import { ClientGenerator } from "../essences/client";
import generatingOrder from "../utils/generatingOrder";
import onClientFunction from "../auxiliary function/onClient";





export default function returnDoneClient(id, fullName) {
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
