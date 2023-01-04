import React from 'react';

export const EditButton = (props) => {
    const editHandlerButton = () => {
        const {todo, setTodo} = props;
        const editId = prompt(`몇시를 수정하고 싶나요? (숫자만 입력해주세요)`);
        const current = prompt(`수정하고싶은 일을 적어주세요`);
        setTodo(todo => (todo.map((i) => {
            console.log(i.time)
            if( i.time === editId){
                return [...i, {title: current}]
            }
        })))
    };
    return(
        <div>
            <button onClick={editHandlerButton}>수정하기</button>
        </div>
    );
};