import React from 'react';
import { nanoid } from 'nanoid'

export const AddButton = ({dispatch, text}) => {
    const id = nanoid()
    const addHandlerButton = () => {
        const title = prompt(`오늘의 할일은?`);
        const time = prompt(`몇시 (숫자만 입력)`);
        dispatch({type: 'ADD', title, time, id})
    };
    return(
        <div>
        <button onClick={addHandlerButton}>{`${text}`}</button>
        </div>
    );
};