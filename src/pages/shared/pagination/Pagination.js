import React from 'react';
import { useState } from 'react';
import './Pagination.css';

const Pagination = ({ artObjects }) => {
    const [page, setPage] = useState(1);
    const [size, setSize] = useState(9);
    const pages = Math.ceil(artObjects.length / size);
    console.log(artObjects);
    console.log(page)
    return (
        <div className='pagination'>
            {
                [...Array(pages).keys()].map(number =>
                    <button
                        key={number}
                        onClick={() => setPage(number)}
                    >
                        {number}
                    </button>)
            }

        </div>
    );
};

export default Pagination;