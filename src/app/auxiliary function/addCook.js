import { COOKS_ORDER } from "../constants/const";
import {CookGenerator} from "../essences/cook";
import onCookFunction from "../auxiliary function/onCook";
import createShefBox from "../DOM/createShefBox";

export default function addCook() {
    if (COOKS_ORDER.length < 6){
      COOKS_ORDER.push(new CookGenerator());
      COOKS_ORDER[COOKS_ORDER.length - 1].on("cookIsFree", onCookFunction);
      console.log(COOKS_ORDER.length);  
      createShefBox();
    }
  }