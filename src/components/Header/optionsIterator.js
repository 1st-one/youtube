import React from "react";

export const iterator = () => {
    const arr = [];

    for (let key in localStorage) {
        arr.push(<option key={key} value={localStorage.getItem(key)}></option>)                  
    }
    return arr;
};
