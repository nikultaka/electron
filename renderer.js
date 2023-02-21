const webview = document.querySelector('webview')
const information = document.getElementById("info");
//information.innerText = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`;

const func = async () => {
  const response = await window.versions.ping();
  console.log(response); // prints out 'pong'
};
func();

// webview.addEventListener("will-navigate", (e) => {
//   const protocol = require("url").parse(e.url).protocol;
//   if (protocol === "http:" || protocol === "https:") {
//     shell.openExternal(e.url);
//   }
// });
