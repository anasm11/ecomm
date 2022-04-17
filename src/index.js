import React from "react";
import ReactDOM from "react-dom";
import { makeServer } from "./server";
import App from "./App";
import {BrowserRouter} from "react-router-dom"
import {CartProvider} from "../src/context/CartContext"
import {WishListProvider} from "../src/context/WishListContext"
import {ProductsProvider} from "../src/context/ProductsContext"

makeServer();

ReactDOM.render(
  <React.StrictMode>
    
    <BrowserRouter>
    <CartProvider>
      <WishListProvider>
        <ProductsProvider>
          <App/>
        </ProductsProvider>
      </WishListProvider>
      </CartProvider>
    </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById("root")
);
