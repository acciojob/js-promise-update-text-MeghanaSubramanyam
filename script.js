//your JS code here. If required.
function sayHello() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello, world!");
    }, 1000); // 1 second delay
  });
}

sayHello().then((message) => {
  document.getElementById("output").innerText = message;
});
