import React from "react";


class editperfil extends React.Component {
  render() {
    return (
      <div className="container-fluid perfil">
        <div className="row">
          <div className="col">
            
               <button id="editar" type="button" class="btn btn-dark"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-left-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5.5a.5.5 0 0 0 0-1H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5z"/>
</svg>
<a href="principal">volver</a>
</button>
<h2>Mi Perfil</h2>
            <img src="https://img.icons8.com/color/450/000000/name.png"/>
            

<h3> Cambiar Foto</h3>
<br/><br/>
<h3>Cambiar Nombre</h3>
 <form>
  <div class="col">
    <div class="col">
      <input type="text" class="form-control" placeholder="Example: Viky"/>
    </div>
  </div>
</form>
<br/>
<h3>Cambiar Contraseña</h3>
 <form>
  <div class="col">
    <div class="col">
      <input type="text" class="form-control" placeholder="*************"/>
    </div>
  </div>
</form>
<br/>
<h3>Cambiar Correo</h3>
 <form>
  <div class="col">
    <div class="col">
      <input type="text" class="form-control" placeholder="UserName@gmail.com"/>
    </div>
  </div>
</form>
<br/>

 <button type="button" class="btn btn-secondary">
 <a href="perfil">Aceptar</a>
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

export default editperfil;