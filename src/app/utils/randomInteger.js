
 export default function randomInteger(min, max) {
    let random = Math.floor(min + Math.random() * (max - min) + 1);
    return random;
  }
