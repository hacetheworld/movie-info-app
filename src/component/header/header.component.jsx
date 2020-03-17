import React from 'react';
import { ReactComponent as MagnifyingGlass } from '../../assets/magnifying-glass.svg';
import { ReactComponent as Like } from '../../assets/heart.svg';

import UserImg from '../../assets/user-3.jpg';
import './header.styles.scss'
export default function Header() {
    return (
        <header className="header">
            <form className="search">
                <input type="text" className="search__input" placeholder="Search Movies" />
                <button type='submit' className="search__button">
                    <svg className="search__icon">
                        <MagnifyingGlass />
                    </svg>
                </button>
            </form>

            <nav className="user-nav">
                <div className="user-nav__icon-box">
                    <Like className="user-nav__icon" />
                    <span className="user-nav__notification">7</span>
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
