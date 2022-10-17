const insertRef = document.querySelector("#insert");
// window.addEventListener("keydown", (event) => {
//   insertRef.innerHTML = `
//     <div class="key">Event.key: ${event.key}</div>
//   <div class="key">Event.code: ${event.code}</div>
//   <div class="key">Event.which: ${event.which}</div>
//   `;
// });

window.addEventListener("keydown", onKeyDown);

// function onKeyDown(event) {
//   const data = {
//     key: event.key,
//     code: event.code,
//     which: event.which,
//   };

//   const keys = Object.keys(data);

//   const allDivs = keys
//     .map((item) => {
//       return createDiv(item, data[item]);
//     })
//     .join("");

//   insertRef.innerHTML = allDivs;
//   console.log(allDivs);
// }

// function createDiv(key, value) {
//   return `<div class="key">Event.${key}: ${value}</div>`;
// }

function onKeyDown(event) {
  insertRef.innerHTML = "";

  const data = {
    key: event.key,
    code: event.code,
    which: event.which,
  };

  const keys = Object.keys(data);

  const allDivs = keys.map((item) => {
    return createDiv(item, data[item]);
  });

  insertRef.append(...allDivs);
}

function createDiv(key, value) {
  const div = document.createElement("div");
  div.classList.add("key");
  div.innerText = `Event.${key}: ${value}`;

  return div;
}
