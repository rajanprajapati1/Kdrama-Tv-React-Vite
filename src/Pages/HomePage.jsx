import React, { useEffect, useState } from 'react'
import Carouselpage from '../components/Carousel'
import Card from '../components/Card'
import { datalist, fetchKdrama } from '../Apis/api.config'
import Footer from '../components/Footer'

const HomePage = () => {
    const [Popular, SetPopular] = useState([]);
    const [Latest, SetLatest] = useState([]);
    const [Toplist, SetToplist] = useState([]);
    const [NewData, setNewData] = useState([]);
    useEffect(() => {
        const fetTrending = async () => {
            const res = await fetchKdrama(`k-drama`);
            if (res) {
                SetPopular(res.results)
            }
        }
        fetTrending()
        const fetLatest = async () => {
            const res = await fetchKdrama(`love`);
            if (res) {
                SetLatest(res.results)
            }
        }
        fetLatest()
        const fetToplist = async () => {
            const res = await fetchKdrama(`drama`);
            if (res) {
                SetToplist(res.results)
            }
        }
        fetToplist()
        
        const fetNewData = async () => {
            const res = await fetchKdrama(`school`);
            if (res) {
                setNewData(res.results)
            }
        }
        fetNewData()
    }, [])
    return (
        <div className='homepage'>
            <div className="flex_container">
                <div className="first">
                    <Carouselpage />
                </div>
                <div className="third">
                    <h2>Latest Dramas</h2>
                    <div className="first_bar">
                        {Latest.map((val) => {
                            return <div className="Card_box">
                                <Card val={val} />
                            </div>
                        })}
                    </div>
                    <h2>Top Listest</h2>
                    <div className="second_bar">
                        {Toplist.map((val) => {
                            return <div className="Card_box">
                                <Card val={val} />
                            </div>
                        })}
                    </div>
                </div>
                <div className="fourth">
                    <h2>🟦List Of Hits 📣</h2>
                    <div className="list_popular">
                        <ul>
                            {Popular?.map((val, i) => {
                                return <h3>{i + 1}   {val.title}</h3>
                            })}
                        </ul>
                    </div>
                </div>
                <div className="fifth">
                     <h2>🟧 Random Recommendation </h2>
                     <div className="fifth_bar">
                     {NewData?.map((val)=>{
                        return <div className="Card_box">
                        <Card val={val} />
                     </div>
                     })}
                     </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default HomePage
