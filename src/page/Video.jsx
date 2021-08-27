import React, { useEffect, useState } from 'react';
import Header from '@cmp/Header/Header';
import Main from '@cmp/Main/Main';
import Loader from '@cmp/UI/loader/Loader';
import { useFethcing } from '../hooks/useFethcing';
import Request from '../API/gateways';

const Video = ({handlerInput, input}) => {
    const [dataVideo, setDataVideo] = useState({
        video: [],
        channel: []
    });
    const [playerFetching, playerIsLoaded, playerError] = useFethcing(async () => {
        let arr = await Request.getPlayer();
        setDataVideo({
            video: arr[0],
            channel: arr[1]
        })
    });

    useEffect(() => {
        playerFetching();
    }, []);

    return (
        <>
            <Header handlerInput={(e) => handlerInput(e)} input={input}/>
            {playerError ? <h1 style={{position: 'absolute', top: '100px'}}>Возникла ошибка {playerError}</h1> :
            playerIsLoaded ? <Loader /> : <Main dataVideo={dataVideo}/>}
        </>
    );
};

export default Video;