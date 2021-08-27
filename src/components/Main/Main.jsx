import React, { useEffect } from 'react';
import Player from './Player';

const Main = ({ dataVideo }) => {


    return (
        <section className="main">
             <iframe src={`https://www.youtube.com/embed/${dataVideo.video.id}`} frameBorder="0" width="100%" height="600px"  margin-top="56px"></iframe>
            <Player dataVideo={dataVideo}/>
        </section>
    );
};

export default Main;