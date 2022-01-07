import {Link} from "react-router-dom"

export const Users = () =>{
    const data = [1,2,3,4,5];
    return <div>
    { data.map(e => 
      <Link to={`/users/${e}`}>Users {e} <br/></Link>
     
     )}
      
    </div>
}