import React from 'react';
import './movie-card.styles.scss';
function MovieCard({ name, imageUrl, rating }) {

    return (
        <div className="movie-card">
            <div className="movie-card__poster-wrapper">
                <img className='movie-card__poster' src={`https://image.tmdb.org/t/p/original/${imageUrl}`} alt="movie" />
            </div>
            <span className='movie-card__name'>{name}</span>
            <div className="movie-card--overlay">
                <div className="movie-card__details">
                    <span className='movie-card__details--rating'>
                        {rating} / 10
                    </span>
                    <button className='btn movie-card__btn'>Watch trailer</button>
                </div>
            </div>
            <div className="movie-card__name"></div>
        </div>
    );

}

export default MovieCard;
