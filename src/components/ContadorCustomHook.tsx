import { useCounter } from "../hooks/useCounter";

export const ContadorCustomHook = () => {

  //desestructuras el objeto
  const {valor, contador} = useCounter(50);

  return (
    <div>
        <h3>Contador con hook: <small>{valor}</small></h3>
        <button className="btn btn-primary"
        onClick={()=>contador(1)}>+1</button>
        &nbsp;
        <button className="btn btn-primary"
        onClick={()=>contador(-1)}>-1</button>
    </div>
  )
}
