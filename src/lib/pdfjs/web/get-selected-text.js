function doSomethingWithSeleedText(event) {
  var selectedText = document.getSelection().toString();
  if (selectedText) {
    data = {
      x: event.screenX,
      y: event.screenY,
      text: selectedText,
    }
    parent.postMessage(data, "*")
  }
}

document.onmouseup = doSomethingWithSeleedText;
document.onkeyup = doSomethingWithSeleedText;
