import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Home.css';
import ImageCard from '../shared/imageCard/ImageCard';
import { useState } from 'react';

function Home() {
    const { artObjects } = useLoaderData();
    const [page, setPage] = useState(1);
    const [size, setSize] = useState(9);
    const pages = Math.ceil(artObjects.length / size);


    // Calculate the indexes of the items to display on the current page
    const startIndex = (page - 1) * size;
    const endIndex = startIndex + size;

    // Get the items for the current page
    const itemsToShow = artObjects.slice(startIndex, endIndex);

    console.log(artObjects);
    return (
        <div>
            {/* title component */}
            <div className='homeTitle'>
                <h1>All artwork</h1>
            </div>

            {/* art display */}
            <div className='artDisplay'>
                {
                    itemsToShow.map((item, index) =>
                        <ImageCard
                            key={index}
                            artObject={item}

                        />
                    )
                }
            </div>

            {/* pagination */}
            <div className='paginationContainer'>
                <button className='buttonSmall' onClick={() => page > 1 ? setPage(page - 1) : setPage(page)}>
                    <img src="https://i.ibb.co/1zsJTmj/Vector.png" alt="leftSmallButton" />
                </button>
                {artObjects.length > size &&
                    [...Array(pages).keys()].map(number =>
                        <button
                            className='buttonSmall'
                            key={number}
                            onClick={() => setPage(number + 1)}
                            style={{
                                border: page === number + 1 ? '1px solid #E10856' : '1px solid #333333',
                            }}
                        >
                            <h4>{number + 1}</h4>
                        </button>
                    )
                }
                <button className='buttonSmall' onClick={() => page < pages ? setPage(page + 1) : setPage(page)}>
                    <img src="https://i.ibb.co/N23Xr9h/Vector.png" alt="rightSmallButton" />
                </button>
            </div>
        </div>
    )
}

export default Home
