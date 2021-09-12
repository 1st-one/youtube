import React from 'react';
import cl from './MyButton.module.css'; 

const MyButton = ({name}) => {
    return (
        <button className={cl.button}>{name}</button>
    );
};

export default MyButton;