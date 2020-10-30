import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../componentes/header";
import Form from "../componentes/form";
import Registrarse from "../componentes/registrarse";
import Inisesion from "../componentes/inisesion";
import Principal from "../componentes/principal";
import SecComi from "../componentes/SecComi";
import SecComp from "../componentes/SecComp";
import InfoComp from "../componentes/infoComp";
import Pago from "../componentes/pago"; 
import Pedido from "../componentes/pedido";
import Aplazo from "../componentes/aplazo";
import Histopedido from "../componentes/histopedido";
import Balance from "../componentes/balance";
import Favoritos from "../componentes/favoritos";
import Perfil from "../componentes/perfil";
import Editperfil from "../componentes/editperfil";


const App = () => {

  return (
    <BrowserRouter>
    <Switch>
    <Route exact path="/" component={Header} />
    <Route exact path="/form" component={Form} />
    <Route exact path="/registrarse" component={Registrarse} />
    <Route exact path="/inisesion" component={Inisesion} />
    <Route exact path="/principal" component={Principal} />
    <Route exact path="/secComi" component={SecComi} />
    <Route exact path="/secComp" component={SecComp} />
    <Route exact path="/infoComp" component={InfoComp} />
    <Route exact path="/pago" component={Pago} />
    <Route exact path="/pedido" component={Pedido} />
    <Route exact path="/aplazo" component={Aplazo} />
    <Route exact path="/histopedido" component={Histopedido} />
    <Route exact path="/balance" component={Balance} />
    <Route exact path="/favoritos" component={Favoritos} />
    <Route exact path="/perfil" component={Perfil} />
    <Route exact path="/editperfil" component={Editperfil} />
    </Switch>
  </BrowserRouter>
  
  );
};
export default App;