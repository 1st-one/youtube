import React, { useState } from 'react';
const Categories = () => {
    const [counter, setCounter] = useState(0);

    const scrollBar = (e) => {
        const el = document.querySelector('.categories-container');
        const container = document.querySelector('.categories');
        const containerCoords = container.getBoundingClientRect();
        const elCoords = el.getBoundingClientRect();
            if (e.deltaY < 0 && elCoords.left < containerCoords.left) {
                el.style.marginLeft = counter + 100 + 'px';
                setCounter(counter + 100);
            } else if (e.deltaY > 0 && elCoords.right > containerCoords.right + 30) {
                el.style.marginLeft = counter - 100 + 'px';
                setCounter(counter - 100);
            }
    };

    return (
        <div className="categories" onWheel={(e) => scrollBar(e)}>
            <div className="categories-container">
                <span>Все</span>
                <span>Игры</span>
                <span>Музыка</span>
                <span>Мультфильмы</span>
                <span>Футбол</span>
                <span>Экшн и приключения</span>
                <span>Сейчас в эфире</span>
                <span>Ситкомы</span>
                <span>Туристические направления</span>
                <span>Рэп</span>
                <span>Последние опубликованые видео</span>
                <span>Последние опубликованые видео</span>
            </div>
        </div>
    );
};

export default Categories;