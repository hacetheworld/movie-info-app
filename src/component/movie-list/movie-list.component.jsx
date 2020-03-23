import React from 'react';
import './movie-list.styles.scss';
import MovieCard from '../movie-card/movie-card.component';
function MovieList({ title, Movies, doFilter = true }) {
    function filterMovies(movies, doFilter) {
        if (doFilter) {
            return movies.filter(movie => {
                let movieType = movie.media_type ? movie.media_type === 'movie' : true;
                return (movieType && movie.vote_count >= 100 && movie.vote_average >= 6 && (movie.release_date ? movie.release_date.split('-')[0] > 2010 : false)
                )
            });
        }

        return movies
    }
    const filteredMovies = filterMovies(Movies, doFilter);
    return (
        <div className='movies-list'>
            <h2 className='movies-list-topic'>{title}</h2>
            <div className="movies-list__items">
                {
                    filteredMovies.map(movie => (
                        <MovieCard
                            key={movie.id}
                            id={movie.id}
                            name={movie.title ? movie.title : movie.name} imageUrl={movie.poster_path}
                            rating={movie.vote_average}
                            release_date={movie.release_date}
                            overview={movie.title ? movie.name : movie.title}

                        />
                    ))
                }
            </div>
        </div>
    );
}

export default MovieList;
