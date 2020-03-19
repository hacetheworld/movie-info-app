import React from 'react';
import { ReactComponent as Star } from '../../assets/star-outlined.svg';

const nestedDataToString = (nestedData) => {
    let nestedArray = [],
        resultString;
    if (nestedData !== undefined) {
        nestedData.forEach(function (item) {
            nestedArray.push(item.name);
        });
    }
    resultString = nestedArray.join(', '); // array to string
    return resultString;
};


const findTrailer = (videos) => {
    console.log(videos, 'videosjsdbhsbjdscj');

    for (let i = 0; i < videos.length; i++) {
        if (videos[i].type = "Trailer") {
            return videos[i];
        }
    }
};

export default function SingleMovie(props) {

    const { movie, isPopup, togglePopup } = props;
    console.log(movie);

    let posterIMG = 'https://image.tmdb.org/t/p/w500' + movie.poster_path,
        title = movie.original_title ? movie.original_title : movie.title,
        production_companies = movie.production_companies,
        productionCountries = movie.production_countries,
        runTime = movie.runtime,
        rating = movie.vote_average,
        overview = movie.overview,
        release_date = movie.release_date,
        status = movie.status,
        imdb_id = movie.imdb_id,
        id = movie.id,
        homepage = movie.homepage ? movie.homepage : '',
        genres = movie.genre,
        budget = movie.budget,
        totalRevenue = movie.revenue,
        productionList = nestedDataToString(production_companies),
        productionCountriesList = nestedDataToString(productionCountries),
        noData = '-',
        genresList = nestedDataToString(genres),
        videoTrailer = findTrailer(movie.videos.results),
        videoUrl = movie.videos ? videoTrailer.key : false,
        backdropIMG = 'https://image.tmdb.org/t/p/original' + movie.backdrop;

    // conditional statements for no movie
    if (rating === 'undefined' || rating === 0) {
        rating = noData
    } else {
        rating = movie.vote_average
    };

    if (totalRevenue === 'undefined' || totalRevenue === 0) {
        totalRevenue = noData
    } else {
        totalRevenue = movie.revenue;
    };

    if (movie.poster_path == null) {
        posterIMG = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSols5HZxlQWyS9JY5d3_L9imbk0LiziHiyDtMZLHt_UNzoYUXs2g';
    }
    return (
        <div className="movie" style={{
            backgroundImage: `
            linear-gradient(to bottom, rgba(0, 0, 0, 0.92), rgba(0, 0, 0, 0.83)),url(${posterIMG})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        }}>
            <h1 className='movie__title'>{title}</h1>

            <div className='movie__info'>
                <span className='movie__info--rating'>
                    <Star className='rating-star' />
                    <Star className='rating-star' />
                    <Star className='rating-star' />
                    <Star className='rating-star' />
                    <Star className='rating-star' />
                    <span> / {rating} </span>
                </span>
                <span className="movie__info--cat">
                    {genresList}
                </span>
                <span className="movie__info--runtime">
                    {
                        `${Math.floor(runTime / 60)}h-${runTime % 60}min`
                    }
                </span>
                <span className="movie__info--release-date">
                    {release_date}
                </span>
                <span className='movie__info--age'>18+</span>
            </div>
            <p className='movie__plot'>{overview}</p>
            <div className="movie__buttons">
                <button className="btn movie__trailer" onClick={togglePopup}>Watch Trailer</button>
                <button className="btn movie__faviourate">Add To Faviourate</button>
            </div>
            <div className='movie__cast_details'>
                <div className="movie__casts">

                    <div className="movie__cast">
                        <img src={posterIMG} className='cast-img' alt="cast" />
                        <p>Ajay</p>
                    </div>

                    <div className="movie__cast">
                        <img src={posterIMG} className='cast-img' alt="cast" />
                        <p>Ajay</p>
                    </div>

                    <div className="movie__cast">
                        <img src={posterIMG} className='cast-img' alt="cast" />
                        <p>Ajay</p>
                    </div>
                    <div className="movie__cast">
                        <img src={posterIMG} className='cast-img' alt="cast" />
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


            {/* Popup Video Box*/}

            <div style={{
                transform: `${isPopup ? 'scale(1)' : 'scale(0)'}`,
                visibility: `${isPopup ? 'visible' : 'hidden'}`
            }}
                className={`popup ${isPopup ? 'popup--active' : ''}`}>
                <div className="popup-wrapper">
                    {
                        movie.videos ? (<iframe id='demoVideo' width="560" height="315" src={`https://www.youtube.com/embed/${videoUrl}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>) : (
                            <img src={posterIMG} className='cast-img' alt="cast" />
                        )
                    }
                    <span className='close-popup' onClick={() => {
                        let iframeDiv = document.getElementById('demoVideo');
                        let video = iframeDiv.src;
                        iframeDiv.src = "";
                        iframeDiv.src = video;
                        togglePopup();
                    }}>X</span>
                </div>
            </div>



        </div>
    );
}
