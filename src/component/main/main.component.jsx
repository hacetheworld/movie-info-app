import React from 'react';
import './main.style.scss';
import Header from '../header/header.component';
import HomeContent from '../../pages/home/home-content.component';
import Trending from '../../pages/trending/trending.component';
import Movie from '../movie/movie';
import { Route, Switch } from 'react-router-dom';
function Main() {

    return (
        <div className='main'>
            <Header />
            <Switch>
                <Route exact path='/' component={HomeContent} />
                <Route exact path='/trending' component={Trending} />
                <Route exact path='/:movieId' component={Movie} />
            </Switch>
        </div>
    );
}


export default Main;