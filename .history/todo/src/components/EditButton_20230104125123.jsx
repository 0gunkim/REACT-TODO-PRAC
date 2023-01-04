import React from 'react';

export const EditButton = () => {
    const editHandlerButton = (props) => {
        const {todo, setTodo} = props;

        const editId = prompt(`수정하고싶은 번호 입력`);
        const current = prompt(`수정하고싶은 일을 적어주세요`);
        setTodo(...todo, todo.map((l) => {
            if(l.id === editId){
                [...todo, {title: current}]
            }
        
        })
        )
    return(
        <div>
            <button onClick={editHandlerButton} ></button>
        </div>
    );
};