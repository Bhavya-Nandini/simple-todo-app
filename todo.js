const todos = [];

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

function searchTodos(keyword) {
  if (!keyword || keyword.trim() === '') {
    return [];
  }

  const searchTerm = keyword.trim().toLowerCase();
  return todos.filter(todo => todo.title.toLowerCase().includes(searchTerm));
}

module.exports = {
  addTodo,
  completeTodo,
  listTodos,
  searchTodos
};
