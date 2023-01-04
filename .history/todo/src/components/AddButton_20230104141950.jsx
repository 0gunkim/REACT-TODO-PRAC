import React from 'react';

export const AddButton = (props) => {
    const {todo, setTodo} = props;
    console.log(todo)
    const addHandlerButton = () => {
        const ff = prompt(`오늘의 할일은?`);
        const time = prompt(`아침? 점심? 저녁? 언제?`);
        setTodo(() => (
            [...todo, {title: ff, time}]
        ))
    };
    return(
        <div>
        <button onClick={addHandlerButton}>추가</button>
        </div>
    );
};