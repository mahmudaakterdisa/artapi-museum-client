import React from 'react';
import './Header.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Header() {
    const navigate = useNavigate()
    const [searchTerm, setSearchTerm] = useState('');
    const handleSearch = () => {
        const name = searchTerm.split(" ");
        console.log(name)
        navigate(`/search/${name[0] ? name[0] : ''}${name[1] ? '+' + name[1] : ''}${name[2] ? '+' + name[2] : ''}${name[3] ? '+' + name[3] : ''}${name[4] ? '+' + name[4] : ''}`)
    };
    console.log(searchTerm);
    return (
        <div className='headerSearchBar'>
            <div className='headerLeft'>
                <div className='vectorIcon'>
                    <NavLink to='/'><img src="https://i.ibb.co/Pr5BMtJ/Vector.png" alt="vectorImage" /></NavLink>
                </div>
                <div >
                    <h3>Art API</h3>
                </div>
            </div>
            <div className='headerRight'>
                <div className='searchField'>
                    <input value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)} type="text" placeholder='Please type in your search' />
                </div>
                <div className='button'>
                    <button onClick={handleSearch}> <h5>Search</h5> </button>
                </div>
            </div>
        </div>
    )
}

export default Header
