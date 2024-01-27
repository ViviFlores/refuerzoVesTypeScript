export const ObjetosLiterales = () =>{

    //interface
    interface Persona{
        nombreCompleto : string;
        edad : number;
        direccion: Direccion
    }

    interface Direccion{
        pais : string;
        casaNumero : number;
    }

    //no se instancian las interfaces
    //const personaInterface = new Persona();

    //Objeto
    const persona : Persona = {
        nombreCompleto : 'Viviana',
        edad: 31,
        direccion:{
            pais: 'Ecuador',
            casaNumero: 365
        }
    }

    //acceder valor objeto - no es posible si no existe
    //persona.nombreCompleto = 'Viviana Flores';

    return (
        <div>
            <h3>Objetos Literales</h3>
            <code>
                <pre>
                    {JSON.stringify(persona, null, 2)}
                </pre>
            </code>
        </div>
    )
}