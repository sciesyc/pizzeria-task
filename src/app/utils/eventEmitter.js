export default function EventEmitter() {
    this.events = {};
  
    this.on = function(eventName, fn) {
      if (!this.events[eventName]) {
        this.events[eventName] = [];
      }
      this.events[eventName].push(fn);
  
      return () =>
        (this.events[eventName] = this.events[eventName].filter(
          functionEl => fn !== functionEl
        ));
    };
  
    this.emit = function(eventName, ...args) {
      const event = this.events[eventName];
      if (event) {
        event.forEach(fn => {
          fn(...args);
        });
      }
    };
  }
