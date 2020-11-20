import React from 'react';
import Header from '../componentes/Header';
import Cotizador1 from '../componentes/Cotizador1';
import Footer from '../componentes/footer';

export default function PageCotizador1() {
    return (
        <div className="PageCotizador1">
            <Header/>
            <Cotizador1/>
            <Footer/>
        </div>
    );
}