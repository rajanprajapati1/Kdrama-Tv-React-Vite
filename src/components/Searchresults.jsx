import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { DramaSearch, datalist } from '../Apis/api.config';
import { MdOutlineFindInPage } from "react-icons/md";
import { GrLinkPrevious } from "react-icons/gr";
import { GrLinkNext } from "react-icons/gr";

import Card from './Card';
import Loader from './Loader';

const Searchresults = () => {
    const [loading, Setloading] = useState(false);
    const [SearchResultData, setSearchResultData] = useState({
        currentPage: '1', hasNextPage: false, results: [],
    }
    );
    const [Page, setPage] = useState(1);
    const { id } = useParams();
    useEffect(() => {
        const Fetchsearchresults = async () => {
            Setloading(true)
            const res = await DramaSearch(id, Page);
            if (res) {
                setSearchResultData(res)
                Setloading(false)
            }
        }
        Fetchsearchresults()
    }, [id, Page])
    return (<>
        <div className='Searchresults'>
        </div>
        <div className="main_bar">
            <h1>🟦<MdOutlineFindInPage /> Search Results : {SearchResultData?.results?.length}</h1>
            {loading ? <Loader /> :(<> <div className="flex_search_results">
                {SearchResultData.results.length === 0 ? <div className='notfound'><h1>No Data Found</h1></div> :  SearchResultData.results.slice(0, 6).map((val, i) => {
                    return <Card val={val} key={i} />
                })}
            </div>
            <div className="pagination">
                <button
                    onClick={() => setPage((prevPage) => Math.max(prevPage - 1, 0))}
                    disabled={Page <= 0 || !SearchResultData?.hasNextPage}
                >
                    <GrLinkPrevious /> Prev {Page}
                </button>
                <button
                    onClick={() => {
                        if (SearchResultData?.hasNextPage) {
                            setPage((prevPage) => prevPage + 1);
                        }
                    }}
                    disabled={!SearchResultData?.hasNextPage}
                >
                    Next <GrLinkNext /> {Page + 1}
                </button>

            </div>
            </>)}
           
        </div>
    </>
    )
}

export default Searchresults
