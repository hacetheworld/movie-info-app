import React from 'react';
import './discover.styles.scss';
import { ReactComponent as Clapperboard } from '../../assets/clapperboard.svg';
import { ReactComponent as StarOutlined } from '../../assets/star-outlined.svg';
import { ReactComponent as Flash } from '../../assets/flash.svg';
import { ReactComponent as Globe } from '../../assets/globe.svg';

export default function Discover({ history }) {
    return (
        <div className='discover'>
            <div className='discover__item' onClick={() => history.push('/')}>
                <Clapperboard className='discover__item--icon' />
                <h1 className='discover__item--heading'>Movies</h1>
            </div>


            <div className='discover__item' onClick={() => history.push('/')}>
                <StarOutlined className='discover__item--icon' />
                <h1 className='discover__item--heading'>TOP MOVIES</h1>
            </div>
            <div className='discover__item' onClick={() => history.push('/movies/trending')}>
                <Flash className='discover__item--icon' />
                <h1 className='discover__item--heading'>Trending</h1>
            </div>
            <div className='discover__item' onClick={() => history.push('/movies/trending')}>
                <Globe className='discover__item--icon' />
                <h1 className='discover__item--heading'>All Hits</h1>
            </div>
        </div>
    );
}
