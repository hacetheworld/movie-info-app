import React from 'react';
import './movie-poster.styles.scss';
export default function MovieOverview({ title }) {
    return (
        <div className='movie-overview'>
            <h2 className='movie-overview-topic'>{title}</h2>
            <div className="movie-overview__movies-list">
                <div className="movie-overview__movie">
                    <img className='movie-poster' src='https://image.tmdb.org/t/p/original/pCUdYAaarKqY2AAUtV6xXYO8UGY.jpg' alt="movie" />

                    <span className='movie-name'>fight Club</span>
                    <div className="movie-misc">
                        <div className="movie-misc--inner">
                            <span className='movie-category'>Thriller ,drama,comedy</span>
                            <span className='movie-rating'>
                                ***/ 9
                        </span>
                            <button className='btn btn-trailer'>Watch trailer</button>
                        </div>
                    </div>
                </div>

                <div className="movie-overview__movie">
                    <img className='movie-poster' src='https://image.tmdb.org/t/p/original/pCUdYAaarKqY2AAUtV6xXYO8UGY.jpg' alt="movie" />

                    <span className='movie-name'>fight Club</span>
                    <div className="movie-misc">
                        <div className="movie-misc--inner">
                            <span className='movie-category'>Thriller ,drama,comedy</span>
                            <span className='movie-rating'>
                                ***/ 9
                        </span>
                            <button className='btn btn-trailer'>Watch trailer</button>
                        </div>
                    </div>
                </div>

                <div className="movie-overview__movie">
                    <img className='movie-poster' src='https://image.tmdb.org/t/p/original/pCUdYAaarKqY2AAUtV6xXYO8UGY.jpg' alt="movie" />

                    <span className='movie-name'>fight Club</span>
                    <div className="movie-misc">
                        <div className="movie-misc--inner">
                            <span className='movie-category'>Thriller ,drama,comedy</span>
                            <span className='movie-rating'>
                                ***/ 9
                        </span>
                            <button className='btn btn-trailer'>Watch trailer</button>
                        </div>
                    </div>
                </div>

                <div className="movie-overview__movie">
                    <img className='movie-poster' src='https://image.tmdb.org/t/p/original/pCUdYAaarKqY2AAUtV6xXYO8UGY.jpg' alt="movie" />
                    <span className='movie-name'>fight Club</span>
                    <div className="movie-misc">
                        <div className="movie-misc--inner">
                            <span className='movie-category'>Thriller ,drama,comedy</span>
                            <span className='movie-rating'>
                                ***/ 9
                        </span>
                            <button className='btn btn-trailer'>Watch trailer</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
