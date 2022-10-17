class EventKeyCodes {
  constructor(insertRef) {
    this.insertRef = insertRef;
  }

  init() {
    this.addListeners();
  }

  addListeners() {
    window.addEventListener("keydown", this.onKeyDown.bind(this));
  }

  onKeyDown(event) {
    this.insertRef.innerHTML = "";

    const data = {
      key: event.key,
      code: event.code,
      which: event.which,
    };

    const keys = Object.keys(data);

    const allDivs = keys.map((item) => {
      return this.createDiv(item, data[item]);
    });

    this.insertRef.append(...allDivs);
  }

  createDiv(key, value) {
    const div = document.createElement("div");
    div.classList.add("key");
    div.innerText = `Event.${key}: ${value}`;

    return div;
  }
}

const insertRef = document.querySelector("#insert");

new EventKeyCodes(insertRef).init();
