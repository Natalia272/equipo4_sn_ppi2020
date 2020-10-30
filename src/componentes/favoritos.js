import React from "react"
import Logosolo from "../imagenes/logosolo.png";


class favoritos extends React.Component {
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
<h4> Mis Favoritos</h4>
        <img src={Logosolo} class="rounded mx-auto d-block" alt="..."/>
     
      <h3>Tus restaurantes favoritos</h3>
       <br/>
       <form>
  <div class="col">
    <div class="col">
      <input type="text" class="form-control" placeholder="MCDonald's"/>
    </div>
  </div>
</form>
 <br/>
 <form>
  <div class="col">
    <div class="col">
      <input type="text" class="form-control" placeholder="Frisby"/>
    </div>
  </div>
</form>
<br/>
<form>
  <div class="col">
    <div class="col">
      <input type="text" class="form-control" placeholder="La caldera china"/>
    </div>
  </div>
</form>
<br/>
<form>
  <div class="col">
    <div class="col">
      <input type="text" class="form-control" placeholder="Tolucho"/>
    </div>
  </div>
</form>
<form>
  <br/>
  <div class="col">
    <div class="col">
      <input type="text" class="form-control" placeholder="Paprika"/>
    </div>
  </div>
</form>
<br/>
        <button type="button" class="btn btn-secondary">Balance</button>




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
export default favoritos;