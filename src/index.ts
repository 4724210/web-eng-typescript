import  { fetchTodos, findTodo, collectTodo} from './todo-service.js';

const loaded = await fetchTodos();
console.log(loaded);

const found = await findTodo(2);
console.log(found);

const choice =  await collectTodo();
console.log(choice)

