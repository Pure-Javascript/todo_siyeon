const todoListData = localStorage.getItem("TODO");
let todoList, id;

const removeItem = (event) => {
  const element = event.target;
  element.remove();
  localStorage.removeItem("TODO", element);
  localStorage.setItem("TODO", JSON.stringify(todoList));
};

const newItem = (todo, id, done) => {
  const ul = document.getElementById("list");
  const li = document.createElement("li");

  li.appendChild(document.createTextNode(id + todo));
  li.setAttribute("id", id);
  ul.appendChild(li);

  todo = document.getElementById("input").value = "";
  li.onclick = removeItem;
};

document.body.onkeyup = function (e) {
  if (e.keyCode === 13) {
    var todo = document.getElementById("input").value;
    newItem(todo, id, false);
    todoList.push({
      name: todo,
      id: id,
      done: false
    });
    localStorage.setItem("TODO", JSON.stringify(todoList));
    id++;
  }
  if (e.keyCode === 46) {
    window.localStorage.clear();
  }
};

//TODO
// const completeItem = (element) => {};

// const list = document.getElementById("list");
// list.addEventListener("click", function (event) {
//   const element = event.target;
//   // completeItem(element);
//   localStorage.setItem("TODO", JSON.stringify(todoList));
// });

const loadData = (array) => {
  array.forEach(function (todo) {
    newItem(todo.name, todo.id, todo.done);
  });
};

if (todoListData) {
  todoList = JSON.parse(todoListData);
  loadData(todoList);
  id = todoList.length;
} else {
  id = 0;
  todoList = [];
}
