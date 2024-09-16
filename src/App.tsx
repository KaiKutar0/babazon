import React, { createContext } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";
import { Provider } from "react-redux";
import { store } from "./app/store";

function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </Provider>
    </React.StrictMode>
  );
}

export default App;
