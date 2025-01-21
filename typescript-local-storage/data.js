'use strict';
let todos = [];
function writeTodos() {
  const todosJSON = JSON.stringify(todos);
  localStorage.setItem('todos-storage', todosJSON);
}
function readTodos() {
  if (localStorage.getItem('todos')) {
    const parsedJSON = JSON.parse(localStorage.getItem('todos') || '[]');
    return parsedJSON;
  } else {
    return [];
  }
}
readTodos();
