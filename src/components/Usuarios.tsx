import { useEffect } from "react"
import { reqResApi } from "../api/reqRes"

export const Usuarios = () => {

    useEffect(()=>{
        // llamar a la API - petición get
        reqResApi.get('/users')
        .then(resp=>{
            console.log(resp.data.data)
        })
        .catch(error => console.log(error))
    },[])

  return (
    <div>
        <h3>Login</h3>
        <table className="table">
            <thead>
                <tr>
                    <th>Avatar</th>
                    <th>Nombre Completo</th>
                    <th>Email</th>
                </tr>
            </thead>
        </table>
    </div>
  )
}
