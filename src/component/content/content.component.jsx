import React from 'react';
import './content.styles.scss';
import MoviePoster from '../movie-poster/movie-poster.component';
export default function Content() {
    return (
        <div className='content'>
            <MoviePoster title={'Recommended For you'} />
            <MoviePoster title={'Discover movies'} />
        </div>
    );
}
