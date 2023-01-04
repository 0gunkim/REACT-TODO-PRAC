import React from 'react';

export const EditButton = () => {
    const editHandlerButton = (props) => {
        const {todo, setTodo} = props;

        const editId = prompt(`수정하고싶은 번호 입력`);
        const current = prompt(`수정하고싶은 일을 적어주세요`);
        setTodo(todo => ([...todo, {title: todo.map((i) => {
            console.log(i)
            if(i.id === editId){
                return {title: current}
            }
        })}]))
    };
    return(
        <div>
            <button onClick={editHandlerButton}>수정하기</button>
        </div>
    );
};