import React from 'react';
import '../estilos/EstiloCotizador1.css';
import {Link} from 'react-router-dom';

export default function Cotizador1() {
    return ( 

    <div className="Cotizador1">

        <p className="pt-4 parrafo-cotizador1">Realice una cotización de un pedido, con un valor unitario que usted considere conveniente.</p>

        <form>
           <div className="contendedorcamposinput-cotizador1">
              <div className="form-group col-md-4 contenedordatos-cotizador1 mt-5">
                <label className="pr-5 titulodatos-cotizador1">Cantidad</label>
                <input className="form-control bordeinput-cotizador1"/>
              </div>
              <div className="form-group col-md-4 contenedordatos-cotizador1 mt-3">
                <label className="pr-5 titulodatos-cotizador1">Valor Unitario</label>
                <input className="form-control bordeinput-cotizador1" />
              </div>
              <div className="form-group col-md-4 contenedordatos-cotizador1 mt-3">
                <label className="titulodatos-cotizador1 titulovalortotalp-cotizador1">Valor Total</label>
                <p className="titulovalortotal-cotizador1">$ 0.0</p>
              </div>
              <div className="form-group col-md-4 contenedormensaje-cotizador1 mb-5">
                <label>Descripción del pedido</label>
                <textarea className="form-control bordeinput-cotizador1" rows="3"></textarea>
              </div>
              <Link to="/detalledelpedido">
              <button className="botonenviar-cotizador1 mb-3">Enviar</button>
              </Link>
           </div>  
        </form>

    </div>
    
);}