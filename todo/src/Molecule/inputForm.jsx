import React, { useState } from 'react';
export const InputForm = () => {
    const[inputForm, setInputForm] = useState(dayDate);
    const onSubmitHandler = (e) => {
        e.preventDefault();
    
        }
    

    const onChangeHandler = (e) => {
        const { name, value} = e.target;
        setInputForm({...inputForm, [name]: value})
        
    };

    return(
        <form onSubmit={onSubmitHandler}>
            <label htmlFor='day'>요일:</label>
            <input type='text' id='day' name='day' value={inputForm.day}
            onChange={onChangeHandler}/>
            <label htmlFor='date'>날짜:</label>
            <input type='text' id='date' name='date' value={inputForm.date} 
            onChange={onChangeHandler}/>
        <button>Submit</button>
        </form>
    );
};

const dayDate = 
    {
        day: '월요일', 
        date: '1월1일'
    }
