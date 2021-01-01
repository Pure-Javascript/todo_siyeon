let addButton = document.querySelector("#add");
let addInput = document.querySelector("#item");

let removeButton = "X";
let completeButton = "V";

addButton.addEventListener("click", function () {
  let newItem = document.getElementById("item").value;
  if (newItem) {
    addItem(newItem);
    document.getElementById("item").value = "";
  }
});

addInput.addEventListener("keypress", function (e) {
  if (13 === e.keyCode) {
    let newItem = document.getElementById("item").value;
    if (newItem) {
      addItem(newItem);
      document.getElementById("item").value = "";
    }
  }
});

const makeButtons = () => {
  let buttons = document.createElement("div");
  buttons.classList.add("buttons");

  let remove = document.createElement("button");
  remove.classList.add("remove");
  remove.innerHTML = removeButton;
  remove.addEventListener("click", removeItem);

  let complete = document.createElement("button");
  complete.classList.add("complete");
  complete.innerHTML = completeButton;
  complete.addEventListener("click", completeItem);

  buttons.appendChild(remove);
  buttons.appendChild(complete);

  return buttons;
};

const addItem = (text) => {
  let list = document.getElementById("todo");
  let item = document.createElement("li");

  item.innerText = text;
  list.setAttribute("contenteditable", true);

  const buttons = makeButtons();
  item.appendChild(buttons);
  list.insertBefore(item, list.childNodes[0]);
};

function completeItem() {
  let item = this.parentNode.parentNode;
  let parent = item.parentNode;
  let id = parent.id;

  let target =
    id === "todo"
      ? document.getElementById("completed")
      : document.getElementById("todo");
  parent.removeChild(item);
  target.insertBefore(item, target.childNodes[0]);
}

function removeItem() {
  let item = this.parentNode.parentNode;
  let parent = item.parentNode;
  parent.removeChild(item);
}
