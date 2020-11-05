import React, {useEffect} from "react";
//useEffect используется, когда надо отследить готовность ДОМ-дерева
import TodoList from "./Todo/TodoList"; //импорт нашего компонента
import Context from "./context";
//import AddTodo from "./Todo/AddTodo"; 
//- пробуем загрузить лениво - то есть подгрузка компонента не сразу и полностью, а по мере необходимости
import Loader from './Loader';
import Modal from './Modal/Modal'

const AddTodo = React.lazy(()=> new Promise(resolve => 
  setTimeout(() => {resolve(import('./Todo/AddTodo'))}, 3000)
  ));//имитация загрузки с сервера 

function App() {
  //useState - is a hook!
  //useState returns an array (state) and a function to modify this array
  //variable ---destrucuturization of array
  const [todos, setTodos] = React.useState([]);
     //{ id: 1, completed: false, title: "buy some bread" },
    // { id: 2, completed: true, title: "buy some milk" },
    // { id: 3, completed: false, title: "buy some maslou" },
 
  //данный массив, по факту, является стейтом то есть если где-то что-то меняем, то надо поменять сам стейт
  //в аргументе к стейту указываем, какое именно значение по умолчанию будет у стейта

const [loading, setLoading] = React.useState(true);
  //another one state

  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
    .then(response => response.json())
    .then(
      todos => {setTimeout(() => {setTodos(todos);
        setLoading(false)
      }, 2000)})
  }, [])
  //пустой массив- это список зависимостей для отработки данному коллбэку

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

function addTodo(title){
  setTodos(todos.concat([{
    title: title,
    id: Date.now(),
    completed: false,
  }]))
}


  return (
    <Context.Provider value={{removeToDo}}>
      {/* выше запись эквивалентна removeToDo: removeToDo - мы передаем объект */}
      <div className="wrapper">
        <h1>React - tutorial</h1> 
        <Modal />
        <React.Suspense fallback={<p>Loading.....</p>}>
         
          <AddTodo onCreate = {addTodo}/>
        </React.Suspense>
        {/* суспенс нужен для работы с ленивой загрузкой. Вместо лоадинга можно анимашку с лоадером передать */}
        {loading && <Loader />}

        {todos.length ?<TodoList todos={todos} onToggle={toggleToDo} /> : (loading ? null : 'Nothing to do!')}
        
        {/* above we inserted our external component. Мы передали в Тудулист свойство тудус с нашим массивом */}
      </div>
    </Context.Provider>
  );
}

export default App;
