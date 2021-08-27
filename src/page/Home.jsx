import React from 'react';
import Header from '@cmp/Header/Header';
import Sidebar from '@cmp/Sidebar/Sidebar';
import Content from '../components/Content/Content';
import Categories from '../components/Categories/Categories';

const Home = ({ handlerInput, input }) => {

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