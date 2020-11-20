import React from 'react';
import '../estilos/EstiloNuestraEmpresa.css';
import escritorio from '../images/escritorio.PNG';
import linea from '../images/linea2.PNG';
import linea2 from '../images/lineablanca.PNG';

export default function Nuestra_Empresa() {
    return ( 
    <div className="Nuestra_Empresa">

        <div className="primercontendor-nuestraempresa">
            <div className="contendedorimagen1-nuestraempresa">
                <img src={escritorio} alt="" className="imagendenuestraempresa"/>
            </div>
            <div className="contenedortexto1-nuestraempresa">
                <h4 className="pl-5 pt-4">Quienes Somos</h4>
                <h5 className="pl-5 pr-4 titulosecundario-nuestraempresa">DISEÑO DIGITAL 3D</h5>
                <img src={linea} alt="" className="pl-5 imagenlinea-nuestraempresa"/>
                <p className="pl-5 pr-4 pt-5">Somos una empresa Colombiana de Innovación y Diseño Digital ubicada en Medellín - Antioquía.</p>
                <p className="pl-5 pr-4">Con más de 10 años acumulados de experencia en el desarrollo de diseños digitales y otras herramientas de Tecnología, Entornos Web y Desarrollo Móvil.</p>
            </div>
        </div>

        <div className="segundocontenedor-nuestraempresa">
            <h4 className="pt-5 titulo2-nuestraempresa">Nuestro Equipo</h4>
            <img src={linea2} alt="" className="imagenlinea2-nuestraempresa"/>
            <p className="parrafo-nuestraempresa">Contamos con equipo experimentado comprometido con la calidad y certificado para desarrollar productos de diseño gráficos de alta calidad.</p>
            <p className="parrafo-nuestraempresa pb-5">Somos un grupo de profesionales en las diferentes áread del diseño gráfico, especialistas en comunicación visual. Interiorizamos en la filosofía de las marcas para contar por medio de diseños sus historias, nuestro equipo creatico está ubicado en la ciudad de Bogotá Colombia. Creamos los mejores diseños y potenciamos la comunicación de tu organización con herramientas visuales atractivas y de calidad.</p>
        </div>

        <div className="tercercontenedor-nuestraempresa">
          <h4 className="pt-5 titulo3-nuestraempresa">Nuestros Empleados</h4>
          <img src={linea} alt="" className="imagenlineanegra-nuestraempresa"/>
          
          <div className="fondotabla-nuestraempresa mb-5 mt-3">

            <div className="contendedorequipo-nuestraempresa contenedor1-equipo">
                <h4 className="tituloherramientas-nuestraempresa">Empleado</h4>
                  <h4 className="tituloherramientas-nuestraempresa pt-3">Carlos David</h4>
                  <h4 className="tituloherramientas-nuestraempresa pt-3">Andre Tobon</h4>
                  <h4 className="tituloherramientas-nuestraempresa pt-3">Julian Giraldo</h4>
                  <h4 className="tituloherramientas-nuestraempresa pt-3">Juliano Ortiz</h4>
            </div>

            <div className="contendedorequipo-nuestraempresa contenedor2-equipo">
                <h4 className="tituloherramientas-nuestraempresa">Edad</h4>
                  <h4 className="tituloherramientas-nuestraempresa pt-3">40</h4>
                  <h4 className="tituloherramientas-nuestraempresa pt-3">18</h4>
                  <h4 className="tituloherramientas-nuestraempresa pt-3">28</h4>
                  <h4 className="tituloherramientas-nuestraempresa pt-3">35</h4>
            </div>

            <div className="contendedorequipo-nuestraempresa contenedor3-equipo">
                <h4 className="tituloherramientas-nuestraempresa">Teléfono</h4>
                  <h4 className="tituloherramientas-nuestraempresa pt-3">3424324</h4>
                  <h4 className="tituloherramientas-nuestraempresa pt-3">999999999</h4>
                  <h4 className="tituloherramientas-nuestraempresa pt-3">3455</h4>
                  <h4 className="tituloherramientas-nuestraempresa pt-3">5656</h4>
            </div>

            <div className="contendedorequipo-nuestraempresa contenedor4-equipo">
                <h4 className="tituloherramientas-nuestraempresa">Correo</h4>
                  <h4 className="tituloherramientas-nuestraempresa pt-3">carlos.david@kmsoft.com</h4>
                  <h4 className="tituloherramientas-nuestraempresa pt-3">a.tobon@kmsoft.com</h4>
                  <h4 className="tituloherramientas-nuestraempresa pt-3">g.giraldo@kmsoft.com</h4>
                  <h4 className="tituloherramientas-nuestraempresa pt-3">juli_ortiz@kmsoft.com</h4>
            </div>
          </div>
        </div>

    </div>
    
    
);}