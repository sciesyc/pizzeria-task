import  randomInteger  from "./randomInteger";
import { INGREDIENTS } from "../constants/const";

export default function generatingOrder(INGREDIENTS) {
    let newOrder = [];
    for (let i = 0; i < randomInteger(2, 7); i++) {
      newOrder.push(INGREDIENTS[randomInteger(0, 6)]);
    }
  
    return newOrder;
  }
