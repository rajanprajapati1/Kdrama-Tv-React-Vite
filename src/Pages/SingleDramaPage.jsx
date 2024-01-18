import React, { useEffect, useState } from 'react'
import { Outlet, useParams } from 'react-router-dom'
import { SingleDrama, datalist, dummyDrama } from '../Apis/api.config';
import { FaPlay } from 'react-icons/fa';
import { FaArrowUpWideShort, FaDownload } from 'react-icons/fa6';
import { MdOutlineHorizontalRule } from 'react-icons/md';
import EpisodeCard from '../components/EpisodeCard';
import Loader from '../components/Loader';
import VideoPlayer from '../components/VideoPlayer';

const SingleDramaPage = () => {
    const [singleData, SetsingleData] = useState([]);
    const [loading, Setloading] = useState(false);
    const [VideoPlayershow, setVideoPlayershow] = useState(false)
    const [episodedata, setEpisodedata] = useState({
        episodeId: "",
        mediaId: "",
        // server: "asianload" || "mixdrop" || " streamtape" || "streamsb",
        dramadata: ""
    });
    const { id } = useParams();
    useEffect(() => {
        const fetchDramadata = async () => {
            const res = await SingleDrama(id);
            if (res) {
                SetsingleData(res)
                Setloading(false)
            }
        }
        Setloading(true)
        fetchDramadata()
    }, [id])
    return (<>
        {loading ? <Loader /> : (<>
            <div className='singledrama_Page'>
                {
                    VideoPlayershow ? <VideoPlayer setEpisodedata={setEpisodedata} poster={singleData?.image} episodedata={episodedata} /> : <div className="single_details">
                        <div className="image_s">
                            <img src={singleData?.image} alt="" />
                        </div>
                        <div className="single_info">
                            <h2>{singleData?.title}</h2>
                            <h3>series</h3>
                            <h4>rating ⭐⭐⭐</h4>
                            <h5>Release Date {singleData?.releaseDate} | Korea</h5>
                            <div className="tags">
                                <button>Drama</button>
                                <button>Action</button>
                                <button>Horror</button>
                            </div>
                            <p>{singleData?.description}</p>
                        </div>
                    </div>
                }
                <hr className='hr' />
                <div className="others_btn">
                    <div className="btn_first">
                        <button>Play <FaPlay /></button>
                        <button>Add to WishList <FaArrowUpWideShort /></button>
                    </div>
                    <a href={episodedata?.dowloadlink || "hello"} download> <button>Dowload <FaDownload /></button></a>
                </div>
                <div className="episodes">
                    <div className='sec'>
                        <h2><MdOutlineHorizontalRule /> episodes <MdOutlineHorizontalRule /> </h2>
                    </div>
                    <div className="episode_Section">
                        {singleData?.episodes?.map((val) => {
                            return <EpisodeCard setVideoPlayershow={setVideoPlayershow} setEpisodedata={setEpisodedata} singleData={singleData?.id} val={val} key={val.id} />
                        })}
                    </div>
                </div>
            </div>
            <div className="image_overlay_new">
                <img src={singleData?.image} alt="" />
            </div>
        </>)}
        <Outlet />
    </>
    )
}

export default SingleDramaPage
