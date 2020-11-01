import React from "react";
import TodoList from './Todo/TodoList'//импорт нашего компонента

function App() {
const todos = [
  {id: 1, completed: false, title: 'buy some bread'},
  {id: 2, completed: true, title: 'buy some milk'},
  {id: 3, completed: false, title: 'buy some maslou'},
]


  return (<div className="wrapper">
    <h1>React - tutorial</h1>

    <TodoList todos={todos} /> 
    {/* above we inserted our external component. Мы передали в Тудулист свойство тудус с нашим массивом */}
  </div>);
}

export default App;
