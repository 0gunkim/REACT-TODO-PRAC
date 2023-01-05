import React, { useReducer } from 'react';
import todoReducer from '../reducer/todoReducer';
import { initialTodo } from '../util/initialTodo';
import { AddButton } from '../components/AddButton';
import { EditButton } from '../components/EditButton';
import { DeleteButton } from '../components/DeleteButton';
import styled from 'styled-components';
export default function TodoList() {
    const [todo, dispatch] = useReducer(todoReducer, initialTodo);
    return (
        <STContainer>
            {todo.map((list)=>{
                return(
                <div key={list.id}>
                    <ul>
                        <STList>
                            <STTime>{list.time}시 </STTime><div>_{list.title}</div>
                        </STList>
                    </ul>
                </div>
                
                )})}
                <STButton>
                <AddButton text='추가' dispatch={dispatch} />
                <EditButton dispatch={dispatch} />
                <DeleteButton dispatch={dispatch} />
                </STButton>
                
        </STContainer>
    );
}
const STContainer = styled.div`
    /* display: flex; */

`
const STTime = styled.li`
    font-size: 20px;
`
const STList = styled.div`
    display: flex;
`
const STButton = styled.div`
    display: flex;
    margin: 20px;
`

