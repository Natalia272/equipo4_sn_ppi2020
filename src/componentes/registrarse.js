import React from "react"

class Registro extends React.Component {
  render() {
    return (
      
      <div className="container">
      <div className="row">
        <div className="col-sm">
        <div className="text-center">
   
        <img src="https://scontent.feoh3-1.fna.fbcdn.net/v/t1.0-9/120199697_1621995747961095_1096789147443851366_n.jpg?_nc_cat=103&_nc_sid=730e14&_nc_eui2=AeGjF1kcxvmcw016IKiYRkY0kdWv5NsP85iR1a_k2w_zmBWWXhYREEaR49WqljcIg42CjjK3EznoJZyNRfAkY5UF&_nc_ohc=A8iW8yTHAzMAX-pUUVt&_nc_ht=scontent.feoh3-1.fna&oh=596eaf5430866f4e4833bee7567da141&oe=5F95C8B8" class="rounded mx-auto d-block" alt="..."/>
        
      <br/><br/>

    <form>
    <div class="form-group">
    <label for="DIGITA TUS NOMBRES">NOMBRE</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder=""/>
   </div>
        </form>
        <form>
    <div class="form-group">
    <label for="DIGITA TUS APELLIDOS">APELLIDO</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder=""/>
   </div>
        </form>
        <form>
    <div class="form-group">
    <label for="DIGITA TUS NOMBRES">CORREO</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder=""/>
   </div>
   <div class="form-group">
    <label for="DIGITA TUS NOMBRES">CONTRASEÑA</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder=""/>
   </div>
        </form>
        <br/><br/>

        <button type="button" class="btn btn-dark">
        <a href="principal">Registrarse</a>
        </button>

 


        </div>
        </div>
        </div>
        </div>
      
      
       );

    }
}
export default Registro;