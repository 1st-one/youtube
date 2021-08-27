import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as formater from './formater';


const Item = ({ id, snippet, stat, data }) => {
    const { channelId, channelTitle, title, publishedAt } = snippet;
    const { viewCount } = stat;

    return (
        <div className="content__item">
            <div className="content__item-title">
                <Link to={`/watch?=${id}`}><img src={snippet?.thumbnails?.medium?.url} alt="" /></Link>
                {/* <span className="content__item-title__timer">12:23</span> */}
            </div>
            <div className="content__item-text">
                <img src={data[0].snippet?.thumbnails?.default?.url} alt="" width='50' />
                <span className="title">{title.length > 70 ? title.slice(0, 50) + '\u2026' : title}</span><br />
                <span className="username">{channelTitle}</span><br />
                <span className="data">{formater.round(viewCount, 'просмотров')} • {formater.parseDate(publishedAt)}</span>
            </div>

        </div>
    );
};

export default Item;