import React from "react"; //подключать всегда, иначе приложение не скомпилируется
import TodoItem from './TodoItem'

//поскольку ДжС - язык нетипизированный, то для описания входящих свойств в компонент 
//рекомендуется использовать данную библиотеку:
//подробнее https://ru.reactjs.org/docs/typechecking-with-proptypes.html
import PropTypes from 'prop-types'


//one of methods of adding styles:
const styles = {
  ul: {
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
};

//компоненты в реакте с большой буквы
function TodoList(props) {
  return (
    <ul style={styles.ul}>
      {/* <li>1</li> ниже промапили массив, который передали в приложении */}
    {props.todos.map((todo, index) => {
        return <TodoItem todo = {todo} key = {todo.id} index={index} onChange={props.onToggle} />
    })}
    </ul>
  );
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired,
}//проверили с помощью проптайпс аргумент функции, что это массив из объектов, и он обязателен

export default TodoList