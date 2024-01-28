import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import products from "./components/Data";
import ListOfProducts from "./components/ListOfProducts";
import NavigationBar from "./components/NavigationBar";
import Home from './components/Home';
import About from './components/About';
import Customers from './components/Customers';
import ProductDetails from "./components/ProductDetails";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Prod from "./components/Prod";
import Profile from "./components/Profile";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const [product, setProduct] = useState(products);
  const [sum, setSum] = useState(0);

  const increment = (id, isIncrement) => {
    setProduct(
      product.map((element) => {
        if (element.id !== id) {
          return element;
        }

        const updatedQte = isIncrement
          ? element.qte + 1
          : Math.max(0, element.qte - 1);

        return { ...element, qte: updatedQte };
      })
    );
  };

  const removeCard = (id) => {
    setProduct(
      product.filter((element) => {
        return !(element.id === id);
      })
    );
  };

  const updateSum = (price, isIncrement) => {
    if (sum === 0 && !isIncrement) return;
    isIncrement ? setSum(sum + price) : setSum(sum - price);
  };

  return (
    <div style={{ margin: '20px', boxShadow: '25px 25px 5px 0px rgba(0, 0, 0, 0.5)' }}>

      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Products" element={
            <ListOfProducts
              data={product}
              incrementer={increment}
              removeHandler={removeCard}
              sum={sum}
              updateSum={updateSum}
            />
          } />
          <Route path="/Products/:id" element={<ProductDetails product={product} />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/Prod" element={<Prod />} />

          <Route
            path="/customers"
            element={
              <PrivateRoute allowedRoles={['admin']}>
                <Customers />
              </PrivateRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute allowedRoles={['user']}>
                <Profile />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
