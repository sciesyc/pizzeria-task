import createElementInDom from "../DOM/createElement"

export default function createShefBox() {
    let body = document.body;
    let container3 = body.querySelector(".container-3");
    const shefBox = createElementInDom("div", "", "shefbox");
    container3.appendChild(shefBox);
  }