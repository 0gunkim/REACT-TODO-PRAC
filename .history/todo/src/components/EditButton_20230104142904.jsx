import React from 'react';

export const EditButton = (props) => {
    const editHandlerButton = () => {
        const {todo, setTodo} = props;
        console.log(todo);
        const editId = prompt(`수정하고싶은 번호 입력`);
        const current = prompt(`수정하고싶은 일을 적어주세요`);
        setTodo(todo => (todo.map((i) => {
            if(i.id === editId){
                return {...todo, title: current};
            }
        })))
    };
    return(
        <div>
            <button onClick={editHandlerButton}>수정하기</button>
        </div>
    );
};