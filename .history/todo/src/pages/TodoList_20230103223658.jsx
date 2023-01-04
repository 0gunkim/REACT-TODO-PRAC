import React from 'react';
import { useState } from 'react';
import { initialTodo } from '../util/initialTodo';
import { AddButton } from '../components/AddButton';
export default function TodoList() {
    const [todo, setTodo] = useState(initialTodo)
    return (
        <div>
            {todo.map((list)=>{
                return(
                <div key={list.id}>
                    <ul>
                        <li>{list.title}({list.time})</li>
                        <AddButton todo={todo} setTodo={setTodo} />
                    </ul>
                </div>
                
                )})}
        </div>
    );
}


