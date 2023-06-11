import React from 'react'
import Header from '../pages/shared/header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../pages/shared/footer/Footer'
import './Main.css';

function Main() {
    return (
        <div className='p-4 layout min-h-screen'>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Main
