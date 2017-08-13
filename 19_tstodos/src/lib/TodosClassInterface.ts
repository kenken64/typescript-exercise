import {Todo} from './TodoInterface';

export interface TodosClassInterface{
    todos:Todo[];
    getTodos();
    addTodo(todo:Todo);
    deleteTodo(id:number);
    generateId();
}