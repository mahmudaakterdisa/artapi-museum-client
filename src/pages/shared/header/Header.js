import React from 'react';
import './Header.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import MyContext from '../../../context/MyContext';
import { useState } from 'react';

function Header() {
    const navigate = useNavigate()
    const [searchTerm, setSearchTerm] = useState('');
    const handleSearch = () => {
        const name = searchTerm.split(" ");
        // const firstName = name[0];
        // const middleName = name[1];
        // const lastName = name[2];
        console.log(name)
        navigate(`/search/${name[0] ? name[0] : ''}${name[1] ? '+' + name[1] : ''}${name[2] ? '+' + name[2] : ''}${name[3] ? '+' + name[3] : ''}${name[4] ? '+' + name[4] : ''}`)
        // const filtered = sharedData.filter((item) =>
        //     item.toLowerCase().includes(searchTerm.toLowerCase())
        // );
        // setFilteredItems(filtered);
    };
    console.log(searchTerm);
    //console.log(sharedData);
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
