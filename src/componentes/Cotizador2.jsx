import React from 'react';
import '../estilos/EstiloCotizador2.css';

export default function Cotizador2() {
    return ( 

    <div className="Cotizador2">

        <h2 className="titulo1-cotizador2 pt-5">Detalle del Pedido</h2>

        <form>
           <div className="contendedorcamposinput-cotizador2 mb-5">
              <div className="form-group col-md-6 contenedordatos-cotizador2 mt-5">
                <label className="pr-5 titulodatos-cotizador2"><b><u><em>Cantidad</em></u></b></label>
                <p className="titulovalortotal-cotizador2">5</p>
              </div>
              <div className="form-group col-md-6 contenedordatos-cotizador2 mt-3">
                <label className="pr-5 titulodatos-cotizador2"><b><u><em>Valor Unitario</em></u></b></label>
                <p className="titulovalortotal-cotizador2">$ 10.000</p>
              </div>
              <div className="form-group col-md-6 contenedordatos-cotizador2 mt-3">
                <label className="titulodatos-cotizador2 titulovalortotalp-cotizador2"><b><u><em>Valor Total</em></u></b></label>
                <p className="titulovalortotal-cotizador2">$ 50.000</p>
              </div>
              <div className="form-group col-md-6 contenedormensaje-cotizador2 mb-5">
                <label><b><u><em>Descripción del pedido</em></u></b></label>
                <div className="bordeinput-cotizador2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit in tempore doloremque pariatur itaque mollitia velit quae nobis qui, quibusdam culpa dolores atque, natus exercitationem unde sapiente soluta recusandae illum.</div>
              </div>
           </div>  
        </form>

    </div>
    
);}