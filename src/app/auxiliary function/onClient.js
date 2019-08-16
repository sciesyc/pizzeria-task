import { COOKS_ORDER, COOKING_ORDERS, CLIENTS_ORDERS } from "../constants/const";
import  inDomClient  from "../DOM/inDomClient";
import inDomCooking  from "../DOM/inDomCooking";



export default function onClientFunction() {
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
          setTimeout(() => {
            COOKS_ORDER[i].emit("cookIsFree", i);
          }, COOKS_ORDER[i].cookingTime());
        }
      }
    }
  }

  