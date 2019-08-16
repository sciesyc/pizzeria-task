 export default function createElementInDom(name = "div", text = "", classElName = "") {
    const elem = document.createElement(name);
    elem.textContent = text;
    elem.className = classElName;
    return elem;
  }

  