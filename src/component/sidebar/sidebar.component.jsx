import React from 'react';
import './sidebar.styles.scss';
import { Router, Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg';
export default function Sidebar(props) {
    return (
        <div className='sidebar'>
            <div className="sidebar--inner">
                <Link className="logo" to='/'>
                    <Logo alt='logo' />
                </Link>
                <div className="nav">
                    <h1 className='nav-title'> Browse</h1>
                    <ul className="nav-list">
                        <li className="nav-item nav-item--active">
                            <Link to='/discover' className='nav-link'>
                                Discover
                       </Link>
                        </li>
                        <li className="nav-item ">
                            <Link to='/movies/Horror' className='nav-link'>
                                Horror
                       </Link>
                        </li>
                        <li className="nav-item ">
                            <Link to='/movies/Science' className='nav-link'>
                                Science Fiction
                       </Link>
                        </li>
                    </ul>
                </div>


                <div className="nav">
                    <h1 className='nav-title'>Categories</h1>
                    <ul className="nav-list">
                        <li className="nav-item ">

                            <Link to='/movies/trending' className='nav-link'>
                                Trending
                       </Link>

                        </li>
                        <li className="nav-item ">

                            <Link to='/movies/Action' className='nav-link'>
                                Action
                       </Link>

                        </li>
                        <li className="nav-item ">
                            <Link to='/movies/Comedy' className='nav-link'>
                                Comedy
                       </Link>
                        </li>
                        <li className="nav-item ">
                            <Link to='/movies/Thriller' className='nav-link'>
                                Thriller
                       </Link>
                        </li>
                        <li className="nav-item ">
                            <Link to='/movies/Drama' className='nav-link'>
                                Drama
                       </Link>
                        </li>
                        <li className="nav-item ">
                            <Link to='/movies/Adventure' className='nav-link'>
                                Adventure
                       </Link>
                        </li>

                    </ul>

                </div>
            </div>
        </div>
    );
}
