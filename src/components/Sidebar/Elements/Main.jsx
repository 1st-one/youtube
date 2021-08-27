import React from 'react';

const Main = () => {
    return (
        <ul className="sidebar__main">
                <li>
                    <i className="fas fa-home"></i>
                    <span>Главная</span>
                </li>
                <li>
                    <i className="fas fa-compass"></i>
                    <span>Навигатор</span>
                </li>
                <li>
                    <i className="fab fa-youtube-square"></i>
                    <span>Подписки</span>
                </li>
            </ul>
    );
};

export default Main;