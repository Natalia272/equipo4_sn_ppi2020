import React from "react";


class perfil extends React.Component {
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
<br/>
 <img src="https://img.icons8.com/color/450/000000/name.png"/>
            

<h3> Nombre Usuario</h3>
<br/>
 <form>
  <div class="col">
    <div class="col">
      <input type="text" class="form-control" placeholder="UserName@gmail.com"/>
    </div>
  </div>
</form>
<br/>

 <button type="button" class="btn btn-secondary">
 <a href="inisesion">Cerrar Sesión</a>
 </button>
<br/><br/>
 <button type="button" class="btn btn-secondary">
 <a href="/">Eliminar Cuenta</a>
 </button>
<br/><br/>
<button type="button" class="btn btn-white">
<img src="https://img.icons8.com/ios/60/000000/edit-administrator.png" class="rounded mx-auto d-block" alt="..."/>
<a href="editperfil">editar</a>
</button>

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

export default perfil;