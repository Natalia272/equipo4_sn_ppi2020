import React from "react"
import Logosolo from "../imagenes/logosolo.png";


class balance extends React.Component {
  render() {
    return (
<div className="container">
<div className="row">
  <div className="col">
  
        <br />
        <br />
    
      
        <img src={Logosolo} class="rounded mx-auto d-block" alt="..."/>
     
      <h3>Este es tu total de compras</h3>
       <br/>
       <form>
  <div class="col">
    <div class="col">
      <input type="text" class="form-control" placeholder="# compras"/>
    </div>
  </div>
</form>

 <br/>
 <h3>Dinero gastado</h3>
 <form>
  <div class="col">
    <div class="col">
      <input type="text" class="form-control" placeholder="$"/>
    </div>
  </div>
</form>
<br/>

 <button type="button" class="btn btn-secondary">
 <a href="principal">volver</a>
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
export default balance;