import React, {useContext} from "react";
//useCoontext - один из видов хуков
import PropTypes from "prop-types";
import Context from '../context';

const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5 rem, 1 rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginBottom: '0.5rem'
    }, 
    input: {
        marginRight: '1 rem',
    }
}
//можно передать вместо todo пропс и вернуть props.todo.title
function TodoItem({ todo, index, onChange }) {
    const { removeToDo } = useContext(Context);
    //получили функцию removeTodo
    const classes = [];
    if (todo.completed){
        classes.push('done')
    }
  return (
    <li style = {styles.li}>
      <span className = {classes.join('')}>
        <input type="checkbox" style = {styles.input} onChange={() => onChange(todo.id)} checked={todo.completed}/>
        <strong>{index + 1}</strong>
        &nbsp;
        {todo.title}
      </span>
      <button className='rm' onClick={() => removeToDo(todo.id)}>&times;</button>
      {/* <button className='rm' onClick={removeToDo(null, todo.id -- это тоже сработает! подтянем контекст)}>&times;</button> */}
    </li>
  );
}
//nbsp - символ пробела, times - знак умножения

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};

export default TodoItem;
