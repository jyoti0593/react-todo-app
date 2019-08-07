import React, { Component } from 'react';
import Todos from './Todos';
import AddTodos from './AddTodos';


class App extends Component {
  state = {
    todos: [
      { id: 1, content: 'buy some milk' },
      { id: 2, content: 'play mario kart' }
    ]
  }
  deleteTodo = (id) => {
    const remainingTodos = this.state.todos.filter(todo => {
      return todo.id !== id
    });

    this.setState({
      todos: remainingTodos
    })
  }
  addTodo =(todo)=>{
todo.id = Math.random();
let newToDos =[...this.state.todos, todo]
this.setState({
  todos: newToDos
})
  }
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodos addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;
