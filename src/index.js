import React from "react";
import ReactDOM from "react-dom";
import { makeServer } from "./server";
import App from "./App";
import {BrowserRouter} from "react-router-dom"
import {CartProvider} from "../src/context/CartContext"
import {WishListProvider} from "../src/context/WishListContext"

makeServer();

ReactDOM.render(
  <React.StrictMode>
    
    <BrowserRouter>
    <CartProvider>
      <WishListProvider>
      <App/>
      </WishListProvider>
      </CartProvider>
    </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById("root")
);
