import {TodosClassInterface} from './TodosClassInterface';
import {Todo} from './TodoInterface';
import {Promise} from 'es6-promise';

export class Todos implements TodosClassInterface{
    todos:Todo[];

    constructor(){
        // Init LS
        if(localStorage.getItem('todos') === null){
            localStorage.setItem('todos', JSON.stringify([
                {
                    id: 1,
                    text:'My First Todo'
                }
            ]));
        }

        // Get From LS & Set Todos
        this.todos = JSON.parse(localStorage.getItem('todos'));
    }

    getTodos():Promise<Todo[]>{
        let promise = new Promise((resolve, reject) => {
            resolve(this.todos);
        });
        return promise;
    }

    addTodo(todo:Todo):Promise<Todo>{
        this.todos.push(todo);

        // Push To LS
        let todos = JSON.parse(localStorage.getItem('todos'));
        todos.push(todo);
        localStorage.setItem('todos', JSON.stringify(todos));

        let promise = new Promise((resolve, reject) => {
            resolve(todo);
        });
        return promise;
    }

    deleteTodo(id: number):Promise<Todo[]>{
        let i = 0;
        let todos = JSON.parse(localStorage.getItem('todos'));
        for(let todo of todos){
            if(id == todo.id){
                this.todos.splice(i,1);
                todos.splice(i,1);
                localStorage.setItem('todos', JSON.stringify(todos));
                let promise = new Promise((resolve, reject) => {
                    resolve(this.todos);
                });
                return promise;
            }
            i++;
        }
    }

    generateId():number{
        return Math.floor(Math.random() * 1000000000);
    }
}