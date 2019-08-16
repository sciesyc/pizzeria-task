
import inherit from "../utils/inherit";
import EventEmitter from "../utils/eventEmitter";

function Client(id, order, fullName) {
    this.id = id;
    this.order = order;
    this.fullName = fullName;
}

  const client = new Client();
  export const ClientGenerator = inherit(EventEmitter, client);
  
