import React, { useEffect } from 'react';
import { round } from '../Content/formater';


const Describe = ({ dataVideo }) => {
    const {video, channel} = dataVideo;
    useEffect(() => {
        document.querySelector('.description').innerHTML = video?.snippet?.description;
    }, [video]);

    const expand = () => {
        let el = document.querySelector('.description');

        if (el.clientHeight <= 100) {
            el.style.height = el.scrollHeight + 'px';
        } else {
            el.style.height = '100px';
        }
    };

    return (
        <div className="main__describe">
            <div className="subsection">
                <div className="main__describe-channel">
                    <img src={channel.snippet?.thumbnails?.default.url} alt="" width="60px" height="60px"/>
                    <span className="name">{video.snippet?.channelTitle}</span>
                    <span className="subscribers">{round(channel?.statistics?.subscriberCount, 'подписчиков')}</span>
                </div>
                <button className="subscribe">Подписаться</button>
            </div>
            <pre className="description">
            </pre>
            <button className="else" onClick={expand} onWheel={() => false}>еще</button>
        </div>
    );
};

export default Describe;