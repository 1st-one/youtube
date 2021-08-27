import React, { useEffect, useMemo, useState } from 'react';
import Header from '../components/Header/Header';
import Sidebar from '@cmp/Sidebar/Sidebar';
import List from '@cmp/List/List';

const Search = ({ handlerInput, input }) => {
    const [state, setState] = useState(true);
    const changeState = () => {
        if (!input) return;
        if (input === location.search.slice(2)) return;
        setState(!state);
    };

    return (
        <section className="search">
            <Header handlerInput={(e) => handlerInput(e)} input={input} changeState={changeState}/>
            <Sidebar />
            <List input={input} state={state}/>
        </section>
    );
};

export default Search;