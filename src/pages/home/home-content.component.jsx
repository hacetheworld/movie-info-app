import React from 'react';
import './home-content.styles.scss';
import { connect } from 'react-redux'
import MovieList from '../../component/movie-list/movie-list.component';
function HomeContent({ trendingMovies, latestMovies }) {
    let i = 0;

    let filterdTrendingItem = trendingMovies.filter((item, idx) => item.vote_average >= 6 && item.media_type === 'movie' && (item.release_date ? (item.release_date.split('-')[0] > 2010) : false) && i++ < 6);
    let j = 0;
    let filterdLatestItem = latestMovies.filter((item, idx) => item.vote_average > 6 && j++ < 6);

    return (
        <div className='home-content'>
            <MovieList title={'Recommended For you'} Movies={filterdTrendingItem} />
            <MovieList title={'Old movies'} Movies={filterdLatestItem} doFilter={false} />
        </div>
    );
}


const mapStateToProps = (state) => ({
    trendingMovies: state.movies.trendingMovies,
    latestMovies: state.movies.latestMovies
}
)
export default connect(mapStateToProps)(HomeContent);
