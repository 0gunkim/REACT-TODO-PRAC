import React from 'react';
import { Button } from '../elem/Button';
export const EditButtonImmer = (props) => {
    const editHandlerButton = () => {
        const { updateTodo} = props;
        const editList = prompt(`몇시를 수정하고 싶나요? (숫자만 입력해주세요)`);
        const current = prompt(`수정하고싶은 일을 적어주세요`);
        updateTodo((todo)=>{
            const todoFind = todo.find((m)=>(m.time === editList))
            todoFind.title = current
        })
    };
    return(
        <div>
            <Button onClick={editHandlerButton} text='수정'></Button>
        </div>
    );
};