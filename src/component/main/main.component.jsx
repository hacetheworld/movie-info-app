import React from 'react';
import './main.style.scss';
import Header from '../header/header.component';
import HomeContent from '../../pages/home/home-content.component';
import Trending from '../../pages/trending/trending.component';
import { Route } from 'react-router-dom';
function Main() {

    return (
        <div className='main'>
            <Header />
            <Route exact path='/' component={HomeContent} />
            <Route exact path='/trending' component={Trending} />
        </div>
    );
}


export default Main;