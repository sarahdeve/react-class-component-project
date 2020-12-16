import React from "react";
import data from "./data";
import { BrowserRouter, Route, Link } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import ProductScreen from "./Screens/ProductScreen";
import Signin from "./Screens/signin";
import Navbar from "./Screens/navbar";
import Signup from "./Screens/signup";
import Cart from "./Screens/cart";
import Footer from "./Screens/footer";
import SellOnWemmie from "./Screens/sellonwemmie";

function App() {
 
  return (
    <BrowserRouter>
      <SellOnWemmie></SellOnWemmie>
        {/* <Navbar></Navbar>
         <main className="main">
          <div className="content">
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/" exact={true} component={HomeScreen} />
            <Route path="/signin.html" component={Signin} />
            <Route path="/signup.html" component={Signup} />
            <Route path="/cart.html" component={Cart} />


          </div>
        </main> 
       <Footer></Footer>
       */}
    </BrowserRouter>
  );
}

export default App;
