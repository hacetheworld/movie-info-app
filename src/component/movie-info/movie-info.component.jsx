import React from 'react';
import Header from '../header/header.component';
import './movie-info.styles.scss';
import Movie from '../movie/movie';
import { connect } from 'react-redux';

function MovieInfo() {
    return (
        <div style={{
            backgroundImage: `
            linear-gradient(to bottom, rgba(10, 21, 27, 0.90), rgba(10, 21, 27, 0.90)),url('https://image.tmdb.org/t/p/original/pCUdYAaarKqY2AAUtV6xXYO8UGY.jpg')`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }} className='single-movie-page'>
            <Header />
            <Movie imageUrl={'https://image.tmdb.org/t/p/original/pCUdYAaarKqY2AAUtV6xXYO8UGY.jpg'} />
        </div>
    );
}


export default MovieInfo;
