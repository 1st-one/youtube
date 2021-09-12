import React, { useEffect, useState } from 'react';
import img from '@img/logo';
import { focus, remover } from './tooltipHandlers';
import { Link } from 'react-router-dom';
import { iterator } from './optionsIterator';

const Header = ({ handlerInput, input, changeState }) => {

    return (
        <header className="header" onMouseOver={(e) => focus(e)} onMouseOut={(e) => remover(e)}>
            <div className="header__logo">
                <i className="fas fa-bars"></i>
                <Link to="/"><img data-tooltip="На главную YouTube" src={img} alt="" width="100px" /></Link>
            </div>
            <div className="header__input">
                <input onInput={handlerInput} className='input' list="search" value={input} type="text" placeholder="Введите запрос" />
                <datalist id="search">
                    {iterator()}
                </datalist>
                <i data-tooltip="Клавиатура" className="fas fa-keyboard"></i>
                {input
                    ? <Link to={`/search?=${input}`}><i data-tooltip="Поиск" className="fas fa-search" onClick={changeState}></i></Link>
                    : <i data-tooltip="Поиск" className="fas fa-search" onClick={changeState}></i>}
                <i data-tooltip="Голосовой поиск" className="fas fa-microphone"></i>
            </div>
            <div className="header__user">
                <i data-tooltip="smth" className="fas fa-grip-horizontal"></i>
                <i data-tooltip="smth" className="fas fa-ellipsis-v"></i>
                <Link to='/login'><button className="header__user-btn">
                    <i className="fas fa-user"></i>
                    войти</button></Link>
            </div>
        </header>
    );
};

export default Header;

