import React from 'react';
import { nanoid } from 'nanoid'
import {Button} from '../elem/Button';
export const AddButtonImmer = (props) => {
    const id = nanoid()
    const { updateTodo } = props;
    const addHandlerButton = () => {
        const title = prompt(`오늘의 할일은?`);
        const time = prompt(`몇시 (숫자만 입력)`);
    updateTodo((todo)=>{
        todo.push({title, time, id});
    })
    };
    return(
        <div>
        <Button onClick={addHandlerButton} text='추가'></Button>
        </div>
    );
};