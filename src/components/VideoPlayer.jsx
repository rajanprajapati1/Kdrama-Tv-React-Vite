import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import {  fetchKdramaEpisode } from '../Apis/api.config'
import { LuSubtitles } from "react-icons/lu";

const VideoPlayer = ({ episodedata, poster }) => {
    const [EpisodeUrl, setEpisodeUrl] = useState('');
    useEffect(() => {
        const fetchepisodes = async () => {
            const res = await fetchKdramaEpisode(episodedata?.episodeId, episodedata?.mediaId);
            if (res) {
                setEpisodeUrl(res?.sources[0]?.url)
            }
        }
        fetchepisodes()
    }, [episodedata])
    return (
        <div className='player' >
            <div className="reactplayer">
                <ReactPlayer width={"900px"}
                    r
                    height={"500px"}
                    url={EpisodeUrl}
                    controls
                    poster={poster}
                    config={{
                        file: {
                            attributes: {
                                crossOrigin: 'anonymous'
                            }
                        },
                        hls: true
                    }}                />
                <div className="video_details">
                    <h1>{episodedata?.dramadata?.id.split('-').join(' ')}</h1>
                    <h1>episode No :{episodedata?.dramadata?.episode}</h1>
                </div>
            </div>
        </div>
    )
}


export default VideoPlayer
