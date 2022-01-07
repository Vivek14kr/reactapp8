
import './App.css';
import {Home} from "./components/Home"
import {Contact} from "./components/Contact"
import {About} from "./components/About"
import {Route, Routes} from "react-router-dom"
import {Navbar} from "./components/Navbar"
import {Products} from './components/Products';

import {ProductDetails} from "./components/ProductDetails"
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        {/* <Route path="/products/:id" 
        element={<Products/>}>
  
      </Route> */}
        <Route path="/products" element={<Products />}></Route>
        <Route path="/products/:productid" element={<ProductDetails />}></Route>
        {/* <Route path="/users" 
        element={<Users/>}>
  
      </Route>
         <Route path="/users/:userid" 
        element={<UsersDetail/>}>
  
      </Route> */}
      </Routes>
    </div>
  );
}

export default App;
