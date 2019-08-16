import {ClientGenerator} from "./app/essences/client";
import {CookGenerator} from "./app/essences/cook";
import onLoad from "./app/DOM/onload";
import generateId from "./app/utils/generateID";
import generateName from "./app/utils/generateName";
import generatingOrder from "./app/utils/generatingOrder";
import inDomClient from "./app/DOM/inDomClient";
import onClientFunction from "./app/auxiliary function/onClient";
import randomInteger from "./app/utils/randomInteger";
import {CLIENTS_ORDERS} from "./app/constants/const";
import {COOKS_ORDER} from "./app/constants/const";
import {COOKING_ORDERS} from "./app/constants/const";
import {DONE_ORDERS} from "./app/constants/const";
import {firstNames} from "./app/constants/const";
import {secondNames} from "./app/constants/const";
import {INGREDIENTS} from "./app/constants/const";
import css from "./css/style.css";

const clientGenerator = new ClientGenerator();
const cookGenrator = new CookGenerator();

onLoad();
setTimeout(function addClients() {
    CLIENTS_ORDERS.push(
      new ClientGenerator(
        generateId(),
        generatingOrder(INGREDIENTS),
        generateName()
      )
    );
    inDomClient();
    CLIENTS_ORDERS[CLIENTS_ORDERS.length - 1].on(
      "orderHandler",
      onClientFunction
    );
  
    CLIENTS_ORDERS[0].emit("orderHandler");
    setTimeout(addClients, randomInteger(2, 7) * 1000);
  }, randomInteger(2, 7) * 1000);