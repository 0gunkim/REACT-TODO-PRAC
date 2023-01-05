import React from 'react';
import { Button } from '../elem/Button';

export const DeleteButtonImmer = (props) => {
    const { updateTodo } = props;

    const deleteHandlerButton = () => {
        const delList = prompt(`몇시를 삭제하고 싶나요? (숫자만 입력해주세요)`);
        updateTodo((todo)=>{
            const index = todo.findIndex((m)=>(m.time === delList));
            todo.splice(index, 1)
        })
    }
    return(
        <div>
            <Button onClick={deleteHandlerButton} text='삭제'></Button>
        </div>
    );
};