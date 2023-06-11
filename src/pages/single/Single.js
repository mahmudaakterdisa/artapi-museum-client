import React from 'react';
import { useLoaderData, NavLink } from 'react-router-dom';
import './Single.css';

function Single() {
    const singlePageDetails = useLoaderData();
    console.log(singlePageDetails);
    return (
        <div className=''>
            {/* Frame 1 */}
            <div className='frame1'>
                <div className='icon'><NavLink to={'/'}><button><img src="https://i.ibb.co/MZB43Bp/Chevron-left.png" alt="left icon" /></button></NavLink></div>
                <div className='backToTheList'><h5>Back to the List</h5></div>

            </div>

            {/* Big Image Card */}
            <div className='Card'>
                <div>
                    {singlePageDetails.artObject.webImage.url ? <img src={singlePageDetails.artObject.webImage.url} alt="big card image" /> : <h2>NO IMAGE FOUND</h2>}

                </div>
                <div className='imageTitle'>
                    <h1>{singlePageDetails.artObject.longTitle}</h1>
                </div>
            </div>

            {/* Description Table */}
            <div className='Table'>
                <div className='Row-Table'>
                    <div className='Title-Table'>
                        <p>Artist</p>
                    </div>
                    <div className='Description-Table'>
                        <h4>{singlePageDetails.artObject.principalMaker}</h4>
                    </div>
                </div>

                <div className='Row-Table'>
                    <div className='Title-Table'>
                        <p>Title</p>
                    </div>
                    <div className='Description-Table'>
                        <h4>{singlePageDetails.artObject.title}</h4>
                    </div>
                </div>

                <div className='Row-Table'>
                    <div className='Title-Table'>
                        <p>Object Type</p>
                    </div>
                    <div className='Description-Table'>
                        <h4>{singlePageDetails.artObject.objectTypes[0]}</h4>
                    </div>
                </div>

                <div className='Row-Table'>
                    <div className='Title-Table'>
                        <p>Measurements</p>
                    </div>
                    <div className='Description-Table'>
                        <h4>{singlePageDetails.artObject.title}</h4>
                    </div>
                </div>

                <div className='Row-Table'>
                    <div className='Title-Table'>
                        <p>Description</p>
                    </div>
                    <div className='Description-Table'>
                        <h4>{singlePageDetails.artObject.description.slice(0, 100) + '...'}</h4>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default Single
