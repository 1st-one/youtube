import React, { useEffect } from 'react';
import cl from './Loader.module.css';

const Loader = () => {
    useEffect(() => {
        const coords = document.querySelector('.header').getClientRects();
        const el = document.querySelector(`.${cl.loader}`);
        el.style.position = 'fixed';
        el.style.top = coords[0].top;
        el.style.left = coords[0].left;
        el.style.zIndex = 1;
    }, []);

    return(
        <div className={cl.loader}></div>
    )
}

export default Loader;