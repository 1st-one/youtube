import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {round, parseDate} from '../Content/formater';

const ListItem = ({ video, id, channel, stat }) => {
    const {publishedAt, title, thumbnails, channelTitle, description } = video;
    
    return (
        <div className="list-container_item">
            <Link to={`watch?=${id}`}><img src={thumbnails.medium.url} alt="" /></Link>
            <div className="list-container_item-data">
                <div className="title">{title}</div>
                <div className="info">{round(stat[0]?.statistics?.viewCount, 'просмотров')} • {parseDate(publishedAt)}</div>
                <div className="channel">
                    <img src={channel?.snippet?.thumbnails?.default?.url} alt="" width="30px" height="30px"/>
                    <span>{channelTitle}</span>
                </div>
                <div className="describe">{description}</div>
            </div>
        </div>
    );
};

export default ListItem;