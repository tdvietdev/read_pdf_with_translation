var current_text = "";

window.addEventListener("message", (event) => {
  if (event.origin !== "file://") return;
  console.log(event.data["x"])
  document.getElementById("translate-popup").style.left = `${event.data['x']}px`;
  document.getElementById("translate-popup").style.top = `${event.data['y']}px`;
  current_text = event.data["text"]
}, false);

document.getElementById("translate-popup").addEventListener("click", () => {
  console.log(current_text)
  const translate = require('document-google-translate-api');
  translate(current_text, {to: 'vi'}).then(res => {
    console.log(res.text);
  }).catch(err => {
    console.error(err);
  });
});


