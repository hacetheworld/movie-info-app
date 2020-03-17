import React from 'react';
import './movie-detail.styles.scss';
import { ReactComponent as Star } from '../../assets/star-outlined.svg'
export default function MovieDetail({ imageUrl }) {
    return (
        <div className="movie">
            <h1 className='movie__title'>Fight Club</h1>
            <div className='movie__info'>
                <span className='movie__info--rating'>
                    <Star className='rating-star' />
                    <Star className='rating-star' />
                    <Star className='rating-star' />
                    <Star className='rating-star' />
                    <Star className='rating-star' />
                    <span> / 9 </span>
                </span>
                <span className="movie__info--cat">
                    Thriller,drama
            </span>
                <span className="movie__info--runtime">
                    2h4-min
            </span>
                <span className="movie__info--release-date">
                    2008
            </span>
                <span className='movie__info--age'>18+</span>
            </div>
            <p className='movie__plot'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem, dignissimos neque minima veniam, nisi, cupiditate earum facilis iusto odio illum molestiae. Soluta maiores earum ratione ipsa! Nesciunt fuga animi dicta.</p>
            <div className="movie__buttons">
                <button className="btn movie__trailer">Watch Trailer</button>
                <button className="btn movie__faviourate">Add To Faviourate</button>
            </div>
            <div className='movie__cast_details'>
                <div className="movie__casts">

                    <div className="movie__cast">
                        <img src={imageUrl} className='cast-img' alt="cast" />
                        <p>Ajay</p>
                    </div>

                    <div className="movie__cast">
                        <img src={imageUrl} className='cast-img' alt="cast" />
                        <p>Ajay</p>
                    </div>

                    <div className="movie__cast">
                        <img src={imageUrl} className='cast-img' alt="cast" />
                        <p>Ajay</p>
                    </div>
                    <div className="movie__cast">
                        <img src={imageUrl} className='cast-img' alt="cast" />
                        <p>Ajay</p>
                    </div>
                </div>
                <div className="movie__director">
                    <h1>Directed by</h1>
                    <p>ajay</p>
                    <p>ajay</p>
                    <p>ajay</p>
                    <p>ajay</p>
                </div>
            </div>
        </div>
    );
}
