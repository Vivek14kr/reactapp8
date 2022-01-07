import {Link} from "react-router-dom"


export const Navbar = ()=>{
    return <div>
        <Link to="/" style={{margin:"10px"}}>Home</Link>
         <Link to="/products">Products</Link>

        <Link to="/about" style={{margin:"10px"}}>about</Link>
        <Link to="/contact">contact</Link>
         <Link to="/users" style={{margin:"10px"}}>user</Link>
    </div>
}