import React from "react";
import AppBar from "../../components/appbar/appBar"; // Importe o componente da AppBar que você criou
import AreaPerfil from "../../components/areaPerfil/areaPerfil";
import {Description} from "./styled";

function Perfil() {
  return (
    <div>
      <AppBar />
     <AreaPerfil/>
     <Description></Description>
    </div>
  );
}

export default Perfil;
