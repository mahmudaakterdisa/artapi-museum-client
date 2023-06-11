import React from 'react';
import Main from '../../layout/Main';
import Home from '../../pages/home/Home';
import { createBrowserRouter } from 'react-router-dom';
import Search from '../../pages/search/Search';
import Single from '../../pages/single/Single';
const apiKey = '2esrTh6M';
const apiUrl = 'https://www.rijksmuseum.nl/api/nl/collection';

export const router = createBrowserRouter([

    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                loader: () => fetch(`${apiUrl}?key=${apiKey}`),
                element: <Home />
            },
            {
                path: '/search/:searchResultByName',
                loader: ({ params }) => fetch(`${apiUrl}?key=${apiKey}&involvedMaker=${params.searchResultByName}`),
                element: <Search />
            },
            {
                path: '/single/:objectNumber',
                loader: ({ params }) => fetch(`${apiUrl}/${params.objectNumber}?key=${apiKey}`),
                element: <Single />
            },
            {

                path: '*',
                element: <div><h1>page not found</h1></div>

            },

        ]
    }

]);