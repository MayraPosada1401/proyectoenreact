import React from 'react';
import Header from '../componentes/Header';
import Ceo from '../componentes/Ceo';
import Footer from '../componentes/footer';

export default function PageCeo() {
    return (
        <div className="PageCeo">
            <Header/>
            <Ceo/>
            <Footer/>
        </div>
    );
}