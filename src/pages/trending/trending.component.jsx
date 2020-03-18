import React from 'react';
import './trending.styles.scss';
import { connect } from 'react-redux'
import MovieList from '../../component/movie-list/movie-list.component';
function Trending({ trendingMovies }) {
    let i = 0;

    let filterdTrendingItem = trendingMovies.filter((item, idx) => item.vote_average >= 6 && i++ < 10);

    return (
        <div className='trending'>
            <MovieList title={'Trending Movies '} Movies={filterdTrendingItem} />
        </div>
    );
}
const mapStateToProps = (state) => ({
    trendingMovies: state.movies.trendingMovies
}
)
export default connect(mapStateToProps)(Trending);
