import React, { useEffect, useRef, useState } from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaSearch } from 'react-icons/fa'
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    // 🔴🟠🟡⚪⚫⚫🟤🟣🔵🟢🟪🟦🟨🟥🟩🟧🟦🟫⬛🔶🔷🔸▪️🔹🔺🔻
    const [isDarkMode, setIsDarkMode] = useState(false);
    const inputRef = useRef(null);
    const navigate = useNavigate()

    const HandleToggle = () => {
        setIsDarkMode((prev) => !prev)
    }
    useEffect(() => {
        if (isDarkMode) {
            document.body.style.background = "black";
            document.body.style.color = "white";
        } else {
            document.body.style.background = "inherit";
            document.body.style.color = "inherit";
        }
    }, [isDarkMode])
    const searchAction = (e) => {
        if ((e.key === 'Enter' || e.key === 'enter') && inputRef.current) {
          const userQuery = inputRef.current.value;
          if (userQuery === '') {
            alert('empty');
          } else {
            navigate(`search/result/${userQuery}`);
          }
        }
      };
    
      const onClickAction = () => {
        const userQuery = inputRef.current.value;
        if (userQuery === '') {
          alert('empty');
        } else {
          navigate(`search/result/${userQuery}`);
        }
      };
    return (
        <div className='navbar'>
            <div className="made">
                <h1>Made By ❤️ Rajan</h1>
            </div>
           <Link to={"/"}>
            <div className="left">
           <img src="https://images.vexels.com/media/users/3/196020/isolated/preview/6979a1ec1be466f5ddea5f64a12efef5-cute-south-korean-singer-character.png" alt="" />
                <h1>K-Drama Tv</h1>
            </div>
           </Link>
            <div className="searchbar">
                <FaSearch className='search' onClick={onClickAction} />
                <input type="text" onKeyDown={searchAction} placeholder='Search Your Favourite K-dramas' ref={inputRef} />
            </div>
            <div className="toggle_btn">
                <button onClick={HandleToggle}>
                    {isDarkMode ? <MdOutlineDarkMode /> : <MdOutlineLightMode />}
                </button>
            </div>
            <div className="login_btn">
                <button>Login</button>
                <button>Signup</button>
            </div>
            <div className="right">
                <button><FaGithub /></button>
                <button><FaFacebook /></button>
                <button><FaInstagram /></button>
            </div>
        </div>
    )
}

export default Navbar
