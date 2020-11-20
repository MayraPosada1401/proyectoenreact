import React from 'react';
import Header from '../componentes/Header';
import Nuestra_Empresa from '../componentes/Nuestra_Empresa';
import Footer from '../componentes/footer';

export default function PageNuestraEmpresa() {
    return (
        <div className="PageNuestraEmpresa">
            <Header/>
            <Nuestra_Empresa/>
            <Footer/>
        </div>
    );
}