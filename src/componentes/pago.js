import React from "react"
import Hambusenci from "../imagenes/hambusenci.jpg";


class Pago extends React.Component {
  render() {
    return (
<div className="container">
<div className="row">
  <div className="col">
  
        <br />
        <br />
    
        <button type="button" class="btn btn-dark"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-left-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5.5a.5.5 0 0 0 0-1H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5z"/>
</svg>
<a href="principal">volver</a>
</button> 
 <br /><br />
        <img src={Hambusenci} class="rounded mx-auto d-block" alt="..."/>
        <br/>
        <h4> La Caldera China</h4>
        <br />
        <img src="https://img.icons8.com/plasticine/100/000000/money.png"/>
        <br /><br />
        <h3>Pago en efectivo</h3>

        <form>
  <div class="col">
    <div class="col">
      <input type="text" class="form-control" placeholder="Nombre"/>
    </div>
    <br/>
    <div class="col">
      <input type="text" class="form-control" placeholder="Dirección"/>
    </div>
    <br/>
    <div class="col">
      <input type="text" class="form-control" placeholder="Devuelta"/>
    </div>
  </div>
</form>
  <br/>
  <button type="button" class="btn btn-secondary">
  <a href="pedido">Siguiente</a>
  </button>
       


        <br/><br/>
<br/><br/>
<br/><br/>
<br/><br/>
<br/><br/>
<br/><br/>

      </div>
    </div>


  </div>

    

       );

    }
}
export default Pago;