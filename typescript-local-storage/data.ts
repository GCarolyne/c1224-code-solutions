/* exported todos, writeTodos */
interface Todo {
  todoId: string;
  task: string;
  isCompleted: boolean;
}

let todos: Todo[] = [];

function writeTodos(): undefined {
  const todosJSON = JSON.stringify(todos);
  localStorage.setItem('todos-storage', todosJSON);
}

function readTodos(): Todo[] {
  if (localStorage.getItem('todos')) {
    const parsedJSON = JSON.parse(localStorage.getItem('todos') || '[]');
    return parsedJSON;
  } else {
    return [];
  }
}
readTodos();
