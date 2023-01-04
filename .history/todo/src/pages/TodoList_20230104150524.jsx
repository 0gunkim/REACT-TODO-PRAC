import React from 'react';
import { useState } from 'react';
import { initialTodo } from '../util/initialTodo';
import { AddButton } from '../components/AddButton';
import { EditButton } from '../components/EditButton';
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
                        <li><STTime>{list.time}</STTime>_{list.title}</li>
                    </ul>
                </div>
                
                )})}
                <AddButton todo={todo}  setTodo={setTodo} />
                <EditButton todo={todo}  setTodo={setTodo} />
        </div>
    );
}
const STTime = styled.div`
    font-size: 20pxl
`

