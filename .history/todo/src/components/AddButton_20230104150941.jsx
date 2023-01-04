import React from 'react';
import { nanoid } from 'nanoid'

export const AddButton = (props) => {
    const id = nanoid()
    const {todo, setTodo} = props;
    console.log(todo)
    const addHandlerButton = () => {
        const ff = prompt(`오늘의 할일은?`);
        const time = prompt(`몇시 숫자만 입력`);
        setTodo(() => (
            [...todo, {title: ff, time ,id}]
        ))
    };
    return(
        <div>
        <button onClick={addHandlerButton}>추가</button>
        </div>
    );
};