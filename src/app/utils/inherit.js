

export default function inherit(parentObj, data) {
    const { constructor, ...prototype } = data;
  
    let clientObj = function() {
      parentObj.apply(this);
      constructor.apply(this, arguments);
    };

    clientObj.prototype = Object.create(parentObj.prototype);
    clientObj.prototype.constructor = clientObj;

    for (let key in prototype) {
      clientObj.prototype[key] = prototype[key];
    }

    return clientObj;
  }
