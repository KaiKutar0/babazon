import React, { useEffect, useState } from "react";
import logo from "../img/logo.svg";
import shoppingCart from "../img/shopping-cart.svg";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  const [cart, setCart] = useState(0);
  useEffect(() => {
    setCart(sessionStorage.length);
  }, [sessionStorage]);
  return (
    <div
      style={{
        width: "100%",
        height: "95px",
        backgroundColor: "#414141",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        gap: 10,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: 32,
          fontWeight: 800,
          color: "#FFFFFF",
        }}
      >
        <div>
          <img height={80} src={logo} alt="" onClick={() => navigate("/")} />
        </div>

        <p>Babazon</p>
      </div>
      <div
        style={{
          width: "710px",
          height: "50px",
          borderRadius: 10,
          backgroundColor: "#ECECEC",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: 24,
          fontWeight: 800,
          color: "#000000",
        }}
      >
        <p>search...</p>
        <div
          style={{
            width: "110px",
            height: "50px",
            borderRadius: 10,
            backgroundColor: "#FEB82F",
          }}
        ></div>
      </div>

      <div
        style={{
          display: "flex",
          gap: 10,
          justifyContent: "center",
          fontSize: 24,
          fontWeight: 800,
          color: "#FFFFFF",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {cart > 0 && (
            <div
              style={{
                width: "17px",
                height: "17px",
                backgroundColor: "#FFFFFF",
                borderRadius: 100,
                fontSize: "16px",
                color: "#000000",
                textAlign: "center",
                float: "left",
                position: "relative",
                left: "25px",
                bottom: "18px",
                zIndex: 1,
              }}
            >
              {cart}
            </div>
          )}

          <img width={35} height={35} src={shoppingCart} alt="" />
        </div>
        <p>Log In</p>
        <p>Sign Up</p>
      </div>

      <div
        style={{
          width: "55px",
          height: "55px",
          borderRadius: 100,
          backgroundColor: "#EFEFEF",
        }}
      ></div>
    </div>
  );
}

export default NavBar;
