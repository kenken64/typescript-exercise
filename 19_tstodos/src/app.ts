import $ = require('jquery');
import {Todos} from './lib/Todos';

// Instantiate Object
let todos = new Todos();

// Load All Todos
function loadTodos(){
    todos.getTodos().then((todos) => {
        for(let todo of todos){
            $('#todos').append(`
                <div class="col-lg-9 col-md-9">
                    <p>${todo.text}</p>
                </div>
                <div class="col-lg-3 col-md-3">
                    <button id="${todo.id}" class="deleteTodo btn btn-danger">Delete</button>
                </div>
            `);
        }
    });
}

// Add Todo
$('#todoForm').submit((e) => {
    e.preventDefault();
    let todoText:string = $('#todoText').val();

    let newTodo = {
        id:todos.generateId(),
        text:todoText
    }

    todos.addTodo(newTodo).then((todo) => {
        $('#todos').html('');
        loadTodos();
    });

});

// Delete Todo
$(document).on('click', '.deleteTodo', (e) => {
    todos.deleteTodo(e.target.id).then((todo) => {
        $('#todos').html('');
        loadTodos();
    });
});

loadTodos();