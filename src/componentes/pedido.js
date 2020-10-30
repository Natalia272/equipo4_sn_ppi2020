import React from "react"
import Imagenpedido from "../imagenes/imagenpedido.jpg";
class pedido extends React.Component {
  render() {
    return (
<div className="container">
<div className="row">
  <div className="col">
  
        <br />
        <br />
    
        <img src="https://scontent.feoh3-1.fna.fbcdn.net/v/t1.0-9/cp0/120297245_1621971111296892_7197920197560502247_n.jpg?_nc_cat=100&_nc_sid=730e14&_nc_eui2=AeF13jl63YG2EIFfvn5jbpLLU2dpA5ZS63lTZ2kDllLredAKDsc5ajY-MhyDH4ZbhXKyP5i-HAatYW7WFbljyOBt&_nc_ohc=1UYDUCXuU-MAX8puv19&_nc_ht=scontent.feoh3-1.fna&oh=659d1f5ffbdab2514d5aeefe693907f4&oe=5F9691B2" class="rounded mx-auto d-block" alt="..."/>
<h2>Hamburguesa Sencilla</h2>
<br/><br/>
<img src={Imagenpedido} class="rounded mx-auto d-block" alt="..."/>
<br/><br/>
<h2>Pedido Realizado...</h2>
<br/><br/>
        <button type="button" class="btn btn-secondary">
        <a href="aplazo">Aplazar Pedido</a>
        </button>
        <br/>
        <br/>
        <button type="button" class="btn btn-secondary">
        <a href="principal">Aceptar</a>
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
export default pedido;