
export default function removeShefBox() {
    let body = document.body;
    let shefQue = body.getElementsByClassName("shefbox");
    if (shefQue.length >= 1) {
      shefQue[shefQue.length - 1].remove(); 
    }
  }