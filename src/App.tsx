//import {TiposBasicos} from "./typescript/TiposBasicos";
//import { ObjetosLiterales } from "./typescript/ObjetosLiterales";
//import { Funciones } from "./typescript/Funciones";
//import { Contador } from "./components/Contador";
//import { ContadorCustomHook } from "./components/ContadorCustomHook";
//import { ComponenteUseEffect } from "./components/ComponenteUseEffect";
//import { Login } from "./components/Login";
import { Usuarios } from "./components/Usuarios";


//componente App
const App = () =>{
  return(
    <div className="mt-2">
      <h1>Introducción TS - React</h1>
      <hr/>
      {/*<TiposBasicos/>*/}
      {/*<ObjetosLiterales/>*/}
      {/*<Funciones/>*/}
      {/*<Contador/>*/}
      {/* <ContadorCustomHook/> */}
      {/* <ComponenteUseEffect/> */}
      {/* <Login/> */}
      <Usuarios/>
    </div>
  )

}

//Exportando el componente a todo el proyecto
export default App;