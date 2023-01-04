import React from 'react';
import { useState } from 'react';
import { initialTodo } from '../util/initialTodo';
import { AddButton } from '../components/AddButton';
import { EditButton } from '../components/EditButton';
import { DeleteButton } from '../components/DeleteButton';
import styled from 'styled-components';
export default function TodoList() {
    const [todo, setTodo] = useState(initialTodo)
    console.log(todo)
    return (
        <div>
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
                <DeleteButton todo={todo} setTodo={setTodo} />
                </STButton>
                
        </div>
    );
}
const STTime = styled.li`
    font-size: 20px;
`
const STList = styled.div`
    display: flex;
`
const STButton = styled.div`
    display: flex;
`

