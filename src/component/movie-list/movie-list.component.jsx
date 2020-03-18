import React from 'react';
import './movie-list.styles.scss';
import MovieCard from '../movie-card/movie-card.component';
function MovieList({ title, Movies }) {
    return (
        <div className='movies-list'>
            <h2 className='movies-list-topic'>{title}</h2>
            <div className="movies-list__items">
                {
                    Movies.map(item => (
                        <MovieCard
                            key={item.id}
                            name={item.title ? item.title : item.name} imageUrl={item.poster_path}
                            rating={item.vote_average}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default MovieList;
