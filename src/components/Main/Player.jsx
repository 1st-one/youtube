import React, {useEffect} from 'react';
import Describe from './Describe';
import * as formater from '../Content/formater';

const Player = ({ dataVideo }) => {
    const { video } = dataVideo;
    
    return (
        <>
        <div className="main__video">
            <span className="main__video-title" display="block">{video?.snippet?.title}</span>
            <div className="main__video-info">
                <span className="date">{formater.round(video?.statistics?.viewCount, 'просмотров')} • {formater.parseDate(video?.snippet?.publishedAt)}</span>
                <div className="stat">
                    <div className="like">
                        <i className="fas fa-thumbs-up"></i>
                        <span>{formater.round(video?.statistics?.likeCount)}</span>
                    </div>
                    <div className="dislike">
                        <i className="fas fa-thumbs-down"></i>
                        <span>{formater.round(video?.statistics?.dislikeCount)}</span>
                    </div>
                    <div className="share">
                        <i className="fas fa-share"></i>
                        <span>Поделиться</span>
                    </div>
                    <div className="save">
                        <i className="fas fa-plus"></i>
                        <span>Сохранить</span>
                    </div>
                    <i className="fas fa-ellipsis-h"></i>
                </div>
            </div>
        </div>
        <Describe dataVideo={dataVideo}/>
        </>
    );
};

export default Player;