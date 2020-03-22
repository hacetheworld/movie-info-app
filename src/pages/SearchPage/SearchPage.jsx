import React from 'react';
import MovieList from '../../component/movie-list/movie-list.component';
import { connect } from 'react-redux';
function SearchPage({ SearchMovies }) {
    return (
        <div>
            <MovieList Movies={SearchMovies} title={'Search Movies'} doFilter={false} />
        </div>
    );
}

const mapStateToProps = (state) => ({
    SearchMovies: state.movies.searchMovies
})
export default connect(mapStateToProps)(SearchPage)

