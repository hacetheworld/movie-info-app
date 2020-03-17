import React from 'react';
import './sidebar.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg';
export default function Sidebar() {


    return (
        <div className='sidebar'>
            <div className="sidebar--inner">
                <Logo className="logo" alt='logo' />
                <div className="nav">
                    <h1 className='nav-title'> Browse</h1>
                    <ul className="nav-list">
                        <li className="nav-item nav-item--active">
                            <Link to='/:discover' className='nav-link'>
                                Discover
                       </Link>
                        </li>
                        <li className="nav-item ">
                            <Link to='/tv' className='nav-link'>
                                Tv  Movies
                       </Link>
                        </li>
                        <li className="nav-item ">
                            <Link to='/trailers' className='nav-link'>
                                Trailers
                       </Link>
                        </li>
                    </ul>
                </div>


                <div className="nav">
                    <h1 className='nav-title'>Categories</h1>
                    <ul className="nav-list">
                        <li className="nav-item ">
                            <Link to='/trending' className='nav-link'>
                                Trending
                       </Link>
                        </li>
                        <li className="nav-item ">
                            <Link to='/action' className='nav-link'>
                                Action
                       </Link>
                        </li>
                        <li className="nav-item ">
                            <Link to='/comedy' className='nav-link'>
                                Comedy
                       </Link>
                        </li>
                        <li className="nav-item ">
                            <Link to='/thriller' className='nav-link'>
                                Thriller
                       </Link>
                        </li>
                        <li className="nav-item ">
                            <Link to='/drama' className='nav-link'>
                                Drama
                       </Link>
                        </li>
                        <li className="nav-item ">
                            <Link to='/adventure' className='nav-link'>
                                Adventure
                       </Link>
                        </li>

                    </ul>

                </div>
            </div>
        </div>
    );
}
