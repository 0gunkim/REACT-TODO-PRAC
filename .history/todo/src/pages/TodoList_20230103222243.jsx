import React from 'react';
import { useState } from 'react';
import { initialTodo } from '../util/initialTodo';
export default function TodoList() {
    const [Todo, setTodo] = useState(initialTodo)
    return (
        <div>
            {Todo.map((list)=>{
                return(
                <div key={list.id}>
                    <ol>{list.title}</ol>
                </div>
                
                )})}
        </div>
    );
}

