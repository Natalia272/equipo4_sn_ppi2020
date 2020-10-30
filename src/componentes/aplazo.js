import React from "react"
import Imagenpedido from "../imagenes/imagenpedido.jpg";
class aplazo extends React.Component {
  render() {
    return (
<div className="container">
<div className="row">
  <div className="col">
  
        <br />
        <br />
    
        <img src="https://scontent.feoh3-1.fna.fbcdn.net/v/t1.0-9/cp0/120297245_1621971111296892_7197920197560502247_n.jpg?_nc_cat=100&_nc_sid=730e14&_nc_eui2=AeF13jl63YG2EIFfvn5jbpLLU2dpA5ZS63lTZ2kDllLredAKDsc5ajY-MhyDH4ZbhXKyP5i-HAatYW7WFbljyOBt&_nc_ohc=1UYDUCXuU-MAX8puv19&_nc_ht=scontent.feoh3-1.fna&oh=659d1f5ffbdab2514d5aeefe693907f4&oe=5F9691B2" class="rounded mx-auto d-block" alt="..."/>
<h2>Tiempo Requerido</h2>
<br/>
<form>
  <div class="col">
    <div class="col">
      <input type="text" class="form-control" placeholder="De 1 a 8 Hrs"/>
    </div>
  </div>
</form>
<br/>
<h2>Contratiempo</h2>
<br/>
<form>
  <div class="col">
    <div class="col">
      <input type="text" class="form-control" placeholder="Aquí puedes dar información de ultima hora"/>
    </div>
  </div>
</form>
<br/>

<button type="button" class="btn btn-dark">
<a href="principal">Terminar Pedido</a>
</button>

<button type="button" class="btn btn-dark">
<a href="pedido">Cancelar</a></button>




      



      

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
export default aplazo;