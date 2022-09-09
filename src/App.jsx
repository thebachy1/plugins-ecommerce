import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import "./App.scss";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Products from "./Components/Products/Products";
import Product from "./Components/Product/Product";
import productsMock from "./Mocks/Products.json";

function App() {
  console.log(import.meta.env.VITE_PAYPAL_CLIENT_ID);
  return (
    <PayPalScriptProvider
      options={{
        "client-id": import.meta.env.VITE_PAYPAL_CLIENT_ID,
      }}
    >
      <div className="App">
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<Product />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </PayPalScriptProvider>
  );
}

export default App;
