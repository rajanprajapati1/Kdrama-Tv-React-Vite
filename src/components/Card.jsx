import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ val }) => {
    const id = val?.id.split('/')[1];
    return (
        <div className='Card'>
            <img src={val?.image} alt="" />
            <Link to={`/drama/${id}`}>
                <div className="card_ovelay">
                    <h1 style={{fontSize:'1.2rem'}}> {val.title}</h1>
                </div>
            </Link>
        </div>
    )
}

export default Card
