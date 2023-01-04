import React from 'react';
import { useState } from 'react';
import { initialTodo } from '../util/initialTodo';
import { AddButton } from '../components/AddButton';
import { EditButton } from '../components/EditButton';

export default function TodoList() {
    const [todo, setTodo] = useState(initialTodo)
    console.log(todo)
    return (
        <div>
            {todo.map((list, index)=>{
                return(
                <div key={list.id}>
                    <ul>
                        <li>{list.index}_{list.title}({list.time})</li>
                    </ul>
                </div>
                
                )})}
                <AddButton todo={todo} setTodo={setTodo} />
                <EditButton todo={todo} setTodo={setTodo} />
        </div>
    );
}


