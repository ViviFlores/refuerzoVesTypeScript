// rafc -> generar codigo base del componente

export const Funciones = () => {
    //Función con el tipo de dato de retorno
  const sumar = (num1 : number, num2: number) : number => {
    return num1+num2;

  }

  return (
    <div>
      <h3>Funciones</h3>
      <span>El resultado es: {sumar(5,2)}</span>
    </div>
  );
};
