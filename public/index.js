const todos = [];

function addTodo() {
  let input = document.getElementById("input").value;

  if (input.trim()) {
    todos.push({
      title: input,
    });
  }

  document.getElementById("input").value = " ";
  input = " ";

  render();
}

function render() {
  const input = document.querySelector("#todos");
  input.innerHTML = "";
  for (let i = 0; i < todos.length; i++) {
    const element = createElements(todos[i], i);
    input.appendChild(element);
  }
}

function createElements(todo, index) {
  const div = document.createElement("div");
  div.setAttribute("id", index);

  // create an H1 tag where the task will be stored
  const task = document.createElement("h1");
  task.innerHTML = todo.title;

  // create a delete button with the innerHtml = delete
  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "Delete";
  deleteBtn.setAttribute("onclick", `deleteTodo( ${index})`);

  // create a edit button with the innerHtml = edit
  const editBtn = document.createElement("button");
  editBtn.innerHTML = "Edit";
  editBtn.setAttribute("onclick", `editTask( ${index})`);

  div.appendChild(task);
  div.appendChild(editBtn);
  div.appendChild(deleteBtn);

  return div;
}

function deleteTodo(index) {
  todos.splice(index, 1);

  render();
}

//   function editTask() {
//     const
//   }
