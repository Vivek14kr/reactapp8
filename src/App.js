import "./App.css";
import { Home } from "./components/Home";
import { Dashboard } from "./components/Dashboard";
import { Route, Routes} from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Login } from "./components/Login";
import {PrivateRoute} from "./components/PrivateRoute"
import {Setting } from "./components/Setting"
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
       <Route path="/setting" element={<Setting/>}></Route>

        <Route
          path="/Dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        ></Route>
        {/* <Route path="/products/:id" 
        element={<Products/>}>
  
      </Route> */}
        {/* <Route path="/products" element={<Products />}></Route>
        <Route path="/products/:productid" element={<ProductDetails />}></Route>
    */}
      
        <Route path="/login" element={<Login />}></Route>

        <Route path="*" element={<div>404 Page not found</div>}></Route>
      </Routes>
    </div>
  );
}

export default App;
