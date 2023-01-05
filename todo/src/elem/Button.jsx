import React from 'react';
export const Button = (props) => {
 const {onClick, text} = props;
    return(
        <div>
        <button onClick={onClick}>{`${text}`}</button>
        </div>
    );
};