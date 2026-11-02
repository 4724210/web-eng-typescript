import type{ Todo } from './types.js';

const todos: Todo[]= [
  { id: 1, title: "型を復習する", completed: true },
  { id: 2, title: "配列を学ぶ", completed: true },
  { id: 3, title: "レポートを書く", completed: false },
  { id: 4, title: "提出する", completed: false },
];


export async function fetchTodos(): Promise<Todo[]> {
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve(todos);
        },500);
    });
    return todos;
}

export async function findTodo(id: number): Promise<Todo | undefined> {
    const currentTodos = await fetchTodos();
    return currentTodos.find((todo) => todo.id === id);
}

export async function collectTodo(): Promise<number> {
    const currentTodos = await fetchTodos();
    const incompleteTodos = currentTodos.filter(
        (todo) => !todo.completed,
    );
    return incompleteTodos.length;
}

