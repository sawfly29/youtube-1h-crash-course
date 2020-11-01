import React from "react"; //подключать всегда, иначе приложение не скомпилируется
import TodoItem from './TodoItem'
//one of methods of adding styles:
const styles = {
  ul: {
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
};

//компоненты в реакте с большой буквы
export default function TodoList(props) {
  return (
    <ul style={styles.ul}>
      {/* <li>1</li> ниже промапили массив, который передали в приложении */}
    {props.todos.map((todo, index) => {
        return <TodoItem todo = {todo} key = {todo.id} index={index} />
    })}
    </ul>
  );
}
