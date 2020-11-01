import React from 'react';
//можно передать пропс и вернуть props.todo.title
export default function TodoItem({todo, index}){
    return (
        <li><strong>{index + 1 + ' '}</strong>{todo.title}</li>
    )
}