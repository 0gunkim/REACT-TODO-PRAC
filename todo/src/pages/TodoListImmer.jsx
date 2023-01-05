import React, {useState} from 'react';
import { initialTodo } from '../util/initialTodo';
import { useImmer } from 'use-immer'
import { DeleteButtonImmer } from '../Immercomponents/DeleteButtonImmer';
import { EditButtonImmer } from '../Immercomponents/EditButtonImmer';
import { AddButtonImmer } from '../Immercomponents/AddButtonImmer';
import styled from 'styled-components';
import { InputForm } from '../Molecule/inputForm';

export default function TodoListImmer() {
    const [todo, updateTodo] = useImmer(initialTodo)
    
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
                <AddButtonImmer todo={todo} updateTodo={updateTodo} />
                <EditButtonImmer todo={todo} updateTodo={updateTodo} />
                <DeleteButtonImmer todo={todo} updateTodo={updateTodo} />
                </STButton>
        <InputForm></InputForm>  
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

