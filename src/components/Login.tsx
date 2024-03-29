import { useEffect, useReducer } from "react"

//interface
interface ReducerState{
  valid: boolean,
  token: string | null,
  name: string,
  username: string,
  password: string
}

const initialState: ReducerState={
  valid: true,
  token: null,   // string - null
  name: '',
  username: '',
  password: ''
}

type LoginActionPayLoad={
  name: string,
  username: string,
  password: string

}

//Definiendo el tipo de dato del action y sus actiones
type ReducerAction=
  {type: 'logout'}
  | {type: 'login' , payload: LoginActionPayLoad};

//Método reducer - cambio de estado
const authReducer=(state: ReducerState, action:ReducerAction): ReducerState =>{
  switch (action.type) {
    case 'logout':
      return{
        valid: false,
        token: null,
        name: '',
        username: '',
        password: ''
      }
      case 'login':
        //desestructuración de objeto
        const{name, username, password}=action.payload;
        return{
        valid: false,
        token: '123GHJTMMVZXNLZXV787687687DSFSDFSDF',
        name: name,
        username: username,
        password: password
        }
  
    default:
      return state;
  }
}


export const Login = () => {

  //Hook -  useReducer
  //Desestructurar el objeto
  const [{valid, token, name}, dispatch]=useReducer(authReducer, initialState);

  //Hook - useEffect
  useEffect(()=>{
    //código a ejecutar
    setTimeout(()=>{  // función de tiempo
      //codigo a ejecutar
      dispatch({type:'logout'})
    },1500);

  },[])

  //Simular la validación de la consulta
  if (valid){
    return(
      <>  
        <h3>Login</h3>
        <div className="alert alert-info">
          Validando...
        </div>
      </>
    )
  }

  const login=()=>{
    dispatch({
      type:'login',
      payload:{
        name: 'Viviana Flores',
        username: 'vflores',
        password: '123456***'
      }
    })
  }

  const logout=()=>{
    dispatch({type: 'logout'});
  }

  return (
    <div>
        <h3>Login</h3>
        {
          (token == null)
          ? <div className="alert alert-danger">No autenticado...</div>
          : <div className="alert alert-success">Autenticado por {name}</div>
        }
        
        {
          (token == null)
          ? <button className="btn btn-primary"
          onClick={login}>Login</button>
          : <button className="btn btn-danger"
          onClick={logout}>Logout</button>
        }
    </div>
  )
}
