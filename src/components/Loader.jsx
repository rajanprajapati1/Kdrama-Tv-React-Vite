import React from 'react'

const Loader = ({src}) => {
    return (
        <div className='Loader' style={{width:'100%',height:'100vh',display:'flex',alignItems:'center',justifyContent:'center',backgroundColor:'white',position:'fixed',top:'0',bottom:'0',zIndex:'-99'}}>
            <img style={{objectFit:'cover',width:'350px'}} src="https://assets-v2.lottiefiles.com/a/362083ca-1178-11ee-9f00-338b7f927e5b/k9Xzm4gx97.gif" alt="" />
        </div>
    )
}

export default Loader
