import {Link} from "react-router-dom"


export const Navbar = ()=>{
    return (
      <div>
        <Link to="/" style={{ margin: "10px" }}>
          Home
        </Link>
      
        <Link to="/dashboard">dashboard</Link>
       
        <Link to="/setting" style={{ margin: "10px" }}>
          Setting
        </Link>
       
      </div>
    );
}