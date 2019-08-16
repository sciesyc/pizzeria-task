import {COOKS_ORDER} from "../constants/const";
import removeShefBox from "../DOM/removeShefBox";

export default function deleteCook() {
    if (COOKS_ORDER .length >= 1 && COOKS_ORDER[COOKS_ORDER.length - 1].isFree === true){
      COOKS_ORDER.splice(COOKS_ORDER.length - 1, 1); 
      removeShefBox();
    } 
    console.log(COOKS_ORDER.length);
  }