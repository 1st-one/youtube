import React, { useEffect } from 'react';
import Header from '@cmp/Header/Header';
import Sidebar from '@cmp/Sidebar/Sidebar';
import Content from '../components/Content/Content';
import Categories from '../components/Categories/Categories';

const Home = ({ handlerInput, input }) => {

    useEffect(() => {
        const el = document.querySelector('.categories');

        const overHandler = () => {
            document.body.style.overflowY = 'hidden';
        };

        const outHandler = () => {
            document.body.style.overflowY = 'visible';
        };

        el.addEventListener('mouseover', overHandler);
        el.addEventListener('mouseout', outHandler);

        return () => {
            el.removeEventListener('mouseover', overHandler);
            el.removeEventListener('mouseout', overHandler);
        };
    }, []);

    return (
        <>
        <Header handlerInput={(e) => handlerInput(e)} input={input}/>
        <Sidebar />
        <Categories />
        <Content />
        </>
    );
};

export default Home;