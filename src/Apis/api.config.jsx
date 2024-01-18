import React, { useEffect } from 'react'
import axios from "axios";

export const fetchKdrama = async (query) => {
  try {
    const res = await fetch(`https://consumet-api-self-hosted.vercel.app/movies/dramacool/${query}` || false);
    const data = await res.json();
    return data;
  }
  catch (Err) {
    console.log(Err)
  }
}
export const SingleDrama = async (query) => {
  try {
    const res = await fetch(`https://consumet-api-self-hosted.vercel.app/movies/dramacool/info?id=drama-detail/${query}` || false);
    const data = await res.json();
    return data;
  }
  catch (Err) {
    console.log(Err)
  }
}
export const datalist = [
  {
    id: 'drama-detail/morning-comes-to-the-mental-ward',
    title: 'Daily Dose of Sunshine (2023)', url:
      'https://dramacool.hr/drama-detail/morning-comes-to-the-mental-ward',
    image: 'https://asianimg.pro/cover/morning-comes-to-the-mental-ward-1698209665.png'
  },


  { id: 'drama-detail/the-girl-downstairs', title: 'Doona! (2023)', url: 'https://dramacool.hr/drama-detail/the-girl-downstairs', image: 'https://asianimg.pro/cover/the-girl-downstairs-1697446887.png' }
  ,

  { id: 'drama-detail/i-know-but', title: 'Nevertheless (2021)', url: 'https://dramacool.hr/drama-detail/i-know-but', image: 'https://asianimg.pro/cover/i-know-but.png' }
  ,
  { id: 'drama-detail/-someday-or-one-day', title: 'A Time Called You (2023)', url: 'https://dramacool.hr/drama-detail/-someday-or-one-day', image: 'https://asianimg.pro/cover/-someday-or-one-day-1691721305.png' }
  ,

  { id: 'drama-detail/king-the-land', title: 'King the Land (2023)', url: 'https://dramacool.hr/drama-detail/king-the-land', image: 'https://asianimg.pro/cover/king-the-land-1685818482.png' }
  ,
  { id: 'drama-detail/celebrity', title: 'Celebrity (2023)', url: 'https://dramacool.hr/drama-detail/celebrity', image: 'https://asianimg.pro/cover/celebrity-1685985724.png' }
  ,

  { id: 'drama-detail/our-blues', title: 'Our Blues (2022)', url: 'https://dramacool.hr/drama-detail/our-blues', image: 'https://asianimg.pro/cover/our-blues.png' }
  ,

  { id: 'drama-detail/all-of-us-are-dead', title: 'All of Us Are Dead (2022)', url: 'https://dramacool.hr/drama-detail/all-of-us-are-dead', image: 'https://asianimg.pro/cover/all-of-us-are-dead.png' }
  ,

  { id: 'drama-detail/the-squid-games', title: 'Squid Games (2021)', url: 'https://dramacool.hr/drama-detail/the-squid-games', image: 'https://asianimg.pro/cover/the-squid-games.png' }
  ,
  { id: 'drama-detail/squid-game-season-2', title: 'Squid Game Season 2 (2024)', url: 'https://dramacool.hr/drama-detail/squid-game-season-2', image: 'https://asianimg.pro/cover/squid-game-season-2.png' }
  ,
  { id: 'drama-detail/vincenzo', title: 'Vincenzo (2021)', url: 'https://dramacool.hr/drama-detail/vincenzo', image: 'https://asianimg.pro/cover/vincenzo.png' }

];
export const settings = {
  dots: false,
  infinite: true,
  autoplay: true,
  // autoplaySpeed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};

export const dummyDrama = {
  id: "drama-detail/morning-comes-to-the-mental-ward",
  title: "Daily Dose of Sunshine (2023)",
  description: "Jung Da Eun works as a nurse. She is transferred to neuropsychiatry from the internal medicine department. This is her first time working in neuropsychiatry, so everything is difficult and awkward for her. Nevertheless, Jung Da Eun tries her best to deal with the patients and she grows as a nurse with the help of Chief Nurse Song Hyo Jin.",
  episodes: [
    {
      id: 'daily-dose-of-sunshine-2023-episode-1',
      title: 'Episode 1',
      episode: 1,
      releaseDate: '2023-11-03 01:33:52',
      url: 'https://dramacool.hr/daily-dose-of-sunshine-2023-episode-1.html'
    },
    {
      id: 'daily-dose-of-sunshine-2023-episode-2',
      title: 'Episode 2',
      episode: 2,
      releaseDate: '2023-11-03 01:34:00',
      url: 'https://dramacool.hr/daily-dose-of-sunshine-2023-episode-2.html'
    },
    // ... (repeat this structure for each episode)
    {
      id: 'daily-dose-of-sunshine-2023-episode-12',
      title: 'Episode 12',
      episode: 12,
      releaseDate: '2023-11-03 05:39:30',
      url: 'https://dramacool.hr/daily-dose-of-sunshine-2023-episode-12.html'
    }
  ],
  image: "https://asianimg.pro/cover/morning-comes-to-the-mental-ward-1698209665.png",
  otherNames: [
    '정신병동에도 아침이 와요',
    '精神病房也會迎來清晨',
    '精神病房也会迎来清晨',
    'Jeongsinbyeongdongedo Achimi Wayo',
    'Morning Comes to the Mental Ward',
    'Morning Comes To Psychiatric Wards Too',
    'Una dosis diaria de sol',
    'И в психиатрии восходит солнце'
  ],
  releaseDate: "2023"
};

export const fetchKdramaEpisode = async (episodeId,
  mediaId) => {
  try {

    const res = await fetch(`https://consumet-api-self-hosted.vercel.app/movies/dramacool/watch?episodeId=${episodeId}&mediaId=${mediaId}&server=asianload`);
    const data = await res.json();
    return data;
  }
  catch (Err) {
    console.log(Err)
  }
}
export const DramaSearch = async (query, number) => {
  try {
    const res = await fetch(`https://consumet-api-self-hosted.vercel.app/movies/dramacool/${query}?page=${number}` || false);
    const data = await res.json();
    return data;
  }
  catch (Err) {
    console.log(Err)
  }
}

const App = () => {
  // https://github.com/tbdsux/kuryana?tab=readme-ov-file github repo
  // https://kuryana.vercel.app/search/q/popul'ar  kdrama list
  // https://kuryana.vercel.app/list/{id}
  // this works  // "https://consumet-api-self-hosted.vercel.app/movies/dramacool/info?id=drama-detail/demon"
  const db = async () => {
    // const a = `https://consumet-api-self-hosted.vercel.app/movies/dramacool/watch?episodeId=vincenzo-2021-episode-1&mediaId=drama-detail/vincenzo&server=asianload    `
    try {
      // const resp = await fetch(`https://kuryana.vercel.app/search/q/2023?page=2` || false);
      // const resp = await fetch(`https://consumet-api-self-hosted.vercel.app/movies/dramacool/night-has-come?page=1`) 
      // night-has-come'
      const data = await resp.json();
      console.log(data);
    } catch (error) {
      console.log(error)
    }
  }
  db();

  // const options = {
  //   method: 'GET',
  //   headers: {
  //     accept: 'application/json',
  //     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMTFmMGY4MjYxMTAzMDk1MTRiM2U5MjMxODY3NjE0ZSIsInN1YiI6IjY0ZDM1ZDZhMDM3MjY0MDBmZmZjN2M3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TpzrrzlL_IEwa7uovSoSWI_8fwByw8FbP0aCbMk_2Y0'
  //   }
  // };

  // fetch(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${count}`, options)
  //   .then(response => response.json())
  //   .then(response => setMovies(response.results)
  // useEffect(() => {
  //   const url = `https://api.themoviedb.org/3/movie/60735`;
  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       accept: 'application/json',
  //       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMTFmMGY4MjYxMTAzMDk1MTRiM2U5MjMxODY3NjE0ZSIsInN1YiI6IjY0ZDM1ZDZhMDM3MjY0MDBmZmZjN2M3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TpzrrzlL_IEwa7uovSoSWI_8fwByw8FbP0aCbMk_2Y0'
  //     }
  //   };
  //   axios.get(url, options)
  //     .then(response => {
  //       console.log(response);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching data:', error);
  //     });
  // }, [id]);
  // https://autoembed.to/movie/tmdb/${id}`
  // <img src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`} 
  //   useEffect(()=>{
  //     const url = `https://api.themoviedb.org/3/search/multi?query=flash&include_adult=false&language=en-US&page=1`;
  //     const options = {
  //       method: 'GET',
  //       headers: {
  //         accept: 'application/json',
  //         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMTFmMGY4MjYxMTAzMDk1MTRiM2U5MjMxODY3NjE0ZSIsInN1YiI6IjY0ZDM1ZDZhMDM3MjY0MDBmZmZjN2M3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TpzrrzlL_IEwa7uovSoSWI_8fwByw8FbP0aCbMk_2Y0'
  //       }
  //     };

  //     fetch(url, options)
  //       .then(response => response.json())
  //       .then(response =>console.log(response.results))
  //       .catch(err => console.error(err));
  // }, []);


  return (<>
    <div className='content'>
      <div className="container">

      </div>

    </div>
  </>
  )
}
