import React from 'react';

import { ReactComponent as Github } from '../../assets/github.svg';
import Search from '../search/search';
import UserImg from '../../assets/user-3.jpg';
import './header.styles.scss'
export default function Header() {

    return (
        <header className="header">
            <Search />
            <nav className="user-nav">
                <div className="user-nav__icon-box">
                    <a href=' https://github.com/hacetheworld/movie-info-app'>
                        <Github className="user-nav__icon" />
                    </a>

                    {/* <span className="user-nav__notification">7</span> */}
                </div>
                {/* <div className="user-nav__icon-box">
                    <svg className="user-nav__icon">
                        <Chat />
                    </svg>
                    <span className="user-nav__notification">13</span>
                </div> */}

            </nav>

        </header >

    );
}
