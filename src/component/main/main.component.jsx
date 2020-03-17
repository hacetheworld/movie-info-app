import React from 'react';
import './main.style.scss';
import Header from '../header/header.component';
import Content from '../content/content.component';

export default function Main() {
    return (
        <div className='main'>
            <Header />
            <Content />
        </div>
    );
}
