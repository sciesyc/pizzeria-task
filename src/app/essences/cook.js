import inherit from "../utils/inherit";
import EventEmitter from "../utils/eventEmitter";

function Cook(id, fullName) {
    this.id = id;
    this.fullName = fullName;
    this.order = [];
    this.isFree = true;
    this.cookingTime = function() {
      let TotalaReadinessTime = this.order.reduce(
        (sum, ingredient) => sum + ingredient.readinessTime,
        0
      );
      return TotalaReadinessTime;
    };
  }
  
  const theCook = new Cook();
  export const CookGenerator = inherit(EventEmitter, theCook);
 

  