import { useEffect, useState } from "react"

//rafc + enter
export const ComponenteUseEffect = () => {
    const [valor, setValor]=useState(false);

    const cambiarValor=()=>{
        setValor(!valor);
    }
    //hook - useEffect
    //accion por default - siempre: al menos una vez se ejecuta el código en el hook
    //al momento que se renderiza la página o pantalla se ejecuta el hook useEffect
    // parámetro 1 contiene una función con el codigo a ejecutar
    // parámetro 2 contiene un arreglo de dependencias
    useEffect(()=>{
        // código a ejecutar
        console.log('Desde useEffect')
    },[valor]);
    //si no se coloca el parámetro 2, el hook se ejecuta cda vez que se renderiza la página
    //si el parámetro 2 es un arreglo vacío, el hook sólo se ejecuta la primera vez que se renderiza la página
  return (
    <div>
        <h3>Hook - UseEffect</h3>
        <button onClick={cambiarValor}>Cambiar</button>
    </div>
  )
}
