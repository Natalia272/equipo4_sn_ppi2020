import React from "react";


class Principal extends React.Component {
  render() {
    return (
      <div clasName="col">

<nav class="navbar navbar-light bg-light">
  <span class="navbar-text">
    Nuevas Recomendaciones
  </span>
</nav>
<br/>
<div class="btn-group btn-group-toggle" data-toggle="buttons">
  <label class="btn btn-secondary">
    <input type="radio" name="options" id="option2" />
    <a href="secComi"> <h2>Hamburguesa</h2></a>
    </label>
   <label class="btn btn-secondary">
    <input type="radio" name="options" id="option3"/> <img src="https://scontent.feoh3-1.fna.fbcdn.net/v/t1.0-9/cp0/120297245_1621971111296892_7197920197560502247_n.jpg?_nc_cat=100&_nc_sid=730e14&_nc_eui2=AeF13jl63YG2EIFfvn5jbpLLU2dpA5ZS63lTZ2kDllLredAKDsc5ajY-MhyDH4ZbhXKyP5i-HAatYW7WFbljyOBt&_nc_ohc=1UYDUCXuU-MAX8puv19&_nc_ht=scontent.feoh3-1.fna&oh=659d1f5ffbdab2514d5aeefe693907f4&oe=5F9691B2" class="rounded mx-auto d-block" alt="..."/> 
  </label>
</div>

 <br/><br/>
 <br/><br/>
 <br/><br/>
 <br/><br/>
 <br/><br/>

        <nav class="navbar navbar-expand-lg justify-content-center ">
          <button type="button" class="btn float-center  btnNav">
          <img src="https://img.icons8.com/material-sharp/24/000000/home.png"/>
            <p>Inicio</p>
          </button>

          <button type="button" class="btn  float-center btnNav">
          <img src="https://img.icons8.com/ios-glyphs/30/000000/average-2.png"/>
            
            <p><a href="histopedido">Pedidos</a></p>
          </button>
          <button type="button" class="btn float-center btnNav">
          <img src="https://img.icons8.com/fluent-systems-filled/24/000000/star.png"/>
            <p><a href="favoritos">Favoritos</a></p>
          </button>
          <button type="button" class="btn float-center btnNav">
          <img src="https://img.icons8.com/material-sharp/24/000000/name.png"/>
          <p><a href="perfil">Yo</a></p>
          </button>

        </nav>
      </div>
    );
  }
}
export default Principal;
