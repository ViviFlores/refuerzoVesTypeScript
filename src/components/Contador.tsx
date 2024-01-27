import { useState } from "react";

export const Contador = () => {
  //Hook - useState
  // primer parámetro indica el valor inicial del estado
  // segundo parámetro cambiando el valor inicial del estado - función
  const [valor, setValor] = useState(0);

  const contador = (num:number) =>{
    setValor(valor+num);
  }

  //const contador2 = (num:number) =>{
  //  setValor(valor-num);
  //}


  return (
    <div>
        <h3>Contador: <small>{valor}</small></h3>
        <button className="btn btn-primary"
        onClick={()=>contador(1)}>+1</button>
        &nbsp;
        <button className="btn btn-primary"
        onClick={()=>contador(-1)}>-1</button>
    </div>
  )
}
