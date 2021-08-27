import React, { useEffect, useState } from 'react';
import Loader from '@cmp/UI/loader/Loader';
import ListItem from './ListItem';
import { useFethcing } from '../../hooks/useFethcing';
import Request from '../../API/gateways';

const List = ({ input, state }) => {
    const [responseSearch, setResponseSearch] = useState({
        video: [],
        channel: [],
        stat: [],
        token: ''
    });

    const [listFetching, listIsLoaded, listError] = useFethcing(async () => {
        await Request.getSearch(input).then(res => {
            setResponseSearch({
                video: [...res[0]],
                channel: [...res[1]],
                stat: [...res[2]],
                token: res[3]
            });
        });
    });

    const pagination = async () => {
        let coords = document.querySelector('.list-container').getBoundingClientRect();
        let client = document.documentElement.clientHeight;
        if (coords.bottom < client + 100) {
            await Request.getMoreSearch(responseSearch.token, input).then(res => {
                setResponseSearch({
                    ...responseSearch,
                    video: [...responseSearch.video, ...res[0]],
                    channel: [...responseSearch.channel, ...res[1]],
                    stat: [...responseSearch.stat, ...res[2]],
                    token: res[3]
                })
            });
        }
    };


    useEffect(() => {
        window.addEventListener('scroll', pagination);
        return () => {
            window.removeEventListener('scroll', pagination);
        }
    }, [responseSearch.token])

    useEffect(() => {
        listFetching();

        let check = true;
        if (localStorage.length != 0) {
            for (let key in localStorage) {
                if (!localStorage.hasOwnProperty(key)) continue;
                if (localStorage.getItem(key).toLowerCase() === input.toLowerCase()) {
                    check = false;
                };
            };
        }

        if (check) {
            localStorage.setItem(`${Math.random()}`, `${input}`);
        }

    }, [state]);

    const checker = () => {
        return responseSearch.video.map(item => {
            return <ListItem
                key={item.id.videoId}
                id={item.id.videoId}
                video={item.snippet}
                channel={responseSearch.channel.filter(el => el.id === item.snippet.channelId)[0]}
                stat={responseSearch.stat.filter(el => el.id === item.id.videoId)}
            />
        })
    };

    return (
        <section className="list">
            <div className="list-container">
                {listError &&
                    <h1>Возникла ошибка {listError}</h1>}
                {listIsLoaded ? <Loader /> : checker()}
            </div>
        </section>
    );
};

export default List;