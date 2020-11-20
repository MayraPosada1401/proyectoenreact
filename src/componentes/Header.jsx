import React from 'react';
import '../estilos/EstiloHeader.css';
import imagenletra from '../images/letra-d.png';
import {Link} from 'react-router-dom';

export default function Header() {
    return (
      <div className="Header">

        <div className="fondoprimeraparteheader">
            <h3 className="tituloheader">CEO</h3>

            <nav className="navbar navbar1 navbar-light">
                <button className="btn botonopciones opcion1" type="submit"></button>
                <button className="btn botonopciones opcion2" type="submit"></button>
                <button className="btn botonopciones opcion3" type="submit"></button>
                <button className="btn botonopciones opcion4" type="submit"></button>
                <form className="inline-block">
                    <input className="form-control busqueda" type="search" aria-label="Search"/>
                        <button className="btn botonbuscar" type="submit"></button>
                </form>
            </nav>
        </div>

        <div className="contenedor2-header">
            <div className="bg-primary divletrad contenedoresparte2">
                <img src={imagenletra} alt="" className="imagend"/>
            </div>
            <div className="bg-primary divletrad contendor1parte2">
                <h4 className="titulocontenedor1parte2">DISEÑO DIGITAL 3D</h4>
            </div>
        </div>

        <div className="contenedorprincipal3-header">
            <nav className="navbar">
                <Link to="/">
                <button className="btn botonesdelmenu" type="submit">CEO</button>
                </Link>
                <Link to="/nuestraEmpresa">
                <button className="btn botonesdelmenu" type="submit">Nuestra Empresa</button>
                </Link>
                <Link to="/cotizador">
                <button className="btn botonesdelmenu" type="submit">Cotizador</button>
                </Link>
            </nav>
        </div>

      </div>
    );
  }