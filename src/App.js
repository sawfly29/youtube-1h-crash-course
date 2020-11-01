import React from "react";
import TodoList from "./Todo/TodoList"; //импорт нашего компонента
import Context from "./context";

function App() {
  //useState - is a hook!
  //useState returns an array (state) and a function to modify this array
  //variable ---destrucuturization of array
  const [todos, setTodos] = React.useState([
    { id: 1, completed: false, title: "buy some bread" },
    { id: 2, completed: true, title: "buy some milk" },
    { id: 3, completed: false, title: "buy some maslou" },
  ]);

  //данный массив, по факту, является стейтом то есть если где-то что-то меняем, то надо поменять сам стейт

  function toggleToDo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }

  function removeToDo(id){
    setTodos(todos.filter(todo => todo.id !== id))
  }//функция по удалению по ИД

  return (
    <Context.Provider value={{removeToDo}}>
      {/* выше запись эквивалентна removeToDo: removeToDo - мы передаем объект */}
      <div className="wrapper">
        <h1>React - tutorial</h1>
        {todos.length ?<TodoList todos={todos} onToggle={toggleToDo} /> : <p>Nothing to do!</p>}
        
        {/* above we inserted our external component. Мы передали в Тудулист свойство тудус с нашим массивом */}
      </div>
    </Context.Provider>
  );
}

export default App;
