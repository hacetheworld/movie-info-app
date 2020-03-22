import React from 'react';
import { ReactComponent as Star } from '../../assets/star-outlined.svg';
import './singleMovie.styles.scss';
import Cast from './cast/cast';
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
    for (let i = 0; i < videos.length; i++) {
        if (videos[i].type = "Trailer") {
            return videos[i];
        }
    }
};

const findDirector = (crew) => {

    for (let i = 0; i < crew.length; i++) {
        if (crew[i].job = "Director") {
            return crew[i];
        }
    }
};



export default function SingleMovie(props) {

    const { movie, isPopup, togglePopup } = props;
    let posterIMG = 'https://image.tmdb.org/t/p/w500' + movie.poster_path,
        title = movie.original_title ? movie.title : movie.original_title,
        production_companies = movie.production_companies,
        productionCountries = movie.production_countries,
        runTime = movie.runtime,
        rating = movie.vote_average,
        overview = movie.overview,
        release_date = movie.release_date,
        status = movie.status,
        imdb_id = movie.imdb_id,
        id = movie.id,
        cast = movie.credits.cast.slice(0, 4),

        homepage = movie.homepage ? movie.homepage : '',
        genres = movie.genre,
        budget = movie.budget,
        totalRevenue = movie.revenue,
        productionList = nestedDataToString(production_companies),
        productionCountriesList = nestedDataToString(productionCountries),
        noData = '-',
        isVideoExist = movie.videos.results.length > 0,
        genresList = nestedDataToString(genres),
        videoTrailer = isVideoExist ? findTrailer(movie.videos.results) : { key: '' },
        videoUrl = isVideoExist ? videoTrailer.key : false,
        backdropIMG = 'https://image.tmdb.org/t/p/original' + movie.backdrop,
        crew = movie.credits.crew,
        castimageUrl = 'https://image.tmdb.org/t/p/original';
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
            </div>
            <p className='movie__plot'>{overview}</p>
            <div className="movie__buttons">
                <button className="btn movie__trailer" onClick={togglePopup}>Watch Trailer</button>
                <button className="btn movie__faviourate">Add To Faviourate</button>
            </div>
            <div className='movie__cast_details'>

                <Cast casts={cast} castimageUrl={castimageUrl} />

                <div className="movie__director">
                    <h1>Directed by</h1>
                    <p style={{
                        color: 'sky-blue',
                    }}>{`${findDirector(crew).name}`}</p>

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
                        isVideoExist ? (<iframe id='demoVideo' width="560" height="315" src={`https://www.youtube.com/embed/${videoUrl}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>) : (
                            <h1 >Video does not found</h1>
                        )
                    }
                    <span className='close-popup' onClick={() => {
                        if (isVideoExist) {
                            let iframeDiv = document.getElementById('demoVideo');
                            let video = iframeDiv.src;
                            iframeDiv.src = "";
                            iframeDiv.src = video;
                        }
                        togglePopup();
                    }}>X</span>
                </div>
            </div>



        </div>
    );
}
