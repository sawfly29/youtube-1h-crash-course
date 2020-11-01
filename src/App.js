import React from "react";
import TodoList from './Todo/TodoList'//импорт нашего компонента

function App() {
  //useState - is a hook!
  //useState returns an array (state) and a function to modify this array
  //variable ---destrucuturization of array 
const [todos, setTodos] = React.useState([
  {id: 1, completed: false, title: 'buy some bread'},
  {id: 2, completed: true, title: 'buy some milk'},
  {id: 3, completed: false, title: 'buy some maslou'},
])

//данный массив, по факту, является стейтом то есть если где-то что-то меняем, то надо поменять сам стейт

function toggleToDo(id){
  setTodos(todos.map(todo => {
    if (todo.id === id){
      todo.completed = !todo.completed;
    }
    return todo
  }))
}

  return (<div className="wrapper">
    <h1>React - tutorial</h1>

    <TodoList todos={todos} onToggle={toggleToDo} /> 
    {/* above we inserted our external component. Мы передали в Тудулист свойство тудус с нашим массивом */}
  </div>);
}

export default App;
