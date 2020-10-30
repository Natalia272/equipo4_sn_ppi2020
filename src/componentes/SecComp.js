import React from "react"
import Burguerdoble from "../imagenes/burguerdoble.png";
import Hamburpapa from "../imagenes/hamburpapa.jpg";
import Hambursalmon from "../imagenes/hambursalmon.jpg";
import Hambusenci from "../imagenes/hambusenci.jpg";

class SecComp extends React.Component {
  render() {
    return (
<div className="container">
<div className="row">
  <div className="col">
  
        <br />
        <br />
        
        <nav class="navbar navbar-light bg-light">
        <button type="button" class="btn btn-dark"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-left-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5.5a.5.5 0 0 0 0-1H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5z"/>
</svg>
<a href="principal">volver</a>
</button>
  <span class="navbar-text">
    Navbar text with an inline element
  </span>
  
</nav>
<br/>
<br/>

<div class="card mb-3" >
  <div class="row no-gutters">
    <div class="col-md-4">
      <img src={Burguerdoble} class="card-img" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Hamburguesa Doble</h5>
        <p class="card-text">$8.000</p>
        <button type="button" class="btn btn-secondary">Comprar </button>
      </div>
    </div>
  </div>
</div>

 <br />
         
       <div class="card mb-3" >
  <div class="row no-gutters">
    <div class="col-md-4">
      <img src={Hambusenci} class="card-img" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Hamburguesa Sencilla</h5>
        <p class="card-text">$6.000</p>
        <button type="button" class="btn btn-secondary">
        <a href="infoComp">Comprar</a>
        </button>
      </div>
    </div>
  </div>
</div>
<br/>
<div class="card mb-3" >
  <div class="row no-gutters">
    <div class="col-md-4">
      <img src={Hambursalmon} class="card-img" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Hamburguesa De Salmón</h5>
        <p class="card-text">$7.500</p>
        <button type="button" class="btn btn-secondary">Comprar</button>
      </div>
    </div>
  </div>
</div>
<br/>
<div class="card mb-3" >
  <div class="row no-gutters">
    <div class="col-md-4">
    <img src={Hamburpapa} class="card-img" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Hamburguesa + Papas</h5>
        <p class="card-text">$9.000</p>
        <button type="button" class="btn btn-secondary">Comprar</button>
      </div>
    </div>
  </div>
</div>
        
      

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
export default SecComp;