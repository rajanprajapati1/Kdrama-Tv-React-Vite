import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { datalist, fetchKdrama ,settings} from '../Apis/api.config';
import { FaPlay } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CarouselPage = () => {
    const [Carouseldata, setCarouseldata] = useState(datalist);

    return (<>
        <div className="cont">
            <Slider {...settings}  >
                {Carouseldata?.map((val) => {
                    const id = val.id.split('/')[1];
                    return <>
                        <div className='slide'>
                            <div className="overlay"></div>
                            <div className="slide_img">
                                <img src={val?.image} alt="" />
                            </div>
                            <div className="slide_details">
                                <h1>{val.title}</h1>
                                <Link to={`/drama/${id}`}>
                                <button className='watchbtn'><FaPlay /> Watch Now</button>
                                </Link>
                                <p>
                                  Korean drama as our carefully curated selection transports you to captivating storylines and unforgettable moments. Immerse yourself in the rich tapestry of emotions, from heartwarming romances to pulse-pounding thrillers. Our K-Drama carousel invites you to explore a diverse spectrum of genres, where each slide unveils a new tale filled with love, laughter, and intrigue. Join us on a journey through the enchanting realms of Korean storytelling, where every scene is a brushstroke painting the canvas of emotions!"</p>
                            </div>
                        </div>
                    </>
                })}
            </Slider>
        </div>
    </>
    );
};

export default CarouselPage;
