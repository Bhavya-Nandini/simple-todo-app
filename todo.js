const todos = [];
let isPremiumUser = false;

function addTodo(title) {
  if (!title || title.trim() === '') {
    throw new Error('Todo title is required');
  }

  todos.push({
    title: title.trim(),
    completed: false
  });
}

function completeTodo(index) {
  if (index < 0 || index >= todos.length) {
    throw new Error('Invalid todo index');
  }

  todos[index].completed = true;
}

function listTodos() {
  return [...todos];
}

function setPremiumUser(status) {
  isPremiumUser = Boolean(status);
}

function getPremiumTodos() {
  if (!isPremiumUser) {
    throw new Error('Premium subscription required');
  }

  return todos.filter(todo => todo.completed);
}

module.exports = {
  addTodo,
  completeTodo,
  listTodos,
  setPremiumUser,
  getPremiumTodos
};
