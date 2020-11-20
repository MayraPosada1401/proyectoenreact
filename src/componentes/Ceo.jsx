import React from 'react';
import '../estilos/EstiloCeo.css';
import hombre from '../images/hombre.PNG';
import linea from '../images/linea2.PNG'
import linea2 from '../images/lineablanca.PNG';
import ps from '../images/ps.png';
import ai from '../images/ai.png';
import coreldraw from '../images/coreldraw.png';

export default function Ceo() {
    return ( 
    <div className="Ceo">
        
        <div className="primercontendor-ceo">
            <div className="contendedorimagen1-ceo">
                <img src={hombre} alt="" className="imagendelceo"/>
            </div>
            <div className="contenedortexto1-ceo">
                <h4 className="pl-5 pt-4">Hola, soy Carlos David Pérez</h4>
                <h5 className="pl-5 pr-4 titulosecundario-ceo">Y SOY DISEÑADOR GRAFICO</h5>
                <img src={linea} alt="" className="pl-5 imagenlinea-ceo"/>
                <p className="pl-5 pr-4 pt-5">¡Hola! Si estás aquí, es porque quieres saber un poco más sobre mí, por eso, te voy a contar un poco quién soy, a qué me dedico, y cómo puedo ayudarte</p>
                <p className="pl-5 pr-4">Nací en Barcelona Capital, aunque he vivido toda la vida fuera pero muy cerca de ella. Me gusta tener la ciudad cerca, pero prefiero los sitios más tranquilos para vivir.</p>
                <p className="pl-5 pr-4">Como no sabía muy bien qué estudiar, cuando llegó la hora de decidir, me pusé a estudiar informática, porque era lo que más me llamaba la atención para aquel momento.</p>
                <p className="pl-5 pr-4">Eso me llevó a trabajar como informático algunos años, cosa que me hizo darme cuenta de que no me gustaba lo que hacía, ni me veía toda la vida intentando arreglar los marrones de los demás</p>
                <p className="pl-5 pr-4">Por ese motivo, desde que perdí mi último trabajo, no envié ningún curriculum más y decidí dedicarme a algo que realmente me gustara</p>            
            </div>
        </div>

        <div className="segundocontenedor-ceo">
            <h4 className="pt-3 titulo2-ceo">¿A qué me dedico?</h4>
            <img src={linea2} alt="" className="imagenlinea2-ceo"/>
            <p className="parrafo-ceo">Actualmente, me dedico profesionalmente al diseño con WordPress a tiempo completo. Es un trabajo que me encanta y que me permita disfrutar, por fin, de pasar horas y horas delante del ordenador, cosa que nunca antes me había sucedido</p>
            <p className="parrafo-ceo">A lo largo de este tiempo, he podio trabajar con más de 30 clientes de alrededor del país y del mundo, y he creado y diseñado más de 60 webs, gracias a lo cual he ido mejorando cada día más, perfecionando la técnica y la creatividad a la hora de realizar nuevos proyectos</p>
            <p className="parrafo-ceo pb-5">Realizo webs para particulares y empresas, sin importar su tamaño, aunque también colaboro directamente con agencias que necesitan externalizar el diseño web y deciden contar conmigo para crear las webs de sus clientes. Sea cual sea tu caso, no dudes en contactarme</p>
        </div>

        <div>
            <h4 className="pt-3 titulo3-ceo">¿Comó puedo ayudarte?</h4> 

         <div>
            <div className="cards-ceo cardigual mb-2">
                <h4 className="pt-3 titulo2-ceo">Diseño Litográfico</h4> 
                <p className="parrafocard-ceo pl-3 pr-3"> Nuestros servicios profesionales enfocados al diseño e impresión litográfico, nuestra maquinaria, como nuestro equipo de profesionales en las artes gráficas nos permiten realizar grandes producciones con altos estándares de calidad.</p>
                <button className="mt-1 mb-2 boton-servicio-ceo">VER SERVICIO</button>
            </div>

            <div className="cards-ceo carddiferente mb-2">
                <h4 className="pt-3 titulo2-ceo">Diseño Tienda</h4> 
                <p className="parrafocard-ceo pl-3 pr-3"> Te creo y diseño una tienda online completamente funcional con WordPress y WooCommerce para que puedas comenzar a vender tus productos. Da igual que tenga pocos o miles de productos. </p>
                <button className="mt-5 mb-2 boton-servicio-ceo">VER SERVICIO</button>
            </div>

            <div className="cards-ceo cardigual mb-2">
                <h4 className="pt-3 titulo2-ceo">Mantenimiento Web</h4> 
                <p className="parrafocard-ceo pl-3 pr-3">Me encargo de tener tu web hecha con WordPress al día sin problemas, manteniéndola actualizada, optimizada, creando copias de seguridad, solucionando los problemas que vayan surgiendo, etc.</p>
                <button className="mt-5 mb-1 boton-servicio-ceo">VER SERVICIO</button>
            </div>
         </div>
        </div>

        <div className="segundocontenedor-ceo">
          <h4 className="pt-3 titulo2-ceo">Herramientas de mi dominio</h4>
          <div className="fondotabla-ceo mb-5 mt-3">
            <div className="cardherramientas-ceo">
                <h4 className="tituloherramientas-ceo">Photoshop</h4>
                <img src={ps} alt="" className="imagenherramientas-ceo"/>
            </div>
            <div className="cardherramientas-ceo">
                <h4 className="tituloherramientas-ceo">Illustrator</h4>
                <img src={ai} alt="" className="imagenherramientas-ceo"/>
            </div>
            <div className="cardherramientas-ceo">
                <h4 className="tituloherramientas-ceo">CorelDRAW</h4>
                <img src={coreldraw} alt="" className="imagenherramientas-ceo"/>
            </div>
          </div>
        </div>

    </div>
    );
}