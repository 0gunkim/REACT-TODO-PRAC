import React from 'react';
import { useState } from 'react';
import { initialTodo } from '../util/initialTodo';
import { DeleteButtonImmer } from '../Immercomponents/DeleteButtonImmer';
import styled from 'styled-components';
import { EditButton } from '../Immercomponents/EditButtonImmer';
import { AddButton } from '../Immercomponents/AddButtonImmer';
export default function TodoList() {
    const [todo, setTodo] = useState(initialTodo)
    console.log(todo)
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
                <AddButton todo={todo} setTodo={setTodo} />
                <EditButton todo={todo} setTodo={setTodo} />
                <DeleteButtonImmer todo={todo} setTodo={setTodo} />
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

