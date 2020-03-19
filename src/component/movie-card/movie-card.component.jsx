import React from 'react';
import './movie-card.styles.scss';
import { withRouter } from 'react-router-dom';

function MovieCard({ id, name, imageUrl, rating, release_date, overview, history, match }) {

    return (
        <div className="movie-card" onClick={() => history.push(`/${id}`)}>
            <div className="movie-card__poster-wrapper">
                <img className='movie-card__poster' src={`https://image.tmdb.org/t/p/original/${imageUrl}`} alt="movie" />
            </div>
            <span className='movie-card__name'>{name}</span>
            <div className="movie-card--overlay" >
                <div className="movie-card__details">
                    <span className='movie-card__details--title'>
                        {overview ? overview : name}
                    </span>

                    <span className='movie-card__details--rating'>
                        {rating} / 10
                    </span>

                    <span className='movie-card__details--basic-info'>
                        {release_date}
                    </span>
                    {/* <button className='btn movie-card__btn'>Watch trailer</button> */}
                </div>
            </div>
        </div>
    );

}

export default withRouter(MovieCard);
