import React from 'react';
import './movie-list.styles.scss';
import MovieCard from '../movie-card/movie-card.component';
function MovieList({ title, Movies }) {
    return (
        <div className='movies-list'>
            <h2 className='movies-list-topic'>{title}</h2>
            <div className="movies-list__items">
                {
                    Movies.map(movie => (
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
