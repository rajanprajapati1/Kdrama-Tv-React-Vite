import React, { useState } from 'react'
import { IoIosPlay } from "react-icons/io";
import { Link } from 'react-router-dom';
const EpisodeCard = ({ val, singleData, setEpisodedata, setVideoPlayershow }) => {
    const updateEpisodeData = () => {
        setEpisodedata({
            episodeId: val?.id,
            mediaId: singleData ,
            dramadata :val,
        });
        setVideoPlayershow(true)
        window.scroll(0, 0)
    };
    return (<>
        <div onClick={updateEpisodeData} className='EpisodeCard' style={{ backgroundImage: `url(${val?.image})` }}>
            <h1>{val.title}</h1>
            <button><IoIosPlay color='white' /></button>
        </div>
    </>
    )
}
export default EpisodeCard
