import React from 'react';
import './main.style.scss';
import Header from '../header/header.component';
import HomeContent from '../../pages/home/home-content.component';
import Movies from '../../pages/movies/movies.component';
import Movie from '../movie/movie';
import Discover from '../Discover/Discover.jsx';
import SearchPage from '../../pages/SearchPage/SearchPage';
import { Route, Switch, withRouter } from 'react-router-dom';
function Main() {

    return (
        <div className='main'>
            <Header />
            <Switch>
                <Route exact path='/' component={HomeContent} />
                <Route exact path='/Search' component={SearchPage} />
                <Route exact path='/discover' component={Discover} />
                <Route path={`/movies/:movies`} component={({ match }) => (<Movies url={match.params.movies} />)} />
                <Route exact path='/:movieId' component={Movie} />
            </Switch>
        </div>
    );
}


export default withRouter(Main);