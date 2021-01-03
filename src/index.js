const addButton = document.querySelector("#add");
const addInput = document.querySelector("#item");

const removeButton = "X";
const completeButton = "V";

const getAndAddItem = () => {
  const newItem = addInput.value;
  if (newItem) {
    addItem(newItem);
    document.getElementById("item").value = "";
  }
};

addButton.addEventListener("click", function () {
  getAndAddItem();
});

addInput.addEventListener("keydown", function (e) {
  if (13 === e.keyCode) {
    getAndAddItem();
  }
});

const makeButtons = () => {
  const buttons = document.createElement("div");
  buttons.classList.add("buttons");

  const remove = document.createElement("button");
  remove.classList.add("remove");
  remove.innerHTML = removeButton;
  remove.addEventListener("click", removeItem);

  const complete = document.createElement("button");
  complete.classList.add("complete");
  complete.innerHTML = completeButton;
  complete.addEventListener("click", completeItem);

  buttons.appendChild(remove);
  buttons.appendChild(complete);

  return buttons;
};

const addItem = (text) => {
  const list = document.getElementById("todo");
  const item = document.createElement("li");

  item.innerText = text;
  // list.setAttribute("contenteditable", true);

  const buttons = makeButtons();
  item.appendChild(buttons);
  list.insertBefore(item, list.childNodes[0]);
};

const completeItem = (e) => {
  const item = e.target.parentNode.parentNode;
  const parent = item.parentNode;
  const id = parent.id;

  const target =
    id === "todo"
      ? document.getElementById("completed")
      : document.getElementById("todo");
  parent.removeChild(item);
  target.insertBefore(item, target.childNodes[0]);
};

const removeItem = (e) => {
  const item = e.target.parentNode.parentNode;
  const parent = item.parentNode;
  parent.removeChild(item);
};
