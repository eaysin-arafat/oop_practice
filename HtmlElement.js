function HtmlElement() {
  this.click = function () {
    console.log(clicked);
  };
}

HtmlElement.prototype.focus = function () {
  console.log("focused");
};

function HtmlSelectElement(items = []) {
  this.items = items;

  this.addItem = function (item) {
    this.items.push(item);
  };

  this.removeItem = function (item) {
    this.items.splice(this.items.indexOf(item), 1);
  };

  this.render = function () {
    let str = "";
    for (let i = 0; i <= this.items.length - 1; i++) {
      str += `<option>${items[i]}</option>`;
    }
    return `
    <select>
    ${str}
    </select>
    `;
  };
}

HtmlSelectElement.prototype = new HtmlElement();

function HtmlImageElement(str = "") {
  this.src = str;

  this.render = function () {
    return `<img src="${this.src}" />`;
  };
}

HtmlImageElement.prototype = new HtmlElement();

const elements = [
  new HtmlSelectElement([1, 2, 7]),
  new HtmlImageElement("http://"),
];

for (let element of elements) console.log(element.render());
