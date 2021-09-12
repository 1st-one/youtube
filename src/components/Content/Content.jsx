import React, { useState, useEffect } from 'react';
import Loader from '@cmp/UI/loader/Loader';
import Item from './Item';
import { useFethcing } from '../../hooks/useFethcing';
import Request from '../../API/gateways';

const Content = () => {
    const [dataVideo, setDataVideo] = useState({
        video: [],
        channel: [],
        token: ''
    });

    const [fetchPopular, isPopularLoaded, popularError] = useFethcing(async () => {
        await Request.getPopular().then(res => {
            setDataVideo({
                ...dataVideo,
                video: [...res[0]],
                channel: [...res[1]],
                token: res[2]
            });
        })
    });

    const pagination = async () => {
        let coords = document.querySelector(`.content`).getBoundingClientRect();
        let client = document.documentElement.clientHeight;

        if (coords.bottom < client + 300) {
            await Request.getMore(dataVideo.token).then(res => {
                setDataVideo({
                    ...dataVideo,
                    video: [...dataVideo.video, ...res[0]],
                    channel: [...dataVideo.channel, ...res[1]],
                    token: res[2]
                })
            });
        }
    }

    useEffect(() => {
        fetchPopular();
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', pagination);
        return () => window.removeEventListener('scroll', pagination);
    }, [dataVideo.token])

    return (
        <>{isPopularLoaded ? <Loader />
            : <section className="content">
                {popularError &&
                    <h1>Проблема {popularError}</h1>}
                {dataVideo.video.map(item => {
                    return <Item
                        id={item.id}
                        key={item.id}
                        data={dataVideo.channel.filter(el => el.id === item.snippet.channelId)}
                        snippet={item.snippet}
                        stat={item.statistics} />
                })}
            </section>}
        </>
    );
};

export default Content;