import React from 'react';
import {Switch, Route} from "react-router-dom"
import NavBar from "./components/NavBar";
import ProductsContextProvider from "./Global/ProductsContext"
import CartContextProvider from './Global/CartContext';
import Products from "./components/Products"
import Cart from "./components/Cart"
import NotFound from './components/NotFound';
function App() {
  return (
    <>
      <ProductsContextProvider>
        <CartContextProvider>
          {/* <BrowserRouter> */}
          <NavBar />
          <Switch>
            <Route path="/" exact component={Products}/>
            <Route path="/cart" exact component={Cart}/>
            <Route component={NotFound}/>
          </Switch>
          {/* </BrowserRouter> */}
        </CartContextProvider>
      </ProductsContextProvider> 
    </>
  )
}

export default App;
