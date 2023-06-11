import React from 'react';
import { NavLink } from 'react-router-dom';
import './ImageCard.css'

const ImageCard = ({ artObject }) => {
    const { headerImage, title, principalOrFirstMaker } = artObject;
    console.log(artObject)
    return (
        <div className='imageCardContainer' >
            <img src={headerImage.url} alt="" />
            <div>
                <div className='textShadow'><NavLink to={`/single/${artObject.objectNumber}`}><button><h3 className='max-[900px]:text-sm text-3xl'>{title}</h3></button></NavLink></div>
                <div className='author'>
                    <h4>{principalOrFirstMaker}</h4>
                </div>


            </div>

        </div>
    );
};

export default ImageCard;